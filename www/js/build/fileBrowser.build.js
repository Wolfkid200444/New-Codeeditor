(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fileBrowser"],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./src/pages/fileBrowser/add-menu.hbs":
/*!********************************************!*\
  !*** ./src/pages/fileBrowser/add-menu.hbs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<li action=\\\"create\\\" value=\\\"file\\\">{{new file}}</li>\\n<li action=\\\"create\\\" value=\\\"folder\\\">{{new folder}}</li>\\n<li action=\\\"create\\\" value=\\\"project\\\">{{new project}}</li>\");\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/add-menu.hbs?");

/***/ }),

/***/ "./src/pages/fileBrowser/fileBrowser.hbs":
/*!***********************************************!*\
  !*** ./src/pages/fileBrowser/fileBrowser.hbs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div tabindex=\\\"-1\\\" class=\\\"main\\\" id=\\\"file-browser\\\" type=\\\"{{type}}\\\">\\n  <div class=\\\"navigation\\\" tabindex=\\\"-1\\\"></div>\\n</div>\");\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/fileBrowser.hbs?");

/***/ }),

/***/ "./src/pages/fileBrowser/fileBrowser.include.js":
/*!******************************************************!*\
  !*** ./src/pages/fileBrowser/fileBrowser.include.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/page */ \"./src/components/page.js\");\n/* harmony import */ var _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/utils/helpers */ \"./src/lib/utils/helpers.js\");\n/* harmony import */ var _components_contextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/contextMenu */ \"./src/components/contextMenu.js\");\n/* harmony import */ var _components_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dialogs */ \"./src/components/dialogs.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/constants */ \"./src/lib/constants.js\");\n/* harmony import */ var _settings_filesSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/filesSettings */ \"./src/pages/settings/filesSettings.js\");\n/* harmony import */ var _fileBrowser_hbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fileBrowser.hbs */ \"./src/pages/fileBrowser/fileBrowser.hbs\");\n/* harmony import */ var _list_hbs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list.hbs */ \"./src/pages/fileBrowser/list.hbs\");\n/* harmony import */ var _add_menu_hbs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-menu.hbs */ \"./src/pages/fileBrowser/add-menu.hbs\");\n/* harmony import */ var _fileBrowser_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fileBrowser.scss */ \"./src/pages/fileBrowser/fileBrowser.scss\");\n/* harmony import */ var _fileBrowser_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fileBrowser_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _lib_fileSystem_externalFs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/fileSystem/externalFs */ \"./src/lib/fileSystem/externalFs.js\");\n/* harmony import */ var _lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/fileSystem/fsOperation */ \"./src/lib/fileSystem/fsOperation.js\");\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/searchbar */ \"./src/components/searchbar.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects */ \"./src/pages/fileBrowser/projects.js\");\n/* harmony import */ var _ftp_accounts_decryptAccounts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ftp-accounts/decryptAccounts */ \"./src/pages/ftp-accounts/decryptAccounts.js\");\n/* harmony import */ var _lib_utils_Url__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/utils/Url */ \"./src/lib/utils/Url.js\");\n/* harmony import */ var _lib_utils_path__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/utils/path */ \"./src/lib/utils/path.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n//#region Imports\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //#endregion\n\n/**\n * \n * @param {\"file\"|\"dir\"} [type='file']\n * @param {string|function(string):boolean} option button text or function to check extension\n */\n\nfunction FileBrowserInclude(type, option) {\n  if (!type) type = 'file';\n  var actionStack = window.actionStack;\n  var prompt = _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].prompt;\n  return new Promise(function (_resolve, reject) {\n    //#region Declaration\n    var $menuToggler = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('i', {\n      className: 'icon more_vert',\n      attr: {\n        action: 'toggle-menu'\n      }\n    });\n    var $addMenuToggler = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('i', {\n      className: 'icon add disabled',\n      attr: {\n        action: 'toggle-add-menu'\n      }\n    });\n    var $search = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('i', {\n      className: 'icon search',\n      attr: {\n        action: 'search'\n      }\n    });\n    var $page = Object(_components_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('File Browser');\n    var $content = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default.a.parse(mustache__WEBPACK_IMPORTED_MODULE_3___default.a.render(_fileBrowser_hbs__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      type: type\n    }));\n    var $navigation = $content.querySelector('.navigation');\n    var actionsToDispose = [];\n    var menuOption = {\n      top: '8px',\n      right: '8px',\n      toggle: $menuToggler,\n      transformOrigin: 'top right'\n    };\n    var $fbMenu = Object(_components_contextMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"<li action=\\\"settings\\\">\".concat(strings.settings, \"</li>\"), menuOption);\n    var $addMenu = Object(_components_contextMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mustache__WEBPACK_IMPORTED_MODULE_3___default.a.render(_add_menu_hbs__WEBPACK_IMPORTED_MODULE_12__[\"default\"], strings), (menuOption.toggle = $addMenuToggler) && menuOption);\n    var root = 'file:///storage/';\n    var cachedDir = {};\n    var currentDir = {\n      url: \"/\",\n      name: 'File browser'\n    };\n    var folderOption, externalList; //#endregion\n\n    $content.addEventListener('click', handleClick);\n    $content.addEventListener('contextmenu', handleContextMenu);\n    $page.append($content);\n    $page.querySelector('header').append($search, $addMenuToggler, $menuToggler);\n    document.body.append($page);\n    actionStack.push({\n      id: 'filebrowser',\n      action: function action() {\n        reject({\n          error: 'user canceled',\n          code: 0\n        });\n        $page.hide();\n      }\n    });\n\n    $fbMenu.onclick = function (e) {\n      $fbMenu.hide();\n      var action = e.target.getAttribute('action');\n\n      if (action && action === 'settings') {\n        Object(_settings_filesSettings__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(refresh);\n      }\n    };\n\n    $addMenu.onclick = function (e) {\n      $addMenu.hide();\n      var action = e.target.getAttribute('action');\n      var value = e.target.getAttribute('value');\n\n      if (action && action === 'create') {\n        create(value);\n      }\n    };\n\n    $search.onclick = function () {\n      var $list = $content.get(\"#list\");\n      if ($list) Object(_components_searchbar__WEBPACK_IMPORTED_MODULE_16__[\"default\"])($list);\n    };\n\n    $page.onhide = function () {\n      var id = '';\n\n      while (id = actionsToDispose.pop()) {\n        actionStack.remove(id);\n      }\n\n      actionStack.remove('filebrowser');\n      $content.removeEventListener('click', handleClick);\n      $content.removeEventListener('contextmenu', handleContextMenu);\n    };\n\n    if (type === 'folder') {\n      var openFolder = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('button', {\n        textContent: option || strings['select folder']\n      });\n      folderOption = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('footer', {\n        className: 'button-container',\n        child: openFolder\n      });\n      $page.setAttribute('footer-height', 1);\n      $page.append(folderOption);\n\n      openFolder.onclick = function () {\n        $page.hide();\n        resolve(currentDir);\n      };\n    }\n\n    var version = parseInt(device.version);\n\n    if (version < 7) {\n      renderStorageList();\n    } else {\n      _lib_fileSystem_externalFs__WEBPACK_IMPORTED_MODULE_14__[\"default\"].listExternalStorages().then(function (res) {\n        externalList = res;\n        renderStorageList();\n      });\n    }\n\n    function resolve(data) {\n      localStorage.setItem(\"lastDir\", currentDir.url);\n\n      _resolve(data);\n    }\n\n    function renderStorageList() {\n      getStorageList().then(function (list) {\n        delete localStorage.lastDir;\n        navigate(\"/\", \"/\");\n        currentDir.url = \"/\";\n        currentDir.name = \"File Browser\";\n        $page.settitle('File Browser');\n        render(list);\n\n        if (type === 'folder') {\n          $addMenuToggler.classList.add('disabled');\n          folderOption.classList.add('disabled');\n        }\n      })[\"catch\"](function (err) {\n        _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err);\n        console.error(err);\n      });\n    }\n    /**\n     * @returns {Promise<Array<PathData>>}\n     */\n\n\n    function getStorageList() {\n      return new Promise(function (resolve, reject) {\n        cordova.plugins.diagnostic.getExternalSdCardDetails(function (ls) {\n          var list = [];\n\n          if (ls.length > 0) {\n            ls.map(function (card) {\n              var name = card.path.split('/').splice(-1)[0];\n              var path = card.filePath + '/';\n              if (name === \"files\") return card;\n              list.push({\n                name: externalList && externalList[name] ? externalList[name] : name,\n                url: path,\n                origin: path,\n                isDirectory: true,\n                parent: true,\n                type: 'folder'\n              });\n              return card;\n            });\n          }\n\n          var path = cordova.file.externalRootDirectory;\n          list.push({\n            url: path,\n            name: 'Internal storage',\n            isDirectory: true,\n            parent: true,\n            type: 'folder'\n          });\n          var ftpaccounts;\n\n          try {\n            ftpaccounts = JSON.parse(localStorage.ftpaccounts);\n\n            if (Array.isArray(ftpaccounts)) {\n              ftpaccounts = Object(_ftp_accounts_decryptAccounts__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(ftpaccounts);\n              ftpaccounts.map(function (account) {\n                var mode = account.mode,\n                    security = account.security,\n                    name = account.name;\n                var url = _lib_utils_Url__WEBPACK_IMPORTED_MODULE_19__[\"default\"].formate(_objectSpread({\n                  protocol: \"ftp:\"\n                }, account, {\n                  query: {\n                    mode: mode,\n                    security: security\n                  }\n                }));\n                list.push({\n                  url: url,\n                  name: name,\n                  isDirectory: true,\n                  parent: true,\n                  type: 'folder'\n                });\n              });\n            }\n          } catch (error) {\n            console.log(error);\n          }\n\n          if (type === \"file\") {\n            list.push({\n              name: \"Select document\",\n              isDirectory: true,\n              type: 'folder',\n              \"open-doc\": true\n            });\n          }\n\n          cachedDir[\"/\"] = {\n            name: name,\n            list: list\n          };\n          resolve(list);\n        }, reject);\n      });\n    }\n\n    function loadDir() {\n      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"/\";\n      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'File Browser';\n      var url = path;\n\n      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(path) === 'object') {\n        url = path.url;\n        name = path.name;\n      }\n\n      if (url === \"/\") return renderStorageList();\n\n      if (url in cachedDir) {\n        update();\n        var item = cachedDir[url];\n        render(item.list);\n        var $list = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('#list');\n        $list.scrollTop = item.scroll;\n        name = item.name;\n      } else {\n        var timeout = setTimeout(function () {\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.create('', strings.loading + '...');\n        }, 100);\n        Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(url).then(function (fs) {\n          return fs.lsDir();\n        }).then(function (list) {\n          update();\n          list = _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sortDir(list, appSettings.value.fileBrowser);\n          cachedDir[url] = {\n            name: name,\n            list: list\n          };\n          render(list);\n        })[\"catch\"](function (err) {\n          actionStack.remove(currentDir.url);\n          _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err, url);\n          console.error(err);\n        })[\"finally\"](function () {\n          clearTimeout(timeout);\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.destroy();\n        });\n      }\n\n      function update() {\n        if (type === 'folder') if (url === root) {\n          $addMenuToggler.classList.add('disabled');\n          folderOption.classList.add('disabled');\n        } else {\n          $addMenuToggler.classList.remove('disabled');\n          folderOption.classList.remove('disabled');\n        }\n        localStorage.lastDir = url;\n        currentDir.url = url;\n        currentDir.name = name;\n        var $list = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('#list');\n        if ($list) $list.scrollTop = 0;\n        navigate(name, url);\n        $page.settitle(name);\n      }\n    }\n    /**\n     * \n     * @param {MouseEvent} e \n     * @param {\"contextmenu\"} [contextMenu] \n     */\n\n\n    function handleClick(e, contextMenu) {\n      /**\n       * @type {HTMLElement}\n       */\n      var $el = e.target;\n\n      var _action = $el.getAttribute('action');\n\n      if (!_action) return;\n      var url = $el.getAttribute('url');\n      var name = $el.getAttribute('name');\n      var opendoc = $el.getAttribute('open-doc');\n      if (opendoc) _action = \"open-doc\";\n\n      switch (_action) {\n        case 'navigation':\n        case 'folder':\n          folder();\n          break;\n\n        case 'file':\n          file();\n          break;\n\n        case \"open-doc\":\n          openDoc();\n          break;\n      }\n\n      function folder() {\n        if (contextMenu !== 'contextmenu') {\n          var currentUrl = currentDir.url;\n          var dir = JSON.parse(JSON.stringify(currentDir));\n          cachedDir[currentUrl].scroll = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default.a.get('#list').scrollTop;\n          actionsToDispose.push(currentUrl);\n          actionStack.push({\n            id: currentUrl,\n            action: function action() {\n              actionsToDispose.pop();\n              loadDir(dir);\n              if (_action === 'folder') navigate.pop();\n            }\n          });\n          loadDir(url, name);\n        } else {\n          cmhandle();\n        }\n      }\n\n      function file() {\n        if (contextMenu !== \"contextmenu\") {\n          if (typeof option === 'function' && option(name)) {\n            $page.hide();\n            resolve({\n              url: url\n            });\n          }\n        } else {\n          cmhandle();\n        }\n      }\n\n      function cmhandle() {\n        navigator.vibrate(_lib_constants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].VIBRATION_TIME);\n        _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].select('', [['delete', strings[\"delete\"], 'delete'], ['rename', strings.rename, 'edit']]).then(function (res) {\n          switch (res) {\n            case 'delete':\n              _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].confirm(strings[\"delete {name}\"].replace('{name}', name)).then(remove);\n              break;\n\n            case 'rename':\n              _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].prompt(strings.rename, name, \"text\", {\n                match: _lib_constants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].FILE_NAME_REGEX\n              }).then(function (newname) {\n                rename(newname);\n              });\n              break;\n          }\n        });\n      }\n\n      function rename(newname) {\n        Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(url).then(function (fs) {\n          return fs.renameTo(newname);\n        }).then(function () {\n          updateAddedFolder(url);\n          window.plugins.toast.showShortBottom(strings.success);\n          loadDir(currentDir);\n        })[\"catch\"](function (err) {\n          _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err);\n          console.error(err);\n        });\n      }\n\n      function remove() {\n        Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(url).then(function (fs) {\n          if (_action === \"file\") return fs.deleteFile();\n          if (_action === \"folder\") return fs.deleteDir();\n        }).then(function () {\n          updateAddedFolder(url);\n          window.plugins.toast.showShortBottom(strings.success);\n          loadDir(currentDir);\n        })[\"catch\"](function (err) {\n          console.log(err);\n          _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err);\n        });\n      }\n\n      function openDoc() {\n        SDcard.openDoc(function (res) {\n          res.isContentUri = true;\n          res.url = res.uri;\n          resolve(res);\n          $page.hide();\n        }, function (err) {\n          _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err);\n          console.error(err);\n        });\n      }\n    }\n\n    function handleContextMenu(e) {\n      handleClick(e, 'contextmenu');\n    }\n\n    function refresh() {\n      cachedDir = {};\n      loadDir(currentDir.url, currentDir.name);\n    }\n\n    function render(list) {\n      var $list = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default.a.parse(mustache__WEBPACK_IMPORTED_MODULE_3___default.a.render(_list_hbs__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        msg: strings['empty folder message'],\n        list: list\n      }));\n      var $oldList = $content.querySelector('#list');\n      if ($oldList) $oldList.remove();\n      $content.append($list);\n      $list.focus();\n    }\n\n    function navigate(name, url) {\n      var $nav = $navigation.querySelector(\"[url=\\\"\".concat(url, \"\\\"]\"));\n      var $old = $navigation.querySelector('.active');\n      if ($old) $old.classList.remove('active');\n      if ($nav) return $nav.classList.add('active');\n      $nav = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('span', {\n        className: 'nav active',\n        attr: {\n          action: 'navigation',\n          url: url,\n          text: name,\n          name: name\n        },\n        tabIndex: -1\n      });\n      $navigation.append($nav);\n      $navigation.scrollLeft = $navigation.scrollWidth;\n    }\n\n    navigate.pop = function () {\n      var $nav = $navigation.lastChild;\n      if ($nav) $nav.remove();\n    };\n\n    function updateAddedFolder(url) {\n      if (cachedDir[url]) delete cachedDir[url];\n      if (cachedDir[currentDir.url]) delete cachedDir[currentDir.url];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = addedFolder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var folder = _step.value;\n\n          if (folder.url === url) {\n            folder.remove();\n          } else if (new RegExp(url).test(currentDir.url)) {\n            folder.reload();\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n    /**\n     * \n     * @param {\"file\"|\"folder\"|\"project\"} arg \n     */\n\n\n    function create(arg) {\n      var url = currentDir.url,\n          name = currentDir.name;\n\n      if (arg === \"file\" || arg === \"folder\") {\n        var title = strings['enter folder name'];\n        var val = strings['new folder'];\n\n        if (arg === \"file\") {\n          title = strings[\"enter file name\"];\n          val = 'untitiled.txt';\n        }\n\n        prompt(title, val, 'filename', {\n          match: _lib_constants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].FILE_NAME_REGEX,\n          required: true\n        }).then(function (entryName) {\n          if (!entryName) return;\n          entryName = _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].removeLineBreaks(entryName);\n          Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(url).then(function (fs) {\n            if (arg === \"folder\") return fs.createDirectory(entryName);\n            if (arg === \"file\") return fs.createFile(entryName);\n          }).then(function () {\n            updateAddedFolder(url);\n            window.plugins.toast.showLongBottom(strings.success);\n            loadDir(url, name);\n          })[\"catch\"](function (e) {\n            _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(e, url, \"filename: \" + entryName);\n            console.error(e);\n          });\n        });\n      } else if (arg === \"project\") {\n        var options = [];\n        var alreadyCreated = [];\n        var project = '';\n        var cturl = '';\n        var newUrl = null;\n        var projectName = '';\n        var framework = '';\n        Object.keys(_projects__WEBPACK_IMPORTED_MODULE_17__[\"default\"]).map(function (projectname) {\n          options.push([projectname, projectname, \"icon \" + projectname]);\n        });\n        _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].select(strings[\"new project\"], options).then(function (res) {\n          framework = res;\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.create(res, strings.loading + '...');\n          return _projects__WEBPACK_IMPORTED_MODULE_17__[\"default\"][res]();\n        }).then(function (res) {\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.destroy();\n          project = res[\"default\"];\n          return _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].prompt(strings[\"project name\"], framework, \"text\", {\n            required: true,\n            match: _lib_constants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].FILE_NAME_REGEX\n          });\n        }).then(function (name) {\n          projectName = name;\n          return Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(url);\n        }).then(function (fs) {\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.create(projectName, strings.loading + '...');\n          return fs.createDirectory(projectName);\n        }).then(function (res) {\n          newUrl = _lib_utils_Url__WEBPACK_IMPORTED_MODULE_19__[\"default\"].join(url, projectName, \"/\");\n          var files = Object.keys(project);\n          return new Promise(function (resolve, reject) {\n            createProject(resolve, reject);\n          });\n\n          function createProject(resolve, reject) {\n            if (!files.length) {\n              updateAddedFolder(url);\n              window.plugins.toast.showLongBottom(strings.success);\n              loadDir(url, name);\n              resolve();\n            }\n\n            cturl = '';\n            var file = files.pop();\n            createFile(file).then(function () {\n              createProject(resolve, reject);\n            })[\"catch\"](reject);\n          }\n\n          function createFile(fileurl) {\n            var paths = fileurl.split(\"/\");\n            var filename = paths.pop();\n            return new Promise(function (resolve, reject) {\n              createDir();\n\n              function createDir() {\n                var lclUrl = _lib_utils_Url__WEBPACK_IMPORTED_MODULE_19__[\"default\"].join(newUrl, cturl);\n\n                if (paths.length === 0) {\n                  return Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(lclUrl).then(function (fs) {\n                    var data = project[fileurl].replace(/<%name%>/g, projectName);\n                    return fs.createFile(filename, data);\n                  }).then(resolve)[\"catch\"](reject);\n                }\n\n                var name = paths.splice(0, 1)[0];\n                var toCreate = _lib_utils_Url__WEBPACK_IMPORTED_MODULE_19__[\"default\"].join(lclUrl, name);\n                Object(_lib_fileSystem_fsOperation__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(lclUrl).then(function (fs) {\n                  if (alreadyCreated.includes(toCreate)) return Promise.resolve();\n                  return fs.createDirectory(name);\n                }).then(function (res) {\n                  if (!alreadyCreated.includes(toCreate)) alreadyCreated.push(toCreate);\n                  cturl += name + '/';\n                  return createDir(paths);\n                })[\"catch\"](reject);\n              }\n            });\n          }\n        })[\"catch\"](function (err) {\n          _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(err);\n          console.error(err);\n        })[\"finally\"](function () {\n          _components_dialogs__WEBPACK_IMPORTED_MODULE_7__[\"default\"].loader.destroy();\n        });\n      }\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileBrowserInclude);\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/fileBrowser.include.js?");

