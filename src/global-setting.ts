/**
 * Copyright (c) 2023 frostime. All rights reserved.
 */
import { Plugin } from 'siyuan';
import { info, error } from './utils';
import { eventBus } from './event-bus';


type NotebookSorting = 'doc-tree' | 'custom-sort'
type IconPosition = 'left' | 'right';
type SettingKey = 'OpenOnStart' | 'NotebookSort' | 'DefaultNotebook' | 'IconPosition';

interface Item {
    key: SettingKey,
    value: any
}

const ConfigFile = 'DailyNoteToday.json.txt';

class SettingManager {
    plugin: Plugin;
    settings: any = {
        OpenOnStart: true as boolean, //启动的时候自动打开日记
        DiaryUpToDate: false as boolean, //自动更新日记的日期
        NotebookSort: 'custom-sort' as NotebookSorting, //笔记本排序方式
        DefaultNotebook: '', //默认笔记本的 ID
        IconPosition: 'left' as IconPosition //图标放置位置
    };

    constructor() {
        eventBus.subscribe(eventBus.EventSetting, (data: Item) => {
            this.set(data.key, data.value);
            this.save();
        });
    }

    setPlugin(plugin: Plugin) {
        this.plugin = plugin;
    }

    get(key: SettingKey) {
        return this.settings?.[key];
    }

    set(key: any, value: any) {
        info(`Setting update: ${key} = ${value}`)
        if (!(key in this.settings)) {
            error(`"${key}" is not a setting`);
            return;
        }

        this.settings[key] = value;
    }

    /**
     * 导入的时候，需要先加载设置；如果没有设置，则使用默认设置
     */
    async load() {
        info(`Read storage: `);
        let loaded = await this.plugin.loadData(ConfigFile);
        info(`Read storage done: `);
        console.log(loaded);
        if (loaded == null || loaded == undefined || loaded == '') {
            //如果没有配置文件，则使用默认配置，并保存
            info(`Setting not found, use default setting`)
            this.save();
        } else {
            //如果有配置文件，则使用配置文件
            info(`读入配置文件: DailyNoteToday.json`)
            loaded = JSON.parse(loaded);
            console.log(loaded);
            try {
                for (let key in loaded) {
                    this.set(key, loaded[key]);
                }
            } catch (error_msg) {
                error(`Setting load error: ${error_msg}`);
                console.log(error_msg);
            }
            this.save();
        }
    }

    async save() {
        let json = JSON.stringify(this.settings);
        info(`Write storage: ${json}`);
        this.plugin.saveData(ConfigFile, json);
    }
}

export const settings: SettingManager = new SettingManager();
