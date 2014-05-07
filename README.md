#gaffa-konami

Gaffa konami code behaviour

## Install:

    npm i gaffa-konami

## Add to gaffa:

    var Konami = require('gaffa-konami');

    gaffa.registerConstructor(Konami);

# Usage

    var konami = new Konami();

    interval.actions.trigger = [myCoolAction];

# API

## Actions

### trigger

Is triggered when the conami code is entered as below

####On the keyboard
    ↑ ↑ ↓ ↓ ← → ← → B A ENTER

####As touch input
    ↑ ↑ ↓ ↓ ← → ← → TAP TAP TAP

