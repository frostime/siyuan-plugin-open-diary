import { Plugin } from 'siyuan';
import { info } from './utils';


class SettingManager {
    plugin: Plugin;
    settings = {
        OpenOnStart: true,
    };

    setPlugin(plugin: Plugin) {
        this.plugin = plugin;
    }

    get(key: string) {
        return this.settings?.[key];
    }

    set(key: string, value: any) {
        this.settings[key] = value;
    }

    /**
     * 导入的时候，需要先加载设置；如果没有设置，则使用默认设置
     */
    async load() {
        let loaded = await this?.plugin.loadStorage('DailyNoteToday.json');
        info(`Read storage: ${loaded}`)
        if (loaded == null) {
            //如果没有配置文件，则使用默认配置，并保存
            this.save();
        } else {
            //如果有配置文件，则使用配置文件
            loaded = JSON.parse(loaded);
            let openOnStart = loaded?.OpenOnStart;
            if (openOnStart != null) {
                this.set('OpenOnStart', openOnStart);
            }
        }
    }

    save() {
        let json = JSON.stringify(this.settings);
        info(`Write storage: ${json}`);
        this.plugin.writeStorage('DailyNoteToday.json', json);
    }
}

export const settings: SettingManager = new SettingManager();