/***/ }),

/***/ "./src/pages/fileBrowser/fileBrowser.scss":
/*!************************************************!*\
  !*** ./src/pages/fileBrowser/fileBrowser.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/fileBrowser.scss?");

/***/ }),

/***/ "./src/pages/fileBrowser/list.hbs":
/*!****************************************!*\
  !*** ./src/pages/fileBrowser/list.hbs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<ul class=\\\"list\\\" id=\\\"list\\\" empty-msg=\\\"{{msg}}\\\">{{#list}}\\n  {{#.}}\\n  <li tabindex=\\\"1\\\" class=\\\"tile\\\" url=\\\"{{url}}\\\" origin=\\\"{{origin}}\\\" {{#isDirectory}} action=\\\"folder\\\" type=\\\"folder\\\"\\n    {{/isDirectory}} {{#canWrite}} can-write=\\\"true\\\" {{/canWrite}} uuid=\\\"{{uuid}}\\\" {{#isFile}} action=\\\"file\\\" type=\\\"file\\\"\\n    {{/isFile}} name=\\\"{{name}}\\\" {{#open-doc}} open-doc=\\\"true\\\" {{/open-doc}}>\\n    <span class=\\\"icon {{type}}\\\"></span>\\n    <div class=\\\"text\\\">\\n      <span>{{name}}</span>\\n    </div>\\n  </li>\\n  {{/.}}\\n  {{/list}}</ul>\");\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/list.hbs?");

/***/ }),

