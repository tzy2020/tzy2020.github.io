(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '/lCS': function(e, t, n) {
      var r = n('gFfm'),
        o = n('jbM+'),
        i = 1,
        a = 2,
        c = 8,
        u = 16,
        l = 32,
        s = 64,
        p = 128,
        f = 256,
        d = 512,
        h = [
          ['ary', p],
          ['bind', i],
          ['bindKey', a],
          ['curry', c],
          ['curryRight', u],
          ['flip', d],
          ['partial', l],
          ['partialRight', s],
          ['rearg', f],
        ];
      function v(e, t) {
        return (
          r(h, function(n) {
            var r = '_.' + n[0];
            t & n[1] && !o(e, r) && e.push(r);
          }),
          e.sort()
        );
      }
      e.exports = v;
    },
    '03Xq': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('HjPC');
      function o(e, t) {
        return r.copyMetadata(e.bind(t), e);
      }
      t.bind = o;
    },
    '0ADi': function(e, t, n) {
      var r = n('heNW'),
        o = n('EldB'),
        i = n('Kz5y'),
        a = 1;
      function c(e, t, n, c) {
        var u = t & a,
          l = o(e);
        function s() {
          var t = -1,
            o = arguments.length,
            a = -1,
            p = c.length,
            f = Array(p + o),
            d = this && this !== i && this instanceof s ? l : e;
          while (++a < p) f[a] = c[a];
          while (o--) f[a++] = arguments[++t];
          return r(d, u ? n : this, f);
        }
        return s;
      }
      e.exports = c;
    },
    '0K4g': function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        r(n('FPDy')),
        r(n('rxvY')),
        r(n('p+yQ')),
        r(n('H1Sb')),
        r(n('CR2C')),
        r(n('2noj')),
        r(n('QbMR')),
        r(n('2u/M')),
        r(n('8DnU')),
        r(n('VQrf')),
        r(n('TsgZ'));
    },
    '0XgM': function(e, t, n) {
      e.exports = {
        'ant-layout': 'ant-layout',
        'ant-layout-has-sider': 'ant-layout-has-sider',
        'ant-layout-content': 'ant-layout-content',
        'ant-layout-footer': 'ant-layout-footer',
        'ant-layout-header': 'ant-layout-header',
        'ant-layout-sider': 'ant-layout-sider',
        'ant-layout-sider-children': 'ant-layout-sider-children',
        'ant-layout-sider-has-trigger': 'ant-layout-sider-has-trigger',
        'ant-layout-sider-right': 'ant-layout-sider-right',
        'ant-layout-sider-trigger': 'ant-layout-sider-trigger',
        'ant-layout-sider-zero-width': 'ant-layout-sider-zero-width',
        'ant-layout-sider-zero-width-trigger': 'ant-layout-sider-zero-width-trigger',
        'ant-layout-sider-zero-width-trigger-right': 'ant-layout-sider-zero-width-trigger-right',
        'ant-layout-sider-light': 'ant-layout-sider-light',
      };
    },
    '1uty': function(e, t, n) {
      'use strict';
      var r = '_erd';
      function o(e) {
        return (e[r] = {}), i(e);
      }
      function i(e) {
        return e[r];
      }
      function a(e) {
        delete e[r];
      }
      e.exports = { initState: o, getState: i, cleanState: a };
    },
    '2ajD': function(e, t) {
      function n(e) {
        return e !== e;
      }
      e.exports = n;
    },
    '2lMS': function(e, t) {
      var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
      function r(e, t) {
        var r = t.length;
        if (!r) return e;
        var o = r - 1;
        return (
          (t[o] = (r > 1 ? '& ' : '') + t[o]),
          (t = t.join(r > 2 ? ', ' : ' ')),
          e.replace(n, '{\n/* [wrapped with ' + t + '] */\n')
        );
      }
      e.exports = r;
    },
    '2noj': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.config,
                n = t.execute,
                r = (t.bound, e.args),
                o = e.value;
              return n.apply(void 0, r.concat([o]));
            }),
            t
          );
        })(o.Applicator);
      t.PostValueApplicator = i;
    },
    '2u/M': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = n('7ntv'),
        a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.args,
                n = e.config.execute,
                r = e.target,
                o = e.value;
              return function() {
                for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a];
                return n(i.resolveFunction(t[0], this, r), o).apply(this, e);
              };
            }),
            t
          );
        })(o.Applicator);
      t.WrapApplicator = a;
    },
    '4qC0': function(e, t, n) {
      var r = n('NykK'),
        o = n('Z0cm'),
        i = n('ExA7'),
        a = '[object String]';
      function c(e) {
        return 'string' == typeof e || (!o(e) && i(e) && r(e) == a);
      }
      e.exports = c;
    },
    '5sOR': function(e, t, n) {
      var r = n('N4mw'),
        o = n('99Ms'),
        i = n('T8tx'),
        a = 1,
        c = 2,
        u = 4,
        l = 8,
        s = 32,
        p = 64;
      function f(e, t, n, f, d, h, v, y, m, g) {
        var b = t & l,
          w = b ? v : void 0,
          x = b ? void 0 : v,
          _ = b ? h : void 0,
          E = b ? void 0 : h;
        (t |= b ? s : p), (t &= ~(b ? p : s)), t & u || (t &= ~(a | c));
        var O = [e, t, d, _, w, E, x, y, m, g],
          M = n.apply(void 0, O);
        return r(e) && o(M, O), (M.placeholder = f), i(M, e, t);
      }
      e.exports = f;
    },
    '6KkN': function(e, t) {
      var n = '__lodash_placeholder__';
      function r(e, t) {
        var r = -1,
          o = e.length,
          i = 0,
          a = [];
        while (++r < o) {
          var c = e[r];
          (c !== t && c !== n) || ((e[r] = n), (a[i++] = r));
        }
        return a;
      }
      e.exports = r;
    },
    '6T1N': function(e, t, n) {
      var r = n('s0N+'),
        o = n('ieoY'),
        i = n('Rw8+'),
        a = n('a1zH'),
        c = n('0ADi'),
        u = n('KF6i'),
        l = n('q3TU'),
        s = n('99Ms'),
        p = n('T8tx'),
        f = n('Sxd8'),
        d = 'Expected a function',
        h = 1,
        v = 2,
        y = 8,
        m = 16,
        g = 32,
        b = 64,
        w = Math.max;
      function x(e, t, n, x, _, E, O, M) {
        var P = t & v;
        if (!P && 'function' != typeof e) throw new TypeError(d);
        var S = x ? x.length : 0;
        if (
          (S || ((t &= ~(g | b)), (x = _ = void 0)),
          (O = void 0 === O ? O : w(f(O), 0)),
          (M = void 0 === M ? M : f(M)),
          (S -= _ ? _.length : 0),
          t & b)
        ) {
          var C = x,
            j = _;
          x = _ = void 0;
        }
        var k = P ? void 0 : u(e),
          D = [e, t, n, x, _, C, j, E, O, M];
        if (
          (k && l(D, k),
          (e = D[0]),
          (t = D[1]),
          (n = D[2]),
          (x = D[3]),
          (_ = D[4]),
          (M = D[9] = void 0 === D[9] ? (P ? 0 : e.length) : w(D[9] - S, 0)),
          !M && t & (y | m) && (t &= ~(y | m)),
          t && t != h)
        )
          A =
            t == y || t == m
              ? i(e, t, M)
              : (t != g && t != (h | g)) || _.length
              ? a.apply(void 0, D)
              : c(e, t, n, x);
        else var A = o(e, t, n);
        var N = k ? r : s;
        return p(N(A, D), e, t);
      }
      e.exports = x;
    },
    '6ae/': function(e, t, n) {
      var r = n('dTAl'),
        o = n('RrRF');
      function i(e, t) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__chain__ = !!t),
          (this.__index__ = 0),
          (this.__values__ = void 0);
      }
      (i.prototype = r(o.prototype)), (i.prototype.constructor = i), (e.exports = i);
    },
    '7ntv': function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        r(n('YpoK')),
        r(n('c79t')),
        r(n('7ox1')),
        r(n('qaXn')),
        r(n('HjPC')),
        r(n('03Xq')),
        r(n('hJCm')),
        r(n('d8Ut')),
        r(n('IJZn')),
        r(n('hoVY'));
    },
    '7ox1': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('TP7S'),
        o = (function() {
          function e() {
            this._weakMap = new WeakMap();
          }
          return (
            (e.prototype.set = function(e, t) {
              for (var n = this._weakMap, r = 0, o = e.length - 1; r < o; r++) {
                var i = e[r],
                  a = n.get(i);
                a || ((a = new Map()), n.set(i, a)), (n = a);
              }
              n.set(e[e.length - 1], t);
            }),
            (e.prototype.get = function(e) {
              for (var t = this._weakMap, n = 0, o = e.length; n < o; n++)
                if (((t = t.get(e[n])), r(t))) break;
              return t;
            }),
            (e.prototype.has = function(e) {
              return !r(this.get(e));
            }),
            e
          );
        })();
      t.CompositeKeyWeakMap = o;
    },
    '7sSR': function(e, t, n) {
      'use strict';
      var r = n('t3DW').forEach,
        o = n('W+U1'),
        i = n('Sa1T'),
        a = n('LO96'),
        c = n('UFhH'),
        u = n('q7TX'),
        l = n('GOnX'),
        s = n('wnTG'),
        p = n('1uty'),
        f = n('GNKm'),
        d = n('yUZ2');
      function h(e) {
        return Array.isArray(e) || void 0 !== e.length;
      }
      function v(e) {
        if (Array.isArray(e)) return e;
        var t = [];
        return (
          r(e, function(e) {
            t.push(e);
          }),
          t
        );
      }
      function y(e) {
        return e && 1 === e.nodeType;
      }
      function m(e, t, n) {
        var r = e[t];
        return (void 0 !== r && null !== r) || void 0 === n ? r : n;
      }
      e.exports = function(e) {
        var t;
        if (((e = e || {}), e.idHandler))
          t = {
            get: function(t) {
              return e.idHandler.get(t, !0);
            },
            set: e.idHandler.set,
          };
        else {
          var n = a(),
            g = c({ idGenerator: n, stateHandler: p });
          t = g;
        }
        var b = e.reporter;
        if (!b) {
          var w = !1 === b;
          b = u(w);
        }
        var x = m(e, 'batchProcessor', s({ reporter: b })),
          _ = {};
        (_.callOnAdd = !!m(e, 'callOnAdd', !0)), (_.debug = !!m(e, 'debug', !1));
        var E,
          O = i(t),
          M = o({ stateHandler: p }),
          P = m(e, 'strategy', 'object'),
          S = { reporter: b, batchProcessor: x, stateHandler: p, idHandler: t };
        if (
          ('scroll' === P &&
            (l.isLegacyOpera()
              ? (b.warn(
                  'Scroll strategy is not supported on legacy Opera. Changing to object strategy.'
                ),
                (P = 'object'))
              : l.isIE(9) &&
                (b.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'),
                (P = 'object'))),
          'scroll' === P)
        )
          E = d(S);
        else {
          if ('object' !== P) throw new Error('Invalid strategy name: ' + P);
          E = f(S);
        }
        var C = {};
        function j(e, n, o) {
          function i(e) {
            var t = O.get(e);
            r(t, function(t) {
              t(e);
            });
          }
          function a(e, t, n) {
            O.add(t, n), e && n(t);
          }
          if ((o || ((o = n), (n = e), (e = {})), !n))
            throw new Error('At least one element required.');
          if (!o) throw new Error('Listener required.');
          if (y(n)) n = [n];
          else {
            if (!h(n))
              return b.error(
                'Invalid arguments. Must be a DOM element or a collection of DOM elements.'
              );
            n = v(n);
          }
          var c = 0,
            u = m(e, 'callOnAdd', _.callOnAdd),
            l = m(e, 'onReady', function() {}),
            s = m(e, 'debug', _.debug);
          r(n, function(e) {
            p.getState(e) || (p.initState(e), t.set(e));
            var f = t.get(e);
            if ((s && b.log('Attaching listener to element', f, e), !M.isDetectable(e)))
              return (
                s && b.log(f, 'Not detectable.'),
                M.isBusy(e)
                  ? (s && b.log(f, 'System busy making it detectable'),
                    a(u, e, o),
                    (C[f] = C[f] || []),
                    void C[f].push(function() {
                      c++, c === n.length && l();
                    }))
                  : (s && b.log(f, 'Making detectable...'),
                    M.markBusy(e, !0),
                    E.makeDetectable({ debug: s }, e, function(e) {
                      if ((s && b.log(f, 'onElementDetectable'), p.getState(e))) {
                        M.markAsDetectable(e), M.markBusy(e, !1), E.addListener(e, i), a(u, e, o);
                        var t = p.getState(e);
                        if (t && t.startSize) {
                          var d = e.offsetWidth,
                            h = e.offsetHeight;
                          (t.startSize.width === d && t.startSize.height === h) || i(e);
                        }
                        C[f] &&
                          r(C[f], function(e) {
                            e();
                          });
                      } else s && b.log(f, 'Element uninstalled before being detectable.');
                      delete C[f], c++, c === n.length && l();
                    }))
              );
            s && b.log(f, 'Already detecable, adding listener.'), a(u, e, o), c++;
          }),
            c === n.length && l();
        }
        function k(e) {
          if (!e) return b.error('At least one element is required.');
          if (y(e)) e = [e];
          else {
            if (!h(e))
              return b.error(
                'Invalid arguments. Must be a DOM element or a collection of DOM elements.'
              );
            e = v(e);
          }
          r(e, function(e) {
            O.removeAllListeners(e), E.uninstall(e), p.cleanState(e);
          });
        }
        return {
          listenTo: j,
          removeListener: O.removeListener,
          removeAllListeners: O.removeAllListeners,
          uninstall: k,
        };
      };
    },
    '8DnU': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.value,
                n = e.config.execute,
                r = e.args,
                o = e.instance;
              e.target;
              return o ? n.apply(void 0, [t, o].concat(r)) : t;
            }),
            t
          );
        })(o.Applicator);
      t.BindApplicator = i;
    },
    '99Ms': function(e, t, n) {
      var r = n('s0N+'),
        o = n('88Gu'),
        i = o(r);
      e.exports = i;
    },
    Ag8Z: function(e, t, n) {
      var r = n('JC6p'),
        o = n('EwQA');
      function i(e, t) {
        return e && r(e, o(t));
      }
      e.exports = i;
    },
    BJfS: function(e, t) {
      var n = function(e) {
        return e
          .replace(/[A-Z]/g, function(e) {
            return '-' + e.toLowerCase();
          })
          .toLowerCase();
      };
      e.exports = n;
    },
    CR2C: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('lSCD'),
        i = n('FPDy'),
        a = n('7ntv'),
        c = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.args,
                n = e.target,
                r = e.value,
                i = e.config.execute;
              return function() {
                for (var e = [], c = 0; c < arguments.length; c++) e[c] = arguments[c];
                var u = r,
                  l = 0;
                return (
                  o(u) || ((u = a.resolveFunction(t[0], this, n)), (l = 1)),
                  i.apply(void 0, [u].concat(t.slice(l))).apply(this, e)
                );
              };
            }),
            t
          );
        })(i.Applicator);
      t.PartialValueApplicator = c;
    },
    CZoQ: function(e, t) {
      function n(e, t, n) {
        var r = n - 1,
          o = e.length;
        while (++r < o) if (e[r] === t) return r;
        return -1;
      }
      e.exports = n;
    },
    E6Dt: function(e, t, n) {
      'use strict';
      var r =
          (this && this.__extends) ||
          (function() {
            var e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              };
            return function(t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
            };
          })(),
        o =
          (this && this.__assign) ||
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in ((t = arguments[n]), t))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n('q1tI'),
        a = n('i8i4'),
        c = n('G0cP'),
        u = n('c1Md'),
        l = n('rjxA'),
        s = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.cqCore = null),
              (n.state = { params: t.initialSize ? c.default(t.query)(t.initialSize) : {} }),
              n
            );
          }
          return (
            r(t, e),
            (t.prototype.componentDidMount = function() {
              this._startObserving(this.props.query);
            }),
            (t.prototype.componentWillReceiveProps = function(e) {
              this.cqCore &&
                !d(this.props.query, e.query) &&
                (this.cqCore.disconnect(), (this.cqCore = null), this._startObserving(e.query));
            }),
            (t.prototype.componentDidUpdate = function() {
              this.cqCore.observe(a.findDOMNode(this));
            }),
            (t.prototype.componentWillUnmount = function() {
              this.cqCore.disconnect(), (this.cqCore = null);
            }),
            (t.prototype.render = function() {
              return this.props.children(this.state.params);
            }),
            (t.prototype._startObserving = function(e) {
              var t = this;
              (this.cqCore = new u.default(e, function(e) {
                t.setState({ params: e });
              })),
                this.cqCore.observe(a.findDOMNode(this));
            }),
            t
          );
        })(i.Component);
      function p(e, t, n) {
        return (
          (l = (function(l) {
            function s(e) {
              var r = l.call(this, e) || this;
              return (r.cqCore = null), (r.state = { params: n ? c.default(t)(n) : {} }), r;
            }
            return (
              r(s, l),
              (s.prototype.componentDidMount = function() {
                var e = this;
                (this.cqCore = new u.default(t, function(t) {
                  e.setState({ params: t });
                })),
                  this.cqCore.observe(a.findDOMNode(this));
              }),
              (s.prototype.componentDidUpdate = function() {
                this.cqCore.observe(a.findDOMNode(this));
              }),
              (s.prototype.componentWillUnmount = function() {
                this.cqCore.disconnect(), (this.cqCore = null);
              }),
              (s.prototype.render = function() {
                return i.createElement(e, o({}, this.props, { containerQuery: this.state.params }));
              }),
              s
            );
          })(i.Component)),
          (l.displayName = e.displayName
            ? 'ContainerQuery(' + e.displayName + ')'
            : 'ContainerQuery'),
          l
        );
        var l;
      }
      (t.ContainerQuery = s), (t.applyContainerQuery = p);
      var f = Object.prototype.hasOwnProperty;
      function d(e, t) {
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = 0; o < n.length; o++)
          if (!f.call(t, n[o]) || !l.default(e[n[o]], t[n[o]])) return !1;
        return !0;
      }
    },
    ERuW: function(e, t, n) {
      var r = n('JbSc'),
        o = Object.prototype,
        i = o.hasOwnProperty;
      function a(e) {
        var t = e.name + '',
          n = r[t],
          o = i.call(r, t) ? n.length : 0;
        while (o--) {
          var a = n[o],
            c = a.func;
          if (null == c || c == e) return a.name;
        }
        return t;
      }
      e.exports = a;
    },
    EldB: function(e, t, n) {
      var r = n('dTAl'),
        o = n('GoyQ');
      function i(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = r(e.prototype),
            i = e.apply(n, t);
          return o(i) ? i : n;
        };
      }
      e.exports = i;
    },
    EwQA: function(e, t, n) {
      var r = n('zZ0H');
      function o(e) {
        return 'function' == typeof e ? e : r;
      }
      e.exports = o;
    },
    FPDy: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e() {}
        return e;
      })();
      t.Applicator = r;
    },
    G0cP: function(e, t, n) {
      'use strict';
      function r(e) {
        for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
          var o = r[n],
            i = e[o];
          t.push({
            minWidth: null != i.minWidth ? i.minWidth : 0,
            maxWidth: null != i.maxWidth ? i.maxWidth : 1 / 0,
            minHeight: null != i.minHeight ? i.minHeight : 0,
            maxHeight: null != i.maxHeight ? i.maxHeight : 1 / 0,
            className: o,
          });
        }
        return function(e) {
          for (var n = e.height, r = e.width, o = {}, i = 0, a = t; i < a.length; i++) {
            var c = a[i],
              u = c.className,
              l = c.minWidth,
              s = c.maxWidth,
              p = c.minHeight,
              f = c.maxHeight;
            o[u] =
              null != n && null != r
                ? l <= r && r <= s && p <= n && n <= f
                : null == n && null != r
                ? l <= r && r <= s
                : null == n || null != r || (p <= n && n <= f);
          }
          return o;
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
    },
    GNKm: function(e, t, n) {
      'use strict';
      var r = n('GOnX');
      e.exports = function(e) {
        e = e || {};
        var t = e.reporter,
          n = e.batchProcessor,
          o = e.stateHandler.getState;
        if (!t) throw new Error('Missing required dependency: reporter.');
        function i(e, t) {
          if (!c(e)) throw new Error('Element is not detectable by this strategy.');
          function n() {
            t(e);
          }
          if (r.isIE(8)) (o(e).object = { proxy: n }), e.attachEvent('onresize', n);
          else {
            var i = c(e);
            i.contentDocument.defaultView.addEventListener('resize', n);
          }
        }
        function a(e, i, a) {
          a || ((a = i), (i = e), (e = null)), (e = e || {});
          e.debug;
          function c(e, i) {
            var a =
                'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;',
              c = !1,
              u = window.getComputedStyle(e),
              l = e.offsetWidth,
              s = e.offsetHeight;
            function p() {
              function n() {
                if ('static' === u.position) {
                  e.style.position = 'relative';
                  var n = function(e, t, n, r) {
                    function o(e) {
                      return e.replace(/[^-\d\.]/g, '');
                    }
                    var i = n[r];
                    'auto' !== i &&
                      '0' !== o(i) &&
                      (e.warn(
                        'An element that is positioned static has style.' +
                          r +
                          '=' +
                          i +
                          ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                          r +
                          ' will be set to 0. Element: ',
                        t
                      ),
                      (t.style[r] = 0));
                  };
                  n(t, e, u, 'top'), n(t, e, u, 'right'), n(t, e, u, 'bottom'), n(t, e, u, 'left');
                }
              }
              function l() {
                function t(e, n) {
                  e.contentDocument
                    ? n(e.contentDocument)
                    : setTimeout(function() {
                        t(e, n);
                      }, 100);
                }
                c || n();
                var r = this;
                t(r, function(t) {
                  i(e);
                });
              }
              '' !== u.position && (n(u), (c = !0));
              var s = document.createElement('object');
              (s.style.cssText = a),
                (s.tabIndex = -1),
                (s.type = 'text/html'),
                (s.onload = l),
                r.isIE() || (s.data = 'about:blank'),
                e.appendChild(s),
                (o(e).object = s),
                r.isIE() && (s.data = 'about:blank');
            }
            (o(e).startSize = { width: l, height: s }), n ? n.add(p) : p();
          }
          r.isIE(8) ? a(i) : c(i, a);
        }
        function c(e) {
          return o(e).object;
        }
        function u(e) {
          r.isIE(8) ? e.detachEvent('onresize', o(e).object.proxy) : e.removeChild(c(e)),
            delete o(e).object;
        }
        return { makeDetectable: a, addListener: i, uninstall: u };
      };
    },
    GOnX: function(e, t, n) {
      'use strict';
      var r = (e.exports = {});
      (r.isIE = function(e) {
        function t() {
          var e = navigator.userAgent.toLowerCase();
          return (
            -1 !== e.indexOf('msie') || -1 !== e.indexOf('trident') || -1 !== e.indexOf(' edge/')
          );
        }
        if (!t()) return !1;
        if (!e) return !0;
        var n = (function() {
          var e,
            t = 3,
            n = document.createElement('div'),
            r = n.getElementsByTagName('i');
          do {
            n.innerHTML = '\x3c!--[if gt IE ' + ++t + ']><i></i><![endif]--\x3e';
          } while (r[0]);
          return t > 4 ? t : e;
        })();
        return e === n;
      }),
        (r.isLegacyOpera = function() {
          return !!window.opera;
        });
    },
    H1Sb: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('sKJ/'),
        i = n('FPDy'),
        a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.config.execute,
                n = e.value,
                r = e.args;
              return o.apply(void 0, [t, n].concat(r));
            }),
            t
          );
        })(i.Applicator);
      t.PartialedApplicator = a;
    },
    HjPC: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('Ag8Z');
      function o(e, t) {
        return (
          r(t, function(t, n) {
            return (e[n] = t);
          }),
          e
        );
      }
      t.copyMetadata = o;
    },
    IGtV: function(e, t, n) {
      e.exports = { fixedHeader: 'antd-pro-layouts-header-fixedHeader' };
    },
    IJZn: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('GoyQ'),
        o = n('lSCD'),
        i = n('4qC0');
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (
          e.length >= 2 &&
          r(e[0]) &&
          i(e[1]) &&
          o(e[0].constructor) &&
          e[0].constructor.prototype === e[0]
        );
      }
      t.isMethodOrPropertyDecoratorArgs = a;
    },
    JC6p: function(e, t, n) {
      var r = n('cq/+'),
        o = n('7GkX');
      function i(e, t) {
        return e && r(e, t, o);
      }
      e.exports = i;
    },
    JbSc: function(e, t) {
      var n = {};
      e.exports = n;
    },
    JwhZ: function(e, t, n) {
      e.exports = {
        head: 'antd-pro-components-top-nav-header-index-head',
        light: 'antd-pro-components-top-nav-header-index-light',
        main: 'antd-pro-components-top-nav-header-index-main',
        wide: 'antd-pro-components-top-nav-header-index-wide',
        left: 'antd-pro-components-top-nav-header-index-left',
        right: 'antd-pro-components-top-nav-header-index-right',
        logo: 'antd-pro-components-top-nav-header-index-logo',
        menu: 'antd-pro-components-top-nav-header-index-menu',
      };
    },
    KF6i: function(e, t, n) {
      var r = n('a5q3'),
        o = n('vN+2'),
        i = r
          ? function(e) {
              return r.get(e);
            }
          : o;
      e.exports = i;
    },
    'Kfv+': function(e, t, n) {
      var r = n('Yoag'),
        o = n('6ae/'),
        i = n('RrRF'),
        a = n('Z0cm'),
        c = n('ExA7'),
        u = n('xFI3'),
        l = Object.prototype,
        s = l.hasOwnProperty;
      function p(e) {
        if (c(e) && !a(e) && !(e instanceof r)) {
          if (e instanceof o) return e;
          if (s.call(e, '__wrapped__')) return u(e);
        }
        return new o(e);
      }
      (p.prototype = i.prototype), (p.prototype.constructor = p), (e.exports = p);
    },
    KwMD: function(e, t) {
      function n(e, t, n, r) {
        var o = e.length,
          i = n + (r ? 1 : -1);
        while (r ? i-- : ++i < o) if (t(e[i], i, e)) return i;
        return -1;
      }
      e.exports = n;
    },
    LO96: function(e, t, n) {
      'use strict';
      e.exports = function() {
        var e = 1;
        function t() {
          return e++;
        }
        return { generate: t };
      };
    },
    LqpT: function(e, t, n) {
      var r = n('1hJj'),
        o = n('jbM+'),
        i = n('Xt/L'),
        a = n('eUgh'),
        c = n('sEf8'),
        u = n('xYSL'),
        l = 200;
      function s(e, t, n, s) {
        var p = -1,
          f = o,
          d = !0,
          h = e.length,
          v = [],
          y = t.length;
        if (!h) return v;
        n && (t = a(t, c(n))),
          s ? ((f = i), (d = !1)) : t.length >= l && ((f = u), (d = !1), (t = new r(t)));
        e: while (++p < h) {
          var m = e[p],
            g = null == n ? m : n(m);
          if (((m = s || 0 !== m ? m : 0), d && g === g)) {
            var b = y;
            while (b--) if (t[b] === g) continue e;
            v.push(m);
          } else f(t, g, s) || v.push(m);
        }
        return v;
      }
      e.exports = s;
    },
    MMiu: function(e, t) {
      var n = Math.max;
      function r(e, t, r, o) {
        var i = -1,
          a = e.length,
          c = -1,
          u = r.length,
          l = -1,
          s = t.length,
          p = n(a - u, 0),
          f = Array(p + s),
          d = !o;
        while (++i < p) f[i] = e[i];
        var h = i;
        while (++l < s) f[h + l] = t[l];
        while (++c < u) (d || i < a) && (f[h + r[c]] = e[i++]);
        return f;
      }
      e.exports = r;
    },
    N4mw: function(e, t, n) {
      var r = n('Yoag'),
        o = n('KF6i'),
        i = n('ERuW'),
        a = n('Kfv+');
      function c(e) {
        var t = i(e),
          n = a[t];
        if ('function' != typeof n || !(t in r.prototype)) return !1;
        if (e === n) return !0;
        var c = o(n);
        return !!c && e === c[0];
      }
      e.exports = c;
    },
    PhzP: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('lSCD'),
        o = n('c0qT'),
        i = n('7ntv'),
        a = (function() {
          function e() {}
          return (
            (e.prototype.createDecorator = function(e) {
              var t = this,
                n = e.applicator,
                a = e.optionalParams;
              return function() {
                for (var c = [], u = 0; u < arguments.length; u++) c[u] = arguments[u];
                var l = c,
                  s = function(a, c, u) {
                    var s = t._resolveDescriptor(a, c, u),
                      p = s.value,
                      f = s.get,
                      d = s.set;
                    return (
                      o.InstanceChainMap.has([a, c]) ||
                        (r(p)
                          ? (s.value = i.copyMetadata(
                              n.apply({ config: e, target: a, value: p, args: l }),
                              p
                            ))
                          : r(f) && e.getter
                          ? (s.get = i.copyMetadata(
                              n.apply({ config: e, target: a, value: f, args: l }),
                              f
                            ))
                          : r(d) &&
                            e.setter &&
                            (s.set = i.copyMetadata(
                              n.apply({ config: e, target: a, value: d, args: l }),
                              d
                            ))),
                      s
                    );
                  };
                return a && i.isMethodOrPropertyDecoratorArgs.apply(void 0, c)
                  ? ((l = []), s(c[0], c[1], c[2]))
                  : s;
              };
            }),
            (e.prototype.createInstanceDecorator = function(e) {
              var t = this,
                n = e.applicator,
                a = e.bound,
                c = e.optionalParams;
              return function() {
                for (var u = [], l = 0; l < arguments.length; l++) u[l] = arguments[l];
                var s = u,
                  p = function(c, u, l) {
                    var p = t._resolveDescriptor(c, u, l),
                      f = p.value,
                      d = p.writable,
                      h = p.enumerable,
                      v = p.configurable,
                      y = p.get,
                      m = p.set,
                      g = !o.InstanceChainMap.has([c, u]),
                      b = o.InstanceChainMap.get([c, u]) || { fns: [], properties: [] },
                      w = g && r(y),
                      x = g && r(m),
                      _ = g && r(f),
                      E = g && !w && !x && !_,
                      O = w ? y : _ ? f : void 0;
                    if (
                      (b.properties.push(u),
                      b.fns.push(function(r, o, u) {
                        return t._isApplicable(u, e)
                          ? (a && (r = i.bind(r, o)),
                            i.copyMetadata(
                              n.apply({ args: s, target: c, instance: o, value: r, config: e }),
                              r
                            ))
                          : r;
                      }),
                      o.InstanceChainMap.set([c, u], b),
                      !g)
                    )
                      return p;
                    (b.isSetter = x), (b.isGetter = w), (b.isMethod = _), (b.isProperty = E);
                    var M = function(e, t, n) {
                        return b.fns.reduce(function(e, r) {
                          return r(e, n, t);
                        }, e);
                      },
                      P = function(e) {
                        var t = y || void 0,
                          n = m || void 0;
                        if (w || x)
                          w && (t = M(y, { value: y, getter: !0 }, e)),
                            x && (n = M(m, { value: m, setter: !0 }, e)),
                            Object.defineProperty(e, u, {
                              enumerable: h,
                              configurable: v,
                              get: t,
                              set: n,
                            });
                        else if (_ || E) {
                          var r = M(
                            f,
                            _ ? { value: f, method: !0 } : { value: f, property: !0 },
                            e
                          );
                          Object.defineProperty(e, u, {
                            writable: d,
                            enumerable: h,
                            configurable: v,
                            value: r,
                          });
                        }
                      };
                    return (
                      (_ || E) && (delete p.value, delete p.writable),
                      (p.get = function() {
                        if (i.isPrototypeAccess(this, c)) return O;
                        P(this);
                        var e = Object.getOwnPropertyDescriptor(this, u);
                        return e.get ? e.get.call(this) : e.value;
                      }),
                      (p.set = function(e) {
                        P(this);
                        var t = Object.getOwnPropertyDescriptor(this, u);
                        t.set ? t.set.call(this, e) : (E || _) && (this[u] = e);
                      }),
                      p
                    );
                  };
                return c && i.isMethodOrPropertyDecoratorArgs.apply(void 0, u)
                  ? ((s = []), p(u[0], u[1], u[2]))
                  : p;
              };
            }),
            (e.prototype._isApplicable = function(e, t) {
              return !Boolean(
                (e.getter && !t.getter) ||
                  (e.setter && !t.setter) ||
                  (e.method && !t.method) ||
                  (e.property && !t.property)
              );
            }),
            (e.prototype._resolveDescriptor = function(e, t, n) {
              return n || (Object.getOwnPropertyDescriptor(e, t) || {});
            }),
            e
          );
        })();
      (t.InternalDecoratorFactory = a), (t.DecoratorFactory = new a());
    },
    PtqM: function(e, t, n) {
      var r = n('NykK'),
        o = n('ExA7'),
        i = n('YO3V'),
        a = '[object DOMException]',
        c = '[object Error]';
      function u(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return (
          t == c || t == a || ('string' == typeof e.message && 'string' == typeof e.name && !i(e))
        );
      }
      e.exports = u;
    },
    QbMR: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.value,
                n = e.config.execute,
                r = e.args;
              return n.apply(void 0, [t].concat(r));
            }),
            t
          );
        })(o.Applicator);
      t.PreValueApplicator = i;
    },
    QyDn: function(e, t, n) {
      e.exports = { container: 'antd-pro-components-header-dropdown-index-container' };
    },
    'R/W3': function(e, t, n) {
      var r = n('KwMD'),
        o = n('2ajD'),
        i = n('CZoQ');
      function a(e, t, n) {
        return t === t ? i(e, t, n) : r(e, o, n);
      }
      e.exports = a;
    },
    RrRF: function(e, t) {
      function n() {}
      e.exports = n;
    },
    'Rw8+': function(e, t, n) {
      var r = n('heNW'),
        o = n('EldB'),
        i = n('a1zH'),
        a = n('5sOR'),
        c = n('V9aw'),
        u = n('6KkN'),
        l = n('Kz5y');
      function s(e, t, n) {
        var s = o(e);
        function p() {
          var o = arguments.length,
            f = Array(o),
            d = o,
            h = c(p);
          while (d--) f[d] = arguments[d];
          var v = o < 3 && f[0] !== h && f[o - 1] !== h ? [] : u(f, h);
          if (((o -= v.length), o < n))
            return a(e, t, i, p.placeholder, void 0, f, v, void 0, void 0, n - o);
          var y = this && this !== l && this instanceof p ? s : e;
          return r(y, this, f);
        }
        return p;
      }
      e.exports = s;
    },
    SQvw: function(e, t) {
      function n(e, t, n, r, o) {
        var i = {};
        return (
          Object.keys(r).forEach(function(e) {
            i[e] = r[e];
          }),
          (i.enumerable = !!i.enumerable),
          (i.configurable = !!i.configurable),
          ('value' in i || i.initializer) && (i.writable = !0),
          (i = n
            .slice()
            .reverse()
            .reduce(function(n, r) {
              return r(e, t, n) || n;
            }, i)),
          o &&
            void 0 !== i.initializer &&
            ((i.value = i.initializer ? i.initializer.call(o) : void 0), (i.initializer = void 0)),
          void 0 === i.initializer && (Object.defineProperty(e, t, i), (i = null)),
          i
        );
      }
      e.exports = n;
    },
    Sa1T: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = {};
        function n(n) {
          var r = e.get(n);
          return void 0 === r ? [] : t[r] || [];
        }
        function r(n, r) {
          var o = e.get(n);
          t[o] || (t[o] = []), t[o].push(r);
        }
        function o(e, t) {
          for (var r = n(e), o = 0, i = r.length; o < i; ++o)
            if (r[o] === t) {
              r.splice(o, 1);
              break;
            }
        }
        function i(e) {
          var t = n(e);
          t && (t.length = 0);
        }
        return { get: n, add: r, removeListener: o, removeAllListeners: i };
      };
    },
    Sxd8: function(e, t, n) {
      var r = n('ZCgT');
      function o(e) {
        var t = r(e),
          n = t % 1;
        return t === t ? (n ? t - n : t) : 0;
      }
      e.exports = o;
    },
    T8tx: function(e, t, n) {
      var r = n('ulEd'),
        o = n('2lMS'),
        i = n('wclG'),
        a = n('/lCS');
      function c(e, t, n) {
        var c = t + '';
        return i(e, o(c, a(r(c), n)));
      }
      e.exports = c;
    },
    TP7S: function(e, t) {
      function n(e) {
        return void 0 === e;
      }
      e.exports = n;
    },
    TsgZ: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('lSCD'),
        i = n('GoyQ'),
        a = n('FPDy'),
        c = n('7ntv'),
        u = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.value,
                n = e.instance,
                r = e.config.execute,
                a = e.args,
                u = e.target,
                l = c.resolveFunction(o(a[0]) ? a[0] : i(a[0]) ? a[0].resolver : a[0], n, u, !1);
              l && n && (l = l.bind(n));
              var s = l ? r(t, l) : r(t);
              if (i(a[0])) {
                var p = a[0],
                  f = p.cache,
                  d = p.type;
                f ? (s.cache = f) : o(d) && (s.cache = new d());
              }
              return s;
            }),
            t
          );
        })(a.Applicator);
      t.MemoizeApplicator = u;
    },
    UFhH: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = e.idGenerator,
          n = e.stateHandler.getState;
        function r(e) {
          var t = n(e);
          return t && void 0 !== t.id ? t.id : null;
        }
        function o(e) {
          var r = n(e);
          if (!r) throw new Error('setId required the element to have a resize detection state.');
          var o = t.generate();
          return (r.id = o), o;
        }
        return { get: r, set: o };
      };
    },
    UL9e: function(e, t, n) {
      'use strict';
      var r = (e.exports = {});
      function o(e, t, n) {
        var r = e[t];
        return (void 0 !== r && null !== r) || void 0 === n ? r : n;
      }
      r.getOption = o;
    },
    V9aw: function(e, t) {
      function n(e) {
        var t = e;
        return t.placeholder;
      }
      e.exports = n;
    },
    VQrf: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.args,
                n = (e.target, e.config.execute),
                r = e.value;
              return function() {
                for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                return n.apply(void 0, [r.bind(this)].concat(e, t));
              };
            }),
            t
          );
        })(o.Applicator);
      t.InvokeApplicator = i;
    },
    'W+U1': function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        var t = e.stateHandler.getState;
        function n(e) {
          var n = t(e);
          return n && !!n.isDetectable;
        }
        function r(e) {
          t(e).isDetectable = !0;
        }
        function o(e) {
          return !!t(e).busy;
        }
        function i(e, n) {
          t(e).busy = !!n;
        }
        return { isDetectable: n, markAsDetectable: r, isBusy: o, markBusy: i };
      };
    },
    W660: function(e, t, n) {
      e.exports = { content: 'antd-pro-layouts-basic-layout-content' };
    },
    Wt1U: function(e, t, n) {
      var r = n('LqpT'),
        o = n('EA7m'),
        i = n('3L66'),
        a = o(function(e, t) {
          return i(e) ? r(e, t) : [];
        });
      e.exports = a;
    },
    'Xt/L': function(e, t) {
      function n(e, t, n) {
        var r = -1,
          o = null == e ? 0 : e.length;
        while (++r < o) if (n(t, e[r])) return !0;
        return !1;
      }
      e.exports = n;
    },
    Yoag: function(e, t, n) {
      var r = n('dTAl'),
        o = n('RrRF'),
        i = 4294967295;
      function a(e) {
        (this.__wrapped__ = e),
          (this.__actions__ = []),
          (this.__dir__ = 1),
          (this.__filtered__ = !1),
          (this.__iteratees__ = []),
          (this.__takeCount__ = i),
          (this.__views__ = []);
      }
      (a.prototype = r(o.prototype)), (a.prototype.constructor = a), (e.exports = a);
    },
    YpoK: function(e, t, n) {
      'use strict';
      function r(e) {
        return void 0 === e && (e = ''), 'lodash-decorators -> ' + e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.log = r);
    },
    ZCgT: function(e, t, n) {
      var r = n('tLB3'),
        o = 1 / 0,
        i = 1.7976931348623157e308;
      function a(e) {
        if (!e) return 0 === e ? e : 0;
        if (((e = r(e)), e === o || e === -o)) {
          var t = e < 0 ? -1 : 1;
          return t * i;
        }
        return e === e ? e : 0;
      }
      e.exports = a;
    },
    a1zH: function(e, t, n) {
      var r = n('y4QH'),
        o = n('MMiu'),
        i = n('t2dP'),
        a = n('EldB'),
        c = n('5sOR'),
        u = n('V9aw'),
        l = n('pzgU'),
        s = n('6KkN'),
        p = n('Kz5y'),
        f = 1,
        d = 2,
        h = 8,
        v = 16,
        y = 128,
        m = 512;
      function g(e, t, n, b, w, x, _, E, O, M) {
        var P = t & y,
          S = t & f,
          C = t & d,
          j = t & (h | v),
          k = t & m,
          D = C ? void 0 : a(e);
        function A() {
          var f = arguments.length,
            d = Array(f),
            h = f;
          while (h--) d[h] = arguments[h];
          if (j)
            var v = u(A),
              y = i(d, v);
          if ((b && (d = r(d, b, w, j)), x && (d = o(d, x, _, j)), (f -= y), j && f < M)) {
            var m = s(d, v);
            return c(e, t, g, A.placeholder, n, d, m, E, O, M - f);
          }
          var N = S ? n : this,
            z = C ? N[e] : e;
          return (
            (f = d.length),
            E ? (d = l(d, E)) : k && f > 1 && d.reverse(),
            P && O < f && (d.length = O),
            this && this !== p && this instanceof A && (z = D || a(z)),
            z.apply(N, d)
          );
        }
        return A;
      }
      e.exports = g;
    },
    a5q3: function(e, t, n) {
      var r = n('Of+w'),
        o = r && new r();
      e.exports = o;
    },
    c0qT: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('7ntv');
      t.InstanceChainMap = new r.CompositeKeyWeakMap();
    },
    c1Md: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('owcV'),
        o = n('G0cP'),
        i = n('rjxA'),
        a = (function() {
          function e(e, t) {
            var n = this;
            (this.result = {}),
              (this.rol = new r.default(function(r) {
                var a = o.default(e)(r);
                i.default(n.result, a) || (t(a), (n.result = a));
              }));
          }
          return (
            (e.prototype.observe = function(e) {
              this.rol.observe(e);
            }),
            (e.prototype.disconnect = function() {
              this.rol.disconnect();
            }),
            e
          );
        })();
      t.default = a;
    },
    c79t: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('lSCD'),
        o = n('4qC0'),
        i = n('YpoK');
      function a(e, t, n, a) {
        if ((void 0 === a && (a = !0), r(e))) return e;
        if (o(e)) {
          if (t && r(t[e])) return t[e];
          if (n && r(n[e])) return n[e];
        }
        if (a)
          throw new ReferenceError(i.log('Can not resolve method ' + e + ' on any target Objects'));
      }
      t.resolveFunction = a;
    },
    d8Ut: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('Wt1U'),
        o = n('rapA'),
        i = n('GoyQ');
      function a(e, t, n) {
        void 0 === n && (n = []);
        for (
          var i = r.apply(void 0, [Object.getOwnPropertyNames(t)].concat(n)), a = 0, u = i;
          a < u.length;
          a++
        ) {
          var l = u[a];
          o(c, e, t, l);
        }
        return e;
      }
      function c(e, t, n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        if (!r || r.configurable) {
          var o = Object.getOwnPropertyDescriptor(t, n);
          i(o) ? Object.defineProperty(e, n, o) : (e[n] = t[n]);
        }
      }
      (t.assignAll = a), (t.assignProperty = c);
    },
    fqkP: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('sEfC'),
        o = n('vpaL'),
        i = n('0K4g'),
        a = o.DecoratorFactory.createInstanceDecorator(
          new o.DecoratorConfig(r, new i.PreValueApplicator(), { setter: !0 })
        );
      function c(e, t) {
        return a(e, t);
      }
      (t.Debounce = c), (t.debounce = c), (t.default = a);
    },
    gFfm: function(e, t) {
      function n(e, t) {
        var n = -1,
          r = null == e ? 0 : e.length;
        while (++n < r) if (!1 === t(e[n], n, e)) break;
        return e;
      }
      e.exports = n;
    },
    h3zL: function(e, t, n) {
      e.exports = {
        header: 'antd-pro-components-global-header-index-header',
        logo: 'antd-pro-components-global-header-index-logo',
        notice: 'antd-pro-components-global-header-index-notice',
        'notice-text': 'antd-pro-components-global-header-index-notice-text',
        menu: 'antd-pro-components-global-header-index-menu',
        trigger: 'antd-pro-components-global-header-index-trigger',
        right: 'antd-pro-components-global-header-index-right',
        action: 'antd-pro-components-global-header-index-action',
        search: 'antd-pro-components-global-header-index-search',
        account: 'antd-pro-components-global-header-index-account',
        avatar: 'antd-pro-components-global-header-index-avatar',
        dark: 'antd-pro-components-global-header-index-dark',
        name: 'antd-pro-components-global-header-index-name',
      };
    },
    hJCm: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('d8Ut'),
        o = ['length', 'name', 'arguments', 'called', 'prototype'];
      function i(e, t) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return t.call.apply(t, [this, e].concat(n));
        }
        return (
          (n.prototype = e.prototype),
          Object.defineProperty(n, 'name', {
            configurable: !0,
            enumerable: !1,
            value: e.name,
            writable: !1,
          }),
          r.assignAll(n, e, o)
        );
      }
      t.wrapConstructor = i;
    },
    hoVY: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return (
          e === t ||
          (e.constructor !== t.constructor &&
            Object.getPrototypeOf(this).constructor === t.constructor)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.isPrototypeAccess = r);
    },
    ieoY: function(e, t, n) {
      var r = n('EldB'),
        o = n('Kz5y'),
        i = 1;
      function a(e, t, n) {
        var a = t & i,
          c = r(e);
        function u() {
          var t = this && this !== o && this instanceof u ? c : e;
          return t.apply(a ? n : this, arguments);
        }
        return u;
      }
      e.exports = a;
    },
    ifDB: function(e, t, n) {
      e.exports = {
        'ant-avatar': 'ant-avatar',
        'ant-avatar-image': 'ant-avatar-image',
        'ant-avatar-string': 'ant-avatar-string',
        'ant-avatar-icon': 'ant-avatar-icon',
        'ant-avatar-lg': 'ant-avatar-lg',
        'ant-avatar-lg-string': 'ant-avatar-lg-string',
        'ant-avatar-sm': 'ant-avatar-sm',
        'ant-avatar-sm-string': 'ant-avatar-sm-string',
        'ant-avatar-square': 'ant-avatar-square',
      };
    },
    'jbM+': function(e, t, n) {
      var r = n('R/W3');
      function o(e, t) {
        var n = null == e ? 0 : e.length;
        return !!n && r(e, t, 0) > -1;
      }
      e.exports = o;
    },
    ktpP: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = (function() {
        function e(e, t, n) {
          void 0 === n && (n = {}), (this.execute = e), (this.applicator = t), (this.options = n);
        }
        return (
          Object.defineProperty(e.prototype, 'bound', {
            get: function() {
              return null != this.options.bound && this.options.bound;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'setter', {
            get: function() {
              return null != this.options.setter && this.options.setter;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'getter', {
            get: function() {
              return null != this.options.getter && this.options.getter;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'property', {
            get: function() {
              return null != this.options.property && this.options.property;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'method', {
            get: function() {
              return null == this.options.method || this.options.method;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'optionalParams', {
            get: function() {
              return null != this.options.optionalParams && this.options.optionalParams;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      t.DecoratorConfig = r;
    },
    m8Tn: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('p0pE'),
        o = n.n(r),
        i = n('jehZ'),
        a = n.n(i),
        c = n('2Taf'),
        u = n.n(c),
        l = n('vZ4D'),
        s = n.n(l),
        p = n('l4Ni'),
        f = n.n(p),
        d = n('ujKo'),
        h = n.n(d),
        v = n('MhPg'),
        y = n.n(v),
        m = (n('cIOH'), n('0XgM'), n('PKem')),
        g = n('ZX9x');
      m['b'].Sider = g['b'];
      var b = m['b'],
        w = n('q1tI'),
        x = n.n(w),
        _ = n('ZFw/'),
        E = n.n(_),
        O = n('MuoO'),
        M = n('E6Dt'),
        P = n('TSYQ'),
        S = n.n(P);
      function C(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function k(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n('17x9');
      var D = n('QLaP'),
        A = n.n(D),
        N = n('pIsd'),
        z = n.n(N),
        W = (function() {
          function e(e, t, n) {
            var r = this;
            (this.nativeMediaQueryList = e.matchMedia(t)),
              (this.active = !0),
              (this.cancellableListener = function() {
                (r.matches = r.nativeMediaQueryList.matches),
                  r.active && n.apply(void 0, arguments);
              }),
              this.nativeMediaQueryList.addListener(this.cancellableListener),
              (this.matches = this.nativeMediaQueryList.matches);
          }
          var t = e.prototype;
          return (
            (t.cancel = function() {
              (this.active = !1),
                this.nativeMediaQueryList.removeListener(this.cancellableListener);
            }),
            e
          );
        })(),
        T = (function(e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(r)) || this),
              k(j(j(t)), 'state', { matches: t.props.defaultMatches }),
              k(j(j(t)), 'updateMatches', function() {
                var e = t.mediaQueryList.matches;
                t.setState({ matches: e });
                var n = t.props.onChange;
                n && n(e);
              }),
              t
            );
          }
          C(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function() {
              if ('object' === typeof window) {
                var e = this.props.targetWindow || window;
                'function' !== typeof e.matchMedia && A()(!1);
                var t = this.props.query;
                'string' !== typeof t && (t = z()(t)),
                  (this.mediaQueryList = new W(e, t, this.updateMatches)),
                  this.updateMatches();
              }
            }),
            (n.componentWillUnmount = function() {
              this.mediaQueryList.cancel();
            }),
            (n.render = function() {
              var e = this.props,
                t = e.children,
                n = e.render,
                r = this.state.matches;
              return n
                ? r
                  ? n()
                  : null
                : t
                ? 'function' === typeof t
                  ? t(r)
                  : (!Array.isArray(t) || t.length) && r
                  ? x.a.Children.only(t)
                  : null
                : null;
            }),
            t
          );
        })(x.a.Component);
      k(T, 'defaultProps', { defaultMatches: !0 });
      var I = T,
        L = n('bpwf'),
        H = n.n(L),
        q = n('ggcP'),
        F = b.Footer,
        R = function() {
          return x.a.createElement(
            F,
            { style: { padding: 0 } },
            x.a.createElement(q['a'], {
              copyright: x.a.createElement(
                w['Fragment'],
                null,
                'LiuShuaiqi.Top',
                x.a.createElement(
                  'span',
                  { style: { margin: '0px 5px 0 10px' }, role: 'img', 'aria-label': 'by hart' },
                  '\u2764\ufe0f'
                ),
                '2016 - 2019'
              ),
            })
          );
        },
        K = R,
        Q = n('MFj2'),
        U = (n('Pwec'), n('CtXQ')),
        G = n('SQvw'),
        Z = n.n(G),
        B = n('wY1l'),
        V = n.n(B),
        Y = n('fqkP'),
        X = n.n(Y),
        J = n('h3zL'),
        $ = n.n(J),
        ee = (n('T2oS'), n('W9HT')),
        te = (n('ifDB'), n('wEI+'));
      function ne(e) {
        return (
          (ne =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          ne(e)
        );
      }
      function re() {
        return (
          (re =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          re.apply(this, arguments)
        );
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ie(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ce(e, t, n) {
        return t && ae(e.prototype, t), n && ae(e, n), e;
      }
      function ue(e, t) {
        return !t || ('object' !== ne(t) && 'function' !== typeof t) ? le(e) : t;
      }
      function le(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function se(e) {
        return (
          (se = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          se(e)
        );
      }
      function pe(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && fe(e, t);
      }
      function fe(e, t) {
        return (
          (fe =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          fe(e, t)
        );
      }
      var de = function(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        he = (function(e) {
          function t() {
            var e;
            return (
              ie(this, t),
              (e = ue(this, se(t).apply(this, arguments))),
              (e.state = { scale: 1, isImgExist: !0 }),
              (e.setScale = function() {
                if (e.avatarChildren && e.avatarNode) {
                  var t = e.avatarChildren.offsetWidth,
                    n = e.avatarNode.offsetWidth;
                  0 === t ||
                    0 === n ||
                    (e.lastChildrenWidth === t && e.lastNodeWidth === n) ||
                    ((e.lastChildrenWidth = t),
                    (e.lastNodeWidth = n),
                    e.setState({ scale: n - 8 < t ? (n - 8) / t : 1 }));
                }
              }),
              (e.handleImgLoadError = function() {
                var t = e.props.onError,
                  n = t ? t() : void 0;
                !1 !== n && e.setState({ isImgExist: !1 });
              }),
              (e.renderAvatar = function(t) {
                var n,
                  r,
                  o = t.getPrefixCls,
                  i = e.props,
                  a = i.prefixCls,
                  c = i.shape,
                  u = i.size,
                  l = i.src,
                  s = i.srcSet,
                  p = i.icon,
                  f = i.className,
                  d = i.alt,
                  h = de(i, [
                    'prefixCls',
                    'shape',
                    'size',
                    'src',
                    'srcSet',
                    'icon',
                    'className',
                    'alt',
                  ]),
                  v = e.state,
                  y = v.isImgExist,
                  m = v.scale,
                  g = o('avatar', a),
                  b = S()(
                    ((n = {}),
                    oe(n, ''.concat(g, '-lg'), 'large' === u),
                    oe(n, ''.concat(g, '-sm'), 'small' === u),
                    n)
                  ),
                  x = S()(
                    g,
                    f,
                    b,
                    ((r = {}),
                    oe(r, ''.concat(g, '-').concat(c), c),
                    oe(r, ''.concat(g, '-image'), l && y),
                    oe(r, ''.concat(g, '-icon'), p),
                    r)
                  ),
                  _ =
                    'number' === typeof u
                      ? {
                          width: u,
                          height: u,
                          lineHeight: ''.concat(u, 'px'),
                          fontSize: p ? u / 2 : 18,
                        }
                      : {},
                  E = e.props.children;
                if (l && y)
                  E = w['createElement']('img', {
                    src: l,
                    srcSet: s,
                    onError: e.handleImgLoadError,
                    alt: d,
                  });
                else if (p) E = w['createElement'](U['a'], { type: p });
                else {
                  var O = e.avatarChildren;
                  if (O || 1 !== m) {
                    var M = 'scale('.concat(m, ') translateX(-50%)'),
                      P = { msTransform: M, WebkitTransform: M, transform: M },
                      C = 'number' === typeof u ? { lineHeight: ''.concat(u, 'px') } : {};
                    E = w['createElement'](
                      'span',
                      {
                        className: ''.concat(g, '-string'),
                        ref: function(t) {
                          return (e.avatarChildren = t);
                        },
                        style: re({}, C, P),
                      },
                      E
                    );
                  } else
                    E = w['createElement'](
                      'span',
                      {
                        className: ''.concat(g, '-string'),
                        ref: function(t) {
                          return (e.avatarChildren = t);
                        },
                      },
                      E
                    );
                }
                return w['createElement'](
                  'span',
                  re({}, h, {
                    style: re({}, _, h.style),
                    className: x,
                    ref: function(t) {
                      return (e.avatarNode = t);
                    },
                  }),
                  E
                );
              }),
              e
            );
          }
          return (
            pe(t, e),
            ce(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setScale();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.setScale(),
                    e.src !== this.props.src && this.setState({ isImgExist: !0, scale: 1 });
                },
              },
              {
                key: 'render',
                value: function() {
                  return w['createElement'](te['a'], null, this.renderAvatar);
                },
              },
            ]),
            t
          );
        })(w['Component']);
      he.defaultProps = { shape: 'circle', size: 'default' };
      n('lUTK');
      var ve,
        ye,
        me,
        ge = n('BvKs'),
        be = (n('qVdP'), n('jsC+')),
        we = n('Y/ft'),
        xe = n.n(we),
        _e = n('QyDn'),
        Ee = n.n(_e),
        Oe = (function(e) {
          function t() {
            return u()(this, t), f()(this, h()(t).apply(this, arguments));
          }
          return (
            y()(t, e),
            s()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.overlayClassName,
                    n = xe()(e, ['overlayClassName']);
                  return x.a.createElement(
                    be['a'],
                    a()({ overlayClassName: S()(Ee.a.container, t) }, n)
                  );
                },
              },
            ]),
            t
          );
        })(w['PureComponent']),
        Me = [
          '#FF1744',
          '#F50057',
          '#D500F9',
          '#651FFF',
          '#3D5AFE',
          '#2979FF',
          '#0091EA',
          '#006064',
          '#004D40',
          '#1B5E20',
          '#33691E',
          '#827717',
          '#FF3D00',
          '#263238',
          '#000000',
        ],
        Pe = Me[Math.floor(15 * Math.random())],
        Se = (function(e) {
          function t() {
            return u()(this, t), f()(this, h()(t).apply(this, arguments));
          }
          return (
            y()(t, e),
            s()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.currentUser,
                    n = e.onMenuClick,
                    r = e.theme,
                    o = e.logouting,
                    i = x.a.createElement(
                      ge['a'],
                      { className: $.a.menu, selectedKeys: [], onClick: n },
                      x.a.createElement(
                        ge['a'].Item,
                        { key: 'logout' },
                        x.a.createElement(U['a'], { type: 'logout' }),
                        'Logout'
                      )
                    ),
                    a = $.a.right;
                  return (
                    'dark' === r && (a = ''.concat($.a.right, '  ').concat($.a.dark)),
                    x.a.createElement(
                      'div',
                      { className: a },
                      t && t.nickname && !o
                        ? x.a.createElement(
                            Oe,
                            { overlay: i },
                            x.a.createElement(
                              'span',
                              { className: ''.concat($.a.action, ' ').concat($.a.account) },
                              x.a.createElement(
                                he,
                                {
                                  size: 'small',
                                  className: $.a.avatar,
                                  style: { backgroundColor: Pe },
                                  alt: 'avatar',
                                },
                                t.nickname[0].toUpperCase()
                              ),
                              x.a.createElement('span', null, t.nickname)
                            )
                          )
                        : x.a.createElement(ee['a'], {
                            size: 'small',
                            style: { marginLeft: 8, marginRight: 8 },
                          })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(w['PureComponent']),
        Ce = null,
        je = 30,
        ke =
          ((ve = X()(600)),
          (me = (function(e) {
            function t() {
              var e, n;
              u()(this, t);
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                o[i] = arguments[i];
              return (
                (n = f()(this, (e = h()(t)).call.apply(e, [this].concat(o)))),
                (n.noticeRun = function() {
                  var e = document.getElementById('notice'),
                    t = document.getElementById('noticeText'),
                    n = e.offsetWidth,
                    r = t.offsetWidth,
                    o = n - r;
                  Ce = setInterval(function() {
                    o < -r ? (o = n) : (o -= 1), (t.style.left = ''.concat(o, 'px'));
                  }, je);
                }),
                (n.toggle = function() {
                  var e = n.props,
                    t = e.collapsed,
                    r = e.onCollapse;
                  r(!t), n.triggerResizeEvent();
                }),
                n
              );
            }
            return (
              y()(t, e),
              s()(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.noticeRun();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    clearInterval(Ce), this.triggerResizeEvent.cancel();
                  },
                },
                {
                  key: 'triggerResizeEvent',
                  value: function() {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent('resize', !0, !1), window.dispatchEvent(e);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.collapsed,
                      n = e.isMobile,
                      r = e.logo,
                      o = e.notice;
                    return x.a.createElement(
                      'div',
                      { className: $.a.header },
                      n &&
                        x.a.createElement(
                          V.a,
                          { to: '/', className: $.a.logo, key: 'logo' },
                          x.a.createElement('img', { src: r, alt: 'logo', width: '32' })
                        ),
                      x.a.createElement(
                        'span',
                        { className: $.a.trigger, onClick: this.toggle },
                        x.a.createElement(U['a'], { type: t ? 'menu-unfold' : 'menu-fold' })
                      ),
                      x.a.createElement(
                        'div',
                        { className: $.a.notice, id: 'notice' },
                        x.a.createElement('span', {
                          className: $.a['notice-text'],
                          id: 'noticeText',
                          dangerouslySetInnerHTML: { __html: o },
                        })
                      ),
                      x.a.createElement(Se, this.props)
                    );
                  },
                },
              ]),
              t
            );
          })(w['PureComponent'])),
          (ye = me),
          Z()(
            ye.prototype,
            'triggerResizeEvent',
            [ve],
            Object.getOwnPropertyDescriptor(ye.prototype, 'triggerResizeEvent'),
            ye.prototype
          ),
          ye),
        De = n('oFg3'),
        Ae = n('pMM0'),
        Ne = n('JwhZ'),
        ze = n.n(Ne),
        We = n('T+dw'),
        Te = (function(e) {
          function t() {
            var e, n;
            u()(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              (n = f()(this, (e = h()(t)).call.apply(e, [this].concat(o)))),
              (n.state = { maxWidth: void 0 }),
              n
            );
          }
          return (
            y()(t, e),
            s()(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      n = t.theme,
                      r = t.contentWidth,
                      o = t.menuData,
                      i = t.logo,
                      c = this.state.maxWidth,
                      u = Object(Ae['b'])(o);
                    return x.a.createElement(
                      'div',
                      {
                        className: ''
                          .concat(ze.a.head, ' ')
                          .concat('light' === n ? ze.a.light : ''),
                      },
                      x.a.createElement(
                        'div',
                        {
                          ref: function(t) {
                            e.maim = t;
                          },
                          className: ''
                            .concat(ze.a.main, ' ')
                            .concat('Fixed' === r ? ze.a.wide : ''),
                        },
                        x.a.createElement(
                          'div',
                          { className: ze.a.left },
                          x.a.createElement(
                            'div',
                            { className: ze.a.logo, key: 'logo', id: 'logo' },
                            x.a.createElement(
                              V.a,
                              { to: '/' },
                              x.a.createElement('img', { src: i, alt: 'logo' }),
                              x.a.createElement('h1', null, We['title'])
                            )
                          ),
                          x.a.createElement(
                            'div',
                            { style: { maxWidth: c } },
                            x.a.createElement(
                              De['default'],
                              a()({}, this.props, { flatMenuKeys: u, className: ze.a.menu })
                            )
                          )
                        ),
                        x.a.createElement(Se, this.props)
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    return {
                      maxWidth:
                        ('Fixed' === e.contentWidth && window.innerWidth > 1200
                          ? 1200
                          : window.innerWidth) -
                        280 -
                        120 -
                        40,
                    };
                  },
                },
              ]
            ),
            t
          );
        })(w['PureComponent']),
        Ie = n('IGtV'),
        Le = n.n(Ie),
        He = b.Header,
        qe = (function(e) {
          function t() {
            var e, n;
            u()(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              (n = f()(this, (e = h()(t)).call.apply(e, [this].concat(o)))),
              (n.state = { visible: !0 }),
              (n.getHeadWidth = function() {
                var e = n.props,
                  t = e.isMobile,
                  r = e.collapsed,
                  o = e.setting,
                  i = o.fixedHeader,
                  a = o.layout;
                return t || !i || 'topmenu' === a
                  ? '100%'
                  : r
                  ? 'calc(100% - 54px)'
                  : 'calc(100% - 200px)';
              }),
              (n.handScroll = function() {
                var e = n.props.autoHideHeader,
                  t = n.state.visible;
                if (e) {
                  var r = document.body.scrollTop + document.documentElement.scrollTop;
                  n.ticking ||
                    ((n.ticking = !0),
                    requestAnimationFrame(function() {
                      n.oldScrollTop > r
                        ? n.setState({ visible: !0 })
                        : r > 300 && t
                        ? n.setState({ visible: !1 })
                        : r < 300 && !t && n.setState({ visible: !0 }),
                        (n.oldScrollTop = r),
                        (n.ticking = !1);
                    }));
                }
              }),
              (n.handleMenuClick = function(e) {
                var t = e.key,
                  r = n.props.dispatch;
                'logout' === t && r({ type: 'login/logout' });
              }),
              n
            );
          }
          return (
            y()(t, e),
            s()(
              t,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    document.addEventListener('scroll', this.handScroll, { passive: !0 });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    document.removeEventListener('scroll', this.handScroll);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.isMobile,
                      n = e.handleMenuCollapse,
                      r = e.setting,
                      o = r.navTheme,
                      i = r.layout,
                      c = r.fixedHeader,
                      u = this.state.visible,
                      l = 'topmenu' === i,
                      s = this.getHeadWidth(),
                      p = u
                        ? x.a.createElement(
                            He,
                            {
                              style: { padding: 0, width: s },
                              className: c ? Le.a.fixedHeader : '',
                            },
                            l && !t
                              ? x.a.createElement(
                                  Te,
                                  a()(
                                    {
                                      onMenuClick: this.handleMenuClick,
                                      theme: o,
                                      mode: 'horizontal',
                                      onCollapse: n,
                                    },
                                    this.props
                                  )
                                )
                              : x.a.createElement(
                                  ke,
                                  a()(
                                    { onMenuClick: this.handleMenuClick, onCollapse: n },
                                    this.props
                                  )
                                )
                          )
                        : null;
                    return x.a.createElement(Q['a'], { component: '', transitionName: 'fade' }, p);
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    return e.autoHideHeader || t.visible ? null : { visible: !0 };
                  },
                },
              ]
            ),
            t
          );
        })(w['Component']),
        Fe = Object(O['connect'])(function(e) {
          var t = e.global,
            n = e.system,
            r = e.setting,
            o = e.loading;
          return {
            currentUser: t.currentUser,
            collapsed: t.collapsed,
            notice: n.notice,
            setting: r,
            logouting: o.effects['login/logout'],
          };
        })(qe),
        Re = n('R1Dz'),
        Ke = (n('bbsP'), n('/wGt')),
        Qe = n('eHn4'),
        Ue = n.n(Qe),
        Ge = n('gWZ8'),
        Ze = n.n(Ge),
        Be = n('mR0u'),
        Ve = n.n(Be),
        Ye = n('xqX8'),
        Xe = x.a.lazy(function() {
          return Promise.resolve().then(n.bind(null, 'oFg3'));
        }),
        Je = b.Sider,
        $e = (function(e) {
          function t(e) {
            var n;
            return (
              u()(this, t),
              (n = f()(this, h()(t).call(this, e))),
              (n.isMainMenu = function(e) {
                var t = n.props.menuData;
                return t.some(function(t) {
                  return !!e && (t.key === e || t.path === e);
                });
              }),
              (n.handleOpenChange = function(e) {
                var t =
                  e.filter(function(e) {
                    return n.isMainMenu(e);
                  }).length > 1;
                n.setState({ openKeys: t ? [e.pop()] : Ze()(e) });
              }),
              (n.state = { openKeys: Object(Ae['a'])(e) }),
              n
            );
          }
          return (
            y()(t, e),
            s()(
              t,
              [
                {
                  key: 'render',
                  value: function() {
                    var e,
                      t = this.props,
                      n = t.logo,
                      r = t.collapsed,
                      o = t.fixSiderbar,
                      i = t.theme,
                      c = this.state.openKeys,
                      u = r ? {} : { openKeys: c },
                      l = S()(
                        Ve.a.sider,
                        ((e = {}),
                        Ue()(e, Ve.a.fixSiderBar, o),
                        Ue()(e, Ve.a.light, 'light' === i),
                        e)
                      );
                    return x.a.createElement(
                      Je,
                      {
                        trigger: null,
                        collapsible: !0,
                        collapsed: r,
                        collapsedWidth: 54,
                        breakpoint: 'lg',
                        theme: i,
                        className: l,
                      },
                      x.a.createElement(
                        'div',
                        { className: Ve.a.logo, id: 'logo' },
                        x.a.createElement(
                          V.a,
                          { to: '/' },
                          x.a.createElement('img', { src: n, alt: 'logo' }),
                          !r && x.a.createElement('h1', { style: { marginLeft: 7 } }, We['title'])
                        )
                      ),
                      x.a.createElement(
                        w['Suspense'],
                        { fallback: x.a.createElement(Ye['default'], null) },
                        x.a.createElement(
                          Xe,
                          a()(
                            {},
                            this.props,
                            {
                              mode: 'inline',
                              handleOpenChange: this.handleOpenChange,
                              onOpenChange: this.handleOpenChange,
                              style: { padding: '16px 0', width: '100%' },
                            },
                            u
                          )
                        )
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    var n = t.pathname,
                      r = t.flatMenuKeysLen;
                    return e.location.pathname !== n || e.flatMenuKeys.length !== r
                      ? {
                          pathname: e.location.pathname,
                          flatMenuKeysLen: e.flatMenuKeys.length,
                          openKeys: Object(Ae['a'])(e),
                        }
                      : null;
                  },
                },
              ]
            ),
            t
          );
        })(w['PureComponent']),
        et = x.a.memo(function(e) {
          var t = e.isMobile,
            n = e.menuData,
            r = e.collapsed,
            o = e.onCollapse,
            i = Object(Ae['b'])(n);
          return t
            ? x.a.createElement(
                Ke['a'],
                {
                  visible: !r,
                  placement: 'left',
                  onClose: function() {
                    return o(!0);
                  },
                  style: { padding: 0, height: '100vh' },
                },
                x.a.createElement($e, a()({}, e, { flatMenuKeys: i, collapsed: !t && r }))
              )
            : x.a.createElement($e, a()({}, e, { flatMenuKeys: i }));
        }),
        tt = et,
        nt = n('tGQQ'),
        rt = n('W660'),
        ot = n.n(rt),
        it = b.Content,
        at = {
          'screen-xs': { maxWidth: 575 },
          'screen-sm': { minWidth: 576, maxWidth: 767 },
          'screen-md': { minWidth: 768, maxWidth: 991 },
          'screen-lg': { minWidth: 992, maxWidth: 1199 },
          'screen-xl': { minWidth: 1200, maxWidth: 1599 },
          'screen-xxl': { minWidth: 1600 },
        },
        ct = (function(e) {
          function t() {
            var e, n;
            u()(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              (n = f()(this, (e = h()(t)).call.apply(e, [this].concat(o)))),
              (n.getLayoutStyle = function() {
                var e = n.props,
                  t = e.fixSiderbar,
                  r = e.isMobile,
                  o = e.collapsed,
                  i = e.layout;
                return t && 'topmenu' !== i && !r ? { paddingLeft: o ? '54px' : '200px' } : null;
              }),
              (n.handleMenuCollapse = function(e) {
                var t = n.props.dispatch;
                t({ type: 'global/changeLayoutCollapsed', payload: e });
              }),
              n
            );
          }
          return (
            y()(t, e),
            s()(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.dispatch,
                    n = e.route,
                    r = n.routes,
                    o = n.path,
                    i = n.authority;
                  t({ type: 'menu/getMenuData', payload: { routes: r, path: o, authority: i } });
                },
              },
              {
                key: 'getContext',
                value: function() {
                  var e = this.props,
                    t = e.location,
                    n = e.breadcrumbNameMap;
                  return { location: t, breadcrumbNameMap: n };
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.navTheme,
                    r = t.layout,
                    i = t.children,
                    c = t.location.pathname,
                    u = t.isMobile,
                    l = t.menuData,
                    s = t.breadcrumbNameMap,
                    p = t.fixedHeader,
                    f = 'topmenu' === r,
                    d = p ? {} : { paddingTop: 0 },
                    h = x.a.createElement(
                      b,
                      null,
                      f && !u
                        ? null
                        : x.a.createElement(
                            tt,
                            a()(
                              {
                                logo: H.a,
                                theme: n,
                                onCollapse: this.handleMenuCollapse,
                                menuData: l,
                                isMobile: u,
                              },
                              this.props
                            )
                          ),
                      x.a.createElement(
                        b,
                        { style: o()({}, this.getLayoutStyle(), { minHeight: '100vh' }) },
                        x.a.createElement(
                          Fe,
                          a()(
                            {
                              menuData: l,
                              handleMenuCollapse: this.handleMenuCollapse,
                              logo: H.a,
                              isMobile: u,
                            },
                            this.props
                          )
                        ),
                        x.a.createElement(it, { className: ot.a.content, style: d }, i),
                        x.a.createElement(K, null)
                      )
                    );
                  return x.a.createElement(
                    x.a.Fragment,
                    null,
                    x.a.createElement(
                      E.a,
                      { title: Object(nt['a'])(c, s) },
                      x.a.createElement(M['ContainerQuery'], { query: at }, function(t) {
                        return x.a.createElement(
                          Re['a'].Provider,
                          { value: e.getContext() },
                          x.a.createElement('div', { className: S()(t) }, h)
                        );
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(x.a.Component);
      t['default'] = Object(O['connect'])(function(e) {
        var t = e.global,
          n = t.collapsed,
          r = t.currentUser,
          i = void 0 === r ? {} : r,
          a = t.systemMode,
          c = e.setting,
          u = e.menu;
        return o()(
          {
            collapsed: n,
            currentUser: i,
            systemMode: a,
            layout: c.layout,
            menuData: u.menuData,
            breadcrumbNameMap: u.breadcrumbNameMap,
          },
          c
        );
      })(function(e) {
        return x.a.createElement(I, { query: '(max-width: 599px)' }, function(t) {
          return x.a.createElement(ct, a()({}, e, { isMobile: t }));
        });
      });
    },
    mR0u: function(e, t, n) {
      e.exports = {
        logo: 'antd-pro-components-sider-menu-index-logo',
        sider: 'antd-pro-components-sider-menu-index-sider',
        fixSiderBar: 'antd-pro-components-sider-menu-index-fixSiderBar',
        light: 'antd-pro-components-sider-menu-index-light',
        icon: 'antd-pro-components-sider-menu-index-icon',
      };
    },
    mrSG: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, '__extends', function() {
          return o;
        }),
        n.d(t, '__assign', function() {
          return i;
        }),
        n.d(t, '__rest', function() {
          return a;
        }),
        n.d(t, '__decorate', function() {
          return c;
        }),
        n.d(t, '__param', function() {
          return u;
        }),
        n.d(t, '__metadata', function() {
          return l;
        }),
        n.d(t, '__awaiter', function() {
          return s;
        }),
        n.d(t, '__generator', function() {
          return p;
        }),
        n.d(t, '__exportStar', function() {
          return f;
        }),
        n.d(t, '__values', function() {
          return d;
        }),
        n.d(t, '__read', function() {
          return h;
        }),
        n.d(t, '__spread', function() {
          return v;
        }),
        n.d(t, '__spreadArrays', function() {
          return y;
        }),
        n.d(t, '__await', function() {
          return m;
        }),
        n.d(t, '__asyncGenerator', function() {
          return g;
        }),
        n.d(t, '__asyncDelegator', function() {
          return b;
        }),
        n.d(t, '__asyncValues', function() {
          return w;
        }),
        n.d(t, '__makeTemplateObject', function() {
          return x;
        }),
        n.d(t, '__importStar', function() {
          return _;
        }),
        n.d(t, '__importDefault', function() {
          return E;
        });
      var r = function(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t;
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var i = function() {
        return (
          (i =
            Object.assign ||
            function(e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }),
          i.apply(this, arguments)
        );
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      function c(e, t, n, r) {
        var o,
          i = arguments.length,
          a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)
            (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function u(e, t) {
        return function(n, r) {
          t(n, r, e);
        };
      }
      function l(e, t) {
        if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function(o, i) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            try {
              u(r['throw'](e));
            } catch (e) {
              i(e);
            }
          }
          function u(e) {
            e.done
              ? o(e.value)
              : new n(function(t) {
                  t(e.value);
                }).then(a, c);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function p(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: c(0), throw: c(1), return: c(2) }),
          'function' === typeof Symbol &&
            (i[Symbol.iterator] = function() {
              return this;
            }),
          i
        );
        function c(e) {
          return function(t) {
            return u([e, t]);
          };
        }
        function u(i) {
          if (n) throw new TypeError('Generator is already executing.');
          while (a)
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r['return']
                      : i[0]
                      ? r['throw'] || ((o = r['return']) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    ((o = a.trys),
                    !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        }
      }
      function f(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function d(e) {
        var t = 'function' === typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function() {
                return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
              },
            };
      }
      function h(e, t) {
        var n = 'function' === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          while ((void 0 === t || t-- > 0) && !(r = i.next()).done) a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i['return']) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
        return e;
      }
      function y() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
        return r;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function g(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = {}),
          a('next'),
          a('throw'),
          a('return'),
          (r[Symbol.asyncIterator] = function() {
            return this;
          }),
          r
        );
        function a(e) {
          o[e] &&
            (r[e] = function(t) {
              return new Promise(function(n, r) {
                i.push([e, t, n, r]) > 1 || c(e, t);
              });
            });
        }
        function c(e, t) {
          try {
            u(o[e](t));
          } catch (e) {
            p(i[0][3], e);
          }
        }
        function u(e) {
          e.value instanceof m ? Promise.resolve(e.value.v).then(l, s) : p(i[0][2], e);
        }
        function l(e) {
          c('next', e);
        }
        function s(e) {
          c('throw', e);
        }
        function p(e, t) {
          e(t), i.shift(), i.length && c(i[0][0], i[0][1]);
        }
      }
      function b(e) {
        var t, n;
        return (
          (t = {}),
          r('next'),
          r('throw', function(e) {
            throw e;
          }),
          r('return'),
          (t[Symbol.iterator] = function() {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function(t) {
                return (n = !n) ? { value: m(e[r](t)), done: 'return' === r } : o ? o(t) : t;
              }
            : o;
        }
      }
      function w(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = 'function' === typeof d ? d(e) : e[Symbol.iterator]()),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function() {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function(t) {
              return new Promise(function(r, i) {
                (t = e[n](t)), o(r, i, t.done, t.value);
              });
            };
        }
        function o(e, t, n, r) {
          Promise.resolve(r).then(function(t) {
            e({ value: t, done: n });
          }, t);
        }
      }
      function x(e, t) {
        return (
          Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        );
      }
      function _(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    oFg3: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = n('jehZ'),
        o = n.n(r),
        i = n('gWZ8'),
        a = n.n(i),
        c = n('2Taf'),
        u = n.n(c),
        l = n('vZ4D'),
        s = n.n(l),
        p = n('l4Ni'),
        f = n.n(p),
        d = n('ujKo'),
        h = n.n(d),
        v = n('MhPg'),
        y = n.n(v),
        m = (n('Pwec'), n('CtXQ')),
        g = (n('lUTK'), n('BvKs')),
        b = n('q1tI'),
        w = n.n(b),
        x = n('TSYQ'),
        _ = n.n(x),
        E = n('wY1l'),
        O = n.n(E),
        M = n('S/9j'),
        P = n('pMM0'),
        S = n('+n12'),
        C = n('mR0u'),
        j = n.n(C),
        k = n('T+dw'),
        D = m['a'].createFromIconfontCN({ scriptUrl: k['iconfontUrl'] });
      n.d(t, 'default', function() {
        return z;
      });
      var A = g['a'].SubMenu,
        N = function(e) {
          return 'string' === typeof e
            ? Object(S['b'])(e)
              ? w.a.createElement(m['a'], {
                  component: function() {
                    return w.a.createElement('img', { src: e, alt: 'icon', className: j.a.icon });
                  },
                })
              : e.startsWith('icon-')
              ? w.a.createElement(D, { type: e })
              : w.a.createElement(m['a'], { type: e })
            : e;
        },
        z = (function(e) {
          function t() {
            var e, n;
            u()(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
            return (
              (n = f()(this, (e = h()(t)).call.apply(e, [this].concat(o)))),
              (n.getNavMenuItems = function(e) {
                return e
                  ? e
                      .filter(function(e) {
                        return e.name && !e.hideInMenu;
                      })
                      .map(function(e) {
                        return n.getSubMenuOrItem(e);
                      })
                      .filter(function(e) {
                        return e;
                      })
                  : [];
              }),
              (n.getSelectedMenuKeys = function(e) {
                var t = n.props.flatMenuKeys;
                return Object(M['a'])(e).map(function(e) {
                  return Object(P['c'])(t, e).pop();
                });
              }),
              (n.getSubMenuOrItem = function(e) {
                if (
                  e.children &&
                  !e.hideChildrenInMenu &&
                  e.children.some(function(e) {
                    return e.name;
                  })
                ) {
                  var t = e.name;
                  return w.a.createElement(
                    A,
                    {
                      title: e.icon
                        ? w.a.createElement(
                            'span',
                            null,
                            N(e.icon),
                            w.a.createElement('span', null, t)
                          )
                        : t,
                      key: e.path,
                    },
                    n.getNavMenuItems(e.children)
                  );
                }
                return w.a.createElement(g['a'].Item, { key: e.path }, n.getMenuItemPath(e));
              }),
              (n.getMenuItemPath = function(e) {
                var t = e.name,
                  r = n.conversionPath(e.path),
                  o = N(e.icon),
                  i = e.target;
                if (/^https?:\/\//.test(r))
                  return w.a.createElement(
                    'a',
                    { href: r, target: i },
                    o,
                    w.a.createElement('span', null, t)
                  );
                var a = n.props,
                  c = a.location,
                  u = a.isMobile,
                  l = a.onCollapse;
                return w.a.createElement(
                  O.a,
                  {
                    to: r,
                    target: i,
                    replace: r === c.pathname,
                    onClick: u
                      ? function() {
                          l(!0);
                        }
                      : void 0,
                  },
                  o,
                  w.a.createElement('span', null, t)
                );
              }),
              (n.conversionPath = function(e) {
                return e && 0 === e.indexOf('http') ? e : '/'.concat(e || '').replace(/\/+/g, '/');
              }),
              n
            );
          }
          return (
            y()(t, e),
            s()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.openKeys,
                    n = e.theme,
                    r = e.mode,
                    i = e.location.pathname,
                    c = e.className,
                    u = e.collapsed,
                    l = this.getSelectedMenuKeys(i);
                  !l.length && t && (l = [t[t.length - 1]]);
                  var s = {};
                  t && !u && (s = { openKeys: 0 === t.length ? a()(l) : t });
                  var p = this.props,
                    f = p.handleOpenChange,
                    d = p.style,
                    h = p.menuData,
                    v = _()(c, { 'top-nav-menu': 'horizontal' === r });
                  return w.a.createElement(
                    g['a'],
                    o()(
                      {
                        key: 'Menu',
                        mode: r,
                        theme: n,
                        onOpenChange: f,
                        selectedKeys: l,
                        style: d,
                        className: v,
                      },
                      s
                    ),
                    this.getNavMenuItems(h)
                  );
                },
              },
            ]),
            t
          );
        })(b['PureComponent']);
    },
    owcV: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('7sSR'),
        o = (function() {
          function e(e) {
            var t = this;
            (this.handler = e),
              (this.listenedElement = null),
              (this.hasResizeObserver = 'undefined' !== typeof window.ResizeObserver),
              this.hasResizeObserver
                ? (this.rz = new ResizeObserver(function(e) {
                    t.handler(i(e[0].target));
                  }))
                : (this.erd = r({ strategy: 'scroll' }));
          }
          return (
            (e.prototype.observe = function(e) {
              var t = this;
              this.listenedElement !== e &&
                (this.listenedElement && this.disconnect(),
                e &&
                  (this.hasResizeObserver
                    ? this.rz.observe(e)
                    : this.erd.listenTo(e, function(e) {
                        t.handler(i(e));
                      })),
                (this.listenedElement = e));
            }),
            (e.prototype.disconnect = function() {
              this.listenedElement &&
                (this.hasResizeObserver
                  ? this.rz.disconnect()
                  : this.erd.uninstall(this.listenedElement),
                (this.listenedElement = null));
            }),
            e
          );
        })();
      function i(e) {
        return {
          width: a(window.getComputedStyle(e)['width']),
          height: a(window.getComputedStyle(e)['height']),
        };
      }
      function a(e) {
        var t = /^([0-9\.]+)px$/.exec(e);
        return t ? parseFloat(t[1]) : 0;
      }
      t.default = o;
    },
    'p+yQ': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('FPDy'),
        i = n('7ntv'),
        a = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r.__extends(t, e),
            (t.prototype.apply = function(e) {
              var t = e.args,
                n = e.target,
                r = e.config.execute;
              return function() {
                for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
                return r
                  .apply(void 0, [i.resolveFunction(t[0], this, n)].concat(t.slice(1)))
                  .apply(this, e);
              };
            }),
            t
          );
        })(o.Applicator);
      t.PartialApplicator = a;
    },
    pIsd: function(e, t, n) {
      var r = n('BJfS'),
        o = function(e) {
          var t = /[height|width]$/;
          return t.test(e);
        },
        i = function(e) {
          var t = '',
            n = Object.keys(e);
          return (
            n.forEach(function(i, a) {
              var c = e[i];
              (i = r(i)),
                o(i) && 'number' === typeof c && (c += 'px'),
                (t += !0 === c ? i : !1 === c ? 'not ' + i : '(' + i + ': ' + c + ')'),
                a < n.length - 1 && (t += ' and ');
            }),
            t
          );
        },
        a = function(e) {
          var t = '';
          return 'string' === typeof e
            ? e
            : e instanceof Array
            ? (e.forEach(function(n, r) {
                (t += i(n)), r < e.length - 1 && (t += ', ');
              }),
              t)
            : i(e);
        };
      e.exports = a;
    },
    pMM0: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return u;
      }),
        n.d(t, 'c', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return s;
        });
      var r = n('gWZ8'),
        o = n.n(r),
        i = n('bALw'),
        a = n.n(i),
        c = n('S/9j'),
        u = function e(t) {
          var n = [];
          return (
            t.forEach(function(t) {
              n.push(t.path), t.children && (n = n.concat(e(t.children)));
            }),
            n
          );
        },
        l = function(e, t) {
          return e.filter(function(e) {
            return !!e && a()(e).test(t);
          });
        },
        s = function(e) {
          var t = e.location.pathname,
            n = e.flatMenuKeys;
          return Object(c['a'])(t)
            .map(function(e) {
              return l(n, e)[0];
            })
            .filter(function(e) {
              return e;
            })
            .reduce(
              function(e, t) {
                return [].concat(o()(e), [t]);
              },
              ['/']
            );
        };
    },
    pzgU: function(e, t, n) {
      var r = n('Q1l4'),
        o = n('wJg7'),
        i = Math.min;
      function a(e, t) {
        var n = e.length,
          a = i(t.length, n),
          c = r(e);
        while (a--) {
          var u = t[a];
          e[a] = o(u, n) ? c[u] : void 0;
        }
        return e;
      }
      e.exports = a;
    },
    q3TU: function(e, t, n) {
      var r = n('y4QH'),
        o = n('MMiu'),
        i = n('6KkN'),
        a = '__lodash_placeholder__',
        c = 1,
        u = 2,
        l = 4,
        s = 8,
        p = 128,
        f = 256,
        d = Math.min;
      function h(e, t) {
        var n = e[1],
          h = t[1],
          v = n | h,
          y = v < (c | u | p),
          m =
            (h == p && n == s) ||
            (h == p && n == f && e[7].length <= t[8]) ||
            (h == (p | f) && t[7].length <= t[8] && n == s);
        if (!y && !m) return e;
        h & c && ((e[2] = t[2]), (v |= n & c ? 0 : l));
        var g = t[3];
        if (g) {
          var b = e[3];
          (e[3] = b ? r(b, g, t[4]) : g), (e[4] = b ? i(e[3], a) : t[4]);
        }
        return (
          (g = t[5]),
          g && ((b = e[5]), (e[5] = b ? o(b, g, t[6]) : g), (e[6] = b ? i(e[5], a) : t[6])),
          (g = t[7]),
          g && (e[7] = g),
          h & p && (e[8] = null == e[8] ? t[8] : d(e[8], t[8])),
          null == e[9] && (e[9] = t[9]),
          (e[0] = t[0]),
          (e[1] = v),
          e
        );
      }
      e.exports = h;
    },
    q7TX: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        function t() {}
        var n = { log: t, warn: t, error: t };
        if (!e && window.console) {
          var r = function(e, t) {
            e[t] = function() {
              var e = console[t];
              if (e.apply) e.apply(console, arguments);
              else for (var n = 0; n < arguments.length; n++) e(arguments[n]);
            };
          };
          r(n, 'log'), r(n, 'warn'), r(n, 'error');
        }
        return n;
      };
    },
    qaXn: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return function() {
          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return e.call.apply(e, [this].concat(n)), n[t];
        };
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.returnAtIndex = r);
    },
    rapA: function(e, t, n) {
      var r = n('heNW'),
        o = n('EA7m'),
        i = n('PtqM'),
        a = o(function(e, t) {
          try {
            return r(e, void 0, t);
          } catch (e) {
            return i(e) ? e : new Error(e);
          }
        });
      e.exports = a;
    },
    rjxA: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = Object.prototype.hasOwnProperty;
      function o(e, t) {
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var i = 0; i < n.length; i++) if (!r.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
        return !0;
      }
      t.default = o;
    },
    rxvY: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n('mrSG'),
        o = n('zZ0H'),
        i = n('FPDy'),
        a = n('7ntv'),
        c = (function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this) || this;
            return (n._config = t), n;
          }
          return (
            r.__extends(t, e),
            Object.defineProperty(t.prototype, 'post', {
              get: function() {
                return !0 === this._config.post;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.apply = function(e) {
              var t = e.config.execute,
                n = e.value,
                r = void 0 === n ? o : n,
                i = e.args,
                c = e.target,
                u = this;
              return function() {
                for (var e = this, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                var l = i
                  .map(function(t) {
                    return a.resolveFunction(t, e, c);
                  })
                  .slice();
                return u.post ? l.push(r) : l.unshift(r), t.apply(void 0, l).apply(this, n);
              };
            }),
            t
          );
        })(i.Applicator);
      t.ComposeApplicator = c;
    },
    's0N+': function(e, t, n) {
      var r = n('zZ0H'),
        o = n('a5q3'),
        i = o
          ? function(e, t) {
              return o.set(e, t), e;
            }
          : r;
      e.exports = i;
    },
    'sKJ/': function(e, t, n) {
      var r = n('EA7m'),
        o = n('6T1N'),
        i = n('V9aw'),
        a = n('6KkN'),
        c = 32,
        u = r(function(e, t) {
          var n = a(t, i(u));
          return o(e, c, void 0, t, n);
        });
      (u.placeholder = {}), (e.exports = u);
    },
    t2dP: function(e, t) {
      function n(e, t) {
        var n = e.length,
          r = 0;
        while (n--) e[n] === t && ++r;
        return r;
      }
      e.exports = n;
    },
    t3DW: function(e, t, n) {
      'use strict';
      var r = (e.exports = {});
      r.forEach = function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = t(e[n]);
          if (r) return r;
        }
      };
    },
    ulEd: function(e, t) {
      var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
        r = /,? & /;
      function o(e) {
        var t = e.match(n);
        return t ? t[1].split(r) : [];
      }
      e.exports = o;
    },
    'vN+2': function(e, t) {
      function n() {}
      e.exports = n;
    },
    vpaL: function(e, t, n) {
      'use strict';
      function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        r(n('ktpP')),
        r(n('PhzP')),
        r(n('c0qT'));
    },
    wnTG: function(e, t, n) {
      'use strict';
      var r = n('UL9e');
      function o() {
        var e = {},
          t = 0,
          n = 0,
          r = 0;
        function o(o, i) {
          i || ((i = o), (o = 0)),
            o > n ? (n = o) : o < r && (r = o),
            e[o] || (e[o] = []),
            e[o].push(i),
            t++;
        }
        function i() {
          for (var t = r; t <= n; t++)
            for (var o = e[t], i = 0; i < o.length; i++) {
              var a = o[i];
              a();
            }
        }
        function a() {
          return t;
        }
        return { add: o, process: i, size: a };
      }
      e.exports = function(e) {
        e = e || {};
        var t = e.reporter,
          n = r.getOption(e, 'async', !0),
          i = r.getOption(e, 'auto', !0);
        i &&
          !n &&
          (t &&
            t.warn(
              'Invalid options combination. auto=true and async=false is invalid. Setting async=true.'
            ),
          (n = !0));
        var a,
          c = o(),
          u = !1;
        function l(e, t) {
          !u && i && n && 0 === c.size() && f(), c.add(e, t);
        }
        function s() {
          u = !0;
          while (c.size()) {
            var e = c;
            (c = o()), e.process();
          }
          u = !1;
        }
        function p(e) {
          u || (void 0 === e && (e = n), a && (d(a), (a = null)), e ? f() : s());
        }
        function f() {
          a = h(s);
        }
        function d(e) {
          var t = clearTimeout;
          return t(e);
        }
        function h(e) {
          var t = function(e) {
            return setTimeout(e, 0);
          };
          return t(e);
        }
        return { add: l, force: p };
      };
    },
    xFI3: function(e, t, n) {
      var r = n('Yoag'),
        o = n('6ae/'),
        i = n('Q1l4');
      function a(e) {
        if (e instanceof r) return e.clone();
        var t = new o(e.__wrapped__, e.__chain__);
        return (
          (t.__actions__ = i(e.__actions__)),
          (t.__index__ = e.__index__),
          (t.__values__ = e.__values__),
          t
        );
      }
      e.exports = a;
    },
    y4QH: function(e, t) {
      var n = Math.max;
      function r(e, t, r, o) {
        var i = -1,
          a = e.length,
          c = r.length,
          u = -1,
          l = t.length,
          s = n(a - c, 0),
          p = Array(l + s),
          f = !o;
        while (++u < l) p[u] = t[u];
        while (++i < c) (f || i < a) && (p[r[i]] = e[i]);
        while (s--) p[u++] = e[i++];
        return p;
      }
      e.exports = r;
    },
    yUZ2: function(e, t, n) {
      'use strict';
      var r = n('t3DW').forEach;
      e.exports = function(e) {
        e = e || {};
        var t = e.reporter,
          n = e.batchProcessor,
          o = e.stateHandler.getState,
          i = (e.stateHandler.hasState, e.idHandler);
        if (!n) throw new Error('Missing required dependency: batchProcessor');
        if (!t) throw new Error('Missing required dependency: reporter.');
        var a = l(),
          c = 'erd_scroll_detection_scrollbar_style',
          u = 'erd_scroll_detection_container';
        function l() {
          var e = 500,
            t = 500,
            n = document.createElement('div');
          n.style.cssText =
            'position: absolute; width: ' +
            2 * e +
            'px; height: ' +
            2 * t +
            'px; visibility: hidden; margin: 0; padding: 0;';
          var r = document.createElement('div');
          (r.style.cssText =
            'position: absolute; width: ' +
            e +
            'px; height: ' +
            t +
            'px; overflow: scroll; visibility: none; top: ' +
            3 * -e +
            'px; left: ' +
            3 * -t +
            'px; visibility: hidden; margin: 0; padding: 0;'),
            r.appendChild(n),
            document.body.insertBefore(r, document.body.firstChild);
          var o = e - r.clientWidth,
            i = t - r.clientHeight;
          return document.body.removeChild(r), { width: o, height: i };
        }
        function s(e, t) {
          function n(t, n) {
            n =
              n ||
              function(e) {
                document.head.appendChild(e);
              };
            var r = document.createElement('style');
            return (r.innerHTML = t), (r.id = e), n(r), r;
          }
          if (!document.getElementById(e)) {
            var r = t + '_animation',
              o = t + '_animation_active',
              i = '/* Created by the element-resize-detector library. */\n';
            (i += '.' + t + ' > div::-webkit-scrollbar { display: none; }\n\n'),
              (i +=
                '.' +
                o +
                ' { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: ' +
                r +
                '; animation-name: ' +
                r +
                '; }\n'),
              (i +=
                '@-webkit-keyframes ' +
                r +
                ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n'),
              (i +=
                '@keyframes ' +
                r +
                ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }'),
              n(i);
          }
        }
        function p(e) {
          e.className += ' ' + u + '_animation_active';
        }
        function f(e, n, r) {
          if (e.addEventListener) e.addEventListener(n, r);
          else {
            if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + n, r);
          }
        }
        function d(e, n, r) {
          if (e.removeEventListener) e.removeEventListener(n, r);
          else {
            if (!e.detachEvent)
              return t.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + n, r);
          }
        }
        function h(e) {
          return o(e).container.childNodes[0].childNodes[0].childNodes[0];
        }
        function v(e) {
          return o(e).container.childNodes[0].childNodes[0].childNodes[1];
        }
        function y(e, t) {
          var n = o(e).listeners;
          if (!n.push) throw new Error('Cannot add listener to an element that is not detectable.');
          o(e).listeners.push(t);
        }
        function m(e, c, l) {
          function s() {
            if (e.debug) {
              var n = Array.prototype.slice.call(arguments);
              if ((n.unshift(i.get(c), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
              else for (var r = 0; r < n.length; r++) t.log(n[r]);
            }
          }
          function d(e) {
            function t(e) {
              return e === e.ownerDocument.body || e.ownerDocument.body.contains(e);
            }
            return !t(e) || null === getComputedStyle(e);
          }
          function y(e) {
            var t = o(e).container.childNodes[0],
              n = getComputedStyle(t);
            return !n.width || -1 === n.width.indexOf('px');
          }
          function m() {
            var e = getComputedStyle(c),
              t = {};
            return (
              (t.position = e.position),
              (t.width = c.offsetWidth),
              (t.height = c.offsetHeight),
              (t.top = e.top),
              (t.right = e.right),
              (t.bottom = e.bottom),
              (t.left = e.left),
              (t.widthCSS = e.width),
              (t.heightCSS = e.height),
              t
            );
          }
          function g() {
            var e = m();
            (o(c).startSize = { width: e.width, height: e.height }),
              s('Element start size', o(c).startSize);
          }
          function b() {
            o(c).listeners = [];
          }
          function w() {
            if ((s('storeStyle invoked.'), o(c))) {
              var e = m();
              o(c).style = e;
            } else s('Aborting because element has been uninstalled');
          }
          function x(e, t, n) {
            (o(e).lastWidth = t), (o(e).lastHeight = n);
          }
          function _(e) {
            return h(e).childNodes[0];
          }
          function E() {
            return 2 * a.width + 1;
          }
          function O() {
            return 2 * a.height + 1;
          }
          function M(e) {
            return e + 10 + E();
          }
          function P(e) {
            return e + 10 + O();
          }
          function S(e) {
            return 2 * e + E();
          }
          function C(e) {
            return 2 * e + O();
          }
          function j(e, t, n) {
            var r = h(e),
              o = v(e),
              i = M(t),
              a = P(n),
              c = S(t),
              u = C(n);
            (r.scrollLeft = i), (r.scrollTop = a), (o.scrollLeft = c), (o.scrollTop = u);
          }
          function k() {
            var e = o(c).container;
            if (!e) {
              (e = document.createElement('div')),
                (e.className = u),
                (e.style.cssText =
                  'visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;'),
                (o(c).container = e),
                p(e),
                c.appendChild(e);
              var t = function() {
                o(c).onRendered && o(c).onRendered();
              };
              f(e, 'animationstart', t), (o(c).onAnimationStart = t);
            }
            return e;
          }
          function D() {
            function e() {
              var e = o(c).style;
              if ('static' === e.position) {
                c.style.position = 'relative';
                var n = function(e, t, n, r) {
                  function o(e) {
                    return e.replace(/[^-\d\.]/g, '');
                  }
                  var i = n[r];
                  'auto' !== i &&
                    '0' !== o(i) &&
                    (e.warn(
                      'An element that is positioned static has style.' +
                        r +
                        '=' +
                        i +
                        ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
                        r +
                        ' will be set to 0. Element: ',
                      t
                    ),
                    (t.style[r] = 0));
                };
                n(t, c, e, 'top'), n(t, c, e, 'right'), n(t, c, e, 'bottom'), n(t, c, e, 'left');
              }
            }
            function n(e, t, n, r) {
              return (
                (e = e ? e + 'px' : '0'),
                (t = t ? t + 'px' : '0'),
                (n = n ? n + 'px' : '0'),
                (r = r ? r + 'px' : '0'),
                'left: ' + e + '; top: ' + t + '; right: ' + r + '; bottom: ' + n + ';'
              );
            }
            if ((s('Injecting elements'), o(c))) {
              e();
              var r = o(c).container;
              r || (r = k());
              var i = a.width,
                l = a.height,
                p =
                  'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;',
                d =
                  'position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; ' +
                  n(-(1 + i), -(1 + l), -l, -i),
                h =
                  'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;',
                v =
                  'position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;',
                y = 'position: absolute; left: 0; top: 0;',
                m = 'position: absolute; width: 200%; height: 200%;',
                g = document.createElement('div'),
                b = document.createElement('div'),
                w = document.createElement('div'),
                x = document.createElement('div'),
                _ = document.createElement('div'),
                E = document.createElement('div');
              (g.dir = 'ltr'),
                (g.style.cssText = p),
                (g.className = u),
                (b.className = u),
                (b.style.cssText = d),
                (w.style.cssText = h),
                (x.style.cssText = y),
                (_.style.cssText = v),
                (E.style.cssText = m),
                w.appendChild(x),
                _.appendChild(E),
                b.appendChild(w),
                b.appendChild(_),
                g.appendChild(b),
                r.appendChild(g),
                f(w, 'scroll', O),
                f(_, 'scroll', M),
                (o(c).onExpandScroll = O),
                (o(c).onShrinkScroll = M);
            } else s('Aborting because element has been uninstalled');
            function O() {
              o(c).onExpand && o(c).onExpand();
            }
            function M() {
              o(c).onShrink && o(c).onShrink();
            }
          }
          function A() {
            function a(e, t, n) {
              var r = _(e),
                o = M(t),
                i = P(n);
              (r.style.width = o + 'px'), (r.style.height = i + 'px');
            }
            function u(r) {
              var u = c.offsetWidth,
                p = c.offsetHeight;
              s('Storing current size', u, p),
                x(c, u, p),
                n.add(0, function() {
                  if (o(c))
                    if (l()) {
                      if (e.debug) {
                        var n = c.offsetWidth,
                          r = c.offsetHeight;
                        (n === u && r === p) ||
                          t.warn(
                            i.get(c),
                            'Scroll: Size changed before updating detector elements.'
                          );
                      }
                      a(c, u, p);
                    } else s('Aborting because element container has not been initialized');
                  else s('Aborting because element has been uninstalled');
                }),
                n.add(1, function() {
                  o(c)
                    ? l()
                      ? j(c, u, p)
                      : s('Aborting because element container has not been initialized')
                    : s('Aborting because element has been uninstalled');
                }),
                r &&
                  n.add(2, function() {
                    o(c)
                      ? l()
                        ? r()
                        : s('Aborting because element container has not been initialized')
                      : s('Aborting because element has been uninstalled');
                  });
            }
            function l() {
              return !!o(c).container;
            }
            function p() {
              function e() {
                return void 0 === o(c).lastNotifiedWidth;
              }
              s('notifyListenersIfNeeded invoked');
              var t = o(c);
              return e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height
                ? s(
                    'Not notifying: Size is the same as the start size, and there has been no notification yet.'
                  )
                : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight
                ? s('Not notifying: Size already notified')
                : (s('Current size not notified, notifying...'),
                  (t.lastNotifiedWidth = t.lastWidth),
                  (t.lastNotifiedHeight = t.lastHeight),
                  void r(o(c).listeners, function(e) {
                    e(c);
                  }));
            }
            function f() {
              if ((s('startanimation triggered.'), y(c)))
                s('Ignoring since element is still unrendered...');
              else {
                s('Element rendered.');
                var e = h(c),
                  t = v(c);
                (0 !== e.scrollLeft &&
                  0 !== e.scrollTop &&
                  0 !== t.scrollLeft &&
                  0 !== t.scrollTop) ||
                  (s('Scrollbars out of sync. Updating detector elements...'), u(p));
              }
            }
            function d() {
              if ((s('Scroll detected.'), y(c)))
                s('Scroll event fired while unrendered. Ignoring...');
              else {
                var e = c.offsetWidth,
                  t = c.offsetHeight;
                e !== o(c).lastWidth || t !== o(c).lastHeight
                  ? (s('Element size changed.'), u(p))
                  : s('Element size has not changed (' + e + 'x' + t + ').');
              }
            }
            if ((s('registerListenersAndPositionElements invoked.'), o(c))) {
              (o(c).onRendered = f), (o(c).onExpand = d), (o(c).onShrink = d);
              var m = o(c).style;
              a(c, m.width, m.height);
            } else s('Aborting because element has been uninstalled');
          }
          function N() {
            if ((s('finalizeDomMutation invoked.'), o(c))) {
              var e = o(c).style;
              x(c, e.width, e.height), j(c, e.width, e.height);
            } else s('Aborting because element has been uninstalled');
          }
          function z() {
            l(c);
          }
          function W() {
            s('Installing...'),
              b(),
              g(),
              n.add(0, w),
              n.add(1, D),
              n.add(2, A),
              n.add(3, N),
              n.add(4, z);
          }
          l || ((l = c), (c = e), (e = null)),
            (e = e || {}),
            s('Making detectable...'),
            d(c)
              ? (s('Element is detached'),
                k(),
                s('Waiting until element is attached...'),
                (o(c).onRendered = function() {
                  s('Element is now attached'), W();
                }))
              : W();
        }
        function g(e) {
          var t = o(e);
          t &&
            (t.onExpandScroll && d(h(e), 'scroll', t.onExpandScroll),
            t.onShrinkScroll && d(v(e), 'scroll', t.onShrinkScroll),
            t.onAnimationStart && d(t.container, 'animationstart', t.onAnimationStart),
            t.container && e.removeChild(t.container));
        }
        return s(c, u), { makeDetectable: m, addListener: y, uninstall: g };
      };
    },
  },
]);
