FROM node:22-slim   
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api/package.json ./apps/api/
RUN pnpm install --filter api
COPY apps/api ./apps/api
WORKDIR /app/apps/api
RUN pnpm build
CMD ["pnpm", "start:prod"]