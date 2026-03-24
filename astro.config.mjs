import { defineConfig } from 'astro/config';

export default defineConfig({
  // 强制指定项目根目录和输出方式
  root: './',
  output: 'static',
  build: {
    format: 'directory'
  }
});
