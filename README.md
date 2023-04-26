# 今日笔记

- [English README](https://github.com/frostime/siyuan-plugin-open-diary/blob/master/README-en.md)
- 提交Issue请访问[Github](https://github.com/frostime/siyuan-plugin-open-diary)
- 国内用户可访问[国内托管](https://gitcode.net/frostime/siyuan-plugin-daily-note)

本插件比较适合笔记本比较多的人，用于快速在不同笔记本创建今日的笔记，并将块在不同笔记中移动。

![日记选项](asset/日记选项.png)

## 功能介绍

1. 启动插件时，自动创建/打开今天的笔记
    - 自动打开当前排位第一的笔记本中今天的笔记，如果不存在则自动创建并打开
    - 忽略「思源笔记用户指南」

2. 右上角提供下拉选项，快速创建/打开今天的笔记
    - 下拉框中按照笔记本顺序排列，列出所有的笔记本
    - 「思源笔记用户指南」
    - 点击笔记本，自动打开/创建今日的笔记

3. 下拉选项框为各个笔记本提供「是否已经创建了今天的笔记」的标识
    - 若笔记本选项前有「√」标识，表示该笔记本已经创建了笔记

4. 当笔记本有更新（打开/关闭创建笔记本）的时候，请按快捷键「ctrl+alt+u」更新状态
    - 插件可自动追踪笔记的创建情况，但是不会追踪笔记本的状态
    - 因此，当打开、关闭、创建、移动笔记本的时候，请按快捷键「ctrl+alt+u」更新状态

5. 设置面板
    - 可以在设置面板中选择，是否要在开启插件的时候自动打开今天的笔记
    - 提供「更新」按钮，功能同「Ctrl + alt + u」快捷键
    - 多语言支持

    ![](asset/Setting.png)

6. 移动块
    - 选中块，「Alt+右键」，可以调处一个移动块的面板
    - 选择笔记本，可以把当前块移动到对应笔记本今天的日记下

    ![](asset/MoveBlock.png)

## 注意事项

本插件由于将界面注册在顶端工具栏内，所以部分主题下可能无法正常使用。目前确认无法在 Rem Craft 下使用。


## CHANGELOG

[CHANGELOG](CHANGELOG.md)
