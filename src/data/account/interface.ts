/*
 * @Author: Vir
 * @Date: 2021-10-17 21:26:07
 * @Last Modified by: Vir
 * @Last Modified time: 2022-03-04 14:03:38
 */

import { SearchEngine } from '../engine/types';
import { ClockLogoType, LogoType } from '../logo';

// 默认的用户数据

// 账户类型
export type AuthType = 'local' | 'cloud';

// 语言
export type LanguageType = 'zh-CN' | 'en-US';

// 背景类型
export type AuthBackgroundType = 'color' | 'random' | 'everyday' | 'link';

// 随机背景数据
export interface AuthBackgroundRandomData {
  url: string;
  id: string;
  hsh: string;
  copyright: string;
  copyrightlink: string;
}

// 在线图片背景数据
export interface AuthBackgroundLinkData {
  url: string;
}

// 背景数据
export interface AuthBackground {
  type: AuthBackgroundType; // 背景类型
  data?: AuthBackgroundRandomData | AuthBackgroundLinkData; // 背景数据
}

// 时钟类型设置
export interface ClockLogo {
  type: ClockLogoType;
}

// 文字类型设置
export interface TextLogo {
  title: string;
  subTitle: string;
}

// 图片类型设置
export interface ImageLogo {
  url: string;
}

export type LogoConfigType = {
  clock: ClockLogo;
  text: TextLogo;
  image: ImageLogo;
};

// Logo 数据
export interface AuthLogo {
  show: boolean;
  type: LogoType;
  zoom: boolean;
  config: LogoConfigType;
}

// 导航显示类型
export type NavigationType = 'page' | 'drawer';
// 导航数据
export interface Navigation {
  type: NavigationType;
}

export type AccountUpdateMessageRemind = 'message' | 'notification' | 'popup';

export interface AccountUpdateMessage {
  update: boolean;
  remind: AccountUpdateMessageRemind;
  interval: number;
  lastTime: string;
}

// 消息提示
export interface Message {
  update: boolean | AccountUpdateMessage; // 版本更新消息提示
}

// 搜索引擎设置
export interface Engine {
  mode: 'default' | 'custom';
  indexCount: number;
  sortType: 'default' | 'count';
  selected?: string;
}

export type ThemeType = 'system' | 'light' | 'dark';

export interface DarkThemeSettings {
  brightness: number;
  contrast: number;
  grayscale: number;
  sepia: number;
}

// 主题设置
export interface Theme {
  type: ThemeType;
  darkSettings: DarkThemeSettings;
}

export interface AuthData {
  _id?: string;
  username: string; // 用户名
  avatar?: string; // 头像
  type: AuthType; // 账户类型 local本地 cloud云端
  createdTime?: string;
  updatedTime?: string;
  language: LanguageType; // 账户所选语言
  background: AuthBackground; // 背景
  logo?: AuthLogo;
  navigation: Navigation;
  message: Message;
  latestVersion: string;
  beta?: boolean; // 是否开启beta权限
  sync: {
    setting: boolean; // 设置同步
    website: boolean; // 常用网址同步
    history: boolean; // 历史记录同步
  }; // 是否同步，默认false
  engine?: Engine;
  theme?: Theme;
}

export interface SettingDefaultData {
  background: any;
  showWebsite: boolean;
  language: LanguageType;
}
