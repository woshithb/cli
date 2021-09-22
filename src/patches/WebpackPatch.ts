import {BasePatch} from '@src/patches';
import {IContextParams} from '@src/controllers';
import {BaseFramework, ProjectPackWay} from '@src/util';

export class WebpackPatch extends BasePatch<IContextParams> {

  protected when(contextParams: IContextParams):boolean {
    return contextParams.packWay === ProjectPackWay.webpack
  }

  protected patch(contextParams: IContextParams) {
    if (contextParams.baseFramework === BaseFramework.react) {
      contextParams.extraNodeModules.devDependencies.push('@babel/preset-react');
    }
    if (contextParams.baseFramework === BaseFramework.vue) {
      contextParams.extraNodeModules.devDependencies.push(
        '@vue/babel-preset-jsx',
        '@vue/babel-helper-vue-jsx-merge-props'
      )
    }
    contextParams.extraNodeModules.dependencies.push(...dependencies);
    contextParams.extraNodeModules.devDependencies.push(...devDependencies);
  }
}

const devDependencies = [
  'webpack-cli',
  'webpack-dev-serve',
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-decorators',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-runtime',
  '@babel/preset-env',
  'autoprefixer',
  'babel-loader',
  'clean-webpack-plugin',
  'css-loader',
  'less-loader',
  'sass-loader',
  'scss-loader',
  'happypack',
  'html-webpack-plugin',
  'mini-css-extract-plugin',
  'optimize-css-assets-webpack-plugin',
  'postcss-loader',
  'style-loader',
]

const dependencies = [
  '@babel/polyfill',
  '@babel/runtime',
]