/***/ "./src/pages/fileBrowser/projects.js":
/*!*******************************************!*\
  !*** ./src/pages/fileBrowser/projects.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//jshint ignore:start\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"angular\": function angular() {\n    return __webpack_require__.e(/*! import() | angular */ \"angular\").then(__webpack_require__.bind(null, /*! ./projects/ng */ \"./src/pages/fileBrowser/projects/ng.js\"));\n  },\n  \"angularjs\": function angularjs() {\n    return __webpack_require__.e(/*! import() | angularjs */ \"angularjs\").then(__webpack_require__.bind(null, /*! ./projects/ngjs */ \"./src/pages/fileBrowser/projects/ngjs.js\"));\n  },\n  \"html\": function html() {\n    return __webpack_require__.e(/*! import() | html */ \"html\").then(__webpack_require__.bind(null, /*! ./projects/html */ \"./src/pages/fileBrowser/projects/html.js\"));\n  },\n  \"react\": function react() {\n    return __webpack_require__.e(/*! import() | react */ \"react\").then(__webpack_require__.bind(null, /*! ./projects/react */ \"./src/pages/fileBrowser/projects/react.js\"));\n  },\n  \"vue\": function vue() {\n    return __webpack_require__.e(/*! import() | vue */ \"vue\").then(__webpack_require__.bind(null, /*! ./projects/vue */ \"./src/pages/fileBrowser/projects/vue.js\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/fileBrowser/projects.js?");

