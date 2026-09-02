#!/bin/bash
# Auto-push: commits all changes and pushes to GitHub.
# Usage: bash /app/scripts/push.sh "commit message"
set -e
cd /app
TOKEN=$(cat /root/.github_token)
git add -A
if git diff --cached --quiet; then
    echo "Nothing new to commit."
    exit 0
fi
git -c user.name="Lokesh Shakthi" -c user.email="lokeshshakthi1@gmail.com" commit -q -m "${1:-Update portfolio}"
git push "https://x-access-token:${TOKEN}@github.com/lokeshshakthi1/lokesh-portfolio.git" main
echo "Pushed to lokesh-portfolio."
