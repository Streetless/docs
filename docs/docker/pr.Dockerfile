FROM node:20-alpine3.19@sha256:20b236009deb4c33bf7e255c32fe1e82da7eb0a10245657e0a6a846851fde521 as builder
# Set Maintainer
LABEL MAINTAINER="Alwyn Mattapullut <alwyn.mattapullut@epitech.eu>"
# Set the working directory to /app
WORKDIR /app
# Setup pnpm home
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Enable https://nodejs.org/api/corepack.html which should download pnpm
RUN corepack enable
# Copy the package.json and package-lock.json files to the container
COPY package.json pnpm-lock.yaml ./
# Install the dependencies using pnpm
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# Copy the current directory contents into the container at /app
COPY . .
# Build the app
RUN pnpm build
# Some cleanup
RUN pnpm pkg delete scripts.prepare # Remove prepare script
RUN pnpm prune --prod # Remove dev dependencies
RUN mkdir -p /build
RUN cp -r ./build/ /build/build/
RUN cp -r ./node_modules/ /build/node_modules/
RUN cp ./package.json /build/package.json
RUN cp ./docusaurus.config.ts /build/docusaurus.config.ts
RUN rm -rf /app/

FROM scratch as production_files
# Set Maintainer
LABEL MAINTAINER="Alwyn Mattapullut <alwyn.mattapullut@epitech.eu>"
# Set the working directory to /app
WORKDIR /app
# Copy the build files from the builder stage
COPY --from=builder /build/build/ ./

FROM node:20-alpine3.19@sha256:20b236009deb4c33bf7e255c32fe1e82da7eb0a10245657e0a6a846851fde521 as app
# Set Maintainer
LABEL MAINTAINER="Alwyn Mattapullut <alwyn.mattapullut@epitech.eu>"
# Set the working directory to /app
WORKDIR /app
# Setup pnpm home
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Enable https://nodejs.org/api/corepack.html which should download pnpm
RUN corepack enable
# Copy the build files from the builder stage
COPY --from=builder /build/package.json ./
COPY --from=builder /build/docusaurus.config.ts ./
COPY --from=builder /build/node_modules/ ./node_modules/
COPY --from=builder /build/build ./build/
# Setup the environment
ENV PORT=80
ENV HOST=0.0.0.0
# Expose default port
EXPOSE 80
# Run the app
CMD pnpm serve --port $PORT --host $HOST
