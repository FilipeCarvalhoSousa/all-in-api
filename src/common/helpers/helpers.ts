export default class Helpers {
    static getPackageJsonVersao = (): string => (process.env.npm_package_version ?? '').toString().trim();
  }