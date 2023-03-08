import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { PizzaJob } from './src/job';

const PLUGIN_NAME = 'Pizza Job';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
    PizzaJob.init();
});
