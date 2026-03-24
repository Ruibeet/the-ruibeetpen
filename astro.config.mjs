import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  // 暂时不加载 react 和 tailwind 插件，因为你的工具箱里还没装好它们
  integrations: [] 
});
