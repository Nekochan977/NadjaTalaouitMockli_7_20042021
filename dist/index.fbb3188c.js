// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aIdiY":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "106c69fefbb3188c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>???? ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bDbGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipesJs = require("./recipes.js");
var _recipesJsDefault = parcelHelpers.interopDefault(_recipesJs);
"use strict";
//variables that can be declared at top
let ingredients = [];
let appliances = [];
let ustensils = [];
const input = document.querySelector(".searchbar-input");
const ingredientsSelect = document.querySelector(".ingredients-select");
const applianceSelect = document.querySelector(".appliance-select");
const ustensilsSelect = document.querySelector(".ustensils-select");
//------Getting the ingredients------
_recipesJsDefault.default.forEach((recipe)=>{
    recipe.ingredients.forEach((allIngredients)=>{
        ingredients.push(allIngredients.ingredient.toLowerCase());
    });
    appliances.push(recipe.appliance.toLowerCase());
    recipe.ustensils.forEach((allUstensils)=>{
        ustensils.push(allUstensils.toLowerCase());
    });
});
// creating sets to get rid of duplicates
const uniqueSet = new Set(ingredients);
const applianceSet = new Set(appliances);
const ustensilsSet = new Set(ustensils);
//Put the set elements into a new array
const ingredientList = [
    ...uniqueSet
];
const applianceList = [
    ...applianceSet
];
const ustensilsList = [
    ...ustensilsSet
];
//Functions to add html nodes
const displayIngredients = (ingredientList1, node)=>{
    node.innerHTML = "";
    ingredientList1.forEach((element)=>{
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    });
};
const displayAppliance = (applianceList1, node)=>{
    applianceList1.forEach((element)=>{
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    });
};
const displayUstensils = (ustensilsList1, node)=>{
    ustensilsList1.forEach((element)=>{
        node.innerHTML += `<span class="ingredient-tag">${element}</span>&nbsp;`;
    });
};
//display the ingredients in html
displayIngredients(ingredientList, ingredientsSelect);
displayAppliance(applianceList, applianceSelect);
displayUstensils(ustensilsList, ustensilsSelect);
// console.log(ingredientList);
// console.log(applianceList);
// console.log(ustensilsList);
//Event listener on input
input.addEventListener("input", (e)=>{
    //console.log(e.target.value);
    const searchInput = e.target.value;
    const filteredIngredients = ingredientList.filter((ingredient)=>{
        for(let i = 0; i < ingredient.length; i++){
            if (ingredient.includes(searchInput)) //console.log("toto");
            return true;
            return false;
        }
    });
    console.log(filteredIngredients);
    displayIngredients(filteredIngredients, ingredientsSelect);
});

},{"./recipes.js":"eHgtG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHgtG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const recipes = [
    {
        "id": 1,
        "name": "Limonade de Coco",
        "servings": 1,
        "ingredients": [
            {
                "ingredient": "Lait de coco",
                "quantity": 400,
                "unit": "ml"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 2
            },
            {
                "ingredient": "Cr??me de coco",
                "quantity": 2,
                "unit": "cuill??res ?? soupe"
            },
            {
                "ingredient": "Sucre",
                "quantite": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Gla??ons"
            }
        ],
        "time": 10,
        "description": "Mettre les gla??ons ?? votre go??t dans le blender, ajouter le lait, la cr??me de coco, le jus de 2 citrons et le sucre. Mixer jusqu'?? avoir la consistence d??sir??e",
        "appliance": "Blender",
        "ustensils": [
            "cuill??re ?? Soupe",
            "verres",
            "presse citron"
        ]
    },
    {
        "id": 2,
        "name": "Poisson Cru ?? la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Thon Rouge (ou blanc)",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Carotte",
                "quantite": 1
            },
            {
                "ingredient": "Citron Vert",
                "quantity": 5
            },
            {
                "ingredient": "Lait de Coco",
                "quantity": 100,
                "unit": "ml"
            }
        ],
        "time": 60,
        "description": "D??couper le thon en d??s, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au r??frig??rateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Apr??s avoir laiss?? mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les p??pins. Rayer la carotte. Ajouter les l??gumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 ?? 2 cuill??res ?? soupe de Cr??me de coco",
        "appliance": "Saladier",
        "ustensils": [
            "presse citron"
        ]
    },
    {
        "id": 3,
        "name": "Poulet coco r??unionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity": 1
            },
            {
                "ingredient": "Lait de coco",
                "quantity": 400,
                "unit": "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 80,
        "description": "D??couper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois dor??, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon d??coup??s en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": [
            "couteau"
        ]
    },
    {
        "id": 4,
        "name": "Salade de riz",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Riz blanc",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf dur",
                "quantity": 2
            },
            {
                "ingredient": "Ma??s",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 50,
        "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en d??s, ajouter au riz les oeufs, les tomates, le poisson, le ma??s et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
        "appliance": "Cuiseur de riz",
        "ustensils": [
            "saladier",
            "passoire"
        ]
    },
    {
        "id": 5,
        "name": "Tarte au thon",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P??te feuillet??e",
                "quantity": 1
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 130,
                "unit": "grammes"
            },
            {
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 2,
                "unit": "cuill??res ?? soupe"
            },
            {
                "ingredient": "gruy??re r??p??",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Moutarde de Dijon",
                "quantity": 1,
                "unite": "cuill??res ?? soupe"
            }
        ],
        "time": 45,
        "description": "Etaler la p??te feuillet?? aux dimensions du moule, ??taler la moutarde sur la p??te feuillet??, ajouter le thon. D??couper les tomates en rondelles et les poser sur le poisson, ajouter un peu de Cr??me fra??che sur toute la tarte et recouvrez de gruy??re r??p??. Cuire au four 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "moule ?? tarte",
            "r??pe ?? fromage",
            "couteau"
        ]
    },
    {
        "id": 6,
        "name": "Tarte aux pommes",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P??te bris??e",
                "quantity": 1
            },
            {
                "ingredient": "Pomme",
                "quantity": 3
            },
            {
                "ingredient": "Oeuf",
                "quantity": "2"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Sucre en Poudre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre vanill??",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 50,
        "description": "Commencez par m??langer les oeufs le sucre et le sucre vanill?? dans un saladier, d??couper les pommes en tranches, ajouter la Cr??me fra??che aux oeufs. Une fois que tout est pret, ??talez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la pr??paration ?? base d'oeufs et de cr??me fra??che. Laisser cuire au four pendant 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "moule ?? tarte",
            "saladier",
            "fourchette"
        ]
    },
    {
        "id": 7,
        "name": "Tartelettes au chocolat et aux fraises",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P??te sabl??e",
                "quantity": 1
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me liquide",
                "quantity": 80,
                "unit": "cl"
            },
            {
                "ingredient": "Beurre",
                "quantity": "30",
                "unit": "grammes"
            },
            {
                "ingredient": "Fraise",
                "quantity": 6
            }
        ],
        "time": 50,
        "description": "Etaler la pate dans les moules ?? tartelette. Faire cuire la pate 30 minutes. D??couper le chocolat en morceau et le faire chauffer, y ajouter la cr??me liquide, ajouter le beurre et remuer jusqu'?? avoir une p??te homog??ne. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
        "appliance": "Four",
        "ustensils": [
            "moule ?? tartelettes (6)",
            "casserolle"
        ]
    },
    {
        "id": 8,
        "name": "Brownie",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Noix",
                "quantity": "180",
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 120,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 2
            },
            {
                "ingredient": "Sucre en Poudre",
                "quantity": "110",
                "unit": "grammes"
            },
            {
                "ingredient": "farine",
                "quantity": 90,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description": "Hachez les noix grossi??rement. Faire fondre le chocolat avec le beurre. M??langer les oeuf et le sucre et m??langer au chocolat. Ajouter la farine. M??langer afin d'avoir quelque chose d'homog??ne puis incorporer les noix. Verser la pr??paration dans un moule de pr??f??rence rectangulaire. Cuire 2O ?? 25 minutes ?? 180??. Sortez du four et attendez quelques minutes pour d??mouler. Servir avec une boule de glace pour plus de gourmandise.",
        "appliance": "Four",
        "ustensils": [
            "moule ?? gateaux",
            "casserolle"
        ]
    },
    {
        "id": 9,
        "name": "Salade M??diterann??ene fraiche au ch??vre",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Olives"
            },
            {
                "ingredient": "Fromage de ch??vre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigre Balsamic"
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Basilic"
            }
        ],
        "time": 15,
        "description": "Peler le concombre le couper 2, retirer les p??pins. Couper les olives en morceaux, ainsi que le fromage de ch??vre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives ?? votre gout.",
        "appliance": "Saladier",
        "ustensils": [
            "cuill??re en bois",
            "couteau"
        ]
    },
    {
        "id": 10,
        "name": "Tartiflette",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Roblochon",
                "quantity": "1"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 4.5,
                "unit": "kg"
            },
            {
                "ingredient": "Jambon fum??",
                "quantity": 2,
                "unit": "tranches"
            },
            {
                "ingredient": "Oignon",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vin blanc sec",
                "quantity": 30,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fum?? coup?? en en morceaux ainsi que les pommes de terres. Salez, poivrez ?? votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Apr??s 5 minutes, mettre le tout dans un plat ?? gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'??paisseur et recouvrir les pommes de terre. Cuire au four (environ 220??) durant 25 minutes. C'est pr??t !",
        "appliance": "Four",
        "ustensils": [
            "plat ?? gratin",
            "couteau",
            "??conome"
        ]
    },
    {
        "id": 11,
        "name": "Salade tomate, mozzarella et pommes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Tomates cerises",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Jambon de parme",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Pommes",
                "quantity": 1
            },
            {
                "ingredient": "Salade Verte",
                "quantity": 1
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage d??coup?? en cubes ou en boules avec la cuill??re ?? melon. D??couper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi d??coup??e en petit morceaux. Assaisonnez ?? votre gout. ",
        "appliance": "Saladier",
        "ustensils": [
            "couteau",
            "cuill??re ?? melon"
        ]
    },
    {
        "id": 12,
        "name": "Compote pomme rhubarbe",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Rhubarbe",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes",
                "quantity": 8
            },
            {
                "ingredient": "Sucre vanill??",
                "quantity": 6,
                "unit": "sachets"
            },
            {
                "ingredient": "Eau",
                "quantity": "0.5",
                "unit": "tasses"
            }
        ],
        "time": 40,
        "description": "??plucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanill??. Laisser cuire 15 minutes en remuant r??guli??rement.",
        "appliance": "Casserole",
        "ustensils": [
            "couteau",
            "??conome"
        ]
    },
    {
        "id": 13,
        "name": "Salade m??ch??e de patates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "M??che",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "??chalote",
                "quantity": 2
            },
            {
                "ingredient": "Vinaigre de cidre",
                "quantity": 1,
                "unit": "cuill??re ?? soupe"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 2,
                "unit": "cuill??re ?? soupe"
            }
        ],
        "time": 40,
        "description": "Cuire les pommes de terre environ 30 minutes. D??couper les ??chalottes finement. Durant la cuisson des pommes de terre. Pr??parez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez ?? discr??tion. Dans un saladier, mettre le m??che. Ajouter",
        "appliance": "Casserole",
        "ustensils": [
            "couteau",
            "saladier",
            "cuill??re en bois"
        ]
    },
    {
        "id": 14,
        "name": "Galette Bretonne Saucisse et Fromage ?? raclette",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Saucisse bretonne ou de toulouse",
                "quantity": 2
            },
            {
                "ingredient": "Farine de bl?? noir",
                "quantity": 130,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Fromage ?? raclette",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 75,
                "unit": "grammes"
            }
        ],
        "time": 100,
        "description": "M??langer la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter ?? la p??te. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les cr??pes avec une partie du fromage. Mettre le reste du fromage ?? raclette par dessus les cr??pes. Passer four pendant 20 minutes",
        "appliance": "Four",
        "ustensils": [
            "poelle ?? frire",
            "couteau"
        ]
    },
    {
        "id": 15,
        "name": "Cr??pes Chocolat Banane",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 600,
                "unit": "ml"
            },
            {
                "ingredient": "Beurre sal??",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 4
            }
        ],
        "time": 60,
        "description": "M??langez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'?? avoir une masse homog??ne. Pendant ce temps faites fondre le beurre et ajoutez en une partie ?? la p??te ?? cr??pes. Faire fondre le chocolat ( avec le reste du beurre sal?? ). Lorsque vous chauffez les cr??pes. Ajouter le chocolat fondu et les bananes coup??es en rondelles. Ajoutez une touche de chantilly pour les gourmands",
        "appliance": "Po??le ?? cr??pe",
        "ustensils": [
            "saladier",
            "louche",
            "cuill??re en bois"
        ]
    },
    {
        "id": 16,
        "name": "Gratin de p??tes ?? la tomate",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Pennes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Basilic",
                "quantity": 1,
                "unit": "tiges"
            },
            {
                "ingredient": "huile d'olives",
                "quantity": 2,
                "unit": "cuill??re ?? soupe"
            }
        ],
        "time": 45,
        "description": "Faire cuire les p??tes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. D??couper les tomates en petits morceaux, soit en tranches soit en d??s. Coupez le basilic en petites morceaux et m??langez le aux tomates.  Coupez la mozzarella en tranche. Pr??chauffez le four ?? 200??. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et r??galez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
        "appliance": "Four",
        "ustensils": [
            "plat ?? gratin",
            "couteau",
            "r??pe ?? fromage"
        ]
    },
    {
        "id": 17,
        "name": "Smoothie ?? la fraise",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Fraise",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Past??que",
                "quantity": 0.5
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            },
            {
                "ingredient": "Gla??ons",
                "quantity": 8
            },
            {
                "ingredient": "Menthe"
            }
        ],
        "time": 15,
        "description": "Coupez les fraises en morceaux, d??coupez la chaire de la past??que en retirant les p??pins. Mettre le tout dans le blender. Ajouter un cuilli??re ?? soupe de juste de citron ainsi que les gla??ons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et d??guster.",
        "appliance": "Blender",
        "ustensils": [
            "verres",
            "couteau",
            "presse citron"
        ]
    },
    {
        "id": 18,
        "name": "Smoothie ananas et vanille",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Ananas",
                "quantity": 1
            },
            {
                "ingredient": "Glace ?? la vanille",
                "quantity": 500,
                "unit": "ml"
            },
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "S??parez 1/5??me d'Ananas ( une belle tranche qui servira pour la d??coration des verres ), mettre le reste coup?? en cubes au blender, ajouter la glace ?? la vanille et le lait. Mixez. Servir et d??corer avec l'ananas restant. C'est pr??t",
        "appliance": "Blender",
        "ustensils": [
            "verres",
            "couteau"
        ]
    },
    {
        "id": 19,
        "name": "Shake Banane Kiwi",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Kiwi",
                "quantity": 4
            },
            {
                "ingredient": "Citron",
                "quantity": 1
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 1
            }
        ],
        "time": 0,
        "description": "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des gla??ons si le lait n'a pas ??t?? mis au frais.",
        "appliance": "Blender",
        "ustensils": [
            "couteau",
            "verres",
            "presse citron"
        ]
    },
    {
        "id": 20,
        "name": "Pates Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Tagliatelles",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Parmesan",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "huile d'olive",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 30,
        "description": "Faire cuire les pates comme indiqu?? sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la Cr??me fra??che et baisser le feu au minimum. Quand les Tagliatelles sont pr??tes les mettre dans la sauteuse et bien m??langer le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan r??p??.",
        "appliance": "Sauteuse",
        "ustensils": [
            "r??pe ?? fromage",
            "cuill??re en bois"
        ]
    },
    {
        "id": 21,
        "name": "Spaghettis ?? la bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Spaghettis",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 2
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Viande hach??e 1% de mati??re grasse",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Vin rouge",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 30,
        "description": "Cuisiner la viande hach??e dans une poelle ?? frire. Dans une autre faire cuire les oignons d??coup??s en fins d??s avec un peu de beurre. Ajouter du vin rouge. M??langer les oigons avec la viande hach??e. Faire cuire les pates le temps indiqu?? sur le paquet. Ajouter le coulis de tomates ?? la viande hach??e. Une fois que les pates sont cuites, ajouter la Cr??me fra??che ?? la viande hach??e. Serivir.",
        "appliance": "Casserolle",
        "ustensils": [
            "Cuill??re en bois",
            "louche",
            "couteau"
        ]
    },
    {
        "id": 22,
        "name": "Fondant au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Beurre",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 30,
        "description": "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'?? obtenir une texture de type mousse. Ajouter la farine ainsi que le m??lange de beurre et chocolat fondu. Beurrez le moule ?? gateaux. Mettre au four pr??chauff?? ?? 200?? puis faites chauffer pendant 15 minutes. C'est pr??t. Servir avec une boule de glace ou une cr??me dessert.",
        "appliance": "Four",
        "ustensils": [
            "moule ?? gateaux",
            "fouet",
            "casserolle"
        ]
    },
    {
        "id": 23,
        "name": "Quiche lorraine",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P??te bris??e",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Lait",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une po??le. Battre les oeufs en ajoutant la Cr??me fra??che et le lait. Finalement ajouter les lardons, salez poivrez ?? votre gout. Verser l'ensemble sur la p??te. Cuire environ 50 minutes.",
        "appliance": "Four",
        "ustensils": [
            "moule ?? gateaux",
            "rouleau ?? patisserie",
            "fouet"
        ]
    },
    {
        "id": 24,
        "name": "Salade de p??tes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Thon en miettes",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Ma??s",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Tomate",
                "quantity": 1
            },
            {
                "ingredient": "Concombre",
                "quantity": 0.5
            },
            {
                "ingredient": "Macaronis",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Mayonnaise",
                "quantity": 2,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 40,
        "description": "D??couper le concombre et les tomates en d??s, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. M??langer le tout et servir frais.",
        "appliance": "Saladier",
        "ustensils": [
            "couteau",
            "cuill??re en bois"
        ]
    },
    {
        "id": 25,
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir en pepites",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            }
        ],
        "time": 30,
        "description": "Faire fondre le beurre et le m??langer avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en m??langeant peu pa peu pour avoir une masse sans grumaux. Ajouter les p??pites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four ?? 180?? pour 10 minutes.",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "saladier",
            "plaque de cuisson"
        ]
    },
    {
        "id": 26,
        "name": "Soupe de tomates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olives"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            }
        ],
        "time": 25,
        "description": "Verser de l'huile dans une cocotte minute couper les l??gumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
        "appliance": "Mixer",
        "ustensils": [
            "cocotte minute",
            "couteau"
        ]
    },
    {
        "id": 27,
        "name": "Soupe ?? l'oseille",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oseille",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 4,
                "unit": "cuill??re ?? soupe"
            },
            {
                "ingredient": "Vermicelles",
                "quantity": 1,
                "unit": "verres"
            },
            {
                "ingredient": "Beurre sal??",
                "quantity": 50,
                "unit": "grammes"
            }
        ],
        "time": 15,
        "description": "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit pr??t, sortir du feu et apr??s 5 minutes ajouter le jaune d'oeuf et la Cr??me fra??che",
        "appliance": "Casserolle",
        "ustensils": [
            "couteau",
            "cuill??re en bois"
        ]
    },
    {
        "id": 28,
        "name": "Soupe de poireaux",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poireau",
                "quantity": 3
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oseille",
                "quantity": 75,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 10,
                "unit": "cl"
            }
        ],
        "time": 80,
        "description": "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coup??es en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la cr??me. Bon appetit.",
        "appliance": "Mixer",
        "ustensils": [
            "casserolle",
            "couteau"
        ]
    },
    {
        "id": 29,
        "name": "Houmous Express",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pois chiches",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            },
            {
                "ingredient": "Citron",
                "quantity": 2
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Paprika"
            }
        ],
        "time": 30,
        "description": "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
        "appliance": "Mixer",
        "ustensils": [
            "cuill??re en bois",
            "presse citron"
        ]
    },
    {
        "id": 30,
        "name": "Pur??e de pois cass??s",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pois Cass??",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 2,
                "unit": "gousses"
            }
        ],
        "time": 60,
        "description": "Mettre tous les ingr??dients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre ?? petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est pr??t",
        "appliance": "Mixer",
        "ustensils": [
            "casserolle",
            "cuill??re en bois"
        ]
    },
    {
        "id": 31,
        "name": "Jardini??re de l??gumes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 2
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 2
            },
            {
                "ingredient": "Haricots verts",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Petits poids",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description": "D??couper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dor??s, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pr?? cuits ). Ajouter Sel, poivre, thyms et laurier",
        "appliance": "Po??le",
        "ustensils": [
            "Couteau",
            "??conome"
        ]
    },
    {
        "id": 32,
        "name": "Croque Monsieur ?? la dinde",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Blanc de dinde",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Emmental",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Gruy??re",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 5,
                "unit": "cl"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pinc??es"
            }
        ],
        "time": 20,
        "description": "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'??mental, une de blanc de dinde, et une autre d'emmental. Dans un r??cipient, m??langer le gruy??re rapp?? avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
        "appliance": "Four",
        "ustensils": [
            "r??pe ?? fromage",
            "cuill??re ?? Soupe",
            "couteau"
        ]
    },
    {
        "id": 33,
        "name": "Sandwich au saumon fum??",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Saumon Fum??",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Feuilles de laitue",
                "quantity": 4
            },
            {
                "ingredient": "Fromage blanc",
                "quantity": 4,
                "unit": "cuill??res ?? soupe"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 5,
        "description": "M??langer le fromage blanc avec le citron. Ajouter un peu de sel et poivre ?? votre gout. Faire dorer le pain de mie. Puis ??taler le m??lange. Ajouter une feuille de salade puis le saumon fum??. C'est pr??t.",
        "appliance": "Four",
        "ustensils": [
            "couteau",
            "cuill??re en bois"
        ]
    },
    {
        "id": 34,
        "name": "Pur??e de patate douce",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Patate douce",
                "quantity": 800,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Orange",
                "quantity": 1
            }
        ],
        "time": 25,
        "description": "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la cr??me et l'huile d'olive ?? son gout. Salez, poivrez. Pressez l'orange et ajouter le jus ?? l'ensemble. Servir.",
        "appliance": "Mixer",
        "ustensils": [
            "couteau",
            "??conome",
            "cuill??re en bois"
        ]
    },
    {
        "id": 35,
        "name": "Pur??e de carottes",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 20,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 2,
                "unit": "cuill??res ?? soupe"
            },
            {
                "ingredient": "Cumin",
                "quantity": 1,
                "unit": "cuill??res ?? caf??"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pinc??es"
            }
        ],
        "time": 25,
        "description": "??plucher les l??gumes, les couper en morceaux et les mettre ?? cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la cr??me. Ajouter le cumun et la noix de muscade.",
        "appliance": "Mixer",
        "ustensils": [
            "cocotte minute",
            "couteau",
            "cuill??re en bois"
        ]
    },
    {
        "id": 36,
        "name": "Lasagne Courgettes et Ch??vre",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Fromage de ch??vre",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Lasagnes",
                "quantity": 5,
                "unit": "feuilles"
            },
            {
                "ingredient": "Gruy??re",
                "quantity": 40,
                "unit": "grammes"
            },
            {
                "ingredient": "Ma??zena",
                "quantity": 1,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 35,
        "description": "Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de ch??vre frais. Pr??parer la b??chamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiy??re. Passer au four ?? 180?? durant 20 ?? 25 minutes.",
        "appliance": "Four",
        "ustensils": [
            "plat ?? gratin",
            "r??pe ?? fromage",
            "fouet"
        ]
    },
    {
        "id": 37,
        "name": "Courgettes farcies au boeuf",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Viande hach??e",
                "quantity": 600,
                "unit": "grammes"
            },
            {
                "ingredient": "Huile d'olives",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Coulis de tomates",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Gruy??re",
                "quantity": 50,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description": "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. R??server.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hach??e. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rap??",
        "appliance": "Four",
        "ustensils": [
            "couteau",
            "cuill??re en bois",
            "Poelle ?? frire"
        ]
    },
    {
        "id": 38,
        "name": "Pain Perdu",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain",
                "quantity": 6,
                "unit": "tranches"
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 75,
                "unit": "grammes"
            }
        ],
        "time": 20,
        "description": "Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes ?? 180??. Servir",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "bol",
            "Cuill??re ?? Soupe"
        ]
    },
    {
        "id": 39,
        "name": "Crumble aux pommes",
        "servings": 40,
        "ingredients": [
            {
                "ingredient": "Pomme",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 80,
                "unit": "grammes"
            }
        ],
        "time": 40,
        "description": "D??couper les pommes en d??. M??langer dans un saladier la farine, le sucre et le beurre. Bien m??langer. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
        "appliance": "Four",
        "ustensils": [
            "saladier",
            "couteau",
            "fouet"
        ]
    },
    {
        "id": 40,
        "name": "Limonade",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Eau",
                "quantity": 1,
                "unit": "Litres"
            },
            {
                "ingredient": "Citron Vert",
                "quantity": 3
            },
            {
                "ingredient": "Sucre en poudre",
                "quantity": 4,
                "unit": "cuill??res ?? caf??"
            },
            {
                "ingredient": "Bicarbonate",
                "quantity": 1,
                "unit": "cuill??res ?? caf??"
            }
        ],
        "time": 10,
        "description": "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien m??langer. Ajouter le bicarbonate. Servir. Ajouter des gla??on et une feuille de menthe pour la d??co.",
        "appliance": "Saladier",
        "ustensils": [
            "cuill??re en bois"
        ]
    },
    {
        "id": 41,
        "name": "Mousse au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre vanill??",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 20,
        "description": "S??parer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au m??lange de chocolat. M??langez d??licatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
        "appliance": "Casserolle",
        "ustensils": [
            "fouet",
            "spatule",
            "verres"
        ]
    },
    {
        "id": 42,
        "name": "Charlotte au poires",
        "servings": 3,
        "ingredients": [
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Poires au jus",
                "quantity": 0.5,
                "unit": "boites"
            },
            {
                "ingredient": "Boudoirs",
                "quantity": 15
            }
        ],
        "time": 60,
        "description": "Commencez par pr??parer la mousse au chocolat au moins 2 heures avant. Quand la mousse est pr??te et a repos??e. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
        "appliance": "Moule ?? charlotte",
        "ustensils": [
            "saladier",
            "couteau",
            "fouet"
        ]
    },
    {
        "id": 43,
        "name": "Tarte au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "P??te bris??e",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre fondu",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Citron"
            }
        ],
        "time": 50,
        "description": "Pr??chauffez le fours ?? 200??. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
        "appliance": "Four",
        "ustensils": [
            "rouleau ?? patisserie",
            "moule ?? tarte",
            "presse citron"
        ]
    },
    {
        "id": 44,
        "name": "Cr??me d??ssert au chocolat",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "farine",
                "quantity": 40,
                "unit": "grammes"
            }
        ],
        "time": 15,
        "description": "M??langer la farine et le beurre fondu en ajoutant le lait peu ?? peu. Ajouter du sucre apr??s la cuisson. Bien m??langer. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en m??langeant avec une cuill??re en bois. Mettre dans des verres",
        "appliance": "Casserolle",
        "ustensils": [
            "cuill??re en bois"
        ]
    },
    {
        "id": 45,
        "name": "Cr??me patissi??re",
        "servings": 8,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 80,
                "unit": "grammes"
            }
        ],
        "time": 30,
        "description": "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre ?? feu doux pour faire ??paissir en remuant pendant 5 ?? 10 minutes.",
        "appliance": "Casserolle",
        "ustensils": [
            "fouet",
            "saladier"
        ]
    },
    {
        "id": 46,
        "name": "Far breton",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre vanill??",
                "quantity": 1,
                "unit": "sachets"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litre"
            },
            {
                "ingredient": "Pruneaux",
                "quantity": 100,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description": "M??langer la farine avec le sucre et les oeufs en ajoutant du sucre vanill??. Ajouter le lait petit ?? petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurr?? y placer les pruneaux et faire cuire ?? 200?? pendant 45 minutes",
        "appliance": "Four",
        "ustensils": [
            "fouet",
            "moule",
            "verres"
        ]
    },
    {
        "id": 47,
        "name": "Mousse au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Jus de citron",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Mascarpone",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Cr??me fra??che",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 5,
        "description": "M??langer le jus de citron avec le sucre et la mascarpone. Ajouter la Cr??me fra??che. M??langer le tout et mettre au cong??lateur pendant 1 heure. Servir",
        "appliance": "Saladier",
        "ustensils": [
            "fouet",
            "verres",
            "cuill??re en bois"
        ]
    },
    {
        "id": 48,
        "name": "Pizza",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "P??te ?? pizza",
                "quantity": 1
            },
            {
                "ingredient": "Tomates pel??es",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Lardons",
                "quantity": 1,
                "unit": "barquettes"
            },
            {
                "ingredient": "Champignons de paris",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Gruy??re",
                "quantity": 200,
                "unit": "grammes"
            }
        ],
        "time": 40,
        "description": "??taler la pate a pizza. Ecraser les tomates pel??es, les ??taler sur la p??te, ajouter les lardons et les champignons. Ajouter le gruy??re eet passer au four ?? 220?? durant 20 minutes",
        "appliance": "Four",
        "ustensils": [
            "rouleau ?? patisserie",
            "r??pe ?? fromage",
            "couteau"
        ]
    },
    {
        "id": 49,
        "name": "Smoothie tropical",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Bananes",
                "quantity": 2
            },
            {
                "ingredient": "Kiwis",
                "quantity": 3
            },
            {
                "ingredient": "Mangue",
                "quantity": 1
            },
            {
                "ingredient": "Ananas",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Miel",
                "quantity": 2,
                "unit": "cuill??res ?? soupe"
            }
        ],
        "time": 0,
        "description": "D??couper les fruits. Le passer au blender jusqu'?? obtenir une texture liquide. Mettre au frais. Servir",
        "appliance": "Blender",
        "ustensils": [
            "couteau",
            "verres"
        ]
    },
    {
        "id": 50,
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "P??te feuillet??e",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 6
            },
            {
                "ingredient": "Poudre d'amendes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 500,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description": "Pr??parer la frangipane : M??langer le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuillet?? et mettre dans un moule ?? tarte. Garnir de frangipane et recouvrir du reste de pate feuillet??e. Mettre au four 30 minutes",
        "appliance": "Four",
        "ustensils": [
            "rouleau ?? patisserie",
            "fouet"
        ]
    }
];
exports.default = recipes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aIdiY","bDbGG"], "bDbGG", "parcelRequireff9e")

//# sourceMappingURL=index.fbb3188c.js.map
