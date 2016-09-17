import QUnit from 'steal-qunit';
import plugin from './scapegoat';

QUnit.module('scapegoat');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the scapegoat plugin');
});
