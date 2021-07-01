#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f https://github.com/SecYJ/Vue-live-week-6.git master
git push -f https://github.com/SecYJ/Vue-live-week-6.git master:gh-pages


cd -