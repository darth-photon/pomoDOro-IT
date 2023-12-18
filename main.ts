import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {DEFAULT_SETTINGS, PomoSettings, PomoSettingTab} from './settings';

export default class PomodoroItPlugin extends Plugin {

	settings: PomoSettings = DEFAULT_SETTINGS;

	onload() {
		this.addSettingTab(new PomoSettingTab(this.app, this));

		console.log('loading plugin');
		console.log(this.settings.pomo);

		this.addCommand({
			id: 'start-pomodoro',
			name: 'Start Pomodoro',
			icon: 'play',
			checkCallback: (checking: boolean) => {
				if(this.settings.pomo) {
					console.log('checking');
					return false;
				}
			}
		})
		this.addCommand({
			id: 'start-short-break',
			name: 'Start Short Break',
			icon: 'play',
			checkCallback: (checking: boolean) => {
				if(this.settings.shortBreak) {
					console.log('checking');
					return false;
				}
			}
		})
		this.addCommand({
			id: 'start-long-break',
			name: 'Start Long Break',
			icon: 'play',
			checkCallback: (checking: boolean) => {
				if(this.settings.longBreak) {
					console.log('checking');
					return false;
				}
			}
		})
	}

	onunload() {
		console.log('unloading plugin');
	}
}