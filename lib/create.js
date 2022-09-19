import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import { pkg, router } from './generator/index.js';
import { globby } from 'globby';

const create = (name) => {
  const prompts = [
    {
      "name": "config",
      "message": "请选择需要安装的内容",
      "pageSize": 10,
      "type": "checkbox",
      "choices": ['router', "mobx", "jest"]
    }
  ]
  inquirer.prompt(prompts).then(async answers => {
    const config = [router].filter(item => answers.config.includes(item.name)).map(item => item.config)
    config.forEach(item => {
      for (const key in item) {
        pkg[key] = Object.assign(pkg[key] || {}, { ...item[key] })
      }
    });

    const _files = await globby(['lib/template/**'], { dot: true })

    // const template = fs.readFileSync(name, 'utf-8')

    // console.log(_files);

    Object.keys(_files).forEach((name) => {
      const template = fs.readFileSync(_files[name], 'utf-8')
      const filePath = _files[name].split('/').slice(2).join('/')
      const createPath = path.join('dist/', filePath)
      fs.outputFileSync(createPath, template)

      
    })

  });
}

export default create;