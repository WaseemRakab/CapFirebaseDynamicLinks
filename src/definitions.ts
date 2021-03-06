import {PluginListenerHandle} from "@capacitor/core";

export interface CapFirebaseDynamicLinksPlugin {
    addListener(eventName: 'onDynamicLink', listenerFunc: (data: DynamicLinkData) => void): PluginListenerHandle;
}

export interface DynamicLinkData {
    url: string;
    timestampClicked: number;
}
