#!/bin/bash
set -ex

npm_proxy=https://registry.npm.taobao.org

npm i --registry https://registry.npm.taobao.org
npm run build

cp dist/* ./*

