const { Plugin } = require('powercord/entities');

module.exports = class ChangeHype extends Plugin {
    startPlugin () {
        //registers the plugin command with powercord
        powercord.api.commands.registerCommand({
            command: 'hchange',
            description: 'Changes your hypesquad badge',
            usage: '{c} [id]',
            executor: (args) => {   
                var id = args[0];
                //Changes your hypesquad badge through a discord api call acting as though you finished the test. 
                //This uses an official discord api so its unlikely you will get banned for this.
                require('powercord/webpack').getModule(['joinHypeSquadOnline'], false).joinHypeSquadOnline({ houseID: 'HOUSE_'+id });
                return {
                    send: false,
                    result: {
                        type: 'rich',
                        color: 2895667,
                        fields: [{
                            name: '`HypeSquad`',
                            value: '> Successfully joined house ' + this.getHypesquadFromId(id) + '.',
                            inline: false
                        }],
                    }
                }
            }
        });
    }

    //Returns the name of the hypesquad house from the id that is given to it.
    getHypesquadFromId(id) {
        switch (id) {
            case '1': return "Bravery";
            case '2': return "Brilliance";
            case '3': return "Balance";
            default : return "Error";
        }
    }

    //unregisters plugin command from powercord
    //useful for updating the plugin
    pluginWillUnload () {
        powercord.api.commands.unregisterCommand('hchange');
    }
}; 
