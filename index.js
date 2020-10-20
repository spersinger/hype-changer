const { Plugin } = require('powercord/entities');

module.exports = class ChangeHype extends Plugin {
    startPlugin () {
        powercord.api.commands.registerCommand({
            command: 'hchange',
            description: 'Changes your hypesquad badge',
            usage: '{c} [id]',
            executor: (args) => { this.hypeChange(args[0]); }
        });
    }

    hypeChange(id) {
        require('powercord/webpack').getModule(['joinHypeSquadOnline'], false).joinHypeSquadOnline({ houseID: 'HOUSE_'+id });
    }

    pluginWillUnload () {
        powercord.api.commands.unregisterCommand('hchange');
    }
}; 