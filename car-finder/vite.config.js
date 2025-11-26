import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'unit1-final-project-carFinder';

export default defineConfig({
  plugins: [react()],
  base: `/${reponame}`,
})