/***/ }),

/***/ "./src/pages/ftp-accounts/decryptAccounts.js":
/*!***************************************************!*\
  !*** ./src/pages/ftp-accounts/decryptAccounts.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils/helpers */ \"./src/lib/utils/helpers.js\");\n\n/**\n * \n * @param {Array<FTPAccount>} accounts \n */\n\nfunction decryptAccounts(accounts) {\n  var credentials = _lib_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].credentials;\n  var temp = [];\n  if (Array.isArray(accounts)) accounts.map(function (account) {\n    var name = account.name,\n        username = account.username,\n        password = account.password,\n        hostname = account.hostname,\n        port = account.port,\n        id = account.id,\n        security = account.security,\n        mode = account.mode,\n        path = account.path;\n    username = credentials.decrypt(username);\n    password = credentials.decrypt(password);\n    hostname = credentials.decrypt(hostname);\n    port = credentials.decrypt(port);\n    temp.push({\n      username: username,\n      password: password,\n      hostname: hostname,\n      port: port,\n      name: name ? name : \"\".concat(username, \"@\").concat(hostname),\n      id: id,\n      security: security,\n      mode: mode,\n      path: path\n    });\n    return account;\n  });\n  return temp;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (decryptAccounts);\n\n//# sourceURL=webpack:///./src/pages/ftp-accounts/decryptAccounts.js?");

