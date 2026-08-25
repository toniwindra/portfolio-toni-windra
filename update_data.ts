import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/data/portfolioData.ts', 'utf8');

// I can just replace PERSONAL_INFO, WORK_EXPERIENCE, SKILL_CATEGORIES block by block.
// But earlier I overwrote the entire file! I will just use `git checkout` wait, not a git repo. I can view the first tool call for `portfolioData.ts` to get the old content.
