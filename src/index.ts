import {
  Application,
  PointerEvents,
  Sprite,
} from 'pixi.js';

import * as PIXI from 'pixi.js';

import { Event } from '@pixi/events';
import { EventEmitter } from '@pixi/utils';

import '@pixi/events';
import '@pixi/utils';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view as HTMLCanvasElement);

app.stage.addEventListener('click', () => {});
app.stage.addListener('click', () => {});
app.stage.on('click', () => {});

const a = new Sprite();
a.addEventListener('click', () => {});
a.addListener('click', () => {});
a.on('click', () => {});

const b = new PIXI.Sprite();
b.addEventListener('click', () => {});
b.addListener('click', () => {});
b.on('click', () => {});
