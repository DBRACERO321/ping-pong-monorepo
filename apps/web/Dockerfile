FROM node:22-slim
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/web/package.json ./apps/web/
RUN pnpm install --filter web
COPY apps/web ./apps/web
WORKDIR /app/apps/web
RUN pnpm build
CMD ["pnpm", "start"]