/***/ }),

/***/ "./src/pages/settings/filesSettings.js":
/*!*********************************************!*\
  !*** ./src/pages/settings/filesSettings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filesSettings; });\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/page */ \"./src/components/page.js\");\n/* harmony import */ var _components_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dialogs */ \"./src/components/dialogs.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/gen */ \"./src/components/gen.js\");\n\n\n\n\nfunction filesSettings(callback) {\n  var page = Object(_components_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(strings.settings);\n  var settingsList = html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('div', {\n    className: 'main list'\n  });\n  actionStack.push({\n    id: 'settings-theme',\n    action: page.hide\n  });\n\n  page.onhide = function () {\n    actionStack.remove('settings-theme');\n  };\n\n  var values = appSettings.value.fileBrowser;\n  var settingsOptions = [{\n    key: 'sort',\n    text: strings['sort by name'],\n    checkbox: values.sortByName\n  }, {\n    key: 'show',\n    text: strings['show hidden files'],\n    checkbox: values.showHiddenFiles\n  }];\n  _components_gen__WEBPACK_IMPORTED_MODULE_3__[\"default\"].listItems(settingsList, settingsOptions, changeSetting);\n\n  function changeSetting() {\n    switch (this.key) {\n      case 'sort':\n        values.sortByName = !values.sortByName;\n        appSettings.update();\n        this.value = values.sortByName;\n        if (callback) callback();\n        break;\n\n      case 'show':\n        values.showHiddenFiles = !values.showHiddenFiles;\n        appSettings.update();\n        this.value = values.showHiddenFiles;\n        if (callback) callback();\n        break;\n    }\n  }\n\n  page.appendChild(settingsList);\n  document.body.append(page);\n}\n\n//# sourceURL=webpack:///./src/pages/settings/filesSettings.js?");

/***/ })

}]);