(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    '+aGp': function(e, t, n) {
      'use strict';
      var r = /([A-Z])/g;
      function o(e) {
        return e.replace(r, '-$1').toLowerCase();
      }
      e.exports = o;
    },
    '/y+l': function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('8uQm'),
        a = n('JL7T'),
        l = n('dyxW'),
        s = n('U84a'),
        c = n('yxyD'),
        u = n('2NuI'),
        f = function(e, t) {
          return {
            key: e.getKey(),
            text: e.getText(),
            type: e.getType(),
            depth: e.getDepth(),
            inlineStyleRanges: c(e),
            entityRanges: s(e, t),
            data: e.getData().toObject(),
          };
        },
        d = function(e, t, n, r) {
          if (e instanceof i) n.push(f(e, t));
          else {
            e instanceof a || u(!1);
            var l = e.getParentKey(),
              s = (r[e.getKey()] = o({}, f(e, t), { children: [] }));
            l ? r[l].children.push(s) : n.push(s);
          }
        },
        p = function(e, t) {
          var n = t.entityMap,
            r = [],
            o = {},
            i = {},
            a = 0;
          return (
            e.getBlockMap().forEach(function(e) {
              e.findEntityRanges(
                function(e) {
                  return null !== e.getEntity();
                },
                function(t) {
                  var r = e.getEntityAt(t),
                    o = l.stringify(r);
                  i[o] || ((i[o] = r), (n[o] = '' + a), a++);
                }
              ),
                d(e, n, r, o);
            }),
            { blocks: r, entityMap: n }
          );
        },
        h = function(e, t) {
          var n = t.blocks,
            r = t.entityMap,
            o = {};
          return (
            Object.keys(r).forEach(function(t, n) {
              var r = e.getEntity(l.unstringify(t));
              o[n] = { type: r.getType(), mutability: r.getMutability(), data: r.getData() };
            }),
            { blocks: n, entityMap: o }
          );
        },
        g = function(e) {
          var t = { entityMap: {}, blocks: [] };
          return (t = p(e, t)), (t = h(e, t)), t;
        };
      e.exports = g;
    },
    '/y0H': function(e, t, n) {
      'use strict';
      var r = {
        getRemovalRange: function(e, t, n, r, o) {
          var i = n.split(' ');
          i = i.map(function(e, t) {
            if ('forward' === o) {
              if (t > 0) return ' ' + e;
            } else if (t < i.length - 1) return e + ' ';
            return e;
          });
          for (var a, l, s = r, c = null, u = null, f = 0; f < i.length; f++) {
            if (((l = i[f]), (a = s + l.length), e < a && s < t))
              null !== c ? (u = a) : ((c = s), (u = a));
            else if (null !== c) break;
            s = a;
          }
          var d = r + n.length,
            p = c === r,
            h = u === d;
          return (
            ((!p && h) || (p && !h)) && ('forward' === o ? u !== d && u++ : c !== r && c--),
            { start: c, end: u }
          );
        },
      };
      e.exports = r;
    },
    '0RQb': function(e, t, n) {
      'use strict';
      var r = n('3sOJ');
      function o(e) {
        var t = e.getSelection(),
          n = t.getEndKey(),
          o = e.getCurrentContent(),
          i = o.getBlockForKey(n).getLength();
        return r.set(e, {
          selection: t.merge({
            anchorKey: n,
            anchorOffset: i,
            focusKey: n,
            focusOffset: i,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      }
      e.exports = o;
    },
    '0TRD': function(e, t, n) {
      'use strict';
      e.exports = {
        BOLD: { fontWeight: 'bold' },
        CODE: { fontFamily: 'monospace', wordWrap: 'break-word' },
        ITALIC: { fontStyle: 'italic' },
        STRIKETHROUGH: { textDecoration: 'line-through' },
        UNDERLINE: { textDecoration: 'underline' },
      };
    },
    '158f': function(e, t, n) {
      'use strict';
      var r = n('CYTE'),
        o = n('2NuI'),
        i = r.isBrowser('Chrome');
      function a(e) {
        for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
          var i = r === e.commonAncestorContainer;
          i ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
          var a,
            l = Array.from(t.getClientRects());
          if ((n.push(l), i)) return n.reverse(), (a = []).concat.apply(a, n);
          t.setEndBefore(r);
        }
        o(!1);
      }
      var l = i
        ? a
        : function(e) {
            return Array.from(e.getClientRects());
          };
      e.exports = l;
    },
    '1Jbx': function(e, t, n) {
      'use strict';
      var r = n('h/2P'),
        o = n('JI+E'),
        i = n('jH4x'),
        a = n('YDMw'),
        l = n('e/Ok'),
        s = n('cmQj'),
        c = n('Y/kH'),
        u = n('pg4M'),
        f = n('jyDg'),
        d = n('C9ER'),
        p = n('kDkJ'),
        h = n('WJOU'),
        g = {
          onBeforeInput: r,
          onBlur: o,
          onCompositionStart: i,
          onCopy: a,
          onCut: l,
          onDragOver: s,
          onDragStart: c,
          onFocus: u,
          onInput: f,
          onKeyDown: d,
          onPaste: p,
          onSelect: h,
        };
      e.exports = g;
    },
    '1qq2': function(e, t, n) {
      'use strict';
      var r,
        o =
          i ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('MgzW');
      function a(e, t, n) {
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
      var l = n('lFJn'),
        s = n('8uQm'),
        c = n('JL7T'),
        u = n('rAV9'),
        f = n('TzU/'),
        d = n('cX45'),
        p = n('JPcv'),
        h = n('JPcv'),
        g = h.Set,
        m = n('Z9sL'),
        y = n('YVIB'),
        v = n('rJY1'),
        b = n('xocI'),
        A = n('2NuI'),
        S = n('HriT'),
        w = d.draft_tree_data_support,
        E = p.List,
        k = p.OrderedSet,
        x = '&nbsp;',
        C = ' ',
        _ = 4,
        I = new RegExp('\r', 'g'),
        O = new RegExp('\n', 'g'),
        T = new RegExp(x, 'g'),
        M = new RegExp('&#13;?', 'g'),
        D = new RegExp('&#8203;?', 'g'),
        B = ['bold', 'bolder', '500', '600', '700', '800', '900'],
        L = ['light', 'lighter', '100', '200', '300', '400'],
        N = {
          b: 'BOLD',
          code: 'CODE',
          del: 'STRIKETHROUGH',
          em: 'ITALIC',
          i: 'ITALIC',
          s: 'STRIKETHROUGH',
          strike: 'STRIKETHROUGH',
          strong: 'BOLD',
          u: 'UNDERLINE',
        },
        F =
          ((r = {}),
          a(r, y('public/DraftStyleDefault/depth0'), 0),
          a(r, y('public/DraftStyleDefault/depth1'), 1),
          a(r, y('public/DraftStyleDefault/depth2'), 2),
          a(r, y('public/DraftStyleDefault/depth3'), 3),
          a(r, y('public/DraftStyleDefault/depth4'), 4),
          r),
        R = ['className', 'href', 'rel', 'target', 'title'],
        P = ['alt', 'className', 'height', 'src', 'width'],
        K = void 0,
        j = { text: '', inlines: [], entities: [], blocks: [] },
        z = { children: E(), depth: 0, key: '', type: '' },
        U = function(e, t) {
          return 'li' === e ? ('ol' === t ? 'ordered-list-item' : 'unordered-list-item') : null;
        },
        H = function(e) {
          var t = e.get('unstyled').element,
            n = g([]);
          return (
            e.forEach(function(e) {
              e.aliasedElements &&
                e.aliasedElements.forEach(function(e) {
                  n = n.add(e);
                }),
                (n = n.add(e.element));
            }),
            n
              .filter(function(e) {
                return e && e !== t;
              })
              .toArray()
              .sort()
          );
        },
        V = function(e, t, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r](e, t);
            if (o) return o;
          }
          return null;
        },
        W = function(e, t, n) {
          var r = n
            .filter(function(t) {
              return (
                t.element === e ||
                t.wrapper === e ||
                (t.aliasedElements &&
                  t.aliasedElements.some(function(t) {
                    return t === e;
                  }))
              );
            })
            .keySeq()
            .toSet()
            .toArray()
            .sort();
          switch (r.length) {
            case 0:
              return 'unstyled';
            case 1:
              return r[0];
            default:
              return V(e, t, [U]) || 'unstyled';
          }
        },
        Q = function(e, t, n) {
          var r = N[e];
          if (r) n = n.add(r).toOrderedSet();
          else if (t instanceof HTMLElement) {
            var o = t;
            n = n
              .withMutations(function(e) {
                var t = o.style.fontWeight,
                  n = o.style.fontStyle,
                  r = o.style.textDecoration;
                B.indexOf(t) >= 0 ? e.add('BOLD') : L.indexOf(t) >= 0 && e.remove('BOLD'),
                  'italic' === n ? e.add('ITALIC') : 'normal' === n && e.remove('ITALIC'),
                  'underline' === r && e.add('UNDERLINE'),
                  'line-through' === r && e.add('STRIKETHROUGH'),
                  'none' === r && (e.remove('UNDERLINE'), e.remove('STRIKETHROUGH'));
              })
              .toOrderedSet();
          }
          return n;
        },
        q = function(e, t, n) {
          var r = e.text.slice(-1),
            o = t.text.slice(0, 1);
          if (
            ('\r' !== r ||
              '\r' !== o ||
              n ||
              ((e.text = e.text.slice(0, -1)), e.inlines.pop(), e.entities.pop(), e.blocks.pop()),
            '\r' === r)
          ) {
            if (t.text === C || '\n' === t.text) return e;
            (o !== C && '\n' !== o) ||
              ((t.text = t.text.slice(1)), t.inlines.shift(), t.entities.shift());
          }
          return {
            text: e.text + t.text,
            inlines: e.inlines.concat(t.inlines),
            entities: e.entities.concat(t.entities),
            blocks: e.blocks.concat(t.blocks),
          };
        },
        Y = function(e, t) {
          return t.some(function(t) {
            return -1 !== e.indexOf('<' + t);
          });
        },
        J = function(e) {
          e instanceof HTMLAnchorElement || A(!1);
          var t = e.protocol;
          return 'http:' === t || 'https:' === t || 'mailto:' === t;
        },
        G = function(e) {
          var t = new Array(1);
          return e && (t[0] = e), o({}, j, { text: C, inlines: [k()], entities: t });
        },
        X = function() {
          return o({}, j, { text: '\n', inlines: [k()], entities: new Array(1) });
        },
        Z = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return o({}, z, e);
        },
        $ = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          return {
            text: '\r',
            inlines: [k()],
            entities: new Array(1),
            blocks: [Z({ parent: n, key: v(), type: e, depth: Math.max(0, Math.min(_, t)) })],
          };
        },
        ee = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (
            Object.keys(F).some(function(n) {
              e.classList.contains(n) && (t = F[n]);
            }),
            t
          );
        },
        te = function e(t, n, r, i, a, l, s, c, u, d) {
          var p = K,
            h = n.nodeName.toLowerCase(),
            g = t,
            y = 'unstyled',
            v = !1,
            b = a && W(a, i, c),
            A = o({}, j),
            S = null,
            E = void 0;
          if ('#text' === h) {
            var k = n.textContent,
              x = k.trim();
            if (i && '' === x && n.parentElement) {
              var _ = n.parentElement.nodeName.toLowerCase();
              if ('ol' === _ || 'ul' === _) return { chunk: o({}, j), entityMap: t };
            }
            return '' === x && 'pre' !== a
              ? { chunk: G(u), entityMap: t }
              : ('pre' !== a && (k = k.replace(O, C)),
                (K = h),
                {
                  chunk: {
                    text: k,
                    inlines: Array(k.length).fill(r),
                    entities: Array(k.length).fill(u),
                    blocks: [],
                  },
                  entityMap: t,
                });
          }
          if (((K = h), 'br' === h))
            return 'br' !== p || (a && 'unstyled' !== b)
              ? { chunk: X(), entityMap: t }
              : { chunk: $('unstyled', s, d), entityMap: t };
          if (
            'img' === h &&
            n instanceof HTMLImageElement &&
            n.attributes.getNamedItem('src') &&
            n.attributes.getNamedItem('src').value
          ) {
            var I = n,
              T = {};
            P.forEach(function(e) {
              var t = I.getAttribute(e);
              t && (T[e] = t);
            }),
              (n.textContent = '\ud83d\udcf7'),
              (u = f.__create('IMAGE', 'MUTABLE', T || {}));
          }
          (r = Q(h, n, r)),
            ('ul' !== h && 'ol' !== h) || (i && (s += 1), (i = h)),
            !w && 'li' === h && n instanceof HTMLElement && (s = ee(n, s));
          var M = W(h, i, c),
            D = i && 'li' === a && 'li' === h,
            B = (!a || w) && -1 !== l.indexOf(h);
          (D || B) && ((A = $(M, s, d)), (E = A.blocks[0].key), (a = h), (v = !w)),
            D && (y = 'ul' === i ? 'unordered-list-item' : 'ordered-list-item');
          var L = n.firstChild;
          null != L && (h = L.nodeName.toLowerCase());
          var N = null;
          while (L) {
            L instanceof HTMLAnchorElement && L.href && J(L)
              ? (function() {
                  var e = L,
                    t = {};
                  R.forEach(function(n) {
                    var r = e.getAttribute(n);
                    r && (t[n] = r);
                  }),
                    (t.url = new m(e.href).toString()),
                    (N = f.__create('LINK', 'MUTABLE', t || {}));
                })()
              : (N = void 0);
            var F = e(g, L, r, i, a, l, s, c, N || u, w ? E : null),
              z = F.chunk,
              U = F.entityMap;
            (S = z), (g = U), (A = q(A, S, w));
            var H = L.nextSibling;
            !d && H && l.indexOf(h) >= 0 && a && (A = q(A, X())),
              H && (h = H.nodeName.toLowerCase()),
              (L = H);
          }
          return v && (A = q(A, $(y, s, d))), { chunk: A, entityMap: g };
        },
        ne = function(e, t, n, r) {
          e = e
            .trim()
            .replace(I, '')
            .replace(T, C)
            .replace(M, '')
            .replace(D, '');
          var i = H(n),
            a = t(e);
          if (!a) return null;
          K = null;
          var l = Y(e, i) ? i : ['div'],
            s = te(r, a, k(), 'ul', null, l, -1, n),
            c = s.chunk,
            u = s.entityMap;
          return (
            0 === c.text.indexOf('\r') &&
              (c = {
                text: c.text.slice(1),
                inlines: c.inlines.slice(1),
                entities: c.entities.slice(1),
                blocks: c.blocks,
              }),
            '\r' === c.text.slice(-1) &&
              ((c.text = c.text.slice(0, -1)),
              (c.inlines = c.inlines.slice(0, -1)),
              (c.entities = c.entities.slice(0, -1)),
              c.blocks.pop()),
            0 === c.blocks.length && c.blocks.push(o({}, j, { type: 'unstyled', depth: 0 })),
            c.text.split('\r').length === c.blocks.length + 1 &&
              c.blocks.unshift({ type: 'unstyled', depth: 0 }),
            { chunk: c, entityMap: u }
          );
        },
        re = function(e) {
          if (!e || !e.text || !Array.isArray(e.blocks)) return null;
          var t = { cacheRef: {}, contentBlocks: [] },
            n = 0,
            r = e.blocks,
            o = e.inlines,
            i = e.entities,
            a = w ? c : s;
          return e.text.split('\r').reduce(function(e, t, s) {
            t = S(t);
            var u = r[s],
              f = n + t.length,
              d = o.slice(n, f),
              p = i.slice(n, f),
              h = E(
                d.map(function(e, t) {
                  var n = { style: e, entity: null };
                  return p[t] && (n.entity = p[t]), l.create(n);
                })
              );
            n = f + 1;
            var g = u.depth,
              m = u.type,
              y = u.parent,
              b = u.key || v(),
              A = null;
            if (y) {
              var w = e.cacheRef[y],
                k = e.contentBlocks[w];
              if (k.getChildKeys().isEmpty() && k.getText()) {
                var x = k.getCharacterList(),
                  C = k.getText();
                A = v();
                var _ = new c({ key: A, text: C, characterList: x, parent: y, nextSibling: b });
                e.contentBlocks.push(_),
                  (k = k.withMutations(function(e) {
                    e.set('characterList', E())
                      .set('text', '')
                      .set('children', k.children.push(_.getKey()));
                  }));
              }
              e.contentBlocks[w] = k.set('children', k.children.push(b));
            }
            var I = new a({
              key: b,
              parent: y,
              type: m,
              depth: g,
              text: t,
              characterList: h,
              prevSibling: A || (0 === s || r[s - 1].parent !== y ? null : r[s - 1].key),
              nextSibling: s === r.length - 1 || r[s + 1].parent !== y ? null : r[s + 1].key,
            });
            return e.contentBlocks.push(I), (e.cacheRef[I.key] = s), e;
          }, t).contentBlocks;
        },
        oe = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
            r = ne(e, t, n, f);
          if (null == r) return null;
          var o = r.chunk,
            i = r.entityMap,
            a = re(o);
          return { contentBlocks: a, entityMap: i };
        };
      e.exports = oe;
    },
    '3Br+': function(e, t, n) {
      'use strict';
      var r = n('3sOJ'),
        o = n('jLRO'),
        i = n('kWjT'),
        a = n('8d//');
      function l(e) {
        var t = a(
          e,
          function(e) {
            var t = e.getSelection(),
              n = e.getCurrentContent(),
              r = t.getAnchorKey(),
              a = t.getAnchorOffset(),
              l = n.getBlockForKey(r).getText()[a - 1];
            return i(e, l ? o.getUTF16Length(l, 0) : 1);
          },
          'backward'
        );
        if (t === e.getCurrentContent()) return e;
        var n = e.getSelection();
        return r.push(
          e,
          t.set('selectionBefore', n),
          n.isCollapsed() ? 'backspace-character' : 'remove-range'
        );
      }
      e.exports = l;
    },
    '3sOJ': function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var a = n('L0q3'),
        l = n('LpQA'),
        s = n('VSmT'),
        c = n('JPcv'),
        u = n('hMpd'),
        f = c.OrderedSet,
        d = c.Record,
        p = c.Stack,
        h = {
          allowUndo: !0,
          currentContent: null,
          decorator: null,
          directionMap: null,
          forceSelection: !1,
          inCompositionMode: !1,
          inlineStyleOverride: null,
          lastChangeType: null,
          nativelyRenderedContent: null,
          redoStack: p(),
          selection: null,
          treeMap: null,
          undoStack: p(),
        },
        g = d(h),
        m = (function() {
          function e(t) {
            i(this, e), (this._immutable = t);
          }
          return (
            (e.createEmpty = function(t) {
              return e.createWithContent(l.createFromText(''), t);
            }),
            (e.createWithContent = function(t, n) {
              var r = t
                .getBlockMap()
                .first()
                .getKey();
              return e.create({
                currentContent: t,
                undoStack: p(),
                redoStack: p(),
                decorator: n || null,
                selection: u.createEmpty(r),
              });
            }),
            (e.create = function(t) {
              var n = t.currentContent,
                r = t.decorator,
                i = o({}, t, { treeMap: v(n, r), directionMap: s.getDirectionMap(n) });
              return new e(new g(i));
            }),
            (e.set = function(t, n) {
              var r = t.getImmutable().withMutations(function(e) {
                var r = e.get('decorator'),
                  o = r;
                null === n.decorator ? (o = null) : n.decorator && (o = n.decorator);
                var i = n.currentContent || t.getCurrentContent();
                if (o !== r) {
                  var a,
                    l = e.get('treeMap');
                  return (
                    (a = o && r ? A(i, i.getBlockMap(), l, o, r) : v(i, o)),
                    void e.merge({ decorator: o, treeMap: a, nativelyRenderedContent: null })
                  );
                }
                var s = t.getCurrentContent();
                i !== s && e.set('treeMap', b(t, i.getBlockMap(), i.getEntityMap(), o)), e.merge(n);
              });
              return new e(r);
            }),
            (e.prototype.toJS = function() {
              return this.getImmutable().toJS();
            }),
            (e.prototype.getAllowUndo = function() {
              return this.getImmutable().get('allowUndo');
            }),
            (e.prototype.getCurrentContent = function() {
              return this.getImmutable().get('currentContent');
            }),
            (e.prototype.getUndoStack = function() {
              return this.getImmutable().get('undoStack');
            }),
            (e.prototype.getRedoStack = function() {
              return this.getImmutable().get('redoStack');
            }),
            (e.prototype.getSelection = function() {
              return this.getImmutable().get('selection');
            }),
            (e.prototype.getDecorator = function() {
              return this.getImmutable().get('decorator');
            }),
            (e.prototype.isInCompositionMode = function() {
              return this.getImmutable().get('inCompositionMode');
            }),
            (e.prototype.mustForceSelection = function() {
              return this.getImmutable().get('forceSelection');
            }),
            (e.prototype.getNativelyRenderedContent = function() {
              return this.getImmutable().get('nativelyRenderedContent');
            }),
            (e.prototype.getLastChangeType = function() {
              return this.getImmutable().get('lastChangeType');
            }),
            (e.prototype.getInlineStyleOverride = function() {
              return this.getImmutable().get('inlineStyleOverride');
            }),
            (e.setInlineStyleOverride = function(t, n) {
              return e.set(t, { inlineStyleOverride: n });
            }),
            (e.prototype.getCurrentInlineStyle = function() {
              var e = this.getInlineStyleOverride();
              if (null != e) return e;
              var t = this.getCurrentContent(),
                n = this.getSelection();
              return n.isCollapsed() ? w(t, n) : E(t, n);
            }),
            (e.prototype.getBlockTree = function(e) {
              return this.getImmutable().getIn(['treeMap', e]);
            }),
            (e.prototype.isSelectionAtStartOfContent = function() {
              var e = this.getCurrentContent()
                .getBlockMap()
                .first()
                .getKey();
              return this.getSelection().hasEdgeWithin(e, 0, 0);
            }),
            (e.prototype.isSelectionAtEndOfContent = function() {
              var e = this.getCurrentContent(),
                t = e.getBlockMap(),
                n = t.last(),
                r = n.getLength();
              return this.getSelection().hasEdgeWithin(n.getKey(), r, r);
            }),
            (e.prototype.getDirectionMap = function() {
              return this.getImmutable().get('directionMap');
            }),
            (e.acceptSelection = function(e, t) {
              return y(e, t, !1);
            }),
            (e.forceSelection = function(e, t) {
              return t.getHasFocus() || (t = t.set('hasFocus', !0)), y(e, t, !0);
            }),
            (e.moveSelectionToEnd = function(t) {
              var n = t.getCurrentContent(),
                r = n.getLastBlock(),
                o = r.getKey(),
                i = r.getLength();
              return e.acceptSelection(
                t,
                new u({
                  anchorKey: o,
                  anchorOffset: i,
                  focusKey: o,
                  focusOffset: i,
                  isBackward: !1,
                })
              );
            }),
            (e.moveFocusToEnd = function(t) {
              var n = e.moveSelectionToEnd(t);
              return e.forceSelection(n, n.getSelection());
            }),
            (e.push = function(t, n, r) {
              if (t.getCurrentContent() === n) return t;
              var o = 'insert-characters' !== r,
                i = s.getDirectionMap(n, t.getDirectionMap());
              if (!t.getAllowUndo())
                return e.set(t, {
                  currentContent: n,
                  directionMap: i,
                  lastChangeType: r,
                  selection: n.getSelectionAfter(),
                  forceSelection: o,
                  inlineStyleOverride: null,
                });
              var a = t.getSelection(),
                l = t.getCurrentContent(),
                c = t.getUndoStack(),
                u = n;
              a !== l.getSelectionAfter() || S(t, r)
                ? ((c = c.push(l)), (u = u.set('selectionBefore', a)))
                : ('insert-characters' !== r &&
                    'backspace-character' !== r &&
                    'delete-character' !== r) ||
                  (u = u.set('selectionBefore', l.getSelectionBefore()));
              var f = t.getInlineStyleOverride(),
                d = ['adjust-depth', 'change-block-type', 'split-block'];
              -1 === d.indexOf(r) && (f = null);
              var h = {
                currentContent: u,
                directionMap: i,
                undoStack: c,
                redoStack: p(),
                lastChangeType: r,
                selection: n.getSelectionAfter(),
                forceSelection: o,
                inlineStyleOverride: f,
              };
              return e.set(t, h);
            }),
            (e.undo = function(t) {
              if (!t.getAllowUndo()) return t;
              var n = t.getUndoStack(),
                r = n.peek();
              if (!r) return t;
              var o = t.getCurrentContent(),
                i = s.getDirectionMap(r, t.getDirectionMap());
              return e.set(t, {
                currentContent: r,
                directionMap: i,
                undoStack: n.shift(),
                redoStack: t.getRedoStack().push(o),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'undo',
                nativelyRenderedContent: null,
                selection: o.getSelectionBefore(),
              });
            }),
            (e.redo = function(t) {
              if (!t.getAllowUndo()) return t;
              var n = t.getRedoStack(),
                r = n.peek();
              if (!r) return t;
              var o = t.getCurrentContent(),
                i = s.getDirectionMap(r, t.getDirectionMap());
              return e.set(t, {
                currentContent: r,
                directionMap: i,
                undoStack: t.getUndoStack().push(o),
                redoStack: n.shift(),
                forceSelection: !0,
                inlineStyleOverride: null,
                lastChangeType: 'redo',
                nativelyRenderedContent: null,
                selection: r.getSelectionAfter(),
              });
            }),
            (e.prototype.getImmutable = function() {
              return this._immutable;
            }),
            e
          );
        })();
      function y(e, t, n) {
        return m.set(e, {
          selection: t,
          forceSelection: n,
          nativelyRenderedContent: null,
          inlineStyleOverride: null,
        });
      }
      function v(e, t) {
        return e
          .getBlockMap()
          .map(function(n) {
            return a.generate(e, n, t);
          })
          .toOrderedMap();
      }
      function b(e, t, n, r) {
        var o = e.getCurrentContent().set('entityMap', n),
          i = o.getBlockMap(),
          l = e.getImmutable().get('treeMap');
        return l.merge(
          t
            .toSeq()
            .filter(function(e, t) {
              return e !== i.get(t);
            })
            .map(function(e) {
              return a.generate(o, e, r);
            })
        );
      }
      function A(e, t, n, r, o) {
        return n.merge(
          t
            .toSeq()
            .filter(function(t) {
              return r.getDecorations(t, e) !== o.getDecorations(t, e);
            })
            .map(function(t) {
              return a.generate(e, t, r);
            })
        );
      }
      function S(e, t) {
        var n = e.getLastChangeType();
        return (
          t !== n ||
          ('insert-characters' !== t && 'backspace-character' !== t && 'delete-character' !== t)
        );
      }
      function w(e, t) {
        var n = t.getStartKey(),
          r = t.getStartOffset(),
          o = e.getBlockForKey(n);
        return r > 0 ? o.getInlineStyleAt(r - 1) : o.getLength() ? o.getInlineStyleAt(0) : k(e, n);
      }
      function E(e, t) {
        var n = t.getStartKey(),
          r = t.getStartOffset(),
          o = e.getBlockForKey(n);
        return r < o.getLength()
          ? o.getInlineStyleAt(r)
          : r > 0
          ? o.getInlineStyleAt(r - 1)
          : k(e, n);
      }
      function k(e, t) {
        var n = e
          .getBlockMap()
          .reverse()
          .skipUntil(function(e, n) {
            return n === t;
          })
          .skip(1)
          .skipUntil(function(e, t) {
            return e.getLength();
          })
          .first();
        return n ? n.getInlineStyleAt(n.getLength() - 1) : f();
      }
      e.exports = m;
    },
    '5RSi': function(e, t, n) {
      'use strict';
      var r = n('Iq8E'),
        o = n('gWRK');
      function i(e, t, n, i, a) {
        var l = o(e.getSelection());
        var s = r.decode(t),
          c = s.blockKey,
          u = e.getBlockTree(c).getIn([s.decoratorKey, 'leaves', s.leafKey]),
          f = r.decode(i),
          d = f.blockKey,
          p = e.getBlockTree(d).getIn([f.decoratorKey, 'leaves', f.leafKey]),
          h = u.get('start'),
          g = p.get('start'),
          m = u ? h + n : null,
          y = p ? g + a : null,
          v =
            l.getAnchorKey() === c &&
            l.getAnchorOffset() === m &&
            l.getFocusKey() === d &&
            l.getFocusOffset() === y;
        if (v) return l;
        var b = !1;
        if (c === d) {
          var A = u.get('end'),
            S = p.get('end');
          b = g === h && S === A ? a < n : g < h;
        } else {
          var w = e
            .getCurrentContent()
            .getBlockMap()
            .keySeq()
            .skipUntil(function(e) {
              return e === c || e === d;
            })
            .first();
          b = w === d;
        }
        return l.merge({
          anchorKey: c,
          anchorOffset: m,
          focusKey: d,
          focusOffset: y,
          isBackward: b,
        });
      }
      e.exports = i;
    },
    '6Xrj': function(e, t, n) {
      'use strict';
      var r = n('S5bm');
      function o(e, t) {
        var n = i.get(e, t);
        return 'auto' === n || 'scroll' === n;
      }
      var i = {
        get: r,
        getScrollParent: function(e) {
          if (!e) return null;
          var t = e.ownerDocument;
          while (e && e !== t.body) {
            if (o(e, 'overflow') || o(e, 'overflowY') || o(e, 'overflowX')) return e;
            e = e.parentNode;
          }
          return t.defaultView || t.parentWindow;
        },
      };
      e.exports = i;
    },
    '6tyx': function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var s = n('rAV9'),
        c = n('0TRD'),
        u = n('jl1W'),
        f = n('Idtq'),
        d = n('ISR0'),
        p = n('1Jbx'),
        h = n('Hdlu'),
        g = n('3sOJ'),
        m = n('q1tI'),
        y = n('i8i4'),
        v = n('prOm'),
        b = n('6Xrj'),
        A = n('CYTE'),
        S = n('YVIB'),
        w = n('ohE5'),
        E = n('rJY1'),
        k = n('AyB5'),
        x = n('DeIs'),
        C = n('2NuI'),
        _ = n('gWRK'),
        I = A.isBrowser('IE'),
        O = !I,
        T = { edit: p, composite: u, drag: d, cut: null, render: null },
        M = (function(e) {
          function t(n) {
            i(this, t);
            var r = a(this, e.call(this, n));
            return (
              (r.focus = function(e) {
                var t = r.props.editorState,
                  n = t.getSelection().getHasFocus(),
                  o = y.findDOMNode(r.editor);
                if (o) {
                  var i = b.getScrollParent(o),
                    a = e || x(i),
                    l = a.x,
                    s = a.y;
                  o instanceof HTMLElement || C(!1),
                    o.focus(),
                    i === window ? window.scrollTo(l, s) : v.setTop(i, s),
                    n || r.update(g.forceSelection(t, t.getSelection()));
                }
              }),
              (r.blur = function() {
                var e = y.findDOMNode(r.editor);
                e instanceof HTMLElement || C(!1), e.blur();
              }),
              (r.setMode = function(e) {
                r._handler = T[e];
              }),
              (r.exitCurrentMode = function() {
                r.setMode('edit');
              }),
              (r.restoreEditorDOM = function(e) {
                r.setState({ contentsKey: r.state.contentsKey + 1 }, function() {
                  r.focus(e);
                });
              }),
              (r.setClipboard = function(e) {
                r._clipboard = e;
              }),
              (r.getClipboard = function() {
                return r._clipboard;
              }),
              (r.update = function(e) {
                (r._latestEditorState = e), r.props.onChange(e);
              }),
              (r.onDragEnter = function() {
                r._dragCount++;
              }),
              (r.onDragLeave = function() {
                r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
              }),
              (r._blockSelectEvents = !1),
              (r._clipboard = null),
              (r._handler = null),
              (r._dragCount = 0),
              (r._editorKey = n.editorKey || E()),
              (r._placeholderAccessibilityID = 'placeholder-' + r._editorKey),
              (r._latestEditorState = n.editorState),
              (r._latestCommittedEditorState = n.editorState),
              (r._onBeforeInput = r._buildHandler('onBeforeInput')),
              (r._onBlur = r._buildHandler('onBlur')),
              (r._onCharacterData = r._buildHandler('onCharacterData')),
              (r._onCompositionEnd = r._buildHandler('onCompositionEnd')),
              (r._onCompositionStart = r._buildHandler('onCompositionStart')),
              (r._onCopy = r._buildHandler('onCopy')),
              (r._onCut = r._buildHandler('onCut')),
              (r._onDragEnd = r._buildHandler('onDragEnd')),
              (r._onDragOver = r._buildHandler('onDragOver')),
              (r._onDragStart = r._buildHandler('onDragStart')),
              (r._onDrop = r._buildHandler('onDrop')),
              (r._onInput = r._buildHandler('onInput')),
              (r._onFocus = r._buildHandler('onFocus')),
              (r._onKeyDown = r._buildHandler('onKeyDown')),
              (r._onKeyPress = r._buildHandler('onKeyPress')),
              (r._onKeyUp = r._buildHandler('onKeyUp')),
              (r._onMouseDown = r._buildHandler('onMouseDown')),
              (r._onMouseUp = r._buildHandler('onMouseUp')),
              (r._onPaste = r._buildHandler('onPaste')),
              (r._onSelect = r._buildHandler('onSelect')),
              (r.getEditorKey = function() {
                return r._editorKey;
              }),
              (r.state = { contentsKey: 0 }),
              r
            );
          }
          return (
            l(t, e),
            (t.prototype._buildHandler = function(e) {
              var t = this;
              return function(n) {
                if (!t.props.readOnly) {
                  var r = t._handler && t._handler[e];
                  r && r(t, n);
                }
              };
            }),
            (t.prototype._showPlaceholder = function() {
              return (
                !!this.props.placeholder &&
                !this.props.editorState.isInCompositionMode() &&
                !this.props.editorState.getCurrentContent().hasText()
              );
            }),
            (t.prototype._renderPlaceholder = function() {
              if (this._showPlaceholder()) {
                var e = {
                  text: _(this.props.placeholder),
                  editorState: this.props.editorState,
                  textAlignment: this.props.textAlignment,
                  accessibilityID: this._placeholderAccessibilityID,
                };
                return m.createElement(h, e);
              }
              return null;
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                n = t.blockRenderMap,
                r = t.blockRendererFn,
                i = t.blockStyleFn,
                a = t.customStyleFn,
                l = t.customStyleMap,
                s = t.editorState,
                u = t.readOnly,
                d = t.textAlignment,
                p = t.textDirectionality,
                h = S({
                  'DraftEditor/root': !0,
                  'DraftEditor/alignLeft': 'left' === d,
                  'DraftEditor/alignRight': 'right' === d,
                  'DraftEditor/alignCenter': 'center' === d,
                }),
                g = {
                  outline: 'none',
                  userSelect: 'text',
                  WebkitUserSelect: 'text',
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                },
                y = this.props.role || 'textbox',
                v = 'combobox' === y ? !!this.props.ariaExpanded : null,
                b = {
                  blockRenderMap: n,
                  blockRendererFn: r,
                  blockStyleFn: i,
                  customStyleMap: o({}, c, l),
                  customStyleFn: a,
                  editorKey: this._editorKey,
                  editorState: s,
                  key: 'contents' + this.state.contentsKey,
                  textDirectionality: p,
                };
              return m.createElement(
                'div',
                { className: h },
                this._renderPlaceholder(),
                m.createElement(
                  'div',
                  {
                    className: S('DraftEditor/editorContainer'),
                    ref: function(t) {
                      return (e.editorContainer = t);
                    },
                  },
                  m.createElement(
                    'div',
                    {
                      'aria-activedescendant': u ? null : this.props.ariaActiveDescendantID,
                      'aria-autocomplete': u ? null : this.props.ariaAutoComplete,
                      'aria-controls': u ? null : this.props.ariaControls,
                      'aria-describedby':
                        this.props.ariaDescribedBy || this._placeholderAccessibilityID,
                      'aria-expanded': u ? null : v,
                      'aria-label': this.props.ariaLabel,
                      'aria-labelledby': this.props.ariaLabelledBy,
                      'aria-multiline': this.props.ariaMultiline,
                      autoCapitalize: this.props.autoCapitalize,
                      autoComplete: this.props.autoComplete,
                      autoCorrect: this.props.autoCorrect,
                      className: S({ notranslate: !u, 'public/DraftEditor/content': !0 }),
                      contentEditable: !u,
                      'data-testid': this.props.webDriverTestID,
                      onBeforeInput: this._onBeforeInput,
                      onBlur: this._onBlur,
                      onCompositionEnd: this._onCompositionEnd,
                      onCompositionStart: this._onCompositionStart,
                      onCopy: this._onCopy,
                      onCut: this._onCut,
                      onDragEnd: this._onDragEnd,
                      onDragEnter: this.onDragEnter,
                      onDragLeave: this.onDragLeave,
                      onDragOver: this._onDragOver,
                      onDragStart: this._onDragStart,
                      onDrop: this._onDrop,
                      onFocus: this._onFocus,
                      onInput: this._onInput,
                      onKeyDown: this._onKeyDown,
                      onKeyPress: this._onKeyPress,
                      onKeyUp: this._onKeyUp,
                      onMouseUp: this._onMouseUp,
                      onPaste: this._onPaste,
                      onSelect: this._onSelect,
                      ref: function(t) {
                        return (e.editor = t);
                      },
                      role: u ? null : y,
                      spellCheck: O && this.props.spellCheck,
                      style: g,
                      suppressContentEditableWarning: !0,
                      tabIndex: this.props.tabIndex,
                    },
                    m.createElement(f, b)
                  )
                )
              );
            }),
            (t.prototype.componentDidMount = function() {
              this.setMode('edit'), I && document.execCommand('AutoUrlDetect', !1, !1);
            }),
            (t.prototype.componentWillUpdate = function(e) {
              (this._blockSelectEvents = !0), (this._latestEditorState = e.editorState);
            }),
            (t.prototype.componentDidUpdate = function() {
              (this._blockSelectEvents = !1),
                (this._latestCommittedEditorState = this.props.editorState);
            }),
            t
          );
        })(m.Component);
      (M.defaultProps = {
        blockRenderMap: s,
        blockRendererFn: w.thatReturnsNull,
        blockStyleFn: w.thatReturns(''),
        keyBindingFn: k,
        readOnly: !1,
        spellCheck: !1,
        stripPastedStyles: !1,
      }),
        (e.exports = M);
    },
    '6xfc': function(e, t, n) {
      (function(t, r) {
        e.exports = r(n('q1tI'));
      })(window, function(e) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e['default'];
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, 'a', t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = '/'),
            n((n.s = 20))
          );
        })([
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            t.compressImage = function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1280,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 800;
              return new Promise(function(r, o) {
                var i = new Image();
                (i.src = e),
                  (i.onerror = function(e) {
                    o(e);
                  }),
                  (i.onload = function() {
                    try {
                      var e = document.createElement('canvas'),
                        i =
                          this.width > t || this.height > n
                            ? this.width > this.height
                              ? t / this.width
                              : n / this.height
                            : 1;
                      (e.width = this.width * i), (e.height = this.height * i);
                      var a = e.getContext('2d');
                      a.drawImage(this, 0, 0, e.width, e.height),
                        r({ url: e.toDataURL('image/png', 1), width: e.width, height: e.height });
                    } catch (e) {
                      o(e);
                    }
                  });
              });
            };
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            t.UniqueIndex = function() {
              return (
                isNaN(window.__BRAFT_MM_UNIQUE_INDEX__)
                  ? (window.__BRAFT_MM_UNIQUE_INDEX__ = 1)
                  : (window.__BRAFT_MM_UNIQUE_INDEX__ += 1),
                window.__BRAFT_MM_UNIQUE_INDEX__
              );
            };
          },
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: 'Kald\u0131r',
                cancel: '\u0130ptal',
                confirm: 'Onayla',
                insert: 'Se\xe7ilenleri ekle',
                width: 'Geni\u015flik',
                height: 'Y\xfckseklik',
                image: 'Resim',
                video: 'G\xf6r\xfcnt\xfc',
                audio: 'Ses',
                embed: 'Nesne g\xf6m',
                caption: 'Kitapl\u0131k',
                dragTip: 'T\u0131kla ya da dosya s\xfcr\xfckle',
                dropTip: 'Y\xfcklemek i\xe7in s\xfcr\xfckleyin',
                selectAll: 'T\xfcm\xfcn\xfc se\xe7',
                deselect: 'Se\xe7imi kald\u0131r',
                removeSelected: 'Se\xe7ilenleri kald\u0131r',
                externalInputPlaceHolder: 'Kaynak ad\u0131|Kaynak ba\u011flant\u0131s\u0131',
                externalInputTip:
                  'Kaynak as\u0131n\u0131 ve ba\u011flant\u0131s\u0131n\u0131 "|" ile ay\u0131r\u0131n ve Enter\' a bas\u0131n.',
                addLocalFile: "Yerel' den ekle",
                addExternalSource: 'Harici kaynaktan ekle',
                unnamedItem: 'Adland\u0131r\u0131lmam\u0131\u015f giri\u015f',
                confirmInsert: 'Se\xe7ilenleri ekle',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: '\u524a\u9664\u3059\u308b',
                cancel: '\u30ad\u30e3\u30f3\u30bb\u30eb',
                confirm: '\u78ba\u8a8d\u3059\u308b',
                insert: '\u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u633f\u5165',
                width: '\u5e45',
                height: '\u8eab\u9577',
                image: '\u7d75',
                video: '\u30d3\u30c7\u30aa',
                audio: '\u97f3\u58f0',
                embed: '\u57cb\u3081\u8fbc\u307f\u30e1\u30c7\u30a3\u30a2',
                caption: '\u30e1\u30c7\u30a3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc',
                dragTip:
                  '\u30d5\u30a1\u30a4\u30eb\u3092\u3053\u306e\u4f4d\u7f6e\u307e\u3067\u30af\u30ea\u30c3\u30af\u307e\u305f\u306f\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059',
                dropTip:
                  '\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u30de\u30a6\u30b9\u3092\u653e\u3057\u307e\u3059',
                selectAll: '\u3059\u3079\u3066\u9078\u629e',
                deselect: '\u9078\u629e\u3092\u89e3\u9664',
                removeSelected:
                  '\u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u524a\u9664',
                externalInputPlaceHolder:
                  '\u30ea\u30bd\u30fc\u30b9\u540d|\u30ea\u30bd\u30fc\u30b9\u30a2\u30c9\u30ec\u30b9',
                externalInputTip:
                  '\u30ea\u30bd\u30fc\u30b9\u540d\u3068\u30ea\u30bd\u30fc\u30b9\u30a2\u30c9\u30ec\u30b9\u306f "|"\u3067\u533a\u5207\u308a\u307e\u3059\u3002',
                addLocalFile:
                  '\u30ed\u30fc\u30ab\u30eb\u30ea\u30bd\u30fc\u30b9\u3092\u8ffd\u52a0\u3059\u308b',
                addExternalSource:
                  '\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30ea\u30bd\u30fc\u30b9\u3092\u8ffd\u52a0\u3059\u308b',
                unnamedItem: '\u540d\u524d\u306e\u306a\u3044\u30a2\u30a4\u30c6\u30e0',
                confirmInsert: '\u9078\u629e\u3057\u305f\u30a2\u30a4\u30c6\u30e0\u3092\u633f\u5165',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: '\uc0ad\uc81c',
                cancel: '\ucde8\uc18c',
                confirm: '\ud655\uc778',
                insert: '\uc120\ud0dd\ud55c\ud56d\ubaa9\uc0bd\uc785',
                width: '\ub108\ube44',
                height: '\ub192\uc774',
                image: '\uadf8\ub9bc',
                video: '\ube44\ub514\uc624',
                audio: '\uc624\ub514\uc624',
                embed: '\uc784\ubca0\ub514\ub4dc\ubbf8\ub514\uc5b4',
                caption: '\ubbf8\ub514\uc5b4\ub77c\uc774\ube0c\ub7ec\ub9ac',
                dragTip:
                  '\ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uac70\ub098\uc774 \uc9c0\uc810\uc73c\ub85c \ub4dc\ub798\uadf8\ud558\uc2ed\uc2dc\uc624.',
                dropTip:
                  '\uc5c5\ub85c\ub4dc\ud558\ub824\uba74\ub9c8\uc6b0\uc2a4\ub97c\ub193\uc73c\uc2ed\uc2dc\uc624.',
                selectAll: '\ubaa8\ub450 \uc120\ud0dd',
                deselect: '\uc120\ud0dd \ucde8\uc18c',
                removeSelected: '\uc120\ud0dd\ud55c \ud56d\ubaa9 \uc0ad\uc81c',
                externalInputPlaceHolder:
                  '\ub9ac\uc18c\uc2a4 \uc774\ub984 | \ub9ac\uc18c\uc2a4 \uc8fc\uc18c',
                externalInputTip:
                  '\uc790\uc6d0 \uc774\ub984\uacfc \uc790\uc6d0 \uc8fc\uc18c\ub97c "|"',
                addLocalFile: '\ub85c\uceec \ub9ac\uc18c\uc2a4 \ucd94\uac00',
                addExternalSource: '\ub124\ud2b8\uc6cc\ud06c \ub9ac\uc18c\uc2a4 \ucd94\uac00',
                unnamedItem: '\uc774\ub984\uc5c6\ub294 \ud56d\ubaa9',
                confirmInsert: '\uc120\ud0dd\ud55c \ud56d\ubaa9 \uc0bd\uc785',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: 'Usu\u0144',
                cancel: 'Anuluj',
                confirm: 'Potwierd\u017a',
                insert: 'Wstaw wybrane elementy',
                width: 'Szeroko\u015b\u0107',
                height: 'Wysoko\u015b\u0107',
                image: 'Obraz',
                video: 'Wideo',
                audio: 'D\u017awi\u0119k',
                embed: 'Obiekt',
                caption: 'Biblioteka medi\xf3w',
                dragTip: 'Kliknij lub przenie\u015b tu pliki',
                dropTip: 'Upu\u015b\u0107 aby doda\u0107 plik',
                selectAll: 'Zaznacz wszystko',
                deselect: 'Odznacz',
                removeSelected: 'Usu\u0144 wybrane',
                externalInputPlaceHolder: 'Nazwa \u017ar\xf3d\u0142a|Adres URL',
                externalInputTip:
                  'Oddziel nazw\u0119 i adres URL \u017ar\xf3d\u0142a z pomoc\u0105 "|", Potwierd\u017a Enter-em',
                addLocalFile: 'Dodaj z komputera',
                addExternalSource: 'Dodaj z Internetu',
                unnamedItem: 'Bez nazwy',
                confirmInsert: 'Dodaj wybrane elementy',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: '\u5220\u9664',
                cancel: '\u53d6\u6d88',
                confirm: '\u786e\u8ba4',
                insert: '\u63d2\u5165\u6240\u9009\u9879\u76ee',
                width: '\u5bbd\u5ea6',
                height: '\u9ad8\u5ea6',
                image: '\u56fe\u7247',
                video: '\u89c6\u9891',
                audio: '\u97f3\u9891',
                embed: '\u5d4c\u5165\u5f0f\u5a92\u4f53',
                caption: '\u5a92\u4f53\u5e93',
                dragTip: '\u70b9\u51fb\u6216\u62d6\u52a8\u6587\u4ef6\u81f3\u6b64',
                dropTip: '\u653e\u5f00\u9f20\u6807\u4ee5\u4e0a\u4f20',
                selectAll: '\u9009\u62e9\u5168\u90e8',
                deselect: '\u53d6\u6d88\u9009\u62e9',
                removeSelected: '\u5220\u9664\u9009\u4e2d\u9879\u76ee',
                externalInputPlaceHolder: '\u8d44\u6e90\u540d\u79f0|\u8d44\u6e90\u5730\u5740',
                externalInputTip:
                  '\u4f7f\u7528\u201c|\u201d\u5206\u9694\u8d44\u6e90\u540d\u79f0\u548c\u8d44\u6e90\u5730\u5740',
                addLocalFile: '\u6dfb\u52a0\u672c\u5730\u8d44\u6e90',
                addExternalSource: '\u6dfb\u52a0\u7f51\u7edc\u8d44\u6e90',
                unnamedItem: '\u672a\u547d\u540d\u9879\u76ee',
                confirmInsert: '\u63d2\u5165\u9009\u4e2d\u9879\u76ee',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: '\u5220\u9664',
                cancel: '\u53d6\u6d88',
                confirm: '\u786e\u8ba4',
                insert: '\u63d2\u5165\u6240\u9009\u9879\u76ee',
                width: '\u5bbd\u5ea6',
                height: '\u9ad8\u5ea6',
                image: '\u56fe\u7247',
                video: '\u89c6\u9891',
                audio: '\u97f3\u9891',
                embed: '\u5d4c\u5165\u5f0f\u5a92\u4f53',
                caption: '\u5a92\u4f53\u5e93',
                dragTip: '\u70b9\u51fb\u6216\u62d6\u52a8\u6587\u4ef6\u81f3\u6b64',
                dropTip: '\u653e\u5f00\u9f20\u6807\u4ee5\u4e0a\u4f20',
                selectAll: '\u9009\u62e9\u5168\u90e8',
                deselect: '\u53d6\u6d88\u9009\u62e9',
                removeSelected: '\u5220\u9664\u9009\u4e2d\u9879\u76ee',
                externalInputPlaceHolder: '\u8d44\u6e90\u540d\u79f0|\u8d44\u6e90\u5730\u5740',
                externalInputTip:
                  '\u4f7f\u7528\u201c|\u201d\u5206\u9694\u8d44\u6e90\u540d\u79f0\u548c\u8d44\u6e90\u5730\u5740',
                addLocalFile: '\u6dfb\u52a0\u672c\u5730\u8d44\u6e90',
                addExternalSource: '\u6dfb\u52a0\u7f51\u7edc\u8d44\u6e90',
                unnamedItem: '\u672a\u547d\u540d\u9879\u76ee',
                confirmInsert: '\u63d2\u5165\u9009\u4e2d\u9879\u76ee',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = {
                remove: 'Remove',
                cancel: 'Cancel',
                confirm: 'Confirm',
                insert: 'Insert Selected Items',
                width: 'Width',
                height: 'Height',
                image: 'Image',
                video: 'Video',
                audio: 'Audio',
                embed: 'Embed',
                caption: 'Media Library',
                dragTip: 'Click Or Drag Files Here',
                dropTip: 'Drop To Upload',
                selectAll: 'Select All',
                deselect: 'Deselect',
                removeSelected: 'Remove Selected Items',
                externalInputPlaceHolder: 'Source Name|Source URL',
                externalInputTip:
                  'Split source name and source URL with "|", confirm by hit Enter.',
                addLocalFile: 'Add from local',
                addExternalSource: 'Add from Internet',
                unnamedItem: 'Unnamed Item',
                confirmInsert: 'Insert selected items',
              });
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r = n(9),
              o = y(r),
              i = n(8),
              a = y(i),
              l = n(7),
              s = y(l),
              c = n(6),
              u = y(c),
              f = n(5),
              d = y(f),
              p = n(4),
              h = y(p),
              g = n(3),
              m = y(g);
            function y(e) {
              return e && e.__esModule ? e : { default: e };
            }
            t.default = {
              en: o.default,
              zh: a.default,
              'zh-hant': s.default,
              pl: u.default,
              kr: d.default,
              jpn: h.default,
              tr: m.default,
            };
          },
          function(e, t) {
            e.exports = function(e) {
              var t = 'undefined' !== typeof window && window.location;
              if (!t) throw new Error('fixUrls requires window.location');
              if (!e || 'string' !== typeof e) return e;
              var n = t.protocol + '//' + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, '/'),
                o = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(
                  e,
                  t
                ) {
                  var o,
                    i = t
                      .trim()
                      .replace(/^"(.*)"$/, function(e, t) {
                        return t;
                      })
                      .replace(/^'(.*)'$/, function(e, t) {
                        return t;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
                    ? e
                    : ((o =
                        0 === i.indexOf('//')
                          ? i
                          : 0 === i.indexOf('/')
                          ? n + i
                          : r + i.replace(/^\.\//, '')),
                      'url(' + JSON.stringify(o) + ')');
                });
              return o;
            };
          },
          function(e, t, n) {
            var r = {},
              o = function(e) {
                var t;
                return function() {
                  return 'undefined' === typeof t && (t = e.apply(this, arguments)), t;
                };
              },
              i = o(function() {
                return window && document && document.all && !window.atob;
              }),
              a = function(e) {
                return document.querySelector(e);
              },
              l = (function(e) {
                var t = {};
                return function(e) {
                  if ('function' === typeof e) return e();
                  if ('undefined' === typeof t[e]) {
                    var n = a.call(this, e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                      try {
                        n = n.contentDocument.head;
                      } catch (e) {
                        n = null;
                      }
                    t[e] = n;
                  }
                  return t[e];
                };
              })(),
              s = null,
              c = 0,
              u = [],
              f = n(11);
            function d(e, t) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n],
                  i = r[o.id];
                if (i) {
                  i.refs++;
                  for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                  for (; a < o.parts.length; a++) i.parts.push(b(o.parts[a], t));
                } else {
                  var l = [];
                  for (a = 0; a < o.parts.length; a++) l.push(b(o.parts[a], t));
                  r[o.id] = { id: o.id, refs: 1, parts: l };
                }
              }
            }
            function p(e, t) {
              for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                  a = t.base ? i[0] + t.base : i[0],
                  l = i[1],
                  s = i[2],
                  c = i[3],
                  u = { css: l, media: s, sourceMap: c };
                r[a] ? r[a].parts.push(u) : n.push((r[a] = { id: a, parts: [u] }));
              }
              return n;
            }
            function h(e, t) {
              var n = l(e.insertInto);
              if (!n)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                );
              var r = u[u.length - 1];
              if ('top' === e.insertAt)
                r
                  ? r.nextSibling
                    ? n.insertBefore(t, r.nextSibling)
                    : n.appendChild(t)
                  : n.insertBefore(t, n.firstChild),
                  u.push(t);
              else if ('bottom' === e.insertAt) n.appendChild(t);
              else {
                if ('object' !== typeof e.insertAt || !e.insertAt.before)
                  throw new Error(
                    "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                  );
                var o = l(e.insertInto + ' ' + e.insertAt.before);
                n.insertBefore(t, o);
              }
            }
            function g(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
              var t = u.indexOf(e);
              t >= 0 && u.splice(t, 1);
            }
            function m(e) {
              var t = document.createElement('style');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'), v(t, e.attrs), h(e, t), t
              );
            }
            function y(e) {
              var t = document.createElement('link');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                v(t, e.attrs),
                h(e, t),
                t
              );
            }
            function v(e, t) {
              Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n]);
              });
            }
            function b(e, t) {
              var n, r, o, i;
              if (t.transform && e.css) {
                if (((i = t.transform(e.css)), !i)) return function() {};
                e.css = i;
              }
              if (t.singleton) {
                var a = c++;
                (n = s || (s = m(t))), (r = S.bind(null, n, a, !1)), (o = S.bind(null, n, a, !0));
              } else
                e.sourceMap &&
                'function' === typeof URL &&
                'function' === typeof URL.createObjectURL &&
                'function' === typeof URL.revokeObjectURL &&
                'function' === typeof Blob &&
                'function' === typeof btoa
                  ? ((n = y(t)),
                    (r = E.bind(null, n, t)),
                    (o = function() {
                      g(n), n.href && URL.revokeObjectURL(n.href);
                    }))
                  : ((n = m(t)),
                    (r = w.bind(null, n)),
                    (o = function() {
                      g(n);
                    }));
              return (
                r(e),
                function(t) {
                  if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                      return;
                    r((e = t));
                  } else o();
                }
              );
            }
            e.exports = function(e, t) {
              if ('undefined' !== typeof DEBUG && DEBUG && 'object' !== typeof document)
                throw new Error('The style-loader cannot be used in a non-browser environment');
              (t = t || {}),
                (t.attrs = 'object' === typeof t.attrs ? t.attrs : {}),
                t.singleton || 'boolean' === typeof t.singleton || (t.singleton = i()),
                t.insertInto || (t.insertInto = 'head'),
                t.insertAt || (t.insertAt = 'bottom');
              var n = p(e, t);
              return (
                d(n, t),
                function(e) {
                  for (var o = [], i = 0; i < n.length; i++) {
                    var a = n[i],
                      l = r[a.id];
                    l.refs--, o.push(l);
                  }
                  if (e) {
                    var s = p(e, t);
                    d(s, t);
                  }
                  for (i = 0; i < o.length; i++) {
                    l = o[i];
                    if (0 === l.refs) {
                      for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                      delete r[l.id];
                    }
                  }
                }
              );
            };
            var A = (function() {
              var e = [];
              return function(t, n) {
                return (e[t] = n), e.filter(Boolean).join('\n');
              };
            })();
            function S(e, t, n, r) {
              var o = n ? '' : r.css;
              if (e.styleSheet) e.styleSheet.cssText = A(t, o);
              else {
                var i = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
              }
            }
            function w(e, t) {
              var n = t.css,
                r = t.media;
              if ((r && e.setAttribute('media', r), e.styleSheet)) e.styleSheet.cssText = n;
              else {
                while (e.firstChild) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }
            function E(e, t, n) {
              var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
              (t.convertToAbsoluteUrls || i) && (r = f(r)),
                o &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    ' */');
              var a = new Blob([r], { type: 'text/css' }),
                l = e.href;
              (e.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
            }
          },
          function(e, t) {
            e.exports =
              'data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBsIAAAC8AAAAYGNtYXBWNv1DAAABHAAAANRnYXNwAAAAEAAAAfAAAAAIZ2x5ZtZLKCQAAAH4AAAPTGhlYWQT25ZrAAARRAAAADZoaGVhB8ID3gAAEXwAAAAkaG10eGoAC+sAABGgAAAAdGxvY2EqcC3wAAASFAAAADxtYXhwACcAewAAElAAAAAgbmFtZZlKCfsAABJwAAABhnBvc3QAAwAAAAAT+AAAACAAAwPsAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADprAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAuAAAACoAIAAEAAoAAQAg4DTgN+BC4V3iQ+gN6Mno/ukD6QjpD+kT6RjpHOkm6YDprP/9//8AAAAAACDgNOA34ELhXeJD6A3oyej+6QHpB+kO6RHpFukc6SbpgOms//3//wAB/+Mf0B/OH8Qeqh3FF/wXQRcNFwsXCBcDFwIXABb9FvQWmxZwAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIBAACBAwAC1QADAAcAAAEzESMhETMRAlaqqv6qqgLV/awCVP2sAAABAVYAgQMqAtUAAgAACQIBVgHU/iwC1f7W/tYAAQCqACsDVgOBAC4AAAEyFx4BFxYVFAcOAQcGIyInLgEnJjUzFBceARcWMzI3PgE3NjU0Jy4BJyYjFSc3AgBGPz5dGxsbG10+PkdGPz5dGxtWFBRFLy81NS8vRRQUFBRFLy811tYC1RsbXD4+Rkc+Pl0bGxsbXT4+RzYuL0UUFBQURS8uNjUvLkYUFKzW1gAAAwBWAAEDqgNVABsANwA7AAAlMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NgMhFSECAEY/Pl0bGxsbXT4+R0Y/Pl0bGxsbXT4+R1hOTnMiISEic05NWVhOTnMiISEic05NfQGs/lRVGxtdPj5HRj4/XRsbGxtdPz5GRz4+XRsbAwAiIXRNTlhZTU50ISEhIXROTVlYTk10ISL+gFQAAAABAKoAAQOAA1UAHwAAATMRIREUBisBIiY1ESE1IxUUBiMhIiY9ATQ2MyEyFhUDAID+qhgSVhIYAaoqGBL+ABIaGhICABIYAwH+qv6AEhgYEgHWqioSGhoSqhIYGBIAAAABAIAAAwOAA1UAMwAAJTIWFRQGIyImNTwBNyUOASMiJjU0NjMyFhclLgE1NDYzMhYVFAYjIiYnBR4BFRQGBwU+AQMAM0lJMzNJAv7SEiwaNExLNRktEgEsAQNLNTRMSzUZLRL+1AEDAgIBMBAs/UkzM0tLMwcPBrAREUs1NEwSEK4HDwg0TEw0NUsTEbAIDwcIDwewDxEAAAMAVgArA6oDVQACAAYAGgAALQI3FTM1FyERFAYjISImNREhNTQ2OwEyFhUBgAFA/sAqrFQBADAk/VQkMAEAMCSsJDCr1qrWVlZW/dYkMjIkAipWJDAwJAAEAIAAgQOAAtUAAwAHAAsADwAAEyEVIRU1IRUBNSEVJTUhFYADAP0AAwD9AAMA/QADAALVVKxWVv6sVFSqVlYABABVACIDqwN3AAQAIQA9AEIAACUzESMREyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMRIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGAzM1IxUB1VZWK1hOTnQhIiIhdE5OWFhOTnQhIiIhdE5OWEc+Pl0aGxsaXT4+R0c+Pl0aGxsaXT4+clZW9wEA/wACgCEic05OWFlNTnQhIiIhdE5NWVhOTnMiIf0AGxtdPj5HRj8+XBsbGxtcPj9GRz4+XRsbAdZVVQAABABVACIDqwN3AAQAIQA9AFIAACUzNSMVEyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMRIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGAyIGFTM0NjMyFhUUBhUzNDY1NCYjAdVWVitYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGhsbGl0+PkdHPj5dGhsbGl0+PkdHZFYyIyMygFaAZEfNVVUCqiEic05OWFlNTnQhIiIhdE5NWVhOTnMiIf0AGxtdPj5HRj8+XBsbGxtcPj9GRz4+XRsbAlZkRyMyMiNALWhIPVBHZAAAAgBVAM0DqwLNAAUACwAAASc3JwkBJTcnNwkBAZHExDz/AAEAARrExDwBAP8AAQnExDz/AP8APMTEPP8A/wAAAAMAVQAiA6sDdwAcACsAOgAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMBNDc+ATc2MzIWFwEuATUBIiYnAR4BFRQHDgEHBiMCAFhOTXQiIiIidE1OWFhOTXQiIiIidE1OWP6rGxtcPj9GOmot/iIjJQFVOmotAd4jJRsbXD4/RgN3ISJ0Tk1YWE5OdCEiIiF0Tk5YWE1OdCIh/lZGPj5dGxslI/4iLWo6/qomIwHeLWs5Rz4+XRsbAAAAAAMAgADNA4ACzQADAAcACwAANyE1ITUhNSE1FSE1gAMA/QADAP0AAwDNVYBV1lZWAAEAZAAlA1wDXABEAAABERQHBgcGBwYjIicmJyYnJjU0NzY3Njc2MzIXEQURFAcGBwYHBiMiJyYnJicmNTQ3Njc2NzYzMhcRNDc2NyU2MzIXFhUDXBERGhkaGRYXGRoZGhEREREaGRoZFzMr/oURERoZGhkXFhkaGRoRERERGhkaGRY0KwoJDwGbBggUDg4DLP3WGBQTCgsFBQUFCwoTFBgZExQKCwUFEwEKdv6iGRMTCwsFBQUFCwsTExkZExMLCgYFEwHeDw0MBX8CDg4UAAAEAHUAQgOJA1YALwA8AGIAeAAAAS4BBw4BJy4BJy4BBwYiJyYGBw4BJyYGBxQVHAEVFBUeATM2MzoBMzIzMjY3PAE1BSImNTQ2MzIWFRQGJyUqASM8ATU6ATMUFhUUFxwBFQYHFAYHDgEnLgE3PgE3OgEzPAE1BT4BNzoBMxQWBw4BJy4BNz4BNzoBMwKBARkZChUJCxcEFEMvBw8HHikMDCgdFyILCxgWNDM0ZzQzNBsaAf77L0FBMDBAQDEBtx8/IDRoNgEBAQENCxVFICIlBgc3JAcNCf7OAQICEyQTAwUFSiMmOAIBOiYHEAkCzhcaAQEBAwIJCC0fCAEBBhgbGxYGBBMVKCgpUCgoKQ8VARcaSpRK7T8uMEA/LzBAARchPyAKEgkzMjNmMjMzFCwRIBAOD0IjJjQDN2053QwUCi5dLSUsBgVEJig+BAAAAAAEAAAAAAQAA0AAGwAzAE8AUwAAARQXHgEXFjMyNz4BNzY1NCcuAScmIyIHDgEHBgEjLgEjISIGByMiBhURFBYzITI2NRE0JgEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYBIzUzATAQETgmJisrJiY4ERAQETgmJisrJiY4ERACkOAMJDD/ADAkDOAaJiYaA4AaJib+Jjs0M00XFhYXTTM0Ozs0M00XFhYXTTM0AYWAgAFgKyYmOBEQEBE4JiYrKyYmOBEQEBE4JiYBNTBQUDAmGv3AGiYmGgJAGib9hBYXTTM0Ozs0M00XFhYXTTM0Ozs0M00XFgG8QAABAJEAogOAAt4ABgAAAScHFwEnAQGAszzvAgA8/jwBGrM87wIAPP48AAAAAAEA4gCAAx4CyQAmAAABNzY0JyYiDwEnJiIHBhQfAQcGFBceATMyNj8BFx4BMzI2NzY0LwECPOINDQwkDOLiDCQMDQ3i4g0NBhAICBAG4uIGEAgIEAYNDeIBq+IMIw0MDOLiDAwNIwzi4g0jDAcGBgfh4QcGBgcMIw3iAAACAIAAYwNqA00AIgAvAAABIyc+ATU0Jy4BJyYjIgcOAQcGFRQXHgEXFjMyNjcXFRc3JyEiJjU0NjMyFhUUBiMClSEMHyQWFkszMjo5MzJLFhYWFksyMzk0XCUL1j/V/wBPcXFPUHBwUAF3DCRdMzoyM0sWFhYWSzMyOjkyM0sWFiQfDCLUP9VxT1BwcFBPcQACAGQAIgOcA3cATQBZAAABPgE1NCYnNz4BLwEuAQ8BLgEvAS4BKwEiBg8BDgEHJyYGDwEGFh8BDgEVFBYXBw4BHwEeAT8BHgEfAR4BOwEyNj8BPgE3FxY2PwE2JicFIiY1NDYzMhYVFAYDPQECAgFaBgMEVQQPB2oRJBQQAQwIqggMARAUJBFqBw8EVQQDBloBAgIBWgYDBFUEDwdqESQUEAEMCKoIDAEQFCQRagcPBFUEAwb+aT5XVz4+V1cBowoVCwsUC0YFDweUBwUDKgwVCHIHCgoHcggVDCoDBQeUBw8FRgsVCgsVCkYFEAeTBwUCKw0VCHEICgoIcQgVDSsDBgeTBxAFJlg+PldXPj5YAAEA1QCiAysC9wALAAABIREjESE1IREzESEDK/8AVv8AAQBWAQABov8AAQBVAQD/AAAAAAAJAAAAQAQAA0AAAwAHAAsADwATABcAGwAfACIAABMRIREBIzUzNSM1MzUjNTMBIREhEyM1MzUjNTM1IzUzBRElAAQA/MCAgICAgIACQP4AAgDAgICAgICA/cABAANA/QADAP1AgICAgID9gAKA/YCAgICAgID+gMAAAAAABgBA/8ADwAPAABkAIQA5AEcAVQBjAAABLgEnLgEnLgEjISIGFREUFjMhMjY1ETQmJyceARcjNR4BExQGIyEiJjURNDYzMDM6ATMyMRUUFjsBAyEiJjU0NjMhMhYVFAYnISImNTQ2MyEyFhUUBichIiY1NDYzITIWFRQGA5YRLRkaMxcnKQv+ECEvLyEC4CEvDhyFFyUNmhEphgkH/SAHCQkHTU66TU4TDeCg/kANExMNAcANExMN/kANExMNAcANExMN/kANExMNAcANExMC2xczGhktERwOLyH8oCEvLyECcAspJzYXKRGaDSX86AcJCQcDYAcJ4A0T/gATDQ0TEw0NE4ATDQ0TEw0NE4ATDQ0TEw0NEwAAAAcAAP/ABAADRgALABcAIwAvADsARwBTAAAlNDYzMhYVFAYjIiYBNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYBNDYzMhYVFAYjIiYBNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYBNDYzMhYVFAYjIiYBoDgoKDg4KCg4/mA4KCg4OCgoOANAOCgoODgoKDj9OjgoKDg4KCg4Akw4KCg4OCgoOP20OCgoODgoKDgCTDgoKDg4KCg4ICg4OCgoODgByCg4OCgoODgoKDg4KCg4OAFOKDg4KCg4OP3cKDg4KCg4OCgoODgoKDg4AnQoODgoKDg4AAUAfAAAA4QDVQAiAC0AOABGAFQAAAEjNTQmKwEiBh0BIyIGFRQWOwERFBYzITI2NREzMjY1NCYjJTQ2OwEyFh0BIzUBFAYjISImNREhEQEiBh0BFBYzMjY9ATQmMyIGHQEUFjMyNj0BNCYDXZtEMJwwRJsQFxcQJ0QwAYQwRCcQFxcQ/i8WEJwQFugBXRcQ/nwQFwHS/skQFhYQEBcXjBAXFxAQFhYCuicwREQwJxcQEBb+BzBERDAB+RYQEBcnEBcXECcn/ZMQFhYQAfn+BwGEFxDoEBcXEOgQFxcQ6BAXFxDoEBcAAAABAAAAAQAANAmLwV8PPPUACwQAAAAAANheKPcAAAAA2F4o9wAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAdBAAAAAAAAAAAAAAAAgAAAAQAAQAEAAFWBAAAqgQAAFYEAACqBAAAgAQAAFYEAACABAAAVQQAAFUEAABVBAAAVQQAAIAEAABkBAAAdQQAAAAEAACRBAAA4gQAAIAEAABkBAAA1QQAAAAEAABABAAAAAQAAHwAAAAAAAoAFAAeADIAQACIAOYBFgFiAY4BrgIUAowCrAMMAyQDjAQ0BLIEyAUGBU4F1gXwBi4GugcyB6YAAQAAAB0AeQAJAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';
          },
          function(e, t) {
            function n(e, t) {
              var n = e[1] || '',
                o = e[3];
              if (!o) return n;
              if (t && 'function' === typeof btoa) {
                var i = r(o),
                  a = o.sources.map(function(e) {
                    return '/*# sourceURL=' + o.sourceRoot + e + ' */';
                  });
                return [n]
                  .concat(a)
                  .concat([i])
                  .join('\n');
              }
              return [n].join('\n');
            }
            function r(e) {
              var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                n = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + t;
              return '/*# ' + n + ' */';
            }
            e.exports = function(e) {
              var t = [];
              return (
                (t.toString = function() {
                  return this.map(function(t) {
                    var r = n(t, e);
                    return t[2] ? '@media ' + t[2] + '{' + r + '}' : r;
                  }).join('');
                }),
                (t.i = function(e, n) {
                  'string' === typeof e && (e = [[null, e, '']]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    'number' === typeof i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ('number' === typeof a[0] && r[a[0]]) ||
                      (n && !a[2] ? (a[2] = n) : n && (a[2] = '(' + a[2] + ') and (' + n + ')'),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function(e, t) {
            e.exports = function(e) {
              return 'string' !== typeof e
                ? e
                : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  /["'() \t\n]/.test(e)
                    ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
                    : e);
            };
          },
          function(e, t, n) {
            var r = n(15);
            (t = e.exports = n(14)(!1)),
              t.push([
                e.i,
                "@font-face {\n  font-family: 'bf-icons';\n  src: url(" +
                  r(n(13)) +
                  ') format("truetype");\n  font-weight: normal;\n  font-style: normal; }\n\n.braft-finder [class^="braft-icon-"], .braft-finder [class*=" braft-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'bf-icons\' !important;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.braft-finder .braft-icon-code:before {\n  content: "\\E903"; }\n\n.braft-finder .braft-icon-pause:before {\n  content: "\\E034"; }\n\n.braft-finder .braft-icon-play_arrow:before {\n  content: "\\E037"; }\n\n.braft-finder .braft-icon-bin:before {\n  content: "\\E9AC"; }\n\n.braft-finder .braft-icon-replay:before {\n  content: "\\E042"; }\n\n.braft-finder .braft-icon-close:before {\n  content: "\\E913"; }\n\n.braft-finder .braft-icon-music:before {\n  content: "\\E90E"; }\n\n.braft-finder .braft-icon-camera:before {\n  content: "\\E911"; }\n\n.braft-finder .braft-icon-file-text:before {\n  content: "\\E926"; }\n\n.braft-finder .braft-icon-film:before {\n  content: "\\E91C"; }\n\n.braft-finder .braft-icon-paste:before {\n  content: "\\E92D"; }\n\n.braft-finder .braft-icon-spinner:before {\n  content: "\\E980"; }\n\n.braft-finder .braft-icon-media:before {\n  content: "\\E90F"; }\n\n.braft-finder .braft-icon-add:before {\n  content: "\\E918"; }\n\n.braft-finder .braft-icon-done:before {\n  content: "\\E912"; }\n\n.braft-finder .braft-icon-drop-down:before {\n  content: "\\E906"; }\n\n.braft-finder .braft-icon-drop-up:before {\n  content: "\\E909"; }\n\n.braft-finder .braft-icon-help:before {\n  content: "\\E902"; }\n\n.braft-finder .braft-icon-info:before {\n  content: "\\E901"; }\n\n.braft-finder .braft-icon-menu:before {\n  content: "\\E908"; }\n\n.pull-left {\n  float: left; }\n\n.pull-right {\n  float: right; }\n\n.braft-finder .bf-uploader {\n  position: relative;\n  height: 370px;\n  margin: 0; }\n  .braft-finder .bf-uploader.draging .bf-list-wrap,\n  .braft-finder .bf-uploader.draging .bf-add-external {\n    pointer-events: none; }\n  .braft-finder .bf-uploader input::-webkit-input-placeholder {\n    color: #ccc; }\n  .braft-finder .bf-uploader input::-moz-placeholder {\n    color: #ccc; }\n  .braft-finder .bf-uploader input::-ms-input-placeholder {\n    color: #ccc; }\n\n.braft-finder .bf-list-wrap {\n  position: relative;\n  height: 370px; }\n\n.braft-finder .bf-list-tools {\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 20px;\n  padding: 0 15px;\n  background-color: #fff; }\n  .braft-finder .bf-list-tools span {\n    height: 26px;\n    font-size: 12px;\n    line-height: 20px;\n    cursor: pointer;\n    user-select: none; }\n    .braft-finder .bf-list-tools span[disabled] {\n      opacity: .3;\n      pointer-events: none; }\n  .braft-finder .bf-list-tools .bf-select-all,\n  .braft-finder .bf-list-tools .bf-deselect-all {\n    float: left;\n    margin-right: 5px;\n    color: #bbb; }\n    .braft-finder .bf-list-tools .bf-select-all:hover,\n    .braft-finder .bf-list-tools .bf-deselect-all:hover {\n      color: #3498db; }\n  .braft-finder .bf-list-tools .bf-remove-selected {\n    float: right;\n    color: #e74c3c; }\n    .braft-finder .bf-list-tools .bf-remove-selected:hover {\n      color: #c92e1e; }\n\n.braft-finder .bf-list {\n  position: absolute;\n  z-index: 1;\n  top: 30px;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0 10px;\n  list-style: none;\n  overflow: auto; }\n  .braft-finder .bf-list::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n    background-color: #fff; }\n  .braft-finder .bf-list::-webkit-scrollbar-track {\n    background-color: #fff; }\n  .braft-finder .bf-list::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.1); }\n\n.braft-finder .bf-item,\n.braft-finder .bf-add-item {\n  position: relative;\n  display: block;\n  float: left;\n  width: 113px;\n  height: 113px;\n  margin: 5px;\n  overflow: hidden;\n  border-radius: 3px; }\n\n.braft-finder .bf-item.uploading {\n  pointer-events: none; }\n\n.braft-finder .bf-item.error::before {\n  display: block;\n  content: "\\E901"; }\n\n.braft-finder .bf-item.error::after {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(231, 76, 60, 0.8);\n  content: \'\'; }\n\n.braft-finder .bf-item.error:hover::after {\n  background-color: rgba(231, 76, 60, 0.9); }\n\n.braft-finder .bf-item.error .bf-item-uploading {\n  display: none; }\n\n.braft-finder .bf-add-item {\n  background-color: #ecedef;\n  color: #999; }\n  .braft-finder .bf-add-item:hover {\n    background-color: #e1e2e3; }\n  .braft-finder .bf-add-item i {\n    display: block;\n    width: 113px;\n    height: 113px;\n    font-size: 48px;\n    line-height: 113px;\n    text-align: center; }\n  .braft-finder .bf-add-item input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer; }\n\n.braft-finder .bf-item::before {\n  display: none;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 113px;\n  height: 113px;\n  color: #fff;\n  font-size: 48px;\n  font-family: \'bf-icons\';\n  line-height: 113px;\n  text-align: center; }\n\n.braft-finder .bf-item::after {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(52, 152, 219, 0);\n  content: \'\'; }\n\n.braft-finder .bf-item:hover::after {\n  background-color: rgba(52, 152, 219, 0.3); }\n\n.braft-finder .bf-item:hover .bf-item-remove {\n  display: block; }\n\n.braft-finder .bf-item.active::before {\n  display: block;\n  content: "\\E912"; }\n\n.braft-finder .bf-item.active::after {\n  background-color: rgba(52, 152, 219, 0.6); }\n\n.braft-finder .bf-item.active:hover::after {\n  background-color: rgba(52, 152, 219, 0.8); }\n\n.braft-finder .bf-item.active:hover .bf-item-remove {\n  display: none; }\n\n.braft-finder .bf-item-uploading {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 3;\n  top: 52px;\n  left: 10px;\n  width: 93px;\n  height: 10px;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.5); }\n\n.braft-finder .bf-item-uploading-bar {\n  height: 10px;\n  background-color: #3498db;\n  border-radius: 0; }\n\n.braft-finder .bf-item-remove {\n  display: none;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  width: 28px;\n  height: 28px;\n  color: #fff;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  cursor: pointer; }\n  .braft-finder .bf-item-remove:hover {\n    color: #e74c3c; }\n\n.braft-finder .bf-item-title {\n  display: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  padding: 0 5px;\n  overflow: hidden;\n  background-image: linear-gradient(rgba(0, 0, 0, 0), black);\n  color: #fff;\n  font-size: 12px;\n  line-height: 55px;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.braft-finder .bf-image {\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  user-select: none; }\n  .braft-finder .bf-image img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover; }\n\n.braft-finder .bf-video {\n  background-color: #8e44ad; }\n\n.braft-finder .bf-audio {\n  background-color: #f39c12; }\n\n.braft-finder .bf-embed {\n  background-color: #f1c40f; }\n\n.braft-finder .bf-icon {\n  display: block;\n  width: 113px;\n  height: 113px;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  text-decoration: none; }\n  .braft-finder .bf-icon i, .braft-finder .bf-icon span {\n    display: block; }\n  .braft-finder .bf-icon i {\n    margin-top: 35px;\n    font-size: 24px; }\n  .braft-finder .bf-icon span {\n    width: 103px;\n    margin: 10px auto;\n    overflow: hidden;\n    font-size: 12px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n.braft-finder .bf-drag-uploader {\n  box-sizing: border-box;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 15px;\n  left: 15px;\n  height: 100%;\n  background-color: #fff;\n  border: dashed 1px #bbb;\n  text-align: center;\n  opacity: 0;\n  pointer-events: none; }\n  .braft-finder .bf-drag-uploader:hover, .braft-finder .bf-drag-uploader.draging {\n    background-color: #f1f2f3; }\n  .braft-finder .bf-drag-uploader.active {\n    opacity: 1;\n    pointer-events: auto; }\n\n.braft-finder .bf-uploader-buttons {\n  height: 370px;\n  margin: auto;\n  text-align: center; }\n\n.braft-finder .bf-drag-tip {\n  display: inline-block;\n  margin-top: 150px;\n  color: #ccc;\n  text-align: center;\n  font-size: 28px;\n  font-weight: normal;\n  line-height: 40px; }\n  .braft-finder .bf-drag-tip input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    color: #fff;\n    text-indent: -100px;\n    cursor: pointer; }\n\n.braft-finder .bf-manager-footer {\n  height: 36px;\n  margin: 10px 0;\n  padding: 0 15px; }\n  .braft-finder .bf-manager-footer .button {\n    float: right;\n    height: 36px;\n    margin-left: 5px;\n    padding: 0 35px;\n    font-size: 12px;\n    font-weight: 700;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer; }\n  .braft-finder .bf-manager-footer .button-insert {\n    color: #fff;\n    background-color: #3498db; }\n    .braft-finder .bf-manager-footer .button-insert:hover {\n      background-color: #2084c7; }\n    .braft-finder .bf-manager-footer .button-insert[disabled] {\n      opacity: .3;\n      pointer-events: none;\n      filter: grayscale(0.4); }\n  .braft-finder .bf-manager-footer .button-cancel {\n    color: #999;\n    background-color: #e8e8e9; }\n    .braft-finder .bf-manager-footer .button-cancel:hover {\n      background-color: #d8d8d9; }\n\n.braft-finder .bf-toggle-external-form {\n  color: #666;\n  font-size: 12px;\n  line-height: 36px; }\n  .braft-finder .bf-toggle-external-form span {\n    color: #bbb;\n    line-height: 16px;\n    cursor: pointer;\n    user-select: none; }\n    .braft-finder .bf-toggle-external-form span:hover {\n      color: #3498db; }\n    .braft-finder .bf-toggle-external-form span i {\n      position: relative;\n      top: 2px;\n      font-size: 16px; }\n\n.braft-finder .bf-add-external {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #fff; }\n  .braft-finder .bf-add-external input {\n    border: solid 1px rgba(0, 0, 0, 0.3);\n    border: solid 0.5px rgba(0, 0, 0, 0.3);\n    box-shadow: none; }\n    .braft-finder .bf-add-external input:focus {\n      border-color: #3498db;\n      box-shadow: none; }\n\n.braft-finder .bf-external-form {\n  width: 500px;\n  max-width: 90%;\n  margin: 91px auto 0 auto; }\n\n.braft-finder .bf-external-input {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  margin-bottom: 10px; }\n  .braft-finder .bf-external-input div {\n    position: absolute;\n    top: 0;\n    right: 85px;\n    left: 0;\n    height: 40px; }\n  .braft-finder .bf-external-input input,\n  .braft-finder .bf-external-input textarea {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 40px;\n    padding: 0 10px;\n    border: none;\n    border-radius: 3px;\n    outline: none;\n    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.3);\n    color: #999;\n    font-size: 18px; }\n    .braft-finder .bf-external-input input:focus,\n    .braft-finder .bf-external-input textarea:focus {\n      box-shadow: inset 0 0 0 1px #3498db; }\n  .braft-finder .bf-external-input textarea {\n    height: 100px;\n    font-size: 14px; }\n  .braft-finder .bf-external-input button {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 80px;\n    height: 40px;\n    background-color: #3498db;\n    border: none;\n    border-radius: 3px;\n    color: #fff;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer; }\n    .braft-finder .bf-external-input button:disabled {\n      opacity: .3;\n      pointer-events: none;\n      filter: grayscale(0.4); }\n    .braft-finder .bf-external-input button:hover {\n      background-color: #2084c7; }\n\n.braft-finder .bf-switch-external-type {\n  overflow: hidden;\n  text-align: center; }\n  .braft-finder .bf-switch-external-type button {\n    width: auto;\n    height: 30px;\n    margin: 10px 5px;\n    padding: 0 10px;\n    background-color: #e8e9ea;\n    border: none;\n    border-radius: 3px;\n    color: #999;\n    font-size: 12px;\n    cursor: pointer; }\n    .braft-finder .bf-switch-external-type button:hover {\n      background-color: #d8d9da; }\n    .braft-finder .bf-switch-external-type button:only-child {\n      display: none; }\n  .braft-finder .bf-switch-external-type[data-type="IMAGE"] [data-type="IMAGE"],\n  .braft-finder .bf-switch-external-type[data-type="VIDEO"] [data-type="VIDEO"],\n  .braft-finder .bf-switch-external-type[data-type="AUDIO"] [data-type="AUDIO"],\n  .braft-finder .bf-switch-external-type[data-type="EMBED"] [data-type="EMBED"],\n  .braft-finder .bf-switch-external-type[data-type="FILE"] [data-type="FILE"] {\n    background-color: #3498db;\n    color: #fff; }\n\n.braft-finder .bf-external-tip {\n  display: block;\n  margin-top: 15px;\n  color: #ccc;\n  font-size: 12px;\n  text-align: center; }\n',
                '',
              ]);
          },
          function(e, t, n) {
            var r,
              o = n(16);
            'string' === typeof o && (o = [[e.i, o, '']]);
            var i = { hmr: !0 };
            (i.transform = r), (i.insertInto = void 0);
            n(12)(o, i);
            o.locals && (e.exports = o.locals);
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
              o = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
            n(17);
            var i = n(2),
              a = s(i),
              l = n(1);
            function s(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function c(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function u(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
            }
            function f(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var d = {
                image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                video: 'video/mp4',
                audio: 'audio/mp3',
              },
              p = (function(e) {
                function t(e) {
                  c(this, t);
                  var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                  (n.toggleSelectItem = function(e) {
                    var t = e.currentTarget.dataset.id,
                      r = n.controller.getMediaItem(t);
                    if (!r) return !1;
                    r.selected
                      ? (n.props.onBeforeDeselect &&
                          !1 === n.props.onBeforeDeselect([r], n.controller.getItems())) ||
                        (n.controller.deselectMediaItem(t),
                        n.props.onDeselect && n.props.onDeselect([r], n.controller.getItems()))
                      : (n.props.onBeforeSelect &&
                          !1 === n.props.onBeforeSelect([r], n.controller.getItems())) ||
                        (n.controller.selectMediaItem(t),
                        n.props.onSelect && n.props.onSelect([r], n.controller.getItems()));
                  }),
                    (n.removeItem = function(e) {
                      var t = e.currentTarget.dataset.id,
                        r = n.controller.getMediaItem(t);
                      if (!r) return !1;
                      (n.props.onBeforeRemove &&
                        !1 === n.props.onBeforeRemove([r], n.controller.getItems())) ||
                        (n.controller.removeMediaItem(t),
                        n.props.onRemove && n.props.onRemove([r], n.controller.getItems())),
                        e.stopPropagation();
                    }),
                    (n.selectAllItems = function() {
                      var e = n.controller.getItems();
                      (n.props.onBeforeSelect && !1 === n.props.onBeforeSelect(e, e)) ||
                        (n.controller.selectAllItems(), n.props.onSelect && n.props.onSelect(e, e));
                    }),
                    (n.deselectAllItems = function() {
                      var e = n.controller.getItems();
                      (n.props.onBeforeDeselect && !1 === n.props.onBeforeDeselect(e, e)) ||
                        (n.controller.deselectAllItems(),
                        n.props.onDeselect && n.props.onDeselect(e, e));
                    }),
                    (n.removeSelectedItems = function() {
                      var e = n.controller.getSelectedItems();
                      (n.props.onBeforeRemove &&
                        !1 === n.props.onBeforeRemove(e, n.controller.getItems())) ||
                        (n.controller.removeSelectedItems(),
                        n.props.onRemove && n.props.onRemove(e, n.controller.getItems()));
                    }),
                    (n.handleDragLeave = function(e) {
                      e.preventDefault(),
                        n.dragCounter--,
                        0 === n.dragCounter && n.setState({ draging: !1 });
                    }),
                    (n.handleDragDrop = function(e) {
                      e.preventDefault(),
                        (n.dragCounter = 0),
                        n.setState({ draging: !1 }),
                        n.reslovePickedFiles(e);
                    }),
                    (n.handleDragEnter = function(e) {
                      e.preventDefault(), n.dragCounter++, n.setState({ draging: !0 });
                    }),
                    (n.reslovePickedFiles = function(e) {
                      e.persist();
                      var t = 'drop' === e.type ? e.dataTransfer : e.target,
                        o = t.files;
                      if (n.props.onFileSelect) {
                        var i = n.props.onFileSelect(o);
                        if (!1 === i) return !1;
                        (i instanceof FileList || i instanceof Array) && (o = i);
                      }
                      var a = r({}, d, n.props.accepts);
                      n.controller.resolveFiles(
                        {
                          files: o,
                          onItemReady: function(e) {
                            var t = e.id;
                            return n.controller.selectMediaItem(t);
                          },
                          onAllReady: function() {
                            return (e.target.value = null);
                          },
                        },
                        0,
                        a
                      );
                    }),
                    (n.inputExternal = function(e) {
                      n.setState({ external: r({}, n.state.external, { url: e.target.value }) });
                    }),
                    (n.switchExternalType = function(e) {
                      n.setState({
                        external: r({}, n.state.external, { type: e.target.dataset.type }),
                      });
                    }),
                    (n.confirmAddExternal = function(e) {
                      if ('button' === e.target.nodeName.toLowerCase() || 13 === e.keyCode) {
                        var t = n.state.external,
                          r = t.url,
                          o = t.type;
                        r = r.split('|');
                        var i = r.length > 1 ? r[0] : n.props.language.unnamedItem;
                        r = r.length > 1 ? r[1] : r[0];
                        var a = 'IMAGE' === o ? r : null;
                        n.controller.addItems([
                          {
                            thumbnail: a,
                            url: r,
                            name: i,
                            type: o,
                            id: new Date().getTime() + '_' + (0, l.UniqueIndex)(),
                            uploading: !1,
                            uploadProgress: 1,
                            selected: !0,
                          },
                        ]),
                          n.setState({
                            showExternalForm: !1,
                            external: { url: '', type: 'IMAGE' },
                          });
                      }
                    }),
                    (n.toggleExternalForm = function() {
                      n.setState({ showExternalForm: !n.state.showExternalForm });
                    }),
                    (n.cancelInsert = function() {
                      n.props.onCancel && n.props.onCancel();
                    }),
                    (n.confirmInsert = function() {
                      var e = n.controller.getSelectedItems();
                      if (n.props.onBeforeInsert) {
                        var t = n.props.onBeforeInsert(e);
                        t && t instanceof Array
                          ? (n.controller.deselectAllItems(),
                            n.props.onInsert && n.props.onInsert(t))
                          : !1 !== t &&
                            (n.controller.deselectAllItems(),
                            n.props.onInsert && n.props.onInsert(e));
                      } else
                        n.controller.deselectAllItems(), n.props.onInsert && n.props.onInsert(e);
                    }),
                    (n.dragCounter = 0),
                    (n.controller = n.props.controller);
                  var o = n.controller.getItems();
                  return (
                    (n.state = {
                      draging: !1,
                      error: !1,
                      confirmable: o.find(function(e) {
                        var t = e.selected;
                        return t;
                      }),
                      external: { url: '', type: 'IMAGE' },
                      fileAccept: '',
                      showExternalForm: !1,
                      allowExternal: !1,
                      items: o,
                    }),
                    (n.changeListenerId = n.controller.onChange(function(e) {
                      n.setState({
                        items: e,
                        confirmable: e.find(function(e) {
                          var t = e.selected;
                          return t;
                        }),
                      }),
                        n.props.onChange && n.props.onChange(e);
                    })),
                    n
                  );
                }
                return (
                  f(t, e),
                  o(t, [
                    {
                      key: 'mapPropsToState',
                      value: function(e) {
                        var t = e.accepts,
                          n = e.externals;
                        t = r({}, d, t);
                        var o = t
                            ? [t.image, t.video, t.audio]
                                .filter(function(e) {
                                  return e;
                                })
                                .join(',')
                            : [d.image, d.video, d.audio].join(','),
                          i = {
                            url: '',
                            type: n.image
                              ? 'IMAGE'
                              : n.audio
                              ? 'AUDIO'
                              : n.video
                              ? 'VIDEO'
                              : n.embed
                              ? 'EMBED'
                              : '',
                          };
                        return {
                          fileAccept: o,
                          external: i,
                          allowExternal: n && (n.image || n.audio || n.video || n.embed),
                        };
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function() {
                        this.setState(this.mapPropsToState(this.props));
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        this.setState(this.mapPropsToState(e));
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.controller.offChange(this.changeListenerId);
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          t = e.language,
                          n = e.externals,
                          r = this.state,
                          o = r.items,
                          i = r.draging,
                          l = r.confirmable,
                          s = r.fileAccept,
                          c = r.external,
                          u = r.showExternalForm,
                          f = r.allowExternal;
                        return a.default.createElement(
                          'div',
                          { className: 'braft-finder' },
                          a.default.createElement(
                            'div',
                            {
                              onDragEnter: this.handleDragEnter,
                              onDragOver: this.handleDragEnter,
                              onDragLeave: this.handleDragLeave,
                              onDrop: this.handleDragDrop,
                              className: 'bf-uploader',
                            },
                            a.default.createElement(
                              'div',
                              {
                                className:
                                  'bf-drag-uploader ' +
                                  (i || !o.length ? 'active ' : ' ') +
                                  (i ? 'draging' : ''),
                              },
                              a.default.createElement(
                                'span',
                                { className: 'bf-drag-tip' },
                                a.default.createElement('input', {
                                  accept: s,
                                  onChange: this.reslovePickedFiles,
                                  multiple: !0,
                                  type: 'file',
                                }),
                                i ? t.dropTip : t.dragTip
                              )
                            ),
                            o.length
                              ? a.default.createElement(
                                  'div',
                                  { className: 'bf-list-wrap' },
                                  a.default.createElement(
                                    'div',
                                    { className: 'bf-list-tools' },
                                    a.default.createElement(
                                      'span',
                                      { onClick: this.selectAllItems, className: 'bf-select-all' },
                                      a.default.createElement('i', {
                                        className: 'braft-icon-done',
                                      }),
                                      ' ',
                                      t.selectAll
                                    ),
                                    a.default.createElement(
                                      'span',
                                      {
                                        onClick: this.deselectAllItems,
                                        disabled: !l,
                                        className: 'bf-deselect-all',
                                      },
                                      a.default.createElement('i', {
                                        className: 'braft-icon-close',
                                      }),
                                      ' ',
                                      t.deselect
                                    ),
                                    a.default.createElement(
                                      'span',
                                      {
                                        onClick: this.removeSelectedItems,
                                        disabled: !l,
                                        className: 'bf-remove-selected',
                                      },
                                      a.default.createElement('i', { className: 'braft-icon-bin' }),
                                      ' ',
                                      t.removeSelected
                                    )
                                  ),
                                  this.buildItemList()
                                )
                              : null,
                            u && f
                              ? a.default.createElement(
                                  'div',
                                  { className: 'bf-add-external' },
                                  a.default.createElement(
                                    'div',
                                    { className: 'bf-external-form' },
                                    a.default.createElement(
                                      'div',
                                      { className: 'bf-external-input' },
                                      a.default.createElement(
                                        'div',
                                        null,
                                        a.default.createElement('input', {
                                          onKeyDown: this.confirmAddExternal,
                                          value: c.url,
                                          onChange: this.inputExternal,
                                          placeholder: t.externalInputPlaceHolder,
                                        })
                                      ),
                                      a.default.createElement(
                                        'button',
                                        {
                                          type: 'button',
                                          onClick: this.confirmAddExternal,
                                          disabled: !c.url.trim().length,
                                        },
                                        t.confirm
                                      )
                                    ),
                                    a.default.createElement(
                                      'div',
                                      { 'data-type': c.type, className: 'bf-switch-external-type' },
                                      n.image
                                        ? a.default.createElement(
                                            'button',
                                            {
                                              type: 'button',
                                              onClick: this.switchExternalType,
                                              'data-type': 'IMAGE',
                                            },
                                            t.image
                                          )
                                        : null,
                                      n.audio
                                        ? a.default.createElement(
                                            'button',
                                            {
                                              type: 'button',
                                              onClick: this.switchExternalType,
                                              'data-type': 'AUDIO',
                                            },
                                            t.audio
                                          )
                                        : null,
                                      n.video
                                        ? a.default.createElement(
                                            'button',
                                            {
                                              type: 'button',
                                              onClick: this.switchExternalType,
                                              'data-type': 'VIDEO',
                                            },
                                            t.video
                                          )
                                        : null,
                                      n.embed
                                        ? a.default.createElement(
                                            'button',
                                            {
                                              type: 'button',
                                              onClick: this.switchExternalType,
                                              'data-type': 'EMBED',
                                            },
                                            t.embed
                                          )
                                        : null
                                    ),
                                    a.default.createElement(
                                      'span',
                                      { className: 'bf-external-tip' },
                                      t.externalInputTip
                                    )
                                  )
                                )
                              : null
                          ),
                          a.default.createElement(
                            'footer',
                            { className: 'bf-manager-footer' },
                            a.default.createElement(
                              'div',
                              { className: 'pull-left' },
                              f
                                ? a.default.createElement(
                                    'span',
                                    {
                                      onClick: this.toggleExternalForm,
                                      className: 'bf-toggle-external-form',
                                    },
                                    u
                                      ? a.default.createElement(
                                          'span',
                                          { className: 'bf-bottom-text' },
                                          a.default.createElement('i', {
                                            className: 'braft-icon-add',
                                          }),
                                          ' ',
                                          t.addLocalFile
                                        )
                                      : a.default.createElement(
                                          'span',
                                          { className: 'bf-bottom-text' },
                                          a.default.createElement('i', {
                                            className: 'braft-icon-add',
                                          }),
                                          ' ',
                                          t.addExternalSource
                                        )
                                  )
                                : null
                            ),
                            a.default.createElement(
                              'div',
                              { className: 'pull-right' },
                              a.default.createElement(
                                'button',
                                {
                                  onClick: this.confirmInsert,
                                  className: 'button button-insert',
                                  disabled: !l,
                                },
                                t.insert
                              ),
                              a.default.createElement(
                                'button',
                                { onClick: this.cancelInsert, className: 'button button-cancel' },
                                t.cancel
                              )
                            )
                          )
                        );
                      },
                    },
                    {
                      key: 'buildItemList',
                      value: function() {
                        var e = this;
                        return a.default.createElement(
                          'ul',
                          { className: 'bf-list' },
                          a.default.createElement(
                            'li',
                            { className: 'bf-add-item' },
                            a.default.createElement('i', { className: 'braft-icon-add' }),
                            a.default.createElement('input', {
                              accept: this.state.fileAccept,
                              onChange: this.reslovePickedFiles,
                              multiple: !0,
                              type: 'file',
                            })
                          ),
                          this.state.items.map(function(t, n) {
                            var r = null,
                              o =
                                t.uploading && !e.props.hideProgress
                                  ? a.default.createElement(
                                      'div',
                                      { className: 'bf-item-uploading' },
                                      a.default.createElement('div', {
                                        className: 'bf-item-uploading-bar',
                                        style: { width: t.uploadProgress / 1 + '%' },
                                      })
                                    )
                                  : '';
                            switch (t.type) {
                              case 'IMAGE':
                                r = a.default.createElement(
                                  'div',
                                  { className: 'bf-image' },
                                  o,
                                  a.default.createElement('img', { src: t.thumbnail || t.url })
                                );
                                break;
                              case 'VIDEO':
                                r = a.default.createElement(
                                  'div',
                                  { className: 'bf-icon bf-video', title: t.url },
                                  o,
                                  a.default.createElement('i', { className: 'braft-icon-film' }),
                                  a.default.createElement('span', null, t.name || t.url)
                                );
                                break;
                              case 'AUDIO':
                                r = a.default.createElement(
                                  'div',
                                  { className: 'bf-icon bf-audio', title: t.url },
                                  o,
                                  a.default.createElement('i', { className: 'braft-icon-music' }),
                                  a.default.createElement('span', null, t.name || t.url)
                                );
                                break;
                              case 'EMBED':
                                r = a.default.createElement(
                                  'div',
                                  { className: 'bf-icon bf-embed', title: t.url },
                                  o,
                                  a.default.createElement('i', { className: 'braft-icon-code' }),
                                  a.default.createElement(
                                    'span',
                                    null,
                                    t.name || e.props.language.embed
                                  )
                                );
                                break;
                              default:
                                r = a.default.createElement(
                                  'a',
                                  { className: 'bf-icon bf-file', title: t.url, href: t.url },
                                  o,
                                  a.default.createElement('i', {
                                    className: 'braft-icon-file-text',
                                  }),
                                  a.default.createElement('span', null, t.name || t.url)
                                );
                                break;
                            }
                            var i = ['bf-item'];
                            return (
                              t.selected && i.push('active'),
                              t.uploading && i.push('uploading'),
                              t.error && i.push('error'),
                              a.default.createElement(
                                'li',
                                {
                                  key: n,
                                  title: t.name,
                                  'data-id': t.id,
                                  className: i.join(' '),
                                  onClick: e.toggleSelectItem,
                                },
                                r,
                                a.default.createElement('span', {
                                  'data-id': t.id,
                                  onClick: e.removeItem,
                                  className: 'bf-item-remove braft-icon-close',
                                }),
                                a.default.createElement(
                                  'span',
                                  { className: 'bf-item-title' },
                                  t.name
                                )
                              )
                            );
                          })
                        );
                      },
                    },
                  ]),
                  t
                );
              })(a.default.Component);
            (p.defaultProps = {
              accepts: d,
              externals: { image: !0, video: !0, audio: !0, embed: !0 },
            }),
              (t.default = p);
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 });
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
              o = n(1),
              i = n(0);
            function a(e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
              }
              return Array.from(e);
            }
            function l(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var s = function() {
                return !0;
              },
              c = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                l(this, e),
                  u.call(this),
                  (this.items = t.items || []),
                  (this.uploadFn = t.uploader),
                  (this.validateFn = t.validator || s),
                  (this.changeListeners = []);
              },
              u = function() {
                var e = this;
                (this.setProps = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (e.items = t.items || e.items || []),
                    (e.uploadFn = t.uploader),
                    (e.validateFn = t.validator || s);
                }),
                  (this.getMediaItem = function(t) {
                    return e.items.find(function(e) {
                      return e.id === t;
                    });
                  }),
                  (this.getSelectedItems = function() {
                    return e.items.filter(function(e) {
                      return e.selected;
                    });
                  }),
                  (this.getItems = function() {
                    return e.items;
                  }),
                  (this.setItems = function(t) {
                    (e.items =
                      t.map(function(e) {
                        return r({}, e, { id: e.id.toString() });
                      }) || []),
                      e.applyChange(),
                      e.uploadItems();
                  }),
                  (this.addMediaItem = function(t) {
                    e.addItems([t]);
                  }),
                  (this.addItems = function(t) {
                    (e.items = [].concat(
                      a(e.items),
                      a(
                        t.map(function(e) {
                          return r({}, e, { id: e.id.toString() });
                        })
                      )
                    )),
                      e.applyChange(),
                      e.uploadItems();
                  }),
                  (this.selectMediaItem = function(t) {
                    var n = e.getMediaItem(t);
                    if (n && (n.uploading || n.error)) return !1;
                    e.setMediaItemState(t, { selected: !0 });
                  }),
                  (this.selectAllItems = function() {
                    (e.items = e.items
                      .filter(function(e) {
                        return !e.error && !e.uploading;
                      })
                      .map(function(e) {
                        return r({}, e, { selected: !0 });
                      })),
                      e.applyChange();
                  }),
                  (this.deselectMediaItem = function(t) {
                    e.setMediaItemState(t, { selected: !1 });
                  }),
                  (this.deselectAllItems = function() {
                    (e.items = e.items.map(function(e) {
                      return r({}, e, { selected: !1 });
                    })),
                      e.applyChange();
                  }),
                  (this.removeMediaItem = function(t) {
                    (e.items = e.items.filter(function(e) {
                      return e.id !== t;
                    })),
                      e.applyChange();
                  }),
                  (this.removeItems = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    (e.items = e.items.filter(function(e) {
                      return !t.includes(e.id);
                    })),
                      e.applyChange();
                  }),
                  (this.removeSelectedItems = function() {
                    (e.items = e.items.filter(function(e) {
                      return !e.selected;
                    })),
                      e.applyChange();
                  }),
                  (this.removeErrorItems = function() {
                    (e.items = e.items.filter(function(e) {
                      return !e.error;
                    })),
                      e.applyChange();
                  }),
                  (this.removeAllItems = function() {
                    (e.items = []), e.applyChange();
                  }),
                  (this.setMediaItemState = function(t, n) {
                    (e.items = e.items.map(function(e) {
                      return e.id === t ? r({}, e, n) : e;
                    })),
                      e.applyChange();
                  }),
                  (this.reuploadErrorItems = function() {
                    e.uploadItems(!0);
                  }),
                  (this.uploadItems = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e.items.forEach(function(n, r) {
                      if (n.uploading || n.url) return !1;
                      if (!t && n.error) return !1;
                      if ('IMAGE' === n.type)
                        e.createThumbnail(n), (e.uploadFn = e.uploadFn || e.createInlineImage);
                      else if (!e.uploadFn) return e.setMediaItemState(n.id, { error: 1 }), !1;
                      e.setMediaItemState(n.id, { uploading: !0, uploadProgress: 0, error: 0 }),
                        e.uploadFn({
                          id: n.id,
                          file: n.file,
                          success: function(t) {
                            e.handleUploadSuccess(n.id, t);
                          },
                          progress: function(t) {
                            e.setMediaItemState(n.id, { uploading: !0, uploadProgress: t });
                          },
                          error: function(t) {
                            e.setMediaItemState(n.id, { uploading: !1, error: 2 });
                          },
                        });
                    });
                  }),
                  (this.createThumbnail = function(t) {
                    var n = t.id,
                      r = t.file;
                    (0, i.compressImage)(URL.createObjectURL(r), 226, 226).then(function(t) {
                      e.setMediaItemState(n, { thumbnail: t.url });
                    });
                  }),
                  (this.createInlineImage = function(e) {
                    (0, i.compressImage)(URL.createObjectURL(e.file), 1280, 800)
                      .then(function(t) {
                        e.success({ url: t.url });
                      })
                      .catch(function(t) {
                        e.error(t);
                      });
                  }),
                  (this.handleUploadSuccess = function(t, n) {
                    e.setMediaItemState(
                      t,
                      r({}, n, { file: null, uploadProgress: 1, uploading: !1, selected: !1 })
                    );
                    var o = e.getMediaItem(n.id || t);
                    o.onReady && o.onReady(o);
                  }),
                  (this.applyChange = function() {
                    e.changeListeners.forEach(function(t) {
                      var n = t.callback;
                      return n(e.items);
                    });
                  }),
                  (this.uploadImage = function(t, n) {
                    var r = new Date().getTime() + '_' + (0, o.UniqueIndex)();
                    e.addMediaItem({
                      type: 'IMAGE',
                      id: r,
                      file: t,
                      name: r,
                      size: t.size,
                      uploadProgress: 0,
                      uploading: !1,
                      selected: !1,
                      error: 0,
                      onReady: n,
                    });
                  }),
                  (this.uploadImageRecursively = function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    t[r] && t[r].type.indexOf('image') > -1
                      ? e.uploadImage(t[r], function(o) {
                          n && n(o), r < t.length - 1 && e.uploadImageRecursively(t, n, r + 1);
                        })
                      : r < t.length - 1 && e.uploadImageRecursively(t, n, r + 1);
                  }),
                  (this.addResolvedFiles = function(t, n, r) {
                    var i = {
                      id: new Date().getTime() + '_' + (0, o.UniqueIndex)(),
                      file: t.files[n],
                      name: t.files[n].name,
                      size: t.files[n].size,
                      uploadProgress: 0,
                      uploading: !1,
                      selected: !1,
                      error: 0,
                      onReady: function(e) {
                        t.onItemReady && t.onItemReady(e);
                      },
                    };
                    0 === t.files[n].type.indexOf('image/') && r.image
                      ? ((i.type = 'IMAGE'), e.addMediaItem(i))
                      : 0 === t.files[n].type.indexOf('video/') && r.video
                      ? ((i.type = 'VIDEO'), e.addMediaItem(i))
                      : 0 === t.files[n].type.indexOf('audio/') &&
                        r.audio &&
                        ((i.type = 'AUDIO'), e.addMediaItem(i)),
                      setTimeout(function() {
                        e.resolveFiles(t, n + 1, r);
                      }, 60);
                  }),
                  (this.resolveFiles = function(t, n, r) {
                    if (n < t.files.length) {
                      var o = e.validateFn(t.files[n]);
                      o instanceof Promise
                        ? o.then(function() {
                            e.addResolvedFiles(t, n, r);
                          })
                        : o && e.addResolvedFiles(t, n, r);
                    } else t.onAllReady && t.onAllReady();
                  }),
                  (this.onChange = function(t) {
                    var n = (0, o.UniqueIndex)();
                    return e.changeListeners.push({ id: n, callback: t }), n;
                  }),
                  (this.offChange = function(t) {
                    e.changeListeners = e.changeListeners.filter(function(e) {
                      var n = e.id;
                      return n !== t;
                    });
                  });
              };
            t.default = c;
          },
          function(e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.ImageUtils = void 0);
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
              o = n(2),
              i = g(o),
              a = n(19),
              l = g(a),
              s = n(18),
              c = g(s),
              u = n(10),
              f = g(u),
              d = n(0),
              p = h(d);
            function h(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
            }
            function g(e) {
              return e && e.__esModule ? e : { default: e };
            }
            function m(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function y(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
            }
            function v(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var b = (function(e) {
                function t(e) {
                  m(this, t);
                  var n = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                  return A.call(n), (n.superProps = e), n;
                }
                return v(t, e), t;
              })(l.default),
              A = function() {
                var e = this;
                this.ReactComponent = function() {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = r({}, e.superProps, t),
                    o =
                      ('function' === typeof n.language
                        ? n.language(f.default, 'braft-finder')
                        : f.default[n.language]) || f.default['zh'];
                  return i.default.createElement(
                    c.default,
                    r({}, n, { language: o, controller: e })
                  );
                };
              };
            (t.default = b), (t.ImageUtils = p);
          },
        ]);
      });
    },
    '7wDu': function(e, t, n) {
      'use strict';
      e.exports = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        COMMA: 188,
        PERIOD: 190,
        A: 65,
        Z: 90,
        ZERO: 48,
        NUMPAD_0: 96,
        NUMPAD_9: 105,
      };
    },
    '81KI': function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = n('Zf/v'),
        i = n('2NuI'),
        a = r.Repeat;
      function l(e, t, n, r) {
        t.isCollapsed() || i(!1);
        var l = n.length;
        if (!l) return e;
        var s = e.getBlockMap(),
          c = t.getStartKey(),
          u = t.getStartOffset(),
          f = s.get(c),
          d = f.getText(),
          p = f.merge({
            text: d.slice(0, u) + n + d.slice(u, f.getLength()),
            characterList: o(f.getCharacterList(), a(r, l).toList(), u),
          }),
          h = u + l;
        return e.merge({
          blockMap: s.set(c, p),
          selectionAfter: t.merge({ anchorOffset: h, focusOffset: h }),
        });
      }
      e.exports = l;
    },
    '83KV': function(e, t, n) {
      'use strict';
      var r = 'undefined' !== typeof navigator && navigator.userAgent.indexOf('AppleWebKit') > -1;
      function o(e) {
        return (
          (e = e || document),
          e.scrollingElement
            ? e.scrollingElement
            : r || 'CSS1Compat' !== e.compatMode
            ? e.body
            : e.documentElement
        );
      }
      e.exports = o;
    },
    '84lc': function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var o = n('JPcv'),
        i = o.List,
        a = '.',
        l = (function() {
          function e(t) {
            r(this, e), (this._decorators = t.slice());
          }
          return (
            (e.prototype.getDecorations = function(e, t) {
              var n = Array(e.getText().length).fill(null);
              return (
                this._decorators.forEach(function(r, o) {
                  var i = 0,
                    l = r.strategy,
                    u = function(e, t) {
                      s(n, e, t) && (c(n, e, t, o + a + i), i++);
                    };
                  l(e, u, t);
                }),
                i(n)
              );
            }),
            (e.prototype.getComponentForKey = function(e) {
              var t = parseInt(e.split(a)[0], 10);
              return this._decorators[t].component;
            }),
            (e.prototype.getPropsForKey = function(e) {
              var t = parseInt(e.split(a)[0], 10);
              return this._decorators[t].props;
            }),
            e
          );
        })();
      function s(e, t, n) {
        for (var r = t; r < n; r++) if (null != e[r]) return !1;
        return !0;
      }
      function c(e, t, n, r) {
        for (var o = t; o < n; o++) e[o] = r;
      }
      e.exports = l;
    },
    '867s': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          gold: '#ffd700',
          goldenrod: '#daa520',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          'indianred ': '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          lavender: '#e6e6fa',
          lavenderblush: '#fff0f5',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrodyellow: '#fafad2',
          lightgrey: '#d3d3d3',
          lightgreen: '#90ee90',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370d8',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#d87093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32',
        },
        o = function(e) {
          if (
            ((e = e
              .replace('color:', '')
              .replace(';', '')
              .replace(' ', '')),
            /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e))
          )
            return e;
          if (i[e]) return i[e];
          if (0 === e.indexOf('rgb')) {
            var t = e.split(','),
              n =
                t.length < 3
                  ? null
                  : '#' +
                    [t[0], t[1], t[2]]
                      .map(function(e) {
                        var t = parseInt(e.replace(/\D/g, ''), 10).toString(16);
                        return 1 === t.length ? '0' + t : t;
                      })
                      .join('');
            return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(n) ? n : null;
          }
          return null;
        },
        i = (t.namedColors = r),
        a = (t.getHexColor = o);
      (t.detectColorsFromHTMLString = function(e) {
        return 'string' !== typeof e
          ? []
          : (e.match(/color:[^;]{3,24};/g) || []).map(a).filter(function(e) {
              return e;
            });
      }),
        (t.detectColorsFromDraftState = function(e) {
          var t = [];
          return e && e.blocks && e.blocks.length
            ? (e.blocks.forEach(function(e) {
                e &&
                  e.inlineStyleRanges &&
                  e.inlineStyleRanges.length &&
                  e.inlineStyleRanges.forEach(function(e) {
                    e.style &&
                      e.style.indexOf('COLOR-') >= 0 &&
                      t.push('#' + e.style.split('COLOR-')[1]);
                  });
              }),
              t.filter(function(e) {
                return e;
              }))
            : t;
        });
    },
    '8d//': function(e, t, n) {
      'use strict';
      var r = n('fyOY');
      function o(e, t, n) {
        var o = e.getSelection(),
          i = e.getCurrentContent(),
          a = o;
        if (o.isCollapsed()) {
          if ('forward' === n) {
            if (e.isSelectionAtEndOfContent()) return i;
          } else if (e.isSelectionAtStartOfContent()) return i;
          if (((a = t(e)), a === o)) return i;
        }
        return r.removeRange(i, a, n);
      }
      e.exports = o;
    },
    '8uQm': function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('lFJn'),
        l = n('JPcv'),
        s = n('Taje'),
        c = l.List,
        u = l.Map,
        f = l.OrderedSet,
        d = l.Record,
        p = l.Repeat,
        h = f(),
        g = { key: '', type: 'unstyled', text: '', characterList: c(), depth: 0, data: u() },
        m = d(g),
        y = function(e) {
          if (!e) return e;
          var t = e.characterList,
            n = e.text;
          return n && !t && (e.characterList = c(p(a.EMPTY, n.length))), e;
        },
        v = (function(e) {
          function t(n) {
            return r(this, t), o(this, e.call(this, y(n)));
          }
          return (
            i(t, e),
            (t.prototype.getKey = function() {
              return this.get('key');
            }),
            (t.prototype.getType = function() {
              return this.get('type');
            }),
            (t.prototype.getText = function() {
              return this.get('text');
            }),
            (t.prototype.getCharacterList = function() {
              return this.get('characterList');
            }),
            (t.prototype.getLength = function() {
              return this.getText().length;
            }),
            (t.prototype.getDepth = function() {
              return this.get('depth');
            }),
            (t.prototype.getData = function() {
              return this.get('data');
            }),
            (t.prototype.getInlineStyleAt = function(e) {
              var t = this.getCharacterList().get(e);
              return t ? t.getStyle() : h;
            }),
            (t.prototype.getEntityAt = function(e) {
              var t = this.getCharacterList().get(e);
              return t ? t.getEntity() : null;
            }),
            (t.prototype.findStyleRanges = function(e, t) {
              s(this.getCharacterList(), b, e, t);
            }),
            (t.prototype.findEntityRanges = function(e, t) {
              s(this.getCharacterList(), A, e, t);
            }),
            t
          );
        })(m);
      function b(e, t) {
        return e.getStyle() === t.getStyle();
      }
      function A(e, t) {
        return e.getEntity() === t.getEntity();
      }
      e.exports = v;
    },
    '94Z+': function(e, t, n) {
      'use strict';
      function r(e) {
        var t = e ? e.ownerDocument || e : document,
          n = t.defaultView || window;
        return !(
          !e ||
          !('function' === typeof n.Node
            ? e instanceof n.Node
            : 'object' === typeof e &&
              'number' === typeof e.nodeType &&
              'string' === typeof e.nodeName)
        );
      }
      e.exports = r;
    },
    AKPT: function(e, t, n) {
      'use strict';
      function r(e, t, n, r) {
        var o = t.getStartKey(),
          i = t.getEndKey(),
          a = e.getBlockMap(),
          l = a
            .toSeq()
            .skipUntil(function(e, t) {
              return t === o;
            })
            .takeUntil(function(e, t) {
              return t === i;
            })
            .concat([[i, a.get(i)]])
            .map(function(e) {
              var t = e.getDepth() + n;
              return (t = Math.max(0, Math.min(t, r))), e.set('depth', t);
            });
        return (a = a.merge(l)), e.merge({ blockMap: a, selectionBefore: t, selectionAfter: t });
      }
      e.exports = r;
    },
    AyB5: function(e, t, n) {
      'use strict';
      var r = n('s8ra'),
        o = n('7wDu'),
        i = n('CYTE'),
        a = i.isPlatform('Mac OS X'),
        l = i.isPlatform('Windows'),
        s = a && i.isBrowser('Firefox < 29'),
        c = r.hasCommandModifier,
        u = r.isCtrlKeyCommand;
      function f(e) {
        return (a && e.altKey) || u(e);
      }
      function d(e) {
        return c(e) ? (e.shiftKey ? 'redo' : 'undo') : null;
      }
      function p(e) {
        return l && e.shiftKey ? null : f(e) ? 'delete-word' : 'delete';
      }
      function h(e) {
        return c(e) && a ? 'backspace-to-start-of-line' : f(e) ? 'backspace-word' : 'backspace';
      }
      function g(e) {
        switch (e.keyCode) {
          case 66:
            return c(e) ? 'bold' : null;
          case 68:
            return u(e) ? 'delete' : null;
          case 72:
            return u(e) ? 'backspace' : null;
          case 73:
            return c(e) ? 'italic' : null;
          case 74:
            return c(e) ? 'code' : null;
          case 75:
            return !l && u(e) ? 'secondary-cut' : null;
          case 77:
            return u(e) ? 'split-block' : null;
          case 79:
            return u(e) ? 'split-block' : null;
          case 84:
            return a && u(e) ? 'transpose-characters' : null;
          case 85:
            return c(e) ? 'underline' : null;
          case 87:
            return a && u(e) ? 'backspace-word' : null;
          case 89:
            return u(e) ? (l ? 'redo' : 'secondary-paste') : null;
          case 90:
            return d(e) || null;
          case o.RETURN:
            return 'split-block';
          case o.DELETE:
            return p(e);
          case o.BACKSPACE:
            return h(e);
          case o.LEFT:
            return s && c(e) ? 'move-selection-to-start-of-block' : null;
          case o.RIGHT:
            return s && c(e) ? 'move-selection-to-end-of-block' : null;
          default:
            return null;
        }
      }
      e.exports = g;
    },
    B0ab: function(e, t, n) {
      'use strict';
      var r = n('JL7T'),
        o = n('JPcv'),
        i = n('rJY1'),
        a = n('2NuI'),
        l = o.List,
        s = o.Map,
        c = function(e, t, n) {
          if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
          }
        },
        u = function(e, t, n) {
          return e.withMutations(function(e) {
            var r = t.getKey(),
              o = n.getKey();
            c(t.getParentKey(), e, function(e) {
              var t = e.getChildKeys(),
                n = t.indexOf(r) + 1,
                i = t.toArray();
              return i.splice(n, 0, o), e.merge({ children: l(i) });
            }),
              c(t.getNextSiblingKey(), e, function(e) {
                return e.merge({ prevSibling: o });
              }),
              c(r, e, function(e) {
                return e.merge({ nextSibling: o });
              }),
              c(o, e, function(e) {
                return e.merge({ prevSibling: r });
              });
          });
        },
        f = function(e, t) {
          t.isCollapsed() || a(!1);
          var n = t.getAnchorKey(),
            o = t.getAnchorOffset(),
            l = e.getBlockMap(),
            c = l.get(n),
            f = c.getText(),
            d = c.getCharacterList(),
            p = i(),
            h = c instanceof r,
            g = c.merge({ text: f.slice(0, o), characterList: d.slice(0, o) }),
            m = g.merge({ key: p, text: f.slice(o), characterList: d.slice(o), data: s() }),
            y = l.toSeq().takeUntil(function(e) {
              return e === c;
            }),
            v = l
              .toSeq()
              .skipUntil(function(e) {
                return e === c;
              })
              .rest(),
            b = y.concat([[n, g], [p, m]], v).toOrderedMap();
          return (
            h && (c.getChildKeys().isEmpty() || a(!1), (b = u(b, g, m))),
            e.merge({
              blockMap: b,
              selectionBefore: t,
              selectionAfter: t.merge({
                anchorKey: p,
                anchorOffset: 0,
                focusKey: p,
                focusOffset: 0,
                isBackward: !1,
              }),
            })
          );
        };
      e.exports = f;
    },
    B8N1: function(e, t, n) {
      'use strict';
      n.r(t);
      n('T2oS');
      var r,
        o,
        i,
        a = n('W9HT'),
        l = (n('+L6B'), n('2/Rp')),
        s = (n('14J3'), n('BMrR')),
        c = (n('BoS7'), n('Sdc0')),
        u = (n('OaEy'), n('2fM7')),
        f = (n('jCWc'), n('kPKH')),
        d = (n('5NDa'), n('5rEg')),
        p = n('p0pE'),
        h = n.n(p),
        g = n('d6i3'),
        m = n.n(g),
        y = (n('miYZ'), n('tsqr')),
        v = n('1l/V'),
        b = n.n(v),
        A = n('2Taf'),
        S = n.n(A),
        w = n('vZ4D'),
        E = n.n(w),
        k = n('l4Ni'),
        x = n.n(k),
        C = n('ujKo'),
        _ = n.n(C),
        I = n('MhPg'),
        O = n.n(I),
        T = (n('y8nQ'), n('Vl3Y')),
        M = n('q1tI'),
        D = n.n(M),
        B = n('zHco'),
        L = n('MuoO'),
        N = n('wd/R'),
        F = n.n(N),
        R = n('yEr3'),
        P = n.n(R),
        K = (n('Lzxq'), T['a'].Item),
        j = { sm: 24, md: 8 },
        z =
          ((r = Object(L['connect'])(function(e) {
            var t = e.notes,
              n = e.loading;
            return {
              notes: t,
              noteDetail: t.noteDetail,
              fetching: n.effects['notes/fetchNoteDetail'],
              submitting: n.effects['notes/submitNote'],
            };
          })),
          r(
            ((i = (function(e) {
              function t() {
                var e, n;
                S()(this, t);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                  o[i] = arguments[i];
                return (
                  (n = x()(this, (e = _()(t)).call.apply(e, [this].concat(o)))),
                  (n.state = { editorState: null }),
                  (n.saveContent = (function() {
                    var e = b()(
                      m.a.mark(function e(t) {
                        var r, o;
                        return m.a.wrap(function(e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (r = n.props.dispatch),
                                  (o = t.toHTML()),
                                  r({ type: 'notes/saveNoteDetail', payload: { htmlContent: o } }),
                                  y['a'].success(
                                    ''.concat(
                                      F()().format('HH:mm:ss'),
                                      ' \u4fdd\u5b58\u6210\u529f\uff01'
                                    )
                                  );
                              case 4:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.handleEditorChange = function(e) {
                    n.setState({ editorState: e });
                  }),
                  (n.buildPreviewHtml = function() {
                    return '\n      <!Doctype html>\n      <html>\n        <head>\n          <title>Preview Content</title>\n          <style>\n            html,body{\n              height: 100%;\n              margin: 0;\n              padding: 0;\n              overflow: auto;\n              background-color: #f1f2f3;\n            }\n            .container{\n              box-sizing: border-box;\n              width: 1000px;\n              max-width: 100%;\n              min-height: 100%;\n              margin: 0 auto;\n              padding: 30px 20px;\n              overflow: hidden;\n              background-color: #fff;\n              border-right: solid 1px #eee;\n              border-left: solid 1px #eee;\n            }\n            .container img,\n            .container audio,\n            .container video{\n              max-width: 100%;\n              height: auto;\n            }\n            .container p{\n              white-space: pre-wrap;\n              min-height: 1em;\n            }\n            .container pre{\n              padding: 15px;\n              background-color: #f1f1f1;\n              border-radius: 5px;\n            }\n            .container blockquote{\n              margin: 0;\n              padding: 15px;\n              background-color: #f1f1f1;\n              border-left: 3px solid #d1d1d1;\n            }\n          </style>\n        </head>\n        <body>\n          <div class="container">'.concat(
                      n.state.editorState && n.state.editorState.toHTML(),
                      '</div>\n        </body>\n      </html>\n    '
                    );
                  }),
                  (n.preview = function() {
                    window.previewWindow && window.previewWindow.close(),
                      (window.previewWindow = window.open()),
                      window.previewWindow.document.write(n.buildPreviewHtml()),
                      window.previewWindow.document.close();
                  }),
                  (n.onSubmit = function() {
                    var e = n.props,
                      t = e.dispatch,
                      r = e.form.validateFieldsAndScroll,
                      o = e.noteDetail.noteId,
                      i = n.state.editorState ? n.state.editorState.toHTML() : '';
                    r(function(e, n) {
                      null === e &&
                        t({
                          type: 'notes/submitNote',
                          payload: h()({}, n, {
                            keyword: JSON.stringify(n.keyword),
                            htmlContent: i,
                            noteId: o,
                            isPublic: String(n.isPublic),
                          }),
                        });
                    });
                  }),
                  n
                );
              }
              return (
                O()(t, e),
                E()(t, [
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      var e = this.props.dispatch;
                      e({ type: 'notes/saveState', payload: { noteDetail: {} } });
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = [
                          {
                            key: 'custom-button',
                            type: 'button',
                            text: '\u9884\u89c8',
                            onClick: this.preview,
                          },
                        ],
                        t = this.props,
                        n = t.form.getFieldDecorator,
                        r = t.noteDetail,
                        o = r.noteId,
                        i = r.htmlContent,
                        p = r.title,
                        h = r.keyword,
                        g = r.isPublic,
                        m = t.submitting,
                        y = t.fetching,
                        v = P.a.createEditorState(i);
                      return D.a.createElement(
                        B['a'],
                        null,
                        D.a.createElement(
                          a['a'],
                          { spinning: Boolean(y) },
                          D.a.createElement(
                            'h3',
                            null,
                            void 0 === o ? '\u6dfb\u52a0\u7b14\u8bb0' : '\u66f4\u65b0\u7b14\u8bb0'
                          ),
                          D.a.createElement(
                            T['a'],
                            null,
                            D.a.createElement(
                              s['a'],
                              { gutter: 20 },
                              D.a.createElement(
                                f['a'],
                                j,
                                D.a.createElement(
                                  K,
                                  { label: '\u6807\u9898' },
                                  n('title', { initialValue: p })(
                                    D.a.createElement(d['a'], {
                                      placeholder: '\u8bf7\u8f93\u5165\u7b14\u8bb0\u6807\u9898',
                                    })
                                  )
                                )
                              ),
                              D.a.createElement(
                                f['a'],
                                j,
                                D.a.createElement(
                                  K,
                                  { label: '\u5173\u952e\u8bcd' },
                                  n('keyword', { initialValue: h })(
                                    D.a.createElement(u['a'], {
                                      mode: 'tags',
                                      placeholder:
                                        '\u8bf7\u8f93\u5165\u7b14\u8bb0\u5173\u952e\u8bcd\uff0c\u6309\u56de\u8f66\u7ed3\u675f',
                                    })
                                  )
                                )
                              ),
                              D.a.createElement(
                                f['a'],
                                j,
                                D.a.createElement(
                                  K,
                                  { label: '\u662f\u5426\u5171\u4eab' },
                                  n('isPublic', {
                                    valuePropName: 'checked',
                                    initialValue: 'true' === g,
                                  })(
                                    D.a.createElement(c['a'], {
                                      checkedChildren: '\u5171\u4eab',
                                      unCheckedChildren: '\u79c1\u6709',
                                    })
                                  )
                                )
                              )
                            )
                          ),
                          D.a.createElement(P.a, {
                            defaultValue: i ? v : void 0,
                            onChange: this.handleEditorChange,
                            onSave: this.saveContent,
                            extendControls: e,
                          }),
                          D.a.createElement(
                            s['a'],
                            { style: { textAlign: 'right' } },
                            D.a.createElement(
                              f['a'],
                              null,
                              D.a.createElement(
                                l['a'],
                                { type: 'primary', onClick: this.onSubmit, loading: m },
                                '\u63d0\u4ea4'
                              )
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(M['Component'])),
            (o = i))
          ) || o);
      t['default'] = T['a'].create()(z);
    },
    C9ER: function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ'),
        i = n('s8ra'),
        a = n('7wDu'),
        l = n('Wkzk'),
        s = n('CYTE'),
        c = n('T401'),
        u = n('HEBY'),
        f = n('vcNX'),
        d = n('YUem'),
        p = n('MPKC'),
        h = n('0RQb'),
        g = n('ujuU'),
        m = n('3Br+'),
        y = n('tuJh'),
        v = n('ocgx'),
        b = n('SYhp'),
        A = i.isOptionKeyCommand,
        S = s.isBrowser('Chrome');
      function w(e, t) {
        switch (e) {
          case 'redo':
            return o.redo(t);
          case 'delete':
            return y(t);
          case 'delete-word':
            return d(t);
          case 'backspace':
            return m(t);
          case 'backspace-word':
            return f(t);
          case 'backspace-to-start-of-line':
            return u(t);
          case 'split-block':
            return p(t);
          case 'transpose-characters':
            return v(t);
          case 'move-selection-to-start-of-block':
            return g(t);
          case 'move-selection-to-end-of-block':
            return h(t);
          case 'secondary-cut':
            return l.cut(t);
          case 'secondary-paste':
            return l.paste(t);
          default:
            return t;
        }
      }
      function E(e, t) {
        var n = t.which,
          i = e._latestEditorState;
        switch (n) {
          case a.RETURN:
            if ((t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, i)))) return;
            break;
          case a.ESC:
            return t.preventDefault(), void (e.props.onEscape && e.props.onEscape(t));
          case a.TAB:
            return void (e.props.onTab && e.props.onTab(t));
          case a.UP:
            return void (e.props.onUpArrow && e.props.onUpArrow(t));
          case a.RIGHT:
            return void (e.props.onRightArrow && e.props.onRightArrow(t));
          case a.DOWN:
            return void (e.props.onDownArrow && e.props.onDownArrow(t));
          case a.LEFT:
            return void (e.props.onLeftArrow && e.props.onLeftArrow(t));
          case a.SPACE:
            if (S && A(t)) {
              t.preventDefault();
              var l = r.replaceText(i.getCurrentContent(), i.getSelection(), '\xa0');
              return void e.update(o.push(i, l, 'insert-characters'));
            }
        }
        var s = e.props.keyBindingFn(t);
        if (s)
          if ('undo' !== s) {
            if (
              (t.preventDefault(), !e.props.handleKeyCommand || !c(e.props.handleKeyCommand(s, i)))
            ) {
              var u = w(s, i);
              u !== i && e.update(u);
            }
          } else b(t, i, e.update);
      }
      e.exports = E;
    },
    CJXx: function(e, t, n) {
      'use strict';
      var r = n('MgzW');
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function a(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var l = n('WLG0'),
        s = n('q1tI'),
        c = n('i8i4'),
        u = n('2NuI'),
        f = n('O4zn'),
        d = (function(e) {
          function t() {
            return o(this, t), i(this, e.apply(this, arguments));
          }
          return (
            a(t, e),
            (t.prototype._setSelection = function() {
              var e = this.props.selection;
              if (null != e && e.getHasFocus()) {
                var t = this.props,
                  n = t.block,
                  r = t.start,
                  o = t.text,
                  i = n.getKey(),
                  a = r + o.length;
                if (e.hasEdgeWithin(i, r, a)) {
                  var l = c.findDOMNode(this);
                  l || u(!1);
                  var s = l.firstChild;
                  s || u(!1);
                  var d = void 0;
                  s.nodeType === Node.TEXT_NODE
                    ? (d = s)
                    : 'BR' === s.tagName
                    ? (d = l)
                    : ((d = s.firstChild), d || u(!1)),
                    f(e, d, i, r, a);
                }
              }
            }),
            (t.prototype.shouldComponentUpdate = function(e) {
              var t = c.findDOMNode(this.leaf);
              return (
                t || u(!1),
                t.textContent !== e.text || e.styleSet !== this.props.styleSet || e.forceSelection
              );
            }),
            (t.prototype.componentDidUpdate = function() {
              this._setSelection();
            }),
            (t.prototype.componentDidMount = function() {
              this._setSelection();
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.block,
                n = this.props.text;
              n.endsWith('\n') && this.props.isLast && (n += '\n');
              var o = this.props,
                i = o.customStyleMap,
                a = o.customStyleFn,
                c = o.offsetKey,
                u = o.styleSet,
                f = u.reduce(function(e, t) {
                  var n = {},
                    o = i[t];
                  return (
                    void 0 !== o &&
                      e.textDecoration !== o.textDecoration &&
                      (n.textDecoration = [e.textDecoration, o.textDecoration].join(' ').trim()),
                    r(e, o, n)
                  );
                }, {});
              if (a) {
                var d = a(u, t);
                f = r(f, d);
              }
              return s.createElement(
                'span',
                {
                  'data-offset-key': c,
                  ref: function(t) {
                    return (e.leaf = t);
                  },
                  style: f,
                },
                s.createElement(l, null, n)
              );
            }),
            t
          );
        })(s.Component);
      e.exports = d;
    },
    CYTE: function(e, t, n) {
      'use strict';
      var r = n('KL9H'),
        o = n('QfTi'),
        i = n('bd9B'),
        a = n('rWXM');
      function l(e, t, n, r) {
        if (e === n) return !0;
        if (!n.startsWith(e)) return !1;
        var i = n.slice(e.length);
        return !!t && ((i = r ? r(i) : i), o.contains(i, t));
      }
      function s(e) {
        return 'Windows' === r.platformName ? e.replace(/^\s*NT/, '') : e;
      }
      var c = {
        isBrowser: function(e) {
          return l(r.browserName, r.browserFullVersion, e);
        },
        isBrowserArchitecture: function(e) {
          return l(r.browserArchitecture, null, e);
        },
        isDevice: function(e) {
          return l(r.deviceName, null, e);
        },
        isEngine: function(e) {
          return l(r.engineName, r.engineVersion, e);
        },
        isPlatform: function(e) {
          return l(r.platformName, r.platformFullVersion, e, s);
        },
        isPlatformArchitecture: function(e) {
          return l(r.platformArchitecture, null, e);
        },
      };
      e.exports = i(c, a);
    },
    DEWG: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n,
          r = e.getSelection(),
          o = r.getStartKey(),
          i = r.getStartOffset(),
          a = e.getCurrentContent(),
          l = o,
          s = a.getBlockForKey(o);
        return (
          t > s.getText().length - i ? ((l = a.getKeyAfter(o)), (n = 0)) : (n = i + t),
          r.merge({ focusKey: l, focusOffset: n })
        );
      }
      e.exports = r;
    },
    DYKh: function(e, t, n) {
      'use strict';
      var r = n('V8dp'),
        o = n('bu5B'),
        i = function(e, t) {
          var n = t.getStartKey(),
            i = t.getStartOffset(),
            a = t.getEndKey(),
            l = t.getEndOffset(),
            s = o(e, t),
            c = s.getBlockMap(),
            u = c.keySeq(),
            f = u.indexOf(n),
            d = u.indexOf(a) + 1;
          return r(
            c.slice(f, d).map(function(e, t) {
              var r = e.getText(),
                o = e.getCharacterList();
              return n === a
                ? e.merge({ text: r.slice(i, l), characterList: o.slice(i, l) })
                : t === n
                ? e.merge({ text: r.slice(i), characterList: o.slice(i) })
                : t === a
                ? e.merge({ text: r.slice(0, l), characterList: o.slice(0, l) })
                : e;
            })
          );
        };
      e.exports = i;
    },
    DeIs: function(e, t, n) {
      'use strict';
      var r = n('83KV'),
        o = n('MxAa');
      function i(e) {
        var t = r(e.ownerDocument || e.document);
        e.Window && e instanceof e.Window && (e = t);
        var n = o(e),
          i = e === t ? e.ownerDocument.documentElement : e,
          a = e.scrollWidth - i.clientWidth,
          l = e.scrollHeight - i.clientHeight;
        return (n.x = Math.max(0, Math.min(n.x, a))), (n.y = Math.max(0, Math.min(n.y, l))), n;
      }
      e.exports = i;
    },
    DthY: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var s = n('CJXx'),
        c = n('Iq8E'),
        u = n('q1tI'),
        f = n('i8i4'),
        d = n('prOm'),
        p = n('6Xrj'),
        h = n('fZAc'),
        g = n('mjHj'),
        m = n('YVIB'),
        y = n('p1kU'),
        v = n('DeIs'),
        b = n('tKWh'),
        A = n('2NuI'),
        S = n('gWRK'),
        w = 10,
        E = function(e, t) {
          return e.getAnchorKey() === t || e.getFocusKey() === t;
        },
        k = (function(e) {
          function t() {
            return i(this, t), a(this, e.apply(this, arguments));
          }
          return (
            l(t, e),
            (t.prototype.shouldComponentUpdate = function(e) {
              return (
                this.props.block !== e.block ||
                this.props.tree !== e.tree ||
                this.props.direction !== e.direction ||
                (E(e.selection, e.block.getKey()) && e.forceSelection)
              );
            }),
            (t.prototype.componentDidMount = function() {
              var e = this.props.selection,
                t = e.getEndKey();
              if (e.getHasFocus() && t === this.props.block.getKey()) {
                var n = f.findDOMNode(this),
                  r = p.getScrollParent(n),
                  o = v(r),
                  i = void 0;
                if (r === window) {
                  var a = y(n),
                    l = a.y + a.height,
                    s = b().height;
                  (i = l - s), i > 0 && window.scrollTo(o.x, o.y + i + w);
                } else {
                  n instanceof HTMLElement || A(!1);
                  var c = n.offsetHeight + n.offsetTop,
                    u = r.offsetHeight + o.y;
                  (i = c - u), i > 0 && d.setTop(r, d.getTop(r) + i + w);
                }
              }
            }),
            (t.prototype._renderChildren = function() {
              var e = this,
                t = this.props.block,
                n = t.getKey(),
                r = t.getText(),
                i = this.props.tree.size - 1,
                a = E(this.props.selection, n);
              return this.props.tree
                .map(function(l, f) {
                  var d = l.get('leaves'),
                    p = d.size - 1,
                    m = d
                      .map(function(o, l) {
                        var d = c.encode(n, f, l),
                          h = o.get('start'),
                          g = o.get('end');
                        return u.createElement(s, {
                          key: d,
                          offsetKey: d,
                          block: t,
                          start: h,
                          selection: a ? e.props.selection : null,
                          forceSelection: e.props.forceSelection,
                          text: r.slice(h, g),
                          styleSet: t.getInlineStyleAt(h),
                          customStyleMap: e.props.customStyleMap,
                          customStyleFn: e.props.customStyleFn,
                          isLast: f === i && l === p,
                        });
                      })
                      .toArray(),
                    y = l.get('decoratorKey');
                  if (null == y) return m;
                  if (!e.props.decorator) return m;
                  var v = S(e.props.decorator),
                    b = v.getComponentForKey(y);
                  if (!b) return m;
                  var A = v.getPropsForKey(y),
                    w = c.encode(n, f, 0),
                    E = r.slice(d.first().get('start'), d.last().get('end')),
                    k = g.getHTMLDirIfDifferent(h.getDirection(E), e.props.direction);
                  return u.createElement(
                    b,
                    o({}, A, {
                      contentState: e.props.contentState,
                      decoratedText: E,
                      dir: k,
                      key: w,
                      entityKey: t.getEntityAt(l.get('start')),
                      offsetKey: w,
                    }),
                    m
                  );
                })
                .toArray();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.direction,
                n = e.offsetKey,
                r = m({
                  'public/DraftStyleDefault/block': !0,
                  'public/DraftStyleDefault/ltr': 'LTR' === t,
                  'public/DraftStyleDefault/rtl': 'RTL' === t,
                });
              return u.createElement(
                'div',
                { 'data-offset-key': n, className: r },
                this._renderChildren()
              );
            }),
            t
          );
        })(u.Component);
      e.exports = k;
    },
    FcOR: function(e, t, n) {
      'use strict';
      e.exports = {
        logSelectionStateFailure: function() {
          return null;
        },
      };
    },
    H2OV: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = i(n('q1tI')),
        o = i(n('hq3H'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return (
          (a =
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
          a(e)
        );
      }
      var l = function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'start';
          if (r['default'].isValidElement(t)) {
            var i = (0, o['default'])(t);
            if ('string' === typeof i) return 0;
            var l = i[n].length,
              s = r['default'].Children.toArray(t.props.children)[0];
            return l + (s && r['default'].isValidElement(s) ? e(s, n) : 0);
          }
          return 'object' === a(t) && t[n] ? t[n].length : 0;
        },
        s = l;
      t['default'] = s;
    },
    H7ev: function(e, t, n) {
      !(function(t, r) {
        e.exports = r(n('v83y'), n('JPcv'));
      })('undefined' != typeof self && self, function(e, t) {
        return (function(e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.d = function(e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
            }),
            (t.n = function(e) {
              var n =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return t.d(n, 'a', n), n;
            }),
            (t.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ''),
            t((t.s = 3))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t, n) {
            'use strict';
            function r(e) {
              var t = e.getSelection(),
                n = e.getCurrentContent(),
                r = t.getStartKey(),
                o = t.getEndKey(),
                i = n.getBlockMap();
              return i
                .toSeq()
                .skipUntil(function(e, t) {
                  return t === r;
                })
                .takeUntil(function(e, t) {
                  return t === o;
                })
                .concat([[o, i.get(o)]]);
            }
            function o(e) {
              return r(e).toList();
            }
            function i(e) {
              if (e) return o(e).get(0);
            }
            function a(e) {
              if (e) {
                var t = i(e),
                  n = e.getCurrentContent(),
                  r = n
                    .getBlockMap()
                    .toSeq()
                    .toList(),
                  o = 0;
                if (
                  (r.forEach(function(e, n) {
                    e.get('key') === t.get('key') && (o = n - 1);
                  }),
                  o > -1)
                )
                  return r.get(o);
              }
            }
            function l(e) {
              return e
                ? e
                    .getCurrentContent()
                    .getBlockMap()
                    .toList()
                : new y.List();
            }
            function s(e) {
              var t = o(e);
              if (
                !t.some(function(e) {
                  return e.type !== t.get(0).type;
                })
              )
                return t.get(0).type;
            }
            function c(e) {
              var t = m.RichUtils.tryToRemoveBlockStyle(e);
              return t ? m.EditorState.push(e, t, 'change-block-type') : e;
            }
            function u(e) {
              var t = '',
                n = e.getSelection(),
                r = n.getAnchorOffset(),
                i = n.getFocusOffset(),
                a = o(e);
              if (a.size > 0) {
                if (n.getIsBackward()) {
                  var l = r;
                  (r = i), (i = l);
                }
                for (var s = 0; s < a.size; s += 1) {
                  var c = 0 === s ? r : 0,
                    u = s === a.size - 1 ? i : a.get(s).getText().length;
                  t += a
                    .get(s)
                    .getText()
                    .slice(c, u);
                }
              }
              return t;
            }
            function f(e) {
              var t = e.getCurrentContent(),
                n = e.getSelection(),
                r = m.Modifier.removeRange(t, n, 'forward'),
                o = r.getSelectionAfter(),
                i = r.getBlockForKey(o.getStartKey());
              return (
                (r = m.Modifier.insertText(
                  r,
                  o,
                  '\n',
                  i.getInlineStyleAt(o.getStartOffset()),
                  null
                )),
                m.EditorState.push(e, r, 'insert-fragment')
              );
            }
            function d(e) {
              var t = m.Modifier.splitBlock(e.getCurrentContent(), e.getSelection());
              return c(m.EditorState.push(e, t, 'split-block'));
            }
            function p(e) {
              var t = e
                  .getCurrentContent()
                  .getBlockMap()
                  .toList(),
                n = e
                  .getSelection()
                  .merge({
                    anchorKey: t.first().get('key'),
                    anchorOffset: 0,
                    focusKey: t.last().get('key'),
                    focusOffset: t.last().getLength(),
                  }),
                r = m.Modifier.removeRange(e.getCurrentContent(), n, 'forward');
              return m.EditorState.push(e, r, 'remove-range');
            }
            function h(e, t) {
              var n = m.Modifier.setBlockData(e.getCurrentContent(), e.getSelection(), t);
              return m.EditorState.push(e, n, 'change-block-data');
            }
            function g(e) {
              var t = new y.Map({}),
                n = o(e);
              if (n && n.size > 0)
                for (var r = 0; r < n.size; r += 1) {
                  var i = (function(e) {
                    var r = n.get(e).getData();
                    if (!r || 0 === r.size) return (t = t.clear()), 'break';
                    if (0 === e) t = r;
                    else if (
                      (t.forEach(function(e, n) {
                        (r.get(n) && r.get(n) === e) || (t = t.delete(n));
                      }),
                      0 === t.size)
                    )
                      return (t = t.clear()), 'break';
                  })(r);
                  if ('break' === i) break;
                }
              return t;
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.blockRenderMap = void 0),
              (t.getSelectedBlocksMap = r),
              (t.getSelectedBlocksList = o),
              (t.getSelectedBlock = i),
              (t.getBlockBeforeSelectedBlock = a),
              (t.getAllBlocks = l),
              (t.getSelectedBlocksType = s),
              (t.removeSelectedBlocksStyle = c),
              (t.getSelectionText = u),
              (t.addLineBreakRemovingSelection = f),
              (t.insertNewUnstyledBlock = d),
              (t.clearEditorContent = p),
              (t.setBlockData = h),
              (t.getSelectedBlocksMetadata = g);
            var m = n(0),
              y = n(6),
              v = (0, y.Map)({ code: { element: 'pre' } });
            t.blockRenderMap = m.DefaultDraftBlockRenderMap.merge(v);
          },
          function(e, t, n) {
            'use strict';
            function r(e) {
              if (e) {
                var t = e.getType();
                return 'unordered-list-item' === t || 'ordered-list-item' === t;
              }
              return !1;
            }
            function o(e, t, n) {
              var r = e.getSelection(),
                o = e.getCurrentContent(),
                i = o.getBlockMap(),
                a = (0, l.getSelectedBlocksMap)(e).map(function(e) {
                  var r = e.getDepth() + t;
                  return (r = Math.max(0, Math.min(r, n))), e.set('depth', r);
                });
              return (
                (i = i.merge(a)), o.merge({ blockMap: i, selectionBefore: r, selectionAfter: r })
              );
            }
            function i(e, t, n) {
              var r = e.getSelection(),
                i = void 0;
              i = r.getIsBackward() ? r.getFocusKey() : r.getAnchorKey();
              var l = e.getCurrentContent(),
                s = l.getBlockForKey(i),
                c = s.getType();
              if ('unordered-list-item' !== c && 'ordered-list-item' !== c) return e;
              var u = l.getBlockBefore(i);
              if (!u) return e;
              if (u.getType() !== c) return e;
              var f = s.getDepth();
              if (1 === t && f === n) return e;
              var d = Math.min(u.getDepth() + 1, n),
                p = o(e, t, d);
              return a.EditorState.push(e, p, 'adjust-depth');
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.isListBlock = r),
              (t.changeDepth = i);
            var a = n(0),
              l = n(1);
          },
          function(e, t, n) {
            e.exports = n(4);
          },
          function(e, t, n) {
            'use strict';
            var r = n(5),
              o = n(1),
              i = n(7),
              a = (function(e) {
                return e && e.__esModule ? e : { default: e };
              })(i),
              l = n(2);
            e.exports = {
              getSelectedBlocksMap: o.getSelectedBlocksMap,
              getSelectedBlocksList: o.getSelectedBlocksList,
              getSelectedBlock: o.getSelectedBlock,
              getBlockBeforeSelectedBlock: o.getBlockBeforeSelectedBlock,
              getAllBlocks: o.getAllBlocks,
              getSelectedBlocksType: o.getSelectedBlocksType,
              removeSelectedBlocksStyle: o.removeSelectedBlocksStyle,
              getSelectionText: o.getSelectionText,
              addLineBreakRemovingSelection: o.addLineBreakRemovingSelection,
              insertNewUnstyledBlock: o.insertNewUnstyledBlock,
              clearEditorContent: o.clearEditorContent,
              setBlockData: o.setBlockData,
              getSelectedBlocksMetadata: o.getSelectedBlocksMetadata,
              blockRenderMap: o.blockRenderMap,
              getEntityRange: r.getEntityRange,
              getCustomStyleMap: r.getCustomStyleMap,
              toggleCustomInlineStyle: r.toggleCustomInlineStyle,
              getSelectionEntity: r.getSelectionEntity,
              extractInlineStyle: r.extractInlineStyle,
              removeAllInlineStyles: r.removeAllInlineStyles,
              getSelectionInlineStyle: r.getSelectionInlineStyle,
              getSelectionCustomInlineStyle: r.getSelectionCustomInlineStyle,
              handleNewLine: a.default,
              isListBlock: l.isListBlock,
              changeDepth: l.changeDepth,
            };
          },
          function(e, t, n) {
            'use strict';
            function r(e, t, n) {
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
            function o(e) {
              var t = e.getSelection();
              if (t.isCollapsed()) {
                var n = {},
                  r = e
                    .getCurrentInlineStyle()
                    .toList()
                    .toJS();
                if (r)
                  return (
                    [
                      'BOLD',
                      'ITALIC',
                      'UNDERLINE',
                      'STRIKETHROUGH',
                      'CODE',
                      'SUPERSCRIPT',
                      'SUBSCRIPT',
                    ].forEach(function(e) {
                      n[e] = r.indexOf(e) >= 0;
                    }),
                    n
                  );
              }
              var o = t.getStartOffset(),
                i = t.getEndOffset(),
                a = (0, m.getSelectedBlocksList)(e);
              if (a.size > 0) {
                var l = (function() {
                  for (
                    var e = {
                        BOLD: !0,
                        ITALIC: !0,
                        UNDERLINE: !0,
                        STRIKETHROUGH: !0,
                        CODE: !0,
                        SUPERSCRIPT: !0,
                        SUBSCRIPT: !0,
                      },
                      t = 0;
                    t < a.size;
                    t += 1
                  ) {
                    var n = 0 === t ? o : 0,
                      r = t === a.size - 1 ? i : a.get(t).getText().length;
                    n === r && 0 === n ? ((n = 1), (r = 2)) : n === r && (n -= 1);
                    for (var l = n; l < r; l += 1)
                      !(function(n) {
                        var r = a.get(t).getInlineStyleAt(n);
                        [
                          'BOLD',
                          'ITALIC',
                          'UNDERLINE',
                          'STRIKETHROUGH',
                          'CODE',
                          'SUPERSCRIPT',
                          'SUBSCRIPT',
                        ].forEach(function(t) {
                          e[t] = e[t] && r.get(t) === t;
                        });
                      })(l);
                  }
                  return { v: e };
                })();
                if ('object' === (void 0 === l ? 'undefined' : h(l))) return l.v;
              }
              return {};
            }
            function i(e) {
              var t = void 0,
                n = e.getSelection(),
                r = n.getStartOffset(),
                o = n.getEndOffset();
              r === o && 0 === r ? (o = 1) : r === o && (r -= 1);
              for (var i = (0, m.getSelectedBlock)(e), a = r; a < o; a += 1) {
                var l = i.getEntityAt(a);
                if (!l) {
                  t = void 0;
                  break;
                }
                if (a === r) t = l;
                else if (t !== l) {
                  t = void 0;
                  break;
                }
              }
              return t;
            }
            function a(e, t) {
              var n = (0, m.getSelectedBlock)(e),
                r = void 0;
              return (
                n.findEntityRanges(
                  function(e) {
                    return e.get('entity') === t;
                  },
                  function(e, t) {
                    r = { start: e, end: t, text: n.get('text').slice(e, t) };
                  }
                ),
                r
              );
            }
            function l(e, t, n) {
              var r = e.getSelection(),
                o = Object.keys(y[t]).reduce(function(e, t) {
                  return g.Modifier.removeInlineStyle(e, r, t);
                }, e.getCurrentContent()),
                i = g.EditorState.push(e, o, 'changeinline-style'),
                a = e.getCurrentInlineStyle();
              if (
                (r.isCollapsed() &&
                  (i = a.reduce(function(e, t) {
                    return g.RichUtils.toggleInlineStyle(e, t);
                  }, i)),
                'SUPERSCRIPT' === t || 'SUBSCRIPT' == t)
              )
                a.has(n) || (i = g.RichUtils.toggleInlineStyle(i, n));
              else {
                var l = 'bgcolor' === t ? 'backgroundColor' : t;
                a.has(l + '-' + n) ||
                  ((i = g.RichUtils.toggleInlineStyle(i, t.toLowerCase() + '-' + n)), v(t, l, n));
              }
              return i;
            }
            function s(e) {
              e &&
                e
                  .getCurrentContent()
                  .getBlockMap()
                  .map(function(e) {
                    return e.get('characterList');
                  })
                  .toList()
                  .flatten()
                  .forEach(function(e) {
                    e && 0 === e.indexOf('color-')
                      ? v('color', 'color', e.substr(6))
                      : e && 0 === e.indexOf('bgcolor-')
                      ? v('bgcolor', 'backgroundColor', e.substr(8))
                      : e && 0 === e.indexOf('fontsize-')
                      ? v('fontSize', 'fontSize', +e.substr(9))
                      : e &&
                        0 === e.indexOf('fontfamily-') &&
                        v('fontFamily', 'fontFamily', e.substr(11));
                  });
            }
            function c(e, t, n) {
              var r = e.getInlineStyleAt(n).toList(),
                o = r.filter(function(e) {
                  return e.startsWith(t.toLowerCase());
                });
              if (o && o.size > 0) return o.get(0);
            }
            function u(e, t) {
              var n = e.getCurrentInlineStyle().toList(),
                r = n.filter(function(e) {
                  return e.startsWith(t.toLowerCase());
                });
              if (r && r.size > 0) return r.get(0);
            }
            function f(e, t) {
              if (e && t && t.length > 0) {
                var n = (function() {
                  var n = e.getSelection(),
                    r = {};
                  if (n.isCollapsed())
                    return (
                      t.forEach(function(t) {
                        r[t] = u(e, t);
                      }),
                      { v: r }
                    );
                  var o = n.getStartOffset(),
                    i = n.getEndOffset(),
                    a = (0, m.getSelectedBlocksList)(e);
                  if (a.size > 0) {
                    for (var l = 0; l < a.size; l += 1)
                      !(function(e) {
                        var n = 0 === e ? o : 0,
                          l = e === a.size - 1 ? i : a.get(e).getText().length;
                        n === l && 0 === n ? ((n = 1), (l = 2)) : n === l && (n -= 1);
                        for (var s = n; s < l; s += 1)
                          !(function(o) {
                            o === n
                              ? t.forEach(function(t) {
                                  r[t] = c(a.get(e), t, o);
                                })
                              : t.forEach(function(t) {
                                  r[t] && r[t] !== c(a.get(e), t, o) && (r[t] = void 0);
                                });
                          })(s);
                      })(l);
                    return { v: r };
                  }
                })();
                if ('object' === (void 0 === n ? 'undefined' : h(n))) return n.v;
              }
              return {};
            }
            function d(e) {
              var t = e.getCurrentInlineStyle(),
                n = e.getCurrentContent();
              return (
                t.forEach(function(t) {
                  n = g.Modifier.removeInlineStyle(n, e.getSelection(), t);
                }),
                g.EditorState.push(e, n, 'change-inline-style')
              );
            }
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.getCustomStyleMap = void 0);
            var p =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                },
              h =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    };
            (t.getSelectionInlineStyle = o),
              (t.getSelectionEntity = i),
              (t.getEntityRange = a),
              (t.toggleCustomInlineStyle = l),
              (t.extractInlineStyle = s),
              (t.getSelectionCustomInlineStyle = f),
              (t.removeAllInlineStyles = d);
            var g = n(0),
              m = n(1),
              y = {
                color: {},
                bgcolor: {},
                fontSize: {},
                fontFamily: {},
                CODE: {
                  fontFamily: 'monospace',
                  wordWrap: 'break-word',
                  background: '#f1f1f1',
                  borderRadius: 3,
                  padding: '1px 3px',
                },
                SUPERSCRIPT: {
                  fontSize: 11,
                  position: 'relative',
                  top: -8,
                  display: 'inline-flex',
                },
                SUBSCRIPT: {
                  fontSize: 11,
                  position: 'relative',
                  bottom: -8,
                  display: 'inline-flex',
                },
              },
              v = function(e, t, n) {
                y[e][e.toLowerCase() + '-' + n] = r({}, '' + t, n);
              };
            t.getCustomStyleMap = function() {
              return p({}, y.color, y.bgcolor, y.fontSize, y.fontFamily, {
                CODE: y.CODE,
                SUPERSCRIPT: y.SUPERSCRIPT,
                SUBSCRIPT: y.SUBSCRIPT,
              });
            };
          },
          function(e, n) {
            e.exports = t;
          },
          function(e, t, n) {
            'use strict';
            function r(e) {
              var t = e.getSelection();
              if (t.isCollapsed()) {
                var n = e.getCurrentContent(),
                  r = t.getStartKey(),
                  o = n.getBlockForKey(r);
                if (
                  !(0, s.isListBlock)(o) &&
                  'unstyled' !== o.getType() &&
                  o.getLength() === t.getStartOffset()
                )
                  return (0, l.insertNewUnstyledBlock)(e);
                if ((0, s.isListBlock)(o) && 0 === o.getLength()) {
                  var i = o.getDepth();
                  if (0 === i) return (0, l.removeSelectedBlocksStyle)(e);
                  if (i > 0) return (0, s.changeDepth)(e, -1, i);
                }
              }
            }
            function o(e) {
              return (
                13 === e.which &&
                (e.getModifierState('Shift') ||
                  e.getModifierState('Alt') ||
                  e.getModifierState('Control'))
              );
            }
            function i(e, t) {
              return o(t)
                ? e.getSelection().isCollapsed()
                  ? a.RichUtils.insertSoftNewline(e)
                  : (0, l.addLineBreakRemovingSelection)(e)
                : r(e);
            }
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
            var a = n(0),
              l = n(1),
              s = n(2);
          },
        ]);
      });
    },
    HEBY: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('3sOJ'),
          o = n('HezI'),
          i = n('ISee'),
          a = n('kWjT'),
          l = n('8d//');
        function s(e) {
          var n = l(
            e,
            function(e) {
              var n = e.getSelection();
              if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(e, 1);
              var r = t.getSelection(),
                l = r.getRangeAt(0);
              return (
                (l = o(l)),
                i(e, null, l.endContainer, l.endOffset, l.startContainer, l.startOffset)
                  .selectionState
              );
            },
            'backward'
          );
          return n === e.getCurrentContent() ? e : r.push(e, n, 'remove-range');
        }
        e.exports = s;
      }.call(this, n('yLpj')));
    },
    HKS5: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('2NuI'),
          o = /\.textClipping$/,
          i = { 'text/plain': !0, 'text/html': !0, 'text/rtf': !0 },
          a = 5e3;
        function l(e, t) {
          var n = 0,
            r = [];
          e.forEach(function(o) {
            s(o, function(o) {
              n++, o && r.push(o.slice(0, a)), n == e.length && t(r.join('\r'));
            });
          });
        }
        function s(e, n) {
          if (t.FileReader && (!e.type || e.type in i)) {
            if ('' === e.type) {
              var a = '';
              return o.test(e.name) && (a = e.name.replace(o, '')), void n(a);
            }
            var l = new FileReader();
            (l.onload = function() {
              var e = l.result;
              'string' !== typeof e && r(!1), n(e);
            }),
              (l.onerror = function() {
                n('');
              }),
              l.readAsText(e);
          } else n('');
        }
        e.exports = l;
      }.call(this, n('yLpj')));
    },
    Hdlu: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('q1tI'),
        l = n('YVIB'),
        s = (function(e) {
          function t() {
            return r(this, t), o(this, e.apply(this, arguments));
          }
          return (
            i(t, e),
            (t.prototype.shouldComponentUpdate = function(e) {
              return (
                this.props.text !== e.text ||
                this.props.editorState.getSelection().getHasFocus() !==
                  e.editorState.getSelection().getHasFocus()
              );
            }),
            (t.prototype.render = function() {
              var e = this.props.editorState.getSelection().getHasFocus(),
                t = l({
                  'public/DraftEditorPlaceholder/root': !0,
                  'public/DraftEditorPlaceholder/hasFocus': e,
                }),
                n = { whiteSpace: 'pre-wrap' };
              return a.createElement(
                'div',
                { className: t },
                a.createElement(
                  'div',
                  {
                    className: l('public/DraftEditorPlaceholder/inner'),
                    id: this.props.accessibilityID,
                    style: n,
                  },
                  this.props.text
                )
              );
            }),
            t
          );
        })(a.Component);
      e.exports = s;
    },
    HezI: function(e, t, n) {
      'use strict';
      var r = n('jLRO'),
        o = n('158f'),
        i = n('2NuI');
      function a(e) {
        var t = getComputedStyle(e),
          n = document.createElement('div');
        (n.style.fontFamily = t.fontFamily),
          (n.style.fontSize = t.fontSize),
          (n.style.fontStyle = t.fontStyle),
          (n.style.fontWeight = t.fontWeight),
          (n.style.lineHeight = t.lineHeight),
          (n.style.position = 'absolute'),
          (n.textContent = 'M');
        var r = document.body;
        r || i(!1), r.appendChild(n);
        var o = n.getBoundingClientRect();
        return r.removeChild(n), o.height;
      }
      function l(e, t) {
        for (var n = 1 / 0, r = 1 / 0, o = -1 / 0, i = -1 / 0, a = 0; a < e.length; a++) {
          var l = e[a];
          0 !== l.width &&
            1 !== l.width &&
            ((n = Math.min(n, l.top)),
            (r = Math.min(r, l.bottom)),
            (o = Math.max(o, l.top)),
            (i = Math.max(i, l.bottom)));
        }
        return o <= r && o - n < t && i - r < t;
      }
      function s(e) {
        switch (e.nodeType) {
          case Node.DOCUMENT_TYPE_NODE:
            return 0;
          case Node.TEXT_NODE:
          case Node.PROCESSING_INSTRUCTION_NODE:
          case Node.COMMENT_NODE:
            return e.length;
          default:
            return e.childNodes.length;
        }
      }
      function c(e) {
        e.collapsed || i(!1), (e = e.cloneRange());
        var t = e.startContainer;
        1 !== t.nodeType && (t = t.parentNode);
        var n = a(t),
          c = e.endContainer,
          u = e.endOffset;
        e.setStart(e.startContainer, 0);
        while (l(o(e), n))
          if (
            ((c = e.startContainer),
            (u = e.startOffset),
            c.parentNode || i(!1),
            e.setStartBefore(c),
            1 === c.nodeType && 'inline' !== getComputedStyle(c).display)
          )
            break;
        var f = c,
          d = u - 1;
        do {
          for (var p = f.nodeValue, h = d; h >= 0; h--)
            if (!(null != p && h > 0 && r.isSurrogatePair(p, h - 1))) {
              if ((e.setStart(f, h), !l(o(e), n))) break;
              (c = f), (u = h);
            }
          if (-1 === h || 0 === f.childNodes.length) break;
          (f = f.childNodes[h]), (d = s(f));
        } while (1);
        return e.setStart(c, u), e;
      }
      e.exports = c;
    },
    HriT: function(e, t, n) {
      'use strict';
      var r = new RegExp('\r', 'g');
      function o(e) {
        return e.replace(r, '');
      }
      e.exports = o;
    },
    I2Ug: function(e, t, n) {
      'use strict';
      var r = n('JL7T'),
        o = n('JPcv'),
        i = n('VTBg'),
        a = n('2NuI'),
        l = o.OrderedMap,
        s = o.List,
        c = function(e, t, n) {
          if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
          }
        },
        u = function(e, t, n, r, o) {
          if (!o) return e;
          var i = 'after' === r,
            a = t.getKey(),
            l = n.getKey(),
            u = t.getParentKey(),
            f = t.getNextSiblingKey(),
            d = t.getPrevSiblingKey(),
            p = n.getParentKey(),
            h = i ? n.getNextSiblingKey() : l,
            g = i ? l : n.getPrevSiblingKey();
          return e.withMutations(function(e) {
            c(u, e, function(e) {
              var t = e.getChildKeys();
              return e.merge({ children: t['delete'](t.indexOf(a)) });
            }),
              c(d, e, function(e) {
                return e.merge({ nextSibling: f });
              }),
              c(f, e, function(e) {
                return e.merge({ prevSibling: d });
              }),
              c(h, e, function(e) {
                return e.merge({ prevSibling: a });
              }),
              c(g, e, function(e) {
                return e.merge({ nextSibling: a });
              }),
              c(p, e, function(e) {
                var t = e.getChildKeys(),
                  n = t.indexOf(l),
                  r = i ? n + 1 : 0 !== n ? n - 1 : 0,
                  o = t.toArray();
                return o.splice(r, 0, a), e.merge({ children: s(o) });
              }),
              c(a, e, function(e) {
                return e.merge({ nextSibling: h, prevSibling: g, parent: p });
              });
          });
        },
        f = function(e, t, n, o) {
          'replace' === o && a(!1);
          var s = n.getKey(),
            c = t.getKey();
          c === s && a(!1);
          var f = e.getBlockMap(),
            d = t instanceof r,
            p = [t],
            h = f['delete'](c);
          d &&
            ((p = []),
            (h = f.withMutations(function(e) {
              var n = t.getNextSiblingKey(),
                r = i(t, e);
              e.toSeq()
                .skipUntil(function(e) {
                  return e.getKey() === c;
                })
                .takeWhile(function(e) {
                  var t = e.getKey(),
                    o = t === c,
                    i = n && t !== n,
                    a = !n && e.getParentKey() && (!r || t !== r);
                  return !!(o || i || a);
                })
                .forEach(function(t) {
                  p.push(t), e['delete'](t.getKey());
                });
            })));
          var g = h.toSeq().takeUntil(function(e) {
              return e === n;
            }),
            m = h
              .toSeq()
              .skipUntil(function(e) {
                return e === n;
              })
              .skip(1),
            y = p.map(function(e) {
              return [e.getKey(), e];
            }),
            v = l();
          if ('before' === o) {
            var b = e.getBlockBefore(s);
            b && b.getKey() === t.getKey() && a(!1),
              (v = g.concat([].concat(y, [[s, n]]), m).toOrderedMap());
          } else if ('after' === o) {
            var A = e.getBlockAfter(s);
            A && A.getKey() === c && a(!1), (v = g.concat([[s, n]].concat(y), m).toOrderedMap());
          }
          return e.merge({
            blockMap: u(v, t, n, o, d),
            selectionBefore: e.getSelectionAfter(),
            selectionAfter: e.getSelectionAfter().merge({ anchorKey: c, focusKey: c }),
          });
        };
      e.exports = f;
    },
    I8OZ: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var o = n('fZAc'),
        i = n('mjHj'),
        a = n('2NuI'),
        l = (function() {
          function e(t) {
            r(this, e),
              t ? i.isStrong(t) || a(!1) : (t = i.getGlobalDir()),
              (this._defaultDir = t),
              this.reset();
          }
          return (
            (e.prototype.reset = function() {
              this._lastDir = this._defaultDir;
            }),
            (e.prototype.getDirection = function(e) {
              return (this._lastDir = o.getDirection(e, this._lastDir)), this._lastDir;
            }),
            e
          );
        })();
      e.exports = l;
    },
    IDhZ: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o = n('q1tI');
      function i(e, t, n, r, o, i, a, l) {
        if (!e) {
          if (((e = void 0), void 0 === t))
            e = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var s = [n, r, o, i, a, l],
              c = 0;
            (e = Error(
              t.replace(/%s/g, function() {
                return s[c++];
              })
            )),
              (e.name = 'Invariant Violation');
          }
          throw ((e.framesToPop = 1), e);
        }
      }
      function a(e) {
        for (
          var t = arguments.length - 1,
            n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 0;
          r < t;
          r++
        )
          n += '&args[]=' + encodeURIComponent(arguments[r + 1]);
        i(
          !1,
          'Minified React error #' +
            e +
            '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
          n
        );
      }
      var l = 'function' === typeof Symbol && Symbol.for,
        s = l ? Symbol.for('react.portal') : 60106,
        c = l ? Symbol.for('react.fragment') : 60107,
        u = l ? Symbol.for('react.strict_mode') : 60108,
        f = l ? Symbol.for('react.profiler') : 60114,
        d = l ? Symbol.for('react.provider') : 60109,
        p = l ? Symbol.for('react.context') : 60110,
        h = l ? Symbol.for('react.concurrent_mode') : 60111,
        g = l ? Symbol.for('react.forward_ref') : 60112,
        m = l ? Symbol.for('react.suspense') : 60113,
        y = l ? Symbol.for('react.memo') : 60115,
        v = l ? Symbol.for('react.lazy') : 60116;
      function b(e) {
        if (null == e) return null;
        if ('function' === typeof e) return e.displayName || e.name || null;
        if ('string' === typeof e) return e;
        switch (e) {
          case h:
            return 'ConcurrentMode';
          case c:
            return 'Fragment';
          case s:
            return 'Portal';
          case f:
            return 'Profiler';
          case u:
            return 'StrictMode';
          case m:
            return 'Suspense';
        }
        if ('object' === typeof e)
          switch (e.$$typeof) {
            case p:
              return 'Context.Consumer';
            case d:
              return 'Context.Provider';
            case g:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case y:
              return b(e.type);
            case v:
              if ((e = 1 === e._status ? e._result : null)) return b(e);
          }
        return null;
      }
      var A = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      A.hasOwnProperty('ReactCurrentDispatcher') || (A.ReactCurrentDispatcher = { current: null });
      var S = {};
      function w(e, t) {
        for (var n = 0 | e._threadCount; n <= t; n++)
          (e[n] = e._currentValue2), (e._threadCount = n + 1);
      }
      function E(e, t, n) {
        var r = e.contextType;
        if ('object' === typeof r && null !== r) return w(r, n), r[n];
        if ((e = e.contextTypes)) {
          for (var o in ((n = {}), e)) n[o] = t[o];
          t = n;
        } else t = S;
        return t;
      }
      for (var k = new Uint16Array(16), x = 0; 15 > x; x++) k[x] = x + 1;
      k[15] = 0;
      var C = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        _ = Object.prototype.hasOwnProperty,
        I = {},
        O = {};
      function T(e) {
        return !!_.call(O, e) || (!_.call(I, e) && (C.test(e) ? (O[e] = !0) : ((I[e] = !0), !1)));
      }
      function M(e, t, n, r) {
        if (null !== n && 0 === n.type) return !1;
        switch (typeof t) {
          case 'function':
          case 'symbol':
            return !0;
          case 'boolean':
            return (
              !r &&
              (null !== n
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)), 'data-' !== e && 'aria-' !== e))
            );
          default:
            return !1;
        }
      }
      function D(e, t, n, r) {
        if (null === t || 'undefined' === typeof t || M(e, t, n, r)) return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      }
      function B(e, t, n, r, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t);
      }
      var L = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function(e) {
          L[e] = new B(e, 0, !1, e, null);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function(e) {
          var t = e[0];
          L[t] = new B(t, 1, !1, e[1], null);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function(e) {
          L[e] = new B(e, 2, !1, e.toLowerCase(), null);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function(
          e
        ) {
          L[e] = new B(e, 2, !1, e, null);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function(e) {
            L[e] = new B(e, 3, !1, e.toLowerCase(), null);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function(e) {
          L[e] = new B(e, 3, !0, e, null);
        }),
        ['capture', 'download'].forEach(function(e) {
          L[e] = new B(e, 4, !1, e, null);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function(e) {
          L[e] = new B(e, 6, !1, e, null);
        }),
        ['rowSpan', 'start'].forEach(function(e) {
          L[e] = new B(e, 5, !1, e.toLowerCase(), null);
        });
      var N = /[\-:]([a-z])/g;
      function F(e) {
        return e[1].toUpperCase();
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function(e) {
          var t = e.replace(N, F);
          L[t] = new B(t, 1, !1, e, null);
        }),
        'xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function(e) {
            var t = e.replace(N, F);
            L[t] = new B(t, 1, !1, e, 'http://www.w3.org/1999/xlink');
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function(e) {
          var t = e.replace(N, F);
          L[t] = new B(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace');
        }),
        ['tabIndex', 'crossOrigin'].forEach(function(e) {
          L[e] = new B(e, 1, !1, e.toLowerCase(), null);
        });
      var R = /["'&<>]/;
      function P(e) {
        if ('boolean' === typeof e || 'number' === typeof e) return '' + e;
        e = '' + e;
        var t = R.exec(e);
        if (t) {
          var n,
            r = '',
            o = 0;
          for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
              case 34:
                t = '&quot;';
                break;
              case 38:
                t = '&amp;';
                break;
              case 39:
                t = '&#x27;';
                break;
              case 60:
                t = '&lt;';
                break;
              case 62:
                t = '&gt;';
                break;
              default:
                continue;
            }
            o !== n && (r += e.substring(o, n)), (o = n + 1), (r += t);
          }
          e = o !== n ? r + e.substring(o, n) : r;
        }
        return e;
      }
      var K = null,
        j = null,
        z = null,
        U = !1,
        H = !1,
        V = null,
        W = 0;
      function Q() {
        return null === K && a('321'), K;
      }
      function q() {
        return 0 < W && a('312'), { memoizedState: null, queue: null, next: null };
      }
      function Y() {
        return (
          null === z
            ? null === j
              ? ((U = !1), (j = z = q()))
              : ((U = !0), (z = j))
            : null === z.next
            ? ((U = !1), (z = z.next = q()))
            : ((U = !0), (z = z.next)),
          z
        );
      }
      function J(e, t, n, r) {
        for (; H; ) (H = !1), (W += 1), (z = null), (n = e(t, r));
        return (j = K = null), (W = 0), (z = V = null), n;
      }
      function G(e, t) {
        return 'function' === typeof t ? t(e) : t;
      }
      function X(e, t, n) {
        if (((K = Q()), (z = Y()), U)) {
          var r = z.queue;
          if (((t = r.dispatch), null !== V && ((n = V.get(r)), void 0 !== n))) {
            V.delete(r), (r = z.memoizedState);
            do {
              (r = e(r, n.action)), (n = n.next);
            } while (null !== n);
            return (z.memoizedState = r), [r, t];
          }
          return [z.memoizedState, t];
        }
        return (
          (e = e === G ? ('function' === typeof t ? t() : t) : void 0 !== n ? n(t) : t),
          (z.memoizedState = e),
          (e = z.queue = { last: null, dispatch: null }),
          (e = e.dispatch = Z.bind(null, K, e)),
          [z.memoizedState, e]
        );
      }
      function Z(e, t, n) {
        if ((25 > W || a('301'), e === K))
          if (
            ((H = !0),
            (e = { action: n, next: null }),
            null === V && (V = new Map()),
            (n = V.get(t)),
            void 0 === n)
          )
            V.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
      }
      function $() {}
      var ee = 0,
        te = {
          readContext: function(e) {
            var t = ee;
            return w(e, t), e[t];
          },
          useContext: function(e) {
            Q();
            var t = ee;
            return w(e, t), e[t];
          },
          useMemo: function(e, t) {
            if (((K = Q()), (z = Y()), (t = void 0 === t ? null : t), null !== z)) {
              var n = z.memoizedState;
              if (null !== n && null !== t) {
                e: {
                  var r = n[1];
                  if (null === r) r = !1;
                  else {
                    for (var o = 0; o < r.length && o < t.length; o++) {
                      var i = t[o],
                        a = r[o];
                      if ((i !== a || (0 === i && 1 / i !== 1 / a)) && (i === i || a === a)) {
                        r = !1;
                        break e;
                      }
                    }
                    r = !0;
                  }
                }
                if (r) return n[0];
              }
            }
            return (e = e()), (z.memoizedState = [e, t]), e;
          },
          useReducer: X,
          useRef: function(e) {
            (K = Q()), (z = Y());
            var t = z.memoizedState;
            return null === t ? ((e = { current: e }), (z.memoizedState = e)) : t;
          },
          useState: function(e) {
            return X(G, e);
          },
          useLayoutEffect: function() {},
          useCallback: function(e) {
            return e;
          },
          useImperativeHandle: $,
          useEffect: $,
          useDebugValue: $,
        },
        ne = {
          html: 'http://www.w3.org/1999/xhtml',
          mathml: 'http://www.w3.org/1998/Math/MathML',
          svg: 'http://www.w3.org/2000/svg',
        };
      function re(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      var oe = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
        ie = r({ menuitem: !0 }, oe),
        ae = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        le = ['Webkit', 'ms', 'Moz', 'O'];
      Object.keys(ae).forEach(function(e) {
        le.forEach(function(t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ae[t] = ae[e]);
        });
      });
      var se = /([A-Z])/g,
        ce = /^ms-/,
        ue = o.Children.toArray,
        fe = A.ReactCurrentDispatcher,
        de = { listing: !0, pre: !0, textarea: !0 },
        pe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        he = {},
        ge = {};
      function me(e) {
        if (void 0 === e || null === e) return e;
        var t = '';
        return (
          o.Children.forEach(e, function(e) {
            null != e && (t += e);
          }),
          t
        );
      }
      var ye = Object.prototype.hasOwnProperty,
        ve = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null,
        };
      function be(e, t) {
        void 0 === e && a('152', b(t) || 'Component');
      }
      function Ae(e, t, n) {
        function i(o, i) {
          var l = E(i, t, n),
            s = [],
            c = !1,
            u = {
              isMounted: function() {
                return !1;
              },
              enqueueForceUpdate: function() {
                if (null === s) return null;
              },
              enqueueReplaceState: function(e, t) {
                (c = !0), (s = [t]);
              },
              enqueueSetState: function(e, t) {
                if (null === s) return null;
                s.push(t);
              },
            },
            f = void 0;
          if (i.prototype && i.prototype.isReactComponent) {
            if (((f = new i(o.props, l, u)), 'function' === typeof i.getDerivedStateFromProps)) {
              var d = i.getDerivedStateFromProps.call(null, o.props, f.state);
              null != d && (f.state = r({}, f.state, d));
            }
          } else if (
            ((K = {}),
            (f = i(o.props, l, u)),
            (f = J(i, o.props, f, l)),
            null == f || null == f.render)
          )
            return (e = f), void be(e, i);
          if (
            ((f.props = o.props),
            (f.context = l),
            (f.updater = u),
            (u = f.state),
            void 0 === u && (f.state = u = null),
            'function' === typeof f.UNSAFE_componentWillMount ||
              'function' === typeof f.componentWillMount)
          )
            if (
              ('function' === typeof f.componentWillMount &&
                'function' !== typeof i.getDerivedStateFromProps &&
                f.componentWillMount(),
              'function' === typeof f.UNSAFE_componentWillMount &&
                'function' !== typeof i.getDerivedStateFromProps &&
                f.UNSAFE_componentWillMount(),
              s.length)
            ) {
              u = s;
              var p = c;
              if (((s = null), (c = !1), p && 1 === u.length)) f.state = u[0];
              else {
                d = p ? u[0] : f.state;
                var h = !0;
                for (p = p ? 1 : 0; p < u.length; p++) {
                  var g = u[p];
                  (g = 'function' === typeof g ? g.call(f, d, o.props, l) : g),
                    null != g && (h ? ((h = !1), (d = r({}, d, g))) : r(d, g));
                }
                f.state = d;
              }
            } else s = null;
          if (
            ((e = f.render()),
            be(e, i),
            (o = void 0),
            'function' === typeof f.getChildContext &&
              ((l = i.childContextTypes), 'object' === typeof l))
          )
            for (var m in ((o = f.getChildContext()), o)) m in l || a('108', b(i) || 'Unknown', m);
          o && (t = r({}, t, o));
        }
        for (; o.isValidElement(e); ) {
          var l = e,
            s = l.type;
          if ('function' !== typeof s) break;
          i(l, s);
        }
        return { child: e, context: t };
      }
      var Se = (function() {
          function e(t, n) {
            if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function');
            o.isValidElement(t)
              ? t.type !== c
                ? (t = [t])
                : ((t = t.props.children), (t = o.isValidElement(t) ? [t] : ue(t)))
              : (t = ue(t)),
              (t = {
                type: null,
                domNamespace: ne.html,
                children: t,
                childIndex: 0,
                context: S,
                footer: '',
              });
            var r = k[0];
            if (0 === r) {
              var i = k;
              r = i.length;
              var l = 2 * r;
              65536 >= l || a('304');
              var s = new Uint16Array(l);
              for (s.set(i), k = s, k[0] = r + 1, i = r; i < l - 1; i++) k[i] = i + 1;
              k[l - 1] = 0;
            } else k[0] = k[r];
            (this.threadID = r),
              (this.stack = [t]),
              (this.exhausted = !1),
              (this.currentSelectValue = null),
              (this.previousWasTextNode = !1),
              (this.makeStaticMarkup = n),
              (this.suspenseDepth = 0),
              (this.contextIndex = -1),
              (this.contextStack = []),
              (this.contextValueStack = []);
          }
          return (
            (e.prototype.destroy = function() {
              if (!this.exhausted) {
                (this.exhausted = !0), this.clearProviders();
                var e = this.threadID;
                (k[e] = k[0]), (k[0] = e);
              }
            }),
            (e.prototype.pushProvider = function(e) {
              var t = ++this.contextIndex,
                n = e.type._context,
                r = this.threadID;
              w(n, r);
              var o = n[r];
              (this.contextStack[t] = n), (this.contextValueStack[t] = o), (n[r] = e.props.value);
            }),
            (e.prototype.popProvider = function() {
              var e = this.contextIndex,
                t = this.contextStack[e],
                n = this.contextValueStack[e];
              (this.contextStack[e] = null),
                (this.contextValueStack[e] = null),
                this.contextIndex--,
                (t[this.threadID] = n);
            }),
            (e.prototype.clearProviders = function() {
              for (var e = this.contextIndex; 0 <= e; e--)
                this.contextStack[e][this.threadID] = this.contextValueStack[e];
            }),
            (e.prototype.read = function(e) {
              if (this.exhausted) return null;
              var t = ee;
              ee = this.threadID;
              var n = fe.current;
              fe.current = te;
              try {
                for (var r = [''], o = !1; r[0].length < e; ) {
                  if (0 === this.stack.length) {
                    this.exhausted = !0;
                    var i = this.threadID;
                    (k[i] = k[0]), (k[0] = i);
                    break;
                  }
                  var l = this.stack[this.stack.length - 1];
                  if (o || l.childIndex >= l.children.length) {
                    var s = l.footer;
                    if (
                      ('' !== s && (this.previousWasTextNode = !1),
                      this.stack.pop(),
                      'select' === l.type)
                    )
                      this.currentSelectValue = null;
                    else if (null != l.type && null != l.type.type && l.type.type.$$typeof === d)
                      this.popProvider(l.type);
                    else if (l.type === m) {
                      this.suspenseDepth--;
                      var c = r.pop();
                      if (o) {
                        o = !1;
                        var u = l.fallbackFrame;
                        u || a('303'), this.stack.push(u);
                        continue;
                      }
                      r[this.suspenseDepth] += c;
                    }
                    r[this.suspenseDepth] += s;
                  } else {
                    var f = l.children[l.childIndex++],
                      p = '';
                    try {
                      p += this.render(f, l.context, l.domNamespace);
                    } catch (e) {
                      throw e;
                    }
                    r.length <= this.suspenseDepth && r.push(''), (r[this.suspenseDepth] += p);
                  }
                }
                return r[0];
              } finally {
                (fe.current = n), (ee = t);
              }
            }),
            (e.prototype.render = function(e, t, n) {
              if ('string' === typeof e || 'number' === typeof e)
                return (
                  (n = '' + e),
                  '' === n
                    ? ''
                    : this.makeStaticMarkup
                    ? P(n)
                    : this.previousWasTextNode
                    ? '\x3c!-- --\x3e' + P(n)
                    : ((this.previousWasTextNode = !0), P(n))
                );
              if (
                ((t = Ae(e, t, this.threadID)),
                (e = t.child),
                (t = t.context),
                null === e || !1 === e)
              )
                return '';
              if (!o.isValidElement(e)) {
                if (null != e && null != e.$$typeof) {
                  var i = e.$$typeof;
                  i === s && a('257'), a('258', i.toString());
                }
                return (
                  (e = ue(e)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: '',
                  }),
                  ''
                );
              }
              if (((i = e.type), 'string' === typeof i)) return this.renderDOM(e, t, n);
              switch (i) {
                case u:
                case h:
                case f:
                case c:
                  return (
                    (e = ue(e.props.children)),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: '',
                    }),
                    ''
                  );
                case m:
                  a('294');
              }
              if ('object' === typeof i && null !== i)
                switch (i.$$typeof) {
                  case g:
                    K = {};
                    var l = i.render(e.props, e.ref);
                    return (
                      (l = J(i.render, e.props, l, e.ref)),
                      (l = ue(l)),
                      this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: l,
                        childIndex: 0,
                        context: t,
                        footer: '',
                      }),
                      ''
                    );
                  case y:
                    return (
                      (e = [o.createElement(i.type, r({ ref: e.ref }, e.props))]),
                      this.stack.push({
                        type: null,
                        domNamespace: n,
                        children: e,
                        childIndex: 0,
                        context: t,
                        footer: '',
                      }),
                      ''
                    );
                  case d:
                    return (
                      (i = ue(e.props.children)),
                      (n = {
                        type: e,
                        domNamespace: n,
                        children: i,
                        childIndex: 0,
                        context: t,
                        footer: '',
                      }),
                      this.pushProvider(e),
                      this.stack.push(n),
                      ''
                    );
                  case p:
                    (i = e.type), (l = e.props);
                    var b = this.threadID;
                    return (
                      w(i, b),
                      (i = ue(l.children(i[b]))),
                      this.stack.push({
                        type: e,
                        domNamespace: n,
                        children: i,
                        childIndex: 0,
                        context: t,
                        footer: '',
                      }),
                      ''
                    );
                  case v:
                    a('295');
                }
              a('130', null == i ? i : typeof i, '');
            }),
            (e.prototype.renderDOM = function(e, t, n) {
              var o = e.type.toLowerCase();
              n === ne.html && re(o),
                he.hasOwnProperty(o) || (pe.test(o) || a('65', o), (he[o] = !0));
              var i = e.props;
              if ('input' === o)
                i = r({ type: void 0 }, i, {
                  defaultChecked: void 0,
                  defaultValue: void 0,
                  value: null != i.value ? i.value : i.defaultValue,
                  checked: null != i.checked ? i.checked : i.defaultChecked,
                });
              else if ('textarea' === o) {
                var l = i.value;
                if (null == l) {
                  l = i.defaultValue;
                  var s = i.children;
                  null != s &&
                    (null != l && a('92'),
                    Array.isArray(s) && (1 >= s.length || a('93'), (s = s[0])),
                    (l = '' + s)),
                    null == l && (l = '');
                }
                i = r({}, i, { value: void 0, children: '' + l });
              } else if ('select' === o)
                (this.currentSelectValue = null != i.value ? i.value : i.defaultValue),
                  (i = r({}, i, { value: void 0 }));
              else if ('option' === o) {
                s = this.currentSelectValue;
                var c = me(i.children);
                if (null != s) {
                  var u = null != i.value ? i.value + '' : c;
                  if (((l = !1), Array.isArray(s))) {
                    for (var f = 0; f < s.length; f++)
                      if ('' + s[f] === u) {
                        l = !0;
                        break;
                      }
                  } else l = '' + s === u;
                  i = r({ selected: void 0, children: void 0 }, i, { selected: l, children: c });
                }
              }
              for (b in ((l = i) &&
                (ie[o] &&
                  (null != l.children || null != l.dangerouslySetInnerHTML) &&
                  a('137', o, ''),
                null != l.dangerouslySetInnerHTML &&
                  (null != l.children && a('60'),
                  ('object' === typeof l.dangerouslySetInnerHTML &&
                    '__html' in l.dangerouslySetInnerHTML) ||
                    a('61')),
                null != l.style && 'object' !== typeof l.style && a('62', '')),
              (l = i),
              (s = this.makeStaticMarkup),
              (c = 1 === this.stack.length),
              (u = '<' + e.type),
              l))
                if (ye.call(l, b)) {
                  var d = l[b];
                  if (null != d) {
                    if ('style' === b) {
                      f = void 0;
                      var p = '',
                        h = '';
                      for (f in d)
                        if (d.hasOwnProperty(f)) {
                          var g = 0 === f.indexOf('--'),
                            m = d[f];
                          if (null != m) {
                            var y = f;
                            if (ge.hasOwnProperty(y)) y = ge[y];
                            else {
                              var v = y
                                .replace(se, '-$1')
                                .toLowerCase()
                                .replace(ce, '-ms-');
                              y = ge[y] = v;
                            }
                            (p += h + y + ':'),
                              (h = f),
                              (g =
                                null == m || 'boolean' === typeof m || '' === m
                                  ? ''
                                  : g ||
                                    'number' !== typeof m ||
                                    0 === m ||
                                    (ae.hasOwnProperty(h) && ae[h])
                                  ? ('' + m).trim()
                                  : m + 'px'),
                              (p += g),
                              (h = ';');
                          }
                        }
                      d = p || null;
                    }
                    f = null;
                    e: if (((g = o), (m = l), -1 === g.indexOf('-'))) g = 'string' === typeof m.is;
                    else
                      switch (g) {
                        case 'annotation-xml':
                        case 'color-profile':
                        case 'font-face':
                        case 'font-face-src':
                        case 'font-face-uri':
                        case 'font-face-format':
                        case 'font-face-name':
                        case 'missing-glyph':
                          g = !1;
                          break e;
                        default:
                          g = !0;
                      }
                    g
                      ? ve.hasOwnProperty(b) ||
                        ((f = b), (f = T(f) && null != d ? f + '="' + P(d) + '"' : ''))
                      : ((g = b),
                        (f = d),
                        (d = L.hasOwnProperty(g) ? L[g] : null),
                        (m = 'style' !== g) &&
                          (m =
                            null !== d
                              ? 0 === d.type
                              : 2 < g.length &&
                                ('o' === g[0] || 'O' === g[0]) &&
                                ('n' === g[1] || 'N' === g[1])),
                        m || D(g, f, d, !1)
                          ? (f = '')
                          : null !== d
                          ? ((g = d.attributeName),
                            (d = d.type),
                            (f =
                              3 === d || (4 === d && !0 === f) ? g + '=""' : g + '="' + P(f) + '"'))
                          : (f = T(g) ? g + '="' + P(f) + '"' : '')),
                      f && (u += ' ' + f);
                  }
                }
              s || (c && (u += ' data-reactroot=""'));
              var b = u;
              (l = ''),
                oe.hasOwnProperty(o) ? (b += '/>') : ((b += '>'), (l = '</' + e.type + '>'));
              e: {
                if (((s = i.dangerouslySetInnerHTML), null != s)) {
                  if (null != s.__html) {
                    s = s.__html;
                    break e;
                  }
                } else if (((s = i.children), 'string' === typeof s || 'number' === typeof s)) {
                  s = P(s);
                  break e;
                }
                s = null;
              }
              return (
                null != s
                  ? ((i = []), de[o] && '\n' === s.charAt(0) && (b += '\n'), (b += s))
                  : (i = ue(i.children)),
                (e = e.type),
                (n =
                  null == n || 'http://www.w3.org/1999/xhtml' === n
                    ? re(e)
                    : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
                    ? 'http://www.w3.org/1999/xhtml'
                    : n),
                this.stack.push({
                  domNamespace: n,
                  type: o,
                  children: i,
                  childIndex: 0,
                  context: t,
                  footer: l,
                }),
                (this.previousWasTextNode = !1),
                b
              );
            }),
            e
          );
        })(),
        we = {
          renderToString: function(e) {
            e = new Se(e, !1);
            try {
              return e.read(1 / 0);
            } finally {
              e.destroy();
            }
          },
          renderToStaticMarkup: function(e) {
            e = new Se(e, !0);
            try {
              return e.read(1 / 0);
            } finally {
              e.destroy();
            }
          },
          renderToNodeStream: function() {
            a('207');
          },
          renderToStaticNodeStream: function() {
            a('208');
          },
          version: '16.8.6',
        },
        Ee = { default: we },
        ke = (Ee && we) || Ee;
      e.exports = ke.default || ke;
    },
    ISR0: function(e, t, n) {
      'use strict';
      var r = n('QvxS'),
        o = n('fyOY'),
        i = n('3sOJ'),
        a = n('kc9Y'),
        l = n('HKS5'),
        s = n('5RSi'),
        c = n('T401'),
        u = n('gWRK');
      function f(e, t) {
        var n = null,
          r = null;
        if ('function' === typeof document.caretRangeFromPoint) {
          var o = document.caretRangeFromPoint(e.x, e.y);
          (n = o.startContainer), (r = o.startOffset);
        } else {
          if (!e.rangeParent) return null;
          (n = e.rangeParent), (r = e.rangeOffset);
        }
        (n = u(n)), (r = u(r));
        var i = u(a(n));
        return s(t, i, r, i, r);
      }
      var d = {
        onDragEnd: function(e) {
          e.exitCurrentMode();
        },
        onDrop: function(e, t) {
          var n = new r(t.nativeEvent.dataTransfer),
            o = e._latestEditorState,
            i = f(t.nativeEvent, o);
          if ((t.preventDefault(), e.exitCurrentMode(), null != i)) {
            var a = n.getFiles();
            if (a.length > 0) {
              if (e.props.handleDroppedFiles && c(e.props.handleDroppedFiles(i, a))) return;
              l(a, function(t) {
                t && e.update(h(o, i, t));
              });
            } else {
              var s = e._internalDrag ? 'internal' : 'external';
              (e.props.handleDrop && c(e.props.handleDrop(i, n, s))) ||
                (e._internalDrag ? e.update(p(o, i)) : e.update(h(o, i, n.getText())));
            }
          }
        },
      };
      function p(e, t) {
        var n = o.moveText(e.getCurrentContent(), e.getSelection(), t);
        return i.push(e, n, 'insert-fragment');
      }
      function h(e, t, n) {
        var r = o.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
        return i.push(e, r, 'insert-fragment');
      }
      e.exports = d;
    },
    ISee: function(e, t, n) {
      'use strict';
      var r = n('kc9Y'),
        o = n('zORg'),
        i = n('5RSi'),
        a = n('2NuI'),
        l = n('gWRK');
      function s(e, t, n, o, a, s) {
        var c = n.nodeType === Node.TEXT_NODE,
          u = a.nodeType === Node.TEXT_NODE;
        if (c && u) return { selectionState: i(e, l(r(n)), o, l(r(a)), s), needsRecovery: !1 };
        var d = null,
          p = null,
          h = !0;
        return (
          c
            ? ((d = { key: l(r(n)), offset: o }), (p = f(t, a, s)))
            : u
            ? ((p = { key: l(r(a)), offset: s }), (d = f(t, n, o)))
            : ((d = f(t, n, o)),
              (p = f(t, a, s)),
              n === a && o === s && (h = !!n.firstChild && 'BR' !== n.firstChild.nodeName)),
          { selectionState: i(e, d.key, d.offset, p.key, p.offset), needsRecovery: h }
        );
      }
      function c(e) {
        while (
          e.firstChild &&
          ((e.firstChild instanceof Element &&
            'true' === e.firstChild.getAttribute('data-blocks')) ||
            o(e.firstChild))
        )
          e = e.firstChild;
        return e;
      }
      function u(e) {
        while (
          e.lastChild &&
          ((e.lastChild instanceof Element && 'true' === e.lastChild.getAttribute('data-blocks')) ||
            o(e.lastChild))
        )
          e = e.lastChild;
        return e;
      }
      function f(e, t, n) {
        var i = t,
          s = r(i);
        if (
          (null != s || (e && (e === i || e.firstChild === i)) || a(!1),
          e === i &&
            ((i = i.firstChild),
            (i instanceof Element && 'true' === i.getAttribute('data-contents')) || a(!1),
            n > 0 && (n = i.childNodes.length)),
          0 === n)
        ) {
          var f = null;
          if (null != s) f = s;
          else {
            var p = c(i);
            f = l(o(p));
          }
          return { key: f, offset: 0 };
        }
        var h = i.childNodes[n - 1],
          g = null,
          m = null;
        if (o(h)) {
          var y = u(h);
          (g = l(o(y))), (m = d(y));
        } else (g = l(s)), (m = d(h));
        return { key: g, offset: m };
      }
      function d(e) {
        var t = e.textContent;
        return '\n' === t ? 0 : t.length;
      }
      e.exports = s;
    },
    Idtq: function(e, t, n) {
      'use strict';
      var r = n('Y3PQ');
      e.exports = r;
    },
    Iq8E: function(e, t, n) {
      'use strict';
      var r = '-',
        o = {
          encode: function(e, t, n) {
            return e + r + t + r + n;
          },
          decode: function(e) {
            var t = e.split(r),
              n = t[0],
              o = t[1],
              i = t[2];
            return { blockKey: n, decoratorKey: parseInt(o, 10), leafKey: parseInt(i, 10) };
          },
        };
      e.exports = o;
    },
    'JI+E': function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('3sOJ'),
          o = n('TWoB'),
          i = n('jl2H');
        function a(e, n) {
          if (i() === document.body) {
            var a = t.getSelection(),
              l = e.editor;
            1 === a.rangeCount && o(l, a.anchorNode) && o(l, a.focusNode) && a.removeAllRanges();
          }
          var s = e._latestEditorState,
            c = s.getSelection();
          if (c.getHasFocus()) {
            var u = c.set('hasFocus', !1);
            e.props.onBlur && e.props.onBlur(n), e.update(r.acceptSelection(s, u));
          }
        }
        e.exports = a;
      }.call(this, n('yLpj')));
    },
    JJ3u: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = l(n('Nj+S')),
        o = l(n('tNfR')),
        i = l(n('LFmL')),
        a = l(n('H2OV'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return f(e) || u(e) || c();
      }
      function c() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function u(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function f(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
      }
      var d = function() {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var e = arguments.length > 1 ? arguments[1] : void 0;
          return e;
        },
        p = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d,
            l = s(e.text),
            c = n;
          if (
            (n.__isMiddleware && (c = n(d)),
            Object.prototype.hasOwnProperty.call(e, 'entityRanges') && e.entityRanges.length > 0)
          ) {
            for (
              var u = e.entityRanges.sort(o['default']),
                f = e.inlineStyleRanges,
                p = function(e) {
                  var n = u[e],
                    o = t[n.key],
                    d = l.slice(n.offset, n.offset + n.length).join(''),
                    p = c(o, d),
                    h = s((0, i['default'])(p, d) || d),
                    g = (0, a['default'])(p, 'start'),
                    m = (0, a['default'])(p, 'end'),
                    y = function(t, o) {
                      return o > e || Object.prototype.hasOwnProperty.call(t, 'style')
                        ? (0, r['default'])(t, n.offset, n.length, h.length, g, m)
                        : t;
                    },
                    v = function(e) {
                      return e.reduce(function(e, t, n) {
                        var r = y(t, n);
                        return Array.isArray(r) ? e.concat(r) : e.concat([r]);
                      }, []);
                    };
                  (u = v(u)),
                    (f = v(f)),
                    (l = [].concat(s(l.slice(0, n.offset)), s(h), s(l.slice(n.offset + n.length))));
                },
                h = 0;
              h < u.length;
              h++
            )
              p(h);
            return Object.assign({}, e, {
              text: l.join(''),
              inlineStyleRanges: f,
              entityRanges: u,
            });
          }
          return e;
        };
      t['default'] = p;
    },
    JL7T: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('lFJn'),
        l = n('JPcv'),
        s = n('Taje'),
        c = l.List,
        u = l.Map,
        f = l.OrderedSet,
        d = l.Record,
        p = l.Repeat,
        h = f(),
        g = {
          parent: null,
          characterList: c(),
          data: u(),
          depth: 0,
          key: '',
          text: '',
          type: 'unstyled',
          children: c(),
          prevSibling: null,
          nextSibling: null,
        },
        m = function(e, t) {
          return e.getStyle() === t.getStyle();
        },
        y = function(e, t) {
          return e.getEntity() === t.getEntity();
        },
        v = function(e) {
          if (!e) return e;
          var t = e.characterList,
            n = e.text;
          return n && !t && (e.characterList = c(p(a.EMPTY, n.length))), e;
        },
        b = (function(e) {
          function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
            return r(this, t), o(this, e.call(this, v(n)));
          }
          return (
            i(t, e),
            (t.prototype.getKey = function() {
              return this.get('key');
            }),
            (t.prototype.getType = function() {
              return this.get('type');
            }),
            (t.prototype.getText = function() {
              return this.get('text');
            }),
            (t.prototype.getCharacterList = function() {
              return this.get('characterList');
            }),
            (t.prototype.getLength = function() {
              return this.getText().length;
            }),
            (t.prototype.getDepth = function() {
              return this.get('depth');
            }),
            (t.prototype.getData = function() {
              return this.get('data');
            }),
            (t.prototype.getInlineStyleAt = function(e) {
              var t = this.getCharacterList().get(e);
              return t ? t.getStyle() : h;
            }),
            (t.prototype.getEntityAt = function(e) {
              var t = this.getCharacterList().get(e);
              return t ? t.getEntity() : null;
            }),
            (t.prototype.getChildKeys = function() {
              return this.get('children');
            }),
            (t.prototype.getParentKey = function() {
              return this.get('parent');
            }),
            (t.prototype.getPrevSiblingKey = function() {
              return this.get('prevSibling');
            }),
            (t.prototype.getNextSiblingKey = function() {
              return this.get('nextSibling');
            }),
            (t.prototype.findStyleRanges = function(e, t) {
              s(this.getCharacterList(), m, e, t);
            }),
            (t.prototype.findEntityRanges = function(e, t) {
              s(this.getCharacterList(), y, e, t);
            }),
            t
          );
        })(d(g));
      e.exports = b;
    },
    JPcv: function(e, t, n) {
      (function(t, n) {
        e.exports = n();
      })(0, function() {
        'use strict';
        var e = Array.prototype.slice;
        function t(e, t) {
          t && (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
        }
        function n(e) {
          return a(e) ? e : q(e);
        }
        function r(e) {
          return l(e) ? e : Y(e);
        }
        function o(e) {
          return s(e) ? e : J(e);
        }
        function i(e) {
          return a(e) && !c(e) ? e : G(e);
        }
        function a(e) {
          return !(!e || !e[f]);
        }
        function l(e) {
          return !(!e || !e[d]);
        }
        function s(e) {
          return !(!e || !e[p]);
        }
        function c(e) {
          return l(e) || s(e);
        }
        function u(e) {
          return !(!e || !e[h]);
        }
        t(r, n),
          t(o, n),
          t(i, n),
          (n.isIterable = a),
          (n.isKeyed = l),
          (n.isIndexed = s),
          (n.isAssociative = c),
          (n.isOrdered = u),
          (n.Keyed = r),
          (n.Indexed = o),
          (n.Set = i);
        var f = '@@__IMMUTABLE_ITERABLE__@@',
          d = '@@__IMMUTABLE_KEYED__@@',
          p = '@@__IMMUTABLE_INDEXED__@@',
          h = '@@__IMMUTABLE_ORDERED__@@',
          g = 'delete',
          m = 5,
          y = 1 << m,
          v = y - 1,
          b = {},
          A = { value: !1 },
          S = { value: !1 };
        function w(e) {
          return (e.value = !1), e;
        }
        function E(e) {
          e && (e.value = !0);
        }
        function k() {}
        function x(e, t) {
          t = t || 0;
          for (var n = Math.max(0, e.length - t), r = new Array(n), o = 0; o < n; o++)
            r[o] = e[o + t];
          return r;
        }
        function C(e) {
          return void 0 === e.size && (e.size = e.__iterate(I)), e.size;
        }
        function _(e, t) {
          if ('number' !== typeof t) {
            var n = t >>> 0;
            if ('' + n !== t || 4294967295 === n) return NaN;
            t = n;
          }
          return t < 0 ? C(e) + t : t;
        }
        function I() {
          return !0;
        }
        function O(e, t, n) {
          return (
            (0 === e || (void 0 !== n && e <= -n)) && (void 0 === t || (void 0 !== n && t >= n))
          );
        }
        function T(e, t) {
          return D(e, t, 0);
        }
        function M(e, t) {
          return D(e, t, t);
        }
        function D(e, t, n) {
          return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e);
        }
        var B = 0,
          L = 1,
          N = 2,
          F = 'function' === typeof Symbol && Symbol.iterator,
          R = '@@iterator',
          P = F || R;
        function K(e) {
          this.next = e;
        }
        function j(e, t, n, r) {
          var o = 0 === e ? t : 1 === e ? n : [t, n];
          return r ? (r.value = o) : (r = { value: o, done: !1 }), r;
        }
        function z() {
          return { value: void 0, done: !0 };
        }
        function U(e) {
          return !!W(e);
        }
        function H(e) {
          return e && 'function' === typeof e.next;
        }
        function V(e) {
          var t = W(e);
          return t && t.call(e);
        }
        function W(e) {
          var t = e && ((F && e[F]) || e[R]);
          if ('function' === typeof t) return t;
        }
        function Q(e) {
          return e && 'number' === typeof e.length;
        }
        function q(e) {
          return null === e || void 0 === e ? ae() : a(e) ? e.toSeq() : ce(e);
        }
        function Y(e) {
          return null === e || void 0 === e
            ? ae().toKeyedSeq()
            : a(e)
            ? l(e)
              ? e.toSeq()
              : e.fromEntrySeq()
            : le(e);
        }
        function J(e) {
          return null === e || void 0 === e
            ? ae()
            : a(e)
            ? l(e)
              ? e.entrySeq()
              : e.toIndexedSeq()
            : se(e);
        }
        function G(e) {
          return (null === e || void 0 === e
            ? ae()
            : a(e)
            ? l(e)
              ? e.entrySeq()
              : e
            : se(e)
          ).toSetSeq();
        }
        (K.prototype.toString = function() {
          return '[Iterator]';
        }),
          (K.KEYS = B),
          (K.VALUES = L),
          (K.ENTRIES = N),
          (K.prototype.inspect = K.prototype.toSource = function() {
            return this.toString();
          }),
          (K.prototype[P] = function() {
            return this;
          }),
          t(q, n),
          (q.of = function() {
            return q(arguments);
          }),
          (q.prototype.toSeq = function() {
            return this;
          }),
          (q.prototype.toString = function() {
            return this.__toString('Seq {', '}');
          }),
          (q.prototype.cacheResult = function() {
            return (
              !this._cache &&
                this.__iterateUncached &&
                ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)),
              this
            );
          }),
          (q.prototype.__iterate = function(e, t) {
            return fe(this, e, t, !0);
          }),
          (q.prototype.__iterator = function(e, t) {
            return de(this, e, t, !0);
          }),
          t(Y, q),
          (Y.prototype.toKeyedSeq = function() {
            return this;
          }),
          t(J, q),
          (J.of = function() {
            return J(arguments);
          }),
          (J.prototype.toIndexedSeq = function() {
            return this;
          }),
          (J.prototype.toString = function() {
            return this.__toString('Seq [', ']');
          }),
          (J.prototype.__iterate = function(e, t) {
            return fe(this, e, t, !1);
          }),
          (J.prototype.__iterator = function(e, t) {
            return de(this, e, t, !1);
          }),
          t(G, q),
          (G.of = function() {
            return G(arguments);
          }),
          (G.prototype.toSetSeq = function() {
            return this;
          }),
          (q.isSeq = ie),
          (q.Keyed = Y),
          (q.Set = G),
          (q.Indexed = J);
        var X,
          Z,
          $,
          ee = '@@__IMMUTABLE_SEQ__@@';
        function te(e) {
          (this._array = e), (this.size = e.length);
        }
        function ne(e) {
          var t = Object.keys(e);
          (this._object = e), (this._keys = t), (this.size = t.length);
        }
        function re(e) {
          (this._iterable = e), (this.size = e.length || e.size);
        }
        function oe(e) {
          (this._iterator = e), (this._iteratorCache = []);
        }
        function ie(e) {
          return !(!e || !e[ee]);
        }
        function ae() {
          return X || (X = new te([]));
        }
        function le(e) {
          var t = Array.isArray(e)
            ? new te(e).fromEntrySeq()
            : H(e)
            ? new oe(e).fromEntrySeq()
            : U(e)
            ? new re(e).fromEntrySeq()
            : 'object' === typeof e
            ? new ne(e)
            : void 0;
          if (!t)
            throw new TypeError(
              'Expected Array or iterable object of [k, v] entries, or keyed object: ' + e
            );
          return t;
        }
        function se(e) {
          var t = ue(e);
          if (!t) throw new TypeError('Expected Array or iterable object of values: ' + e);
          return t;
        }
        function ce(e) {
          var t = ue(e) || ('object' === typeof e && new ne(e));
          if (!t)
            throw new TypeError(
              'Expected Array or iterable object of values, or keyed object: ' + e
            );
          return t;
        }
        function ue(e) {
          return Q(e) ? new te(e) : H(e) ? new oe(e) : U(e) ? new re(e) : void 0;
        }
        function fe(e, t, n, r) {
          var o = e._cache;
          if (o) {
            for (var i = o.length - 1, a = 0; a <= i; a++) {
              var l = o[n ? i - a : a];
              if (!1 === t(l[1], r ? l[0] : a, e)) return a + 1;
            }
            return a;
          }
          return e.__iterateUncached(t, n);
        }
        function de(e, t, n, r) {
          var o = e._cache;
          if (o) {
            var i = o.length - 1,
              a = 0;
            return new K(function() {
              var e = o[n ? i - a : a];
              return a++ > i ? z() : j(t, r ? e[0] : a - 1, e[1]);
            });
          }
          return e.__iteratorUncached(t, n);
        }
        function pe(e, t) {
          return t ? he(t, e, '', { '': e }) : ge(e);
        }
        function he(e, t, n, r) {
          return Array.isArray(t)
            ? e.call(
                r,
                n,
                J(t).map(function(n, r) {
                  return he(e, n, r, t);
                })
              )
            : me(t)
            ? e.call(
                r,
                n,
                Y(t).map(function(n, r) {
                  return he(e, n, r, t);
                })
              )
            : t;
        }
        function ge(e) {
          return Array.isArray(e)
            ? J(e)
                .map(ge)
                .toList()
            : me(e)
            ? Y(e)
                .map(ge)
                .toMap()
            : e;
        }
        function me(e) {
          return e && (e.constructor === Object || void 0 === e.constructor);
        }
        function ye(e, t) {
          if (e === t || (e !== e && t !== t)) return !0;
          if (!e || !t) return !1;
          if ('function' === typeof e.valueOf && 'function' === typeof t.valueOf) {
            if (((e = e.valueOf()), (t = t.valueOf()), e === t || (e !== e && t !== t))) return !0;
            if (!e || !t) return !1;
          }
          return !(
            'function' !== typeof e.equals ||
            'function' !== typeof t.equals ||
            !e.equals(t)
          );
        }
        function ve(e, t) {
          if (e === t) return !0;
          if (
            !a(t) ||
            (void 0 !== e.size && void 0 !== t.size && e.size !== t.size) ||
            (void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash) ||
            l(e) !== l(t) ||
            s(e) !== s(t) ||
            u(e) !== u(t)
          )
            return !1;
          if (0 === e.size && 0 === t.size) return !0;
          var n = !c(e);
          if (u(e)) {
            var r = e.entries();
            return (
              t.every(function(e, t) {
                var o = r.next().value;
                return o && ye(o[1], e) && (n || ye(o[0], t));
              }) && r.next().done
            );
          }
          var o = !1;
          if (void 0 === e.size)
            if (void 0 === t.size) 'function' === typeof e.cacheResult && e.cacheResult();
            else {
              o = !0;
              var i = e;
              (e = t), (t = i);
            }
          var f = !0,
            d = t.__iterate(function(t, r) {
              if (n ? !e.has(t) : o ? !ye(t, e.get(r, b)) : !ye(e.get(r, b), t))
                return (f = !1), !1;
            });
          return f && e.size === d;
        }
        function be(e, t) {
          if (!(this instanceof be)) return new be(e, t);
          if (
            ((this._value = e),
            (this.size = void 0 === t ? 1 / 0 : Math.max(0, t)),
            0 === this.size)
          ) {
            if (Z) return Z;
            Z = this;
          }
        }
        function Ae(e, t) {
          if (!e) throw new Error(t);
        }
        function Se(e, t, n) {
          if (!(this instanceof Se)) return new Se(e, t, n);
          if (
            (Ae(0 !== n, 'Cannot step a Range by 0'),
            (e = e || 0),
            void 0 === t && (t = 1 / 0),
            (n = void 0 === n ? 1 : Math.abs(n)),
            t < e && (n = -n),
            (this._start = e),
            (this._end = t),
            (this._step = n),
            (this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1)),
            0 === this.size)
          ) {
            if ($) return $;
            $ = this;
          }
        }
        function we() {
          throw TypeError('Abstract');
        }
        function Ee() {}
        function ke() {}
        function xe() {}
        (q.prototype[ee] = !0),
          t(te, J),
          (te.prototype.get = function(e, t) {
            return this.has(e) ? this._array[_(this, e)] : t;
          }),
          (te.prototype.__iterate = function(e, t) {
            for (var n = this._array, r = n.length - 1, o = 0; o <= r; o++)
              if (!1 === e(n[t ? r - o : o], o, this)) return o + 1;
            return o;
          }),
          (te.prototype.__iterator = function(e, t) {
            var n = this._array,
              r = n.length - 1,
              o = 0;
            return new K(function() {
              return o > r ? z() : j(e, o, n[t ? r - o++ : o++]);
            });
          }),
          t(ne, Y),
          (ne.prototype.get = function(e, t) {
            return void 0 === t || this.has(e) ? this._object[e] : t;
          }),
          (ne.prototype.has = function(e) {
            return this._object.hasOwnProperty(e);
          }),
          (ne.prototype.__iterate = function(e, t) {
            for (var n = this._object, r = this._keys, o = r.length - 1, i = 0; i <= o; i++) {
              var a = r[t ? o - i : i];
              if (!1 === e(n[a], a, this)) return i + 1;
            }
            return i;
          }),
          (ne.prototype.__iterator = function(e, t) {
            var n = this._object,
              r = this._keys,
              o = r.length - 1,
              i = 0;
            return new K(function() {
              var a = r[t ? o - i : i];
              return i++ > o ? z() : j(e, a, n[a]);
            });
          }),
          (ne.prototype[h] = !0),
          t(re, J),
          (re.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n,
              r = this._iterable,
              o = V(r),
              i = 0;
            if (H(o)) while (!(n = o.next()).done) if (!1 === e(n.value, i++, this)) break;
            return i;
          }),
          (re.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterable,
              r = V(n);
            if (!H(r)) return new K(z);
            var o = 0;
            return new K(function() {
              var t = r.next();
              return t.done ? t : j(e, o++, t.value);
            });
          }),
          t(oe, J),
          (oe.prototype.__iterateUncached = function(e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n,
              r = this._iterator,
              o = this._iteratorCache,
              i = 0;
            while (i < o.length) if (!1 === e(o[i], i++, this)) return i;
            while (!(n = r.next()).done) {
              var a = n.value;
              if (((o[i] = a), !1 === e(a, i++, this))) break;
            }
            return i;
          }),
          (oe.prototype.__iteratorUncached = function(e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterator,
              r = this._iteratorCache,
              o = 0;
            return new K(function() {
              if (o >= r.length) {
                var t = n.next();
                if (t.done) return t;
                r[o] = t.value;
              }
              return j(e, o, r[o++]);
            });
          }),
          t(be, J),
          (be.prototype.toString = function() {
            return 0 === this.size
              ? 'Repeat []'
              : 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
          }),
          (be.prototype.get = function(e, t) {
            return this.has(e) ? this._value : t;
          }),
          (be.prototype.includes = function(e) {
            return ye(this._value, e);
          }),
          (be.prototype.slice = function(e, t) {
            var n = this.size;
            return O(e, t, n) ? this : new be(this._value, M(t, n) - T(e, n));
          }),
          (be.prototype.reverse = function() {
            return this;
          }),
          (be.prototype.indexOf = function(e) {
            return ye(this._value, e) ? 0 : -1;
          }),
          (be.prototype.lastIndexOf = function(e) {
            return ye(this._value, e) ? this.size : -1;
          }),
          (be.prototype.__iterate = function(e, t) {
            for (var n = 0; n < this.size; n++) if (!1 === e(this._value, n, this)) return n + 1;
            return n;
          }),
          (be.prototype.__iterator = function(e, t) {
            var n = this,
              r = 0;
            return new K(function() {
              return r < n.size ? j(e, r++, n._value) : z();
            });
          }),
          (be.prototype.equals = function(e) {
            return e instanceof be ? ye(this._value, e._value) : ve(e);
          }),
          t(Se, J),
          (Se.prototype.toString = function() {
            return 0 === this.size
              ? 'Range []'
              : 'Range [ ' +
                  this._start +
                  '...' +
                  this._end +
                  (this._step > 1 ? ' by ' + this._step : '') +
                  ' ]';
          }),
          (Se.prototype.get = function(e, t) {
            return this.has(e) ? this._start + _(this, e) * this._step : t;
          }),
          (Se.prototype.includes = function(e) {
            var t = (e - this._start) / this._step;
            return t >= 0 && t < this.size && t === Math.floor(t);
          }),
          (Se.prototype.slice = function(e, t) {
            return O(e, t, this.size)
              ? this
              : ((e = T(e, this.size)),
                (t = M(t, this.size)),
                t <= e
                  ? new Se(0, 0)
                  : new Se(this.get(e, this._end), this.get(t, this._end), this._step));
          }),
          (Se.prototype.indexOf = function(e) {
            var t = e - this._start;
            if (t % this._step === 0) {
              var n = t / this._step;
              if (n >= 0 && n < this.size) return n;
            }
            return -1;
          }),
          (Se.prototype.lastIndexOf = function(e) {
            return this.indexOf(e);
          }),
          (Se.prototype.__iterate = function(e, t) {
            for (
              var n = this.size - 1,
                r = this._step,
                o = t ? this._start + n * r : this._start,
                i = 0;
              i <= n;
              i++
            ) {
              if (!1 === e(o, i, this)) return i + 1;
              o += t ? -r : r;
            }
            return i;
          }),
          (Se.prototype.__iterator = function(e, t) {
            var n = this.size - 1,
              r = this._step,
              o = t ? this._start + n * r : this._start,
              i = 0;
            return new K(function() {
              var a = o;
              return (o += t ? -r : r), i > n ? z() : j(e, i++, a);
            });
          }),
          (Se.prototype.equals = function(e) {
            return e instanceof Se
              ? this._start === e._start && this._end === e._end && this._step === e._step
              : ve(this, e);
          }),
          t(we, n),
          t(Ee, we),
          t(ke, we),
          t(xe, we),
          (we.Keyed = Ee),
          (we.Indexed = ke),
          (we.Set = xe);
        var Ce =
          'function' === typeof Math.imul && -2 === Math.imul(4294967295, 2)
            ? Math.imul
            : function(e, t) {
                (e |= 0), (t |= 0);
                var n = 65535 & e,
                  r = 65535 & t;
                return (n * r + ((((e >>> 16) * r + n * (t >>> 16)) << 16) >>> 0)) | 0;
              };
        function _e(e) {
          return ((e >>> 1) & 1073741824) | (3221225471 & e);
        }
        function Ie(e) {
          if (!1 === e || null === e || void 0 === e) return 0;
          if (
            'function' === typeof e.valueOf &&
            ((e = e.valueOf()), !1 === e || null === e || void 0 === e)
          )
            return 0;
          if (!0 === e) return 1;
          var t = typeof e;
          if ('number' === t) {
            var n = 0 | e;
            n !== e && (n ^= 4294967295 * e);
            while (e > 4294967295) (e /= 4294967295), (n ^= e);
            return _e(n);
          }
          if ('string' === t) return e.length > Ke ? Oe(e) : Te(e);
          if ('function' === typeof e.hashCode) return e.hashCode();
          if ('object' === t) return Me(e);
          if ('function' === typeof e.toString) return Te(e.toString());
          throw new Error('Value type ' + t + ' cannot be hashed.');
        }
        function Oe(e) {
          var t = Ue[e];
          return (
            void 0 === t && ((t = Te(e)), ze === je && ((ze = 0), (Ue = {})), ze++, (Ue[e] = t)), t
          );
        }
        function Te(e) {
          for (var t = 0, n = 0; n < e.length; n++) t = (31 * t + e.charCodeAt(n)) | 0;
          return _e(t);
        }
        function Me(e) {
          var t;
          if (Fe && ((t = Ne.get(e)), void 0 !== t)) return t;
          if (((t = e[Pe]), void 0 !== t)) return t;
          if (!Be) {
            if (((t = e.propertyIsEnumerable && e.propertyIsEnumerable[Pe]), void 0 !== t))
              return t;
            if (((t = Le(e)), void 0 !== t)) return t;
          }
          if (((t = ++Re), 1073741824 & Re && (Re = 0), Fe)) Ne.set(e, t);
          else {
            if (void 0 !== De && !1 === De(e))
              throw new Error('Non-extensible objects are not allowed as keys.');
            if (Be)
              Object.defineProperty(e, Pe, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: t,
              });
            else if (
              void 0 !== e.propertyIsEnumerable &&
              e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable
            )
              (e.propertyIsEnumerable = function() {
                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
              }),
                (e.propertyIsEnumerable[Pe] = t);
            else {
              if (void 0 === e.nodeType)
                throw new Error('Unable to set a non-enumerable property on object.');
              e[Pe] = t;
            }
          }
          return t;
        }
        var De = Object.isExtensible,
          Be = (function() {
            try {
              return Object.defineProperty({}, '@', {}), !0;
            } catch (e) {
              return !1;
            }
          })();
        function Le(e) {
          if (e && e.nodeType > 0)
            switch (e.nodeType) {
              case 1:
                return e.uniqueID;
              case 9:
                return e.documentElement && e.documentElement.uniqueID;
            }
        }
        var Ne,
          Fe = 'function' === typeof WeakMap;
        Fe && (Ne = new WeakMap());
        var Re = 0,
          Pe = '__immutablehash__';
        'function' === typeof Symbol && (Pe = Symbol(Pe));
        var Ke = 16,
          je = 255,
          ze = 0,
          Ue = {};
        function He(e) {
          Ae(e !== 1 / 0, 'Cannot perform this action with an infinite size.');
        }
        function Ve(e) {
          return null === e || void 0 === e
            ? ot()
            : We(e) && !u(e)
            ? e
            : ot().withMutations(function(t) {
                var n = r(e);
                He(n.size),
                  n.forEach(function(e, n) {
                    return t.set(n, e);
                  });
              });
        }
        function We(e) {
          return !(!e || !e[qe]);
        }
        t(Ve, Ee),
          (Ve.prototype.toString = function() {
            return this.__toString('Map {', '}');
          }),
          (Ve.prototype.get = function(e, t) {
            return this._root ? this._root.get(0, void 0, e, t) : t;
          }),
          (Ve.prototype.set = function(e, t) {
            return it(this, e, t);
          }),
          (Ve.prototype.setIn = function(e, t) {
            return this.updateIn(e, b, function() {
              return t;
            });
          }),
          (Ve.prototype.remove = function(e) {
            return it(this, e, b);
          }),
          (Ve.prototype.deleteIn = function(e) {
            return this.updateIn(e, function() {
              return b;
            });
          }),
          (Ve.prototype.update = function(e, t, n) {
            return 1 === arguments.length ? e(this) : this.updateIn([e], t, n);
          }),
          (Ve.prototype.updateIn = function(e, t, n) {
            n || ((n = t), (t = void 0));
            var r = mt(this, wn(e), t, n);
            return r === b ? void 0 : r;
          }),
          (Ve.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._root = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : ot();
          }),
          (Ve.prototype.merge = function() {
            return dt(this, void 0, arguments);
          }),
          (Ve.prototype.mergeWith = function(t) {
            var n = e.call(arguments, 1);
            return dt(this, t, n);
          }),
          (Ve.prototype.mergeIn = function(t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, ot(), function(e) {
              return 'function' === typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1];
            });
          }),
          (Ve.prototype.mergeDeep = function() {
            return dt(this, pt, arguments);
          }),
          (Ve.prototype.mergeDeepWith = function(t) {
            var n = e.call(arguments, 1);
            return dt(this, ht(t), n);
          }),
          (Ve.prototype.mergeDeepIn = function(t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, ot(), function(e) {
              return 'function' === typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1];
            });
          }),
          (Ve.prototype.sort = function(e) {
            return Ut(fn(this, e));
          }),
          (Ve.prototype.sortBy = function(e, t) {
            return Ut(fn(this, t, e));
          }),
          (Ve.prototype.withMutations = function(e) {
            var t = this.asMutable();
            return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
          }),
          (Ve.prototype.asMutable = function() {
            return this.__ownerID ? this : this.__ensureOwner(new k());
          }),
          (Ve.prototype.asImmutable = function() {
            return this.__ensureOwner();
          }),
          (Ve.prototype.wasAltered = function() {
            return this.__altered;
          }),
          (Ve.prototype.__iterator = function(e, t) {
            return new et(this, e, t);
          }),
          (Ve.prototype.__iterate = function(e, t) {
            var n = this,
              r = 0;
            return (
              this._root &&
                this._root.iterate(function(t) {
                  return r++, e(t[1], t[0], n);
                }, t),
              r
            );
          }),
          (Ve.prototype.__ensureOwner = function(e) {
            return e === this.__ownerID
              ? this
              : e
              ? rt(this.size, this._root, e, this.__hash)
              : ((this.__ownerID = e), (this.__altered = !1), this);
          }),
          (Ve.isMap = We);
        var Qe,
          qe = '@@__IMMUTABLE_MAP__@@',
          Ye = Ve.prototype;
        function Je(e, t) {
          (this.ownerID = e), (this.entries = t);
        }
        function Ge(e, t, n) {
          (this.ownerID = e), (this.bitmap = t), (this.nodes = n);
        }
        function Xe(e, t, n) {
          (this.ownerID = e), (this.count = t), (this.nodes = n);
        }
        function Ze(e, t, n) {
          (this.ownerID = e), (this.keyHash = t), (this.entries = n);
        }
        function $e(e, t, n) {
          (this.ownerID = e), (this.keyHash = t), (this.entry = n);
        }
        function et(e, t, n) {
          (this._type = t), (this._reverse = n), (this._stack = e._root && nt(e._root));
        }
        function tt(e, t) {
          return j(e, t[0], t[1]);
        }
        function nt(e, t) {
          return { node: e, index: 0, __prev: t };
        }
        function rt(e, t, n, r) {
          var o = Object.create(Ye);
          return (
            (o.size = e), (o._root = t), (o.__ownerID = n), (o.__hash = r), (o.__altered = !1), o
          );
        }
        function ot() {
          return Qe || (Qe = rt(0));
        }
        function it(e, t, n) {
          var r, o;
          if (e._root) {
            var i = w(A),
              a = w(S);
            if (((r = at(e._root, e.__ownerID, 0, void 0, t, n, i, a)), !a.value)) return e;
            o = e.size + (i.value ? (n === b ? -1 : 1) : 0);
          } else {
            if (n === b) return e;
            (o = 1), (r = new Je(e.__ownerID, [[t, n]]));
          }
          return e.__ownerID
            ? ((e.size = o), (e._root = r), (e.__hash = void 0), (e.__altered = !0), e)
            : r
            ? rt(o, r)
            : ot();
        }
        function at(e, t, n, r, o, i, a, l) {
          return e
            ? e.update(t, n, r, o, i, a, l)
            : i === b
            ? e
            : (E(l), E(a), new $e(t, r, [o, i]));
        }
        function lt(e) {
          return e.constructor === $e || e.constructor === Ze;
        }
        function st(e, t, n, r, o) {
          if (e.keyHash === r) return new Ze(t, r, [e.entry, o]);
          var i,
            a = (0 === n ? e.keyHash : e.keyHash >>> n) & v,
            l = (0 === n ? r : r >>> n) & v,
            s =
              a === l ? [st(e, t, n + m, r, o)] : ((i = new $e(t, r, o)), a < l ? [e, i] : [i, e]);
          return new Ge(t, (1 << a) | (1 << l), s);
        }
        function ct(e, t, n, r) {
          e || (e = new k());
          for (var o = new $e(e, Ie(n), [n, r]), i = 0; i < t.length; i++) {
            var a = t[i];
            o = o.update(e, 0, void 0, a[0], a[1]);
          }
          return o;
        }
        function ut(e, t, n, r) {
          for (
            var o = 0, i = 0, a = new Array(n), l = 0, s = 1, c = t.length;
            l < c;
            l++, s <<= 1
          ) {
            var u = t[l];
            void 0 !== u && l !== r && ((o |= s), (a[i++] = u));
          }
          return new Ge(e, o, a);
        }
        function ft(e, t, n, r, o) {
          for (var i = 0, a = new Array(y), l = 0; 0 !== n; l++, n >>>= 1)
            a[l] = 1 & n ? t[i++] : void 0;
          return (a[r] = o), new Xe(e, i + 1, a);
        }
        function dt(e, t, n) {
          for (var o = [], i = 0; i < n.length; i++) {
            var l = n[i],
              s = r(l);
            a(l) ||
              (s = s.map(function(e) {
                return pe(e);
              })),
              o.push(s);
          }
          return gt(e, t, o);
        }
        function pt(e, t, n) {
          return e && e.mergeDeep && a(t) ? e.mergeDeep(t) : ye(e, t) ? e : t;
        }
        function ht(e) {
          return function(t, n, r) {
            if (t && t.mergeDeepWith && a(n)) return t.mergeDeepWith(e, n);
            var o = e(t, n, r);
            return ye(t, o) ? t : o;
          };
        }
        function gt(e, t, n) {
          return (
            (n = n.filter(function(e) {
              return 0 !== e.size;
            })),
            0 === n.length
              ? e
              : 0 !== e.size || e.__ownerID || 1 !== n.length
              ? e.withMutations(function(e) {
                  for (
                    var r = t
                        ? function(n, r) {
                            e.update(r, b, function(e) {
                              return e === b ? n : t(e, n, r);
                            });
                          }
                        : function(t, n) {
                            e.set(n, t);
                          },
                      o = 0;
                    o < n.length;
                    o++
                  )
                    n[o].forEach(r);
                })
              : e.constructor(n[0])
          );
        }
        function mt(e, t, n, r) {
          var o = e === b,
            i = t.next();
          if (i.done) {
            var a = o ? n : e,
              l = r(a);
            return l === a ? e : l;
          }
          Ae(o || (e && e.set), 'invalid keyPath');
          var s = i.value,
            c = o ? b : e.get(s, b),
            u = mt(c, t, n, r);
          return u === c ? e : u === b ? e.remove(s) : (o ? ot() : e).set(s, u);
        }
        function yt(e) {
          return (
            (e -= (e >> 1) & 1431655765),
            (e = (858993459 & e) + ((e >> 2) & 858993459)),
            (e = (e + (e >> 4)) & 252645135),
            (e += e >> 8),
            (e += e >> 16),
            127 & e
          );
        }
        function vt(e, t, n, r) {
          var o = r ? e : x(e);
          return (o[t] = n), o;
        }
        function bt(e, t, n, r) {
          var o = e.length + 1;
          if (r && t + 1 === o) return (e[t] = n), e;
          for (var i = new Array(o), a = 0, l = 0; l < o; l++)
            l === t ? ((i[l] = n), (a = -1)) : (i[l] = e[l + a]);
          return i;
        }
        function At(e, t, n) {
          var r = e.length - 1;
          if (n && t === r) return e.pop(), e;
          for (var o = new Array(r), i = 0, a = 0; a < r; a++)
            a === t && (i = 1), (o[a] = e[a + i]);
          return o;
        }
        (Ye[qe] = !0),
          (Ye[g] = Ye.remove),
          (Ye.removeIn = Ye.deleteIn),
          (Je.prototype.get = function(e, t, n, r) {
            for (var o = this.entries, i = 0, a = o.length; i < a; i++)
              if (ye(n, o[i][0])) return o[i][1];
            return r;
          }),
          (Je.prototype.update = function(e, t, n, r, o, i, a) {
            for (var l = o === b, s = this.entries, c = 0, u = s.length; c < u; c++)
              if (ye(r, s[c][0])) break;
            var f = c < u;
            if (f ? s[c][1] === o : l) return this;
            if ((E(a), (l || !f) && E(i), !l || 1 !== s.length)) {
              if (!f && !l && s.length >= St) return ct(e, s, r, o);
              var d = e && e === this.ownerID,
                p = d ? s : x(s);
              return (
                f
                  ? l
                    ? c === u - 1
                      ? p.pop()
                      : (p[c] = p.pop())
                    : (p[c] = [r, o])
                  : p.push([r, o]),
                d ? ((this.entries = p), this) : new Je(e, p)
              );
            }
          }),
          (Ge.prototype.get = function(e, t, n, r) {
            void 0 === t && (t = Ie(n));
            var o = 1 << ((0 === e ? t : t >>> e) & v),
              i = this.bitmap;
            return 0 === (i & o) ? r : this.nodes[yt(i & (o - 1))].get(e + m, t, n, r);
          }),
          (Ge.prototype.update = function(e, t, n, r, o, i, a) {
            void 0 === n && (n = Ie(r));
            var l = (0 === t ? n : n >>> t) & v,
              s = 1 << l,
              c = this.bitmap,
              u = 0 !== (c & s);
            if (!u && o === b) return this;
            var f = yt(c & (s - 1)),
              d = this.nodes,
              p = u ? d[f] : void 0,
              h = at(p, e, t + m, n, r, o, i, a);
            if (h === p) return this;
            if (!u && h && d.length >= wt) return ft(e, d, c, l, h);
            if (u && !h && 2 === d.length && lt(d[1 ^ f])) return d[1 ^ f];
            if (u && h && 1 === d.length && lt(h)) return h;
            var g = e && e === this.ownerID,
              y = u ? (h ? c : c ^ s) : c | s,
              A = u ? (h ? vt(d, f, h, g) : At(d, f, g)) : bt(d, f, h, g);
            return g ? ((this.bitmap = y), (this.nodes = A), this) : new Ge(e, y, A);
          }),
          (Xe.prototype.get = function(e, t, n, r) {
            void 0 === t && (t = Ie(n));
            var o = (0 === e ? t : t >>> e) & v,
              i = this.nodes[o];
            return i ? i.get(e + m, t, n, r) : r;
          }),
          (Xe.prototype.update = function(e, t, n, r, o, i, a) {
            void 0 === n && (n = Ie(r));
            var l = (0 === t ? n : n >>> t) & v,
              s = o === b,
              c = this.nodes,
              u = c[l];
            if (s && !u) return this;
            var f = at(u, e, t + m, n, r, o, i, a);
            if (f === u) return this;
            var d = this.count;
            if (u) {
              if (!f && (d--, d < Et)) return ut(e, c, d, l);
            } else d++;
            var p = e && e === this.ownerID,
              h = vt(c, l, f, p);
            return p ? ((this.count = d), (this.nodes = h), this) : new Xe(e, d, h);
          }),
          (Ze.prototype.get = function(e, t, n, r) {
            for (var o = this.entries, i = 0, a = o.length; i < a; i++)
              if (ye(n, o[i][0])) return o[i][1];
            return r;
          }),
          (Ze.prototype.update = function(e, t, n, r, o, i, a) {
            void 0 === n && (n = Ie(r));
            var l = o === b;
            if (n !== this.keyHash) return l ? this : (E(a), E(i), st(this, e, t, n, [r, o]));
            for (var s = this.entries, c = 0, u = s.length; c < u; c++) if (ye(r, s[c][0])) break;
            var f = c < u;
            if (f ? s[c][1] === o : l) return this;
            if ((E(a), (l || !f) && E(i), l && 2 === u)) return new $e(e, this.keyHash, s[1 ^ c]);
            var d = e && e === this.ownerID,
              p = d ? s : x(s);
            return (
              f
                ? l
                  ? c === u - 1
                    ? p.pop()
                    : (p[c] = p.pop())
                  : (p[c] = [r, o])
                : p.push([r, o]),
              d ? ((this.entries = p), this) : new Ze(e, this.keyHash, p)
            );
          }),
          ($e.prototype.get = function(e, t, n, r) {
            return ye(n, this.entry[0]) ? this.entry[1] : r;
          }),
          ($e.prototype.update = function(e, t, n, r, o, i, a) {
            var l = o === b,
              s = ye(r, this.entry[0]);
            return (s
            ? o === this.entry[1]
            : l)
              ? this
              : (E(a),
                l
                  ? void E(i)
                  : s
                  ? e && e === this.ownerID
                    ? ((this.entry[1] = o), this)
                    : new $e(e, this.keyHash, [r, o])
                  : (E(i), st(this, e, t, Ie(r), [r, o])));
          }),
          (Je.prototype.iterate = Ze.prototype.iterate = function(e, t) {
            for (var n = this.entries, r = 0, o = n.length - 1; r <= o; r++)
              if (!1 === e(n[t ? o - r : r])) return !1;
          }),
          (Ge.prototype.iterate = Xe.prototype.iterate = function(e, t) {
            for (var n = this.nodes, r = 0, o = n.length - 1; r <= o; r++) {
              var i = n[t ? o - r : r];
              if (i && !1 === i.iterate(e, t)) return !1;
            }
          }),
          ($e.prototype.iterate = function(e, t) {
            return e(this.entry);
          }),
          t(et, K),
          (et.prototype.next = function() {
            var e = this._type,
              t = this._stack;
            while (t) {
              var n,
                r = t.node,
                o = t.index++;
              if (r.entry) {
                if (0 === o) return tt(e, r.entry);
              } else if (r.entries) {
                if (((n = r.entries.length - 1), o <= n))
                  return tt(e, r.entries[this._reverse ? n - o : o]);
              } else if (((n = r.nodes.length - 1), o <= n)) {
                var i = r.nodes[this._reverse ? n - o : o];
                if (i) {
                  if (i.entry) return tt(e, i.entry);
                  t = this._stack = nt(i, t);
                }
                continue;
              }
              t = this._stack = this._stack.__prev;
            }
            return z();
          });
        var St = y / 4,
          wt = y / 2,
          Et = y / 4;
        function kt(e) {
          var t = Lt();
          if (null === e || void 0 === e) return t;
          if (xt(e)) return e;
          var n = o(e),
            r = n.size;
          return 0 === r
            ? t
            : (He(r),
              r > 0 && r < y
                ? Bt(0, r, m, null, new It(n.toArray()))
                : t.withMutations(function(e) {
                    e.setSize(r),
                      n.forEach(function(t, n) {
                        return e.set(n, t);
                      });
                  }));
        }
        function xt(e) {
          return !(!e || !e[Ct]);
        }
        t(kt, ke),
          (kt.of = function() {
            return this(arguments);
          }),
          (kt.prototype.toString = function() {
            return this.__toString('List [', ']');
          }),
          (kt.prototype.get = function(e, t) {
            if (((e = _(this, e)), e >= 0 && e < this.size)) {
              e += this._origin;
              var n = Pt(this, e);
              return n && n.array[e & v];
            }
            return t;
          }),
          (kt.prototype.set = function(e, t) {
            return Nt(this, e, t);
          }),
          (kt.prototype.remove = function(e) {
            return this.has(e)
              ? 0 === e
                ? this.shift()
                : e === this.size - 1
                ? this.pop()
                : this.splice(e, 1)
              : this;
          }),
          (kt.prototype.insert = function(e, t) {
            return this.splice(e, 0, t);
          }),
          (kt.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = this._origin = this._capacity = 0),
                (this._level = m),
                (this._root = this._tail = null),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Lt();
          }),
          (kt.prototype.push = function() {
            var e = arguments,
              t = this.size;
            return this.withMutations(function(n) {
              Kt(n, 0, t + e.length);
              for (var r = 0; r < e.length; r++) n.set(t + r, e[r]);
            });
          }),
          (kt.prototype.pop = function() {
            return Kt(this, 0, -1);
          }),
          (kt.prototype.unshift = function() {
            var e = arguments;
            return this.withMutations(function(t) {
              Kt(t, -e.length);
              for (var n = 0; n < e.length; n++) t.set(n, e[n]);
            });
          }),
          (kt.prototype.shift = function() {
            return Kt(this, 1);
          }),
          (kt.prototype.merge = function() {
            return jt(this, void 0, arguments);
          }),
          (kt.prototype.mergeWith = function(t) {
            var n = e.call(arguments, 1);
            return jt(this, t, n);
          }),
          (kt.prototype.mergeDeep = function() {
            return jt(this, pt, arguments);
          }),
          (kt.prototype.mergeDeepWith = function(t) {
            var n = e.call(arguments, 1);
            return jt(this, ht(t), n);
          }),
          (kt.prototype.setSize = function(e) {
            return Kt(this, 0, e);
          }),
          (kt.prototype.slice = function(e, t) {
            var n = this.size;
            return O(e, t, n) ? this : Kt(this, T(e, n), M(t, n));
          }),
          (kt.prototype.__iterator = function(e, t) {
            var n = 0,
              r = Dt(this, t);
            return new K(function() {
              var t = r();
              return t === Mt ? z() : j(e, n++, t);
            });
          }),
          (kt.prototype.__iterate = function(e, t) {
            var n,
              r = 0,
              o = Dt(this, t);
            while ((n = o()) !== Mt) if (!1 === e(n, r++, this)) break;
            return r;
          }),
          (kt.prototype.__ensureOwner = function(e) {
            return e === this.__ownerID
              ? this
              : e
              ? Bt(
                  this._origin,
                  this._capacity,
                  this._level,
                  this._root,
                  this._tail,
                  e,
                  this.__hash
                )
              : ((this.__ownerID = e), this);
          }),
          (kt.isList = xt);
        var Ct = '@@__IMMUTABLE_LIST__@@',
          _t = kt.prototype;
        function It(e, t) {
          (this.array = e), (this.ownerID = t);
        }
        (_t[Ct] = !0),
          (_t[g] = _t.remove),
          (_t.setIn = Ye.setIn),
          (_t.deleteIn = _t.removeIn = Ye.removeIn),
          (_t.update = Ye.update),
          (_t.updateIn = Ye.updateIn),
          (_t.mergeIn = Ye.mergeIn),
          (_t.mergeDeepIn = Ye.mergeDeepIn),
          (_t.withMutations = Ye.withMutations),
          (_t.asMutable = Ye.asMutable),
          (_t.asImmutable = Ye.asImmutable),
          (_t.wasAltered = Ye.wasAltered),
          (It.prototype.removeBefore = function(e, t, n) {
            if (n === t ? 1 << t : 0 === this.array.length) return this;
            var r = (n >>> t) & v;
            if (r >= this.array.length) return new It([], e);
            var o,
              i = 0 === r;
            if (t > 0) {
              var a = this.array[r];
              if (((o = a && a.removeBefore(e, t - m, n)), o === a && i)) return this;
            }
            if (i && !o) return this;
            var l = Rt(this, e);
            if (!i) for (var s = 0; s < r; s++) l.array[s] = void 0;
            return o && (l.array[r] = o), l;
          }),
          (It.prototype.removeAfter = function(e, t, n) {
            if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var r,
              o = ((n - 1) >>> t) & v;
            if (o >= this.array.length) return this;
            if (t > 0) {
              var i = this.array[o];
              if (((r = i && i.removeAfter(e, t - m, n)), r === i && o === this.array.length - 1))
                return this;
            }
            var a = Rt(this, e);
            return a.array.splice(o + 1), r && (a.array[o] = r), a;
          });
        var Ot,
          Tt,
          Mt = {};
        function Dt(e, t) {
          var n = e._origin,
            r = e._capacity,
            o = zt(r),
            i = e._tail;
          return a(e._root, e._level, 0);
          function a(e, t, n) {
            return 0 === t ? l(e, n) : s(e, t, n);
          }
          function l(e, a) {
            var l = a === o ? i && i.array : e && e.array,
              s = a > n ? 0 : n - a,
              c = r - a;
            return (
              c > y && (c = y),
              function() {
                if (s === c) return Mt;
                var e = t ? --c : s++;
                return l && l[e];
              }
            );
          }
          function s(e, o, i) {
            var l,
              s = e && e.array,
              c = i > n ? 0 : (n - i) >> o,
              u = 1 + ((r - i) >> o);
            return (
              u > y && (u = y),
              function() {
                do {
                  if (l) {
                    var e = l();
                    if (e !== Mt) return e;
                    l = null;
                  }
                  if (c === u) return Mt;
                  var n = t ? --u : c++;
                  l = a(s && s[n], o - m, i + (n << o));
                } while (1);
              }
            );
          }
        }
        function Bt(e, t, n, r, o, i, a) {
          var l = Object.create(_t);
          return (
            (l.size = t - e),
            (l._origin = e),
            (l._capacity = t),
            (l._level = n),
            (l._root = r),
            (l._tail = o),
            (l.__ownerID = i),
            (l.__hash = a),
            (l.__altered = !1),
            l
          );
        }
        function Lt() {
          return Ot || (Ot = Bt(0, 0, m));
        }
        function Nt(e, t, n) {
          if (((t = _(e, t)), t !== t)) return e;
          if (t >= e.size || t < 0)
            return e.withMutations(function(e) {
              t < 0 ? Kt(e, t).set(0, n) : Kt(e, 0, t + 1).set(t, n);
            });
          t += e._origin;
          var r = e._tail,
            o = e._root,
            i = w(S);
          return (
            t >= zt(e._capacity)
              ? (r = Ft(r, e.__ownerID, 0, t, n, i))
              : (o = Ft(o, e.__ownerID, e._level, t, n, i)),
            i.value
              ? e.__ownerID
                ? ((e._root = o), (e._tail = r), (e.__hash = void 0), (e.__altered = !0), e)
                : Bt(e._origin, e._capacity, e._level, o, r)
              : e
          );
        }
        function Ft(e, t, n, r, o, i) {
          var a,
            l = (r >>> n) & v,
            s = e && l < e.array.length;
          if (!s && void 0 === o) return e;
          if (n > 0) {
            var c = e && e.array[l],
              u = Ft(c, t, n - m, r, o, i);
            return u === c ? e : ((a = Rt(e, t)), (a.array[l] = u), a);
          }
          return s && e.array[l] === o
            ? e
            : (E(i),
              (a = Rt(e, t)),
              void 0 === o && l === a.array.length - 1 ? a.array.pop() : (a.array[l] = o),
              a);
        }
        function Rt(e, t) {
          return t && e && t === e.ownerID ? e : new It(e ? e.array.slice() : [], t);
        }
        function Pt(e, t) {
          if (t >= zt(e._capacity)) return e._tail;
          if (t < 1 << (e._level + m)) {
            var n = e._root,
              r = e._level;
            while (n && r > 0) (n = n.array[(t >>> r) & v]), (r -= m);
            return n;
          }
        }
        function Kt(e, t, n) {
          void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
          var r = e.__ownerID || new k(),
            o = e._origin,
            i = e._capacity,
            a = o + t,
            l = void 0 === n ? i : n < 0 ? i + n : o + n;
          if (a === o && l === i) return e;
          if (a >= l) return e.clear();
          var s = e._level,
            c = e._root,
            u = 0;
          while (a + u < 0)
            (c = new It(c && c.array.length ? [void 0, c] : [], r)), (s += m), (u += 1 << s);
          u && ((a += u), (o += u), (l += u), (i += u));
          var f = zt(i),
            d = zt(l);
          while (d >= 1 << (s + m)) (c = new It(c && c.array.length ? [c] : [], r)), (s += m);
          var p = e._tail,
            h = d < f ? Pt(e, l - 1) : d > f ? new It([], r) : p;
          if (p && d > f && a < i && p.array.length) {
            c = Rt(c, r);
            for (var g = c, y = s; y > m; y -= m) {
              var b = (f >>> y) & v;
              g = g.array[b] = Rt(g.array[b], r);
            }
            g.array[(f >>> m) & v] = p;
          }
          if ((l < i && (h = h && h.removeAfter(r, 0, l)), a >= d))
            (a -= d), (l -= d), (s = m), (c = null), (h = h && h.removeBefore(r, 0, a));
          else if (a > o || d < f) {
            u = 0;
            while (c) {
              var A = (a >>> s) & v;
              if ((A !== d >>> s) & v) break;
              A && (u += (1 << s) * A), (s -= m), (c = c.array[A]);
            }
            c && a > o && (c = c.removeBefore(r, s, a - u)),
              c && d < f && (c = c.removeAfter(r, s, d - u)),
              u && ((a -= u), (l -= u));
          }
          return e.__ownerID
            ? ((e.size = l - a),
              (e._origin = a),
              (e._capacity = l),
              (e._level = s),
              (e._root = c),
              (e._tail = h),
              (e.__hash = void 0),
              (e.__altered = !0),
              e)
            : Bt(a, l, s, c, h);
        }
        function jt(e, t, n) {
          for (var r = [], i = 0, l = 0; l < n.length; l++) {
            var s = n[l],
              c = o(s);
            c.size > i && (i = c.size),
              a(s) ||
                (c = c.map(function(e) {
                  return pe(e);
                })),
              r.push(c);
          }
          return i > e.size && (e = e.setSize(i)), gt(e, t, r);
        }
        function zt(e) {
          return e < y ? 0 : ((e - 1) >>> m) << m;
        }
        function Ut(e) {
          return null === e || void 0 === e
            ? Wt()
            : Ht(e)
            ? e
            : Wt().withMutations(function(t) {
                var n = r(e);
                He(n.size),
                  n.forEach(function(e, n) {
                    return t.set(n, e);
                  });
              });
        }
        function Ht(e) {
          return We(e) && u(e);
        }
        function Vt(e, t, n, r) {
          var o = Object.create(Ut.prototype);
          return (
            (o.size = e ? e.size : 0),
            (o._map = e),
            (o._list = t),
            (o.__ownerID = n),
            (o.__hash = r),
            o
          );
        }
        function Wt() {
          return Tt || (Tt = Vt(ot(), Lt()));
        }
        function Qt(e, t, n) {
          var r,
            o,
            i = e._map,
            a = e._list,
            l = i.get(t),
            s = void 0 !== l;
          if (n === b) {
            if (!s) return e;
            a.size >= y && a.size >= 2 * i.size
              ? ((o = a.filter(function(e, t) {
                  return void 0 !== e && l !== t;
                })),
                (r = o
                  .toKeyedSeq()
                  .map(function(e) {
                    return e[0];
                  })
                  .flip()
                  .toMap()),
                e.__ownerID && (r.__ownerID = o.__ownerID = e.__ownerID))
              : ((r = i.remove(t)), (o = l === a.size - 1 ? a.pop() : a.set(l, void 0)));
          } else if (s) {
            if (n === a.get(l)[1]) return e;
            (r = i), (o = a.set(l, [t, n]));
          } else (r = i.set(t, a.size)), (o = a.set(a.size, [t, n]));
          return e.__ownerID
            ? ((e.size = r.size), (e._map = r), (e._list = o), (e.__hash = void 0), e)
            : Vt(r, o);
        }
        function qt(e, t) {
          (this._iter = e), (this._useKeys = t), (this.size = e.size);
        }
        function Yt(e) {
          (this._iter = e), (this.size = e.size);
        }
        function Jt(e) {
          (this._iter = e), (this.size = e.size);
        }
        function Gt(e) {
          (this._iter = e), (this.size = e.size);
        }
        function Xt(e) {
          var t = bn(e);
          return (
            (t._iter = e),
            (t.size = e.size),
            (t.flip = function() {
              return e;
            }),
            (t.reverse = function() {
              var t = e.reverse.apply(this);
              return (
                (t.flip = function() {
                  return e.reverse();
                }),
                t
              );
            }),
            (t.has = function(t) {
              return e.includes(t);
            }),
            (t.includes = function(t) {
              return e.has(t);
            }),
            (t.cacheResult = An),
            (t.__iterateUncached = function(t, n) {
              var r = this;
              return e.__iterate(function(e, n) {
                return !1 !== t(n, e, r);
              }, n);
            }),
            (t.__iteratorUncached = function(t, n) {
              if (t === N) {
                var r = e.__iterator(t, n);
                return new K(function() {
                  var e = r.next();
                  if (!e.done) {
                    var t = e.value[0];
                    (e.value[0] = e.value[1]), (e.value[1] = t);
                  }
                  return e;
                });
              }
              return e.__iterator(t === L ? B : L, n);
            }),
            t
          );
        }
        function Zt(e, t, n) {
          var r = bn(e);
          return (
            (r.size = e.size),
            (r.has = function(t) {
              return e.has(t);
            }),
            (r.get = function(r, o) {
              var i = e.get(r, b);
              return i === b ? o : t.call(n, i, r, e);
            }),
            (r.__iterateUncached = function(r, o) {
              var i = this;
              return e.__iterate(function(e, o, a) {
                return !1 !== r(t.call(n, e, o, a), o, i);
              }, o);
            }),
            (r.__iteratorUncached = function(r, o) {
              var i = e.__iterator(N, o);
              return new K(function() {
                var o = i.next();
                if (o.done) return o;
                var a = o.value,
                  l = a[0];
                return j(r, l, t.call(n, a[1], l, e), o);
              });
            }),
            r
          );
        }
        function $t(e, t) {
          var n = bn(e);
          return (
            (n._iter = e),
            (n.size = e.size),
            (n.reverse = function() {
              return e;
            }),
            e.flip &&
              (n.flip = function() {
                var t = Xt(e);
                return (
                  (t.reverse = function() {
                    return e.flip();
                  }),
                  t
                );
              }),
            (n.get = function(n, r) {
              return e.get(t ? n : -1 - n, r);
            }),
            (n.has = function(n) {
              return e.has(t ? n : -1 - n);
            }),
            (n.includes = function(t) {
              return e.includes(t);
            }),
            (n.cacheResult = An),
            (n.__iterate = function(t, n) {
              var r = this;
              return e.__iterate(function(e, n) {
                return t(e, n, r);
              }, !n);
            }),
            (n.__iterator = function(t, n) {
              return e.__iterator(t, !n);
            }),
            n
          );
        }
        function en(e, t, n, r) {
          var o = bn(e);
          return (
            r &&
              ((o.has = function(r) {
                var o = e.get(r, b);
                return o !== b && !!t.call(n, o, r, e);
              }),
              (o.get = function(r, o) {
                var i = e.get(r, b);
                return i !== b && t.call(n, i, r, e) ? i : o;
              })),
            (o.__iterateUncached = function(o, i) {
              var a = this,
                l = 0;
              return (
                e.__iterate(function(e, i, s) {
                  if (t.call(n, e, i, s)) return l++, o(e, r ? i : l - 1, a);
                }, i),
                l
              );
            }),
            (o.__iteratorUncached = function(o, i) {
              var a = e.__iterator(N, i),
                l = 0;
              return new K(function() {
                while (1) {
                  var i = a.next();
                  if (i.done) return i;
                  var s = i.value,
                    c = s[0],
                    u = s[1];
                  if (t.call(n, u, c, e)) return j(o, r ? c : l++, u, i);
                }
              });
            }),
            o
          );
        }
        function tn(e, t, n) {
          var r = Ve().asMutable();
          return (
            e.__iterate(function(o, i) {
              r.update(t.call(n, o, i, e), 0, function(e) {
                return e + 1;
              });
            }),
            r.asImmutable()
          );
        }
        function nn(e, t, n) {
          var r = l(e),
            o = (u(e) ? Ut() : Ve()).asMutable();
          e.__iterate(function(i, a) {
            o.update(t.call(n, i, a, e), function(e) {
              return (e = e || []), e.push(r ? [a, i] : i), e;
            });
          });
          var i = vn(e);
          return o.map(function(t) {
            return gn(e, i(t));
          });
        }
        function rn(e, t, n, r) {
          var o = e.size;
          if ((void 0 !== t && (t |= 0), void 0 !== n && (n |= 0), O(t, n, o))) return e;
          var i = T(t, o),
            a = M(n, o);
          if (i !== i || a !== a) return rn(e.toSeq().cacheResult(), t, n, r);
          var l,
            s = a - i;
          s === s && (l = s < 0 ? 0 : s);
          var c = bn(e);
          return (
            (c.size = 0 === l ? l : (e.size && l) || void 0),
            !r &&
              ie(e) &&
              l >= 0 &&
              (c.get = function(t, n) {
                return (t = _(this, t)), t >= 0 && t < l ? e.get(t + i, n) : n;
              }),
            (c.__iterateUncached = function(t, n) {
              var o = this;
              if (0 === l) return 0;
              if (n) return this.cacheResult().__iterate(t, n);
              var a = 0,
                s = !0,
                c = 0;
              return (
                e.__iterate(function(e, n) {
                  if (!s || !(s = a++ < i)) return c++, !1 !== t(e, r ? n : c - 1, o) && c !== l;
                }),
                c
              );
            }),
            (c.__iteratorUncached = function(t, n) {
              if (0 !== l && n) return this.cacheResult().__iterator(t, n);
              var o = 0 !== l && e.__iterator(t, n),
                a = 0,
                s = 0;
              return new K(function() {
                while (a++ < i) o.next();
                if (++s > l) return z();
                var e = o.next();
                return r || t === L ? e : j(t, s - 1, t === B ? void 0 : e.value[1], e);
              });
            }),
            c
          );
        }
        function on(e, t, n) {
          var r = bn(e);
          return (
            (r.__iterateUncached = function(r, o) {
              var i = this;
              if (o) return this.cacheResult().__iterate(r, o);
              var a = 0;
              return (
                e.__iterate(function(e, o, l) {
                  return t.call(n, e, o, l) && ++a && r(e, o, i);
                }),
                a
              );
            }),
            (r.__iteratorUncached = function(r, o) {
              var i = this;
              if (o) return this.cacheResult().__iterator(r, o);
              var a = e.__iterator(N, o),
                l = !0;
              return new K(function() {
                if (!l) return z();
                var e = a.next();
                if (e.done) return e;
                var o = e.value,
                  s = o[0],
                  c = o[1];
                return t.call(n, c, s, i) ? (r === N ? e : j(r, s, c, e)) : ((l = !1), z());
              });
            }),
            r
          );
        }
        function an(e, t, n, r) {
          var o = bn(e);
          return (
            (o.__iterateUncached = function(o, i) {
              var a = this;
              if (i) return this.cacheResult().__iterate(o, i);
              var l = !0,
                s = 0;
              return (
                e.__iterate(function(e, i, c) {
                  if (!l || !(l = t.call(n, e, i, c))) return s++, o(e, r ? i : s - 1, a);
                }),
                s
              );
            }),
            (o.__iteratorUncached = function(o, i) {
              var a = this;
              if (i) return this.cacheResult().__iterator(o, i);
              var l = e.__iterator(N, i),
                s = !0,
                c = 0;
              return new K(function() {
                var e, i, u;
                do {
                  if (((e = l.next()), e.done))
                    return r || o === L ? e : j(o, c++, o === B ? void 0 : e.value[1], e);
                  var f = e.value;
                  (i = f[0]), (u = f[1]), s && (s = t.call(n, u, i, a));
                } while (s);
                return o === N ? e : j(o, i, u, e);
              });
            }),
            o
          );
        }
        function ln(e, t) {
          var n = l(e),
            o = [e]
              .concat(t)
              .map(function(e) {
                return a(e) ? n && (e = r(e)) : (e = n ? le(e) : se(Array.isArray(e) ? e : [e])), e;
              })
              .filter(function(e) {
                return 0 !== e.size;
              });
          if (0 === o.length) return e;
          if (1 === o.length) {
            var i = o[0];
            if (i === e || (n && l(i)) || (s(e) && s(i))) return i;
          }
          var c = new te(o);
          return (
            n ? (c = c.toKeyedSeq()) : s(e) || (c = c.toSetSeq()),
            (c = c.flatten(!0)),
            (c.size = o.reduce(function(e, t) {
              if (void 0 !== e) {
                var n = t.size;
                if (void 0 !== n) return e + n;
              }
            }, 0)),
            c
          );
        }
        function sn(e, t, n) {
          var r = bn(e);
          return (
            (r.__iterateUncached = function(r, o) {
              var i = 0,
                l = !1;
              function s(e, c) {
                var u = this;
                e.__iterate(function(e, o) {
                  return (
                    (!t || c < t) && a(e) ? s(e, c + 1) : !1 === r(e, n ? o : i++, u) && (l = !0),
                    !l
                  );
                }, o);
              }
              return s(e, 0), i;
            }),
            (r.__iteratorUncached = function(r, o) {
              var i = e.__iterator(r, o),
                l = [],
                s = 0;
              return new K(function() {
                while (i) {
                  var e = i.next();
                  if (!1 === e.done) {
                    var c = e.value;
                    if ((r === N && (c = c[1]), (t && !(l.length < t)) || !a(c)))
                      return n ? e : j(r, s++, c, e);
                    l.push(i), (i = c.__iterator(r, o));
                  } else i = l.pop();
                }
                return z();
              });
            }),
            r
          );
        }
        function cn(e, t, n) {
          var r = vn(e);
          return e
            .toSeq()
            .map(function(o, i) {
              return r(t.call(n, o, i, e));
            })
            .flatten(!0);
        }
        function un(e, t) {
          var n = bn(e);
          return (
            (n.size = e.size && 2 * e.size - 1),
            (n.__iterateUncached = function(n, r) {
              var o = this,
                i = 0;
              return (
                e.__iterate(function(e, r) {
                  return (!i || !1 !== n(t, i++, o)) && !1 !== n(e, i++, o);
                }, r),
                i
              );
            }),
            (n.__iteratorUncached = function(n, r) {
              var o,
                i = e.__iterator(L, r),
                a = 0;
              return new K(function() {
                return (!o || a % 2) && ((o = i.next()), o.done)
                  ? o
                  : a % 2
                  ? j(n, a++, t)
                  : j(n, a++, o.value, o);
              });
            }),
            n
          );
        }
        function fn(e, t, n) {
          t || (t = Sn);
          var r = l(e),
            o = 0,
            i = e
              .toSeq()
              .map(function(t, r) {
                return [r, t, o++, n ? n(t, r, e) : t];
              })
              .toArray();
          return (
            i
              .sort(function(e, n) {
                return t(e[3], n[3]) || e[2] - n[2];
              })
              .forEach(
                r
                  ? function(e, t) {
                      i[t].length = 2;
                    }
                  : function(e, t) {
                      i[t] = e[1];
                    }
              ),
            r ? Y(i) : s(e) ? J(i) : G(i)
          );
        }
        function dn(e, t, n) {
          if ((t || (t = Sn), n)) {
            var r = e
              .toSeq()
              .map(function(t, r) {
                return [t, n(t, r, e)];
              })
              .reduce(function(e, n) {
                return pn(t, e[1], n[1]) ? n : e;
              });
            return r && r[0];
          }
          return e.reduce(function(e, n) {
            return pn(t, e, n) ? n : e;
          });
        }
        function pn(e, t, n) {
          var r = e(n, t);
          return (0 === r && n !== t && (void 0 === n || null === n || n !== n)) || r > 0;
        }
        function hn(e, t, r) {
          var o = bn(e);
          return (
            (o.size = new te(r)
              .map(function(e) {
                return e.size;
              })
              .min()),
            (o.__iterate = function(e, t) {
              var n,
                r = this.__iterator(L, t),
                o = 0;
              while (!(n = r.next()).done) if (!1 === e(n.value, o++, this)) break;
              return o;
            }),
            (o.__iteratorUncached = function(e, o) {
              var i = r.map(function(e) {
                  return (e = n(e)), V(o ? e.reverse() : e);
                }),
                a = 0,
                l = !1;
              return new K(function() {
                var n;
                return (
                  l ||
                    ((n = i.map(function(e) {
                      return e.next();
                    })),
                    (l = n.some(function(e) {
                      return e.done;
                    }))),
                  l
                    ? z()
                    : j(
                        e,
                        a++,
                        t.apply(
                          null,
                          n.map(function(e) {
                            return e.value;
                          })
                        )
                      )
                );
              });
            }),
            o
          );
        }
        function gn(e, t) {
          return ie(e) ? t : e.constructor(t);
        }
        function mn(e) {
          if (e !== Object(e)) throw new TypeError('Expected [K, V] tuple: ' + e);
        }
        function yn(e) {
          return He(e.size), C(e);
        }
        function vn(e) {
          return l(e) ? r : s(e) ? o : i;
        }
        function bn(e) {
          return Object.create((l(e) ? Y : s(e) ? J : G).prototype);
        }
        function An() {
          return this._iter.cacheResult
            ? (this._iter.cacheResult(), (this.size = this._iter.size), this)
            : q.prototype.cacheResult.call(this);
        }
        function Sn(e, t) {
          return e > t ? 1 : e < t ? -1 : 0;
        }
        function wn(e) {
          var t = V(e);
          if (!t) {
            if (!Q(e)) throw new TypeError('Expected iterable or array-like: ' + e);
            t = V(n(e));
          }
          return t;
        }
        function En(e, t) {
          var n,
            r = function(i) {
              if (i instanceof r) return i;
              if (!(this instanceof r)) return new r(i);
              if (!n) {
                n = !0;
                var a = Object.keys(e);
                _n(o, a), (o.size = a.length), (o._name = t), (o._keys = a), (o._defaultValues = e);
              }
              this._map = Ve(i);
            },
            o = (r.prototype = Object.create(kn));
          return (o.constructor = r), r;
        }
        t(Ut, Ve),
          (Ut.of = function() {
            return this(arguments);
          }),
          (Ut.prototype.toString = function() {
            return this.__toString('OrderedMap {', '}');
          }),
          (Ut.prototype.get = function(e, t) {
            var n = this._map.get(e);
            return void 0 !== n ? this._list.get(n)[1] : t;
          }),
          (Ut.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0), this._map.clear(), this._list.clear(), this)
              : Wt();
          }),
          (Ut.prototype.set = function(e, t) {
            return Qt(this, e, t);
          }),
          (Ut.prototype.remove = function(e) {
            return Qt(this, e, b);
          }),
          (Ut.prototype.wasAltered = function() {
            return this._map.wasAltered() || this._list.wasAltered();
          }),
          (Ut.prototype.__iterate = function(e, t) {
            var n = this;
            return this._list.__iterate(function(t) {
              return t && e(t[1], t[0], n);
            }, t);
          }),
          (Ut.prototype.__iterator = function(e, t) {
            return this._list.fromEntrySeq().__iterator(e, t);
          }),
          (Ut.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e),
              n = this._list.__ensureOwner(e);
            return e
              ? Vt(t, n, e, this.__hash)
              : ((this.__ownerID = e), (this._map = t), (this._list = n), this);
          }),
          (Ut.isOrderedMap = Ht),
          (Ut.prototype[h] = !0),
          (Ut.prototype[g] = Ut.prototype.remove),
          t(qt, Y),
          (qt.prototype.get = function(e, t) {
            return this._iter.get(e, t);
          }),
          (qt.prototype.has = function(e) {
            return this._iter.has(e);
          }),
          (qt.prototype.valueSeq = function() {
            return this._iter.valueSeq();
          }),
          (qt.prototype.reverse = function() {
            var e = this,
              t = $t(this, !0);
            return (
              this._useKeys ||
                (t.valueSeq = function() {
                  return e._iter.toSeq().reverse();
                }),
              t
            );
          }),
          (qt.prototype.map = function(e, t) {
            var n = this,
              r = Zt(this, e, t);
            return (
              this._useKeys ||
                (r.valueSeq = function() {
                  return n._iter.toSeq().map(e, t);
                }),
              r
            );
          }),
          (qt.prototype.__iterate = function(e, t) {
            var n,
              r = this;
            return this._iter.__iterate(
              this._useKeys
                ? function(t, n) {
                    return e(t, n, r);
                  }
                : ((n = t ? yn(this) : 0),
                  function(o) {
                    return e(o, t ? --n : n++, r);
                  }),
              t
            );
          }),
          (qt.prototype.__iterator = function(e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var n = this._iter.__iterator(L, t),
              r = t ? yn(this) : 0;
            return new K(function() {
              var o = n.next();
              return o.done ? o : j(e, t ? --r : r++, o.value, o);
            });
          }),
          (qt.prototype[h] = !0),
          t(Yt, J),
          (Yt.prototype.includes = function(e) {
            return this._iter.includes(e);
          }),
          (Yt.prototype.__iterate = function(e, t) {
            var n = this,
              r = 0;
            return this._iter.__iterate(function(t) {
              return e(t, r++, n);
            }, t);
          }),
          (Yt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t),
              r = 0;
            return new K(function() {
              var t = n.next();
              return t.done ? t : j(e, r++, t.value, t);
            });
          }),
          t(Jt, G),
          (Jt.prototype.has = function(e) {
            return this._iter.includes(e);
          }),
          (Jt.prototype.__iterate = function(e, t) {
            var n = this;
            return this._iter.__iterate(function(t) {
              return e(t, t, n);
            }, t);
          }),
          (Jt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t);
            return new K(function() {
              var t = n.next();
              return t.done ? t : j(e, t.value, t.value, t);
            });
          }),
          t(Gt, Y),
          (Gt.prototype.entrySeq = function() {
            return this._iter.toSeq();
          }),
          (Gt.prototype.__iterate = function(e, t) {
            var n = this;
            return this._iter.__iterate(function(t) {
              if (t) {
                mn(t);
                var r = a(t);
                return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n);
              }
            }, t);
          }),
          (Gt.prototype.__iterator = function(e, t) {
            var n = this._iter.__iterator(L, t);
            return new K(function() {
              while (1) {
                var t = n.next();
                if (t.done) return t;
                var r = t.value;
                if (r) {
                  mn(r);
                  var o = a(r);
                  return j(e, o ? r.get(0) : r[0], o ? r.get(1) : r[1], t);
                }
              }
            });
          }),
          (Yt.prototype.cacheResult = qt.prototype.cacheResult = Jt.prototype.cacheResult = Gt.prototype.cacheResult = An),
          t(En, Ee),
          (En.prototype.toString = function() {
            return this.__toString(Cn(this) + ' {', '}');
          }),
          (En.prototype.has = function(e) {
            return this._defaultValues.hasOwnProperty(e);
          }),
          (En.prototype.get = function(e, t) {
            if (!this.has(e)) return t;
            var n = this._defaultValues[e];
            return this._map ? this._map.get(e, n) : n;
          }),
          (En.prototype.clear = function() {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var e = this.constructor;
            return e._empty || (e._empty = xn(this, ot()));
          }),
          (En.prototype.set = function(e, t) {
            if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + Cn(this));
            var n = this._map && this._map.set(e, t);
            return this.__ownerID || n === this._map ? this : xn(this, n);
          }),
          (En.prototype.remove = function(e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : xn(this, t);
          }),
          (En.prototype.wasAltered = function() {
            return this._map.wasAltered();
          }),
          (En.prototype.__iterator = function(e, t) {
            var n = this;
            return r(this._defaultValues)
              .map(function(e, t) {
                return n.get(t);
              })
              .__iterator(e, t);
          }),
          (En.prototype.__iterate = function(e, t) {
            var n = this;
            return r(this._defaultValues)
              .map(function(e, t) {
                return n.get(t);
              })
              .__iterate(e, t);
          }),
          (En.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map && this._map.__ensureOwner(e);
            return e ? xn(this, t, e) : ((this.__ownerID = e), (this._map = t), this);
          });
        var kn = En.prototype;
        function xn(e, t, n) {
          var r = Object.create(Object.getPrototypeOf(e));
          return (r._map = t), (r.__ownerID = n), r;
        }
        function Cn(e) {
          return e._name || e.constructor.name || 'Record';
        }
        function _n(e, t) {
          try {
            t.forEach(In.bind(void 0, e));
          } catch (e) {}
        }
        function In(e, t) {
          Object.defineProperty(e, t, {
            get: function() {
              return this.get(t);
            },
            set: function(e) {
              Ae(this.__ownerID, 'Cannot set on an immutable record.'), this.set(t, e);
            },
          });
        }
        function On(e) {
          return null === e || void 0 === e
            ? Fn()
            : Tn(e) && !u(e)
            ? e
            : Fn().withMutations(function(t) {
                var n = i(e);
                He(n.size),
                  n.forEach(function(e) {
                    return t.add(e);
                  });
              });
        }
        function Tn(e) {
          return !(!e || !e[Dn]);
        }
        (kn[g] = kn.remove),
          (kn.deleteIn = kn.removeIn = Ye.removeIn),
          (kn.merge = Ye.merge),
          (kn.mergeWith = Ye.mergeWith),
          (kn.mergeIn = Ye.mergeIn),
          (kn.mergeDeep = Ye.mergeDeep),
          (kn.mergeDeepWith = Ye.mergeDeepWith),
          (kn.mergeDeepIn = Ye.mergeDeepIn),
          (kn.setIn = Ye.setIn),
          (kn.update = Ye.update),
          (kn.updateIn = Ye.updateIn),
          (kn.withMutations = Ye.withMutations),
          (kn.asMutable = Ye.asMutable),
          (kn.asImmutable = Ye.asImmutable),
          t(On, xe),
          (On.of = function() {
            return this(arguments);
          }),
          (On.fromKeys = function(e) {
            return this(r(e).keySeq());
          }),
          (On.prototype.toString = function() {
            return this.__toString('Set {', '}');
          }),
          (On.prototype.has = function(e) {
            return this._map.has(e);
          }),
          (On.prototype.add = function(e) {
            return Ln(this, this._map.set(e, !0));
          }),
          (On.prototype.remove = function(e) {
            return Ln(this, this._map.remove(e));
          }),
          (On.prototype.clear = function() {
            return Ln(this, this._map.clear());
          }),
          (On.prototype.union = function() {
            var t = e.call(arguments, 0);
            return (
              (t = t.filter(function(e) {
                return 0 !== e.size;
              })),
              0 === t.length
                ? this
                : 0 !== this.size || this.__ownerID || 1 !== t.length
                ? this.withMutations(function(e) {
                    for (var n = 0; n < t.length; n++)
                      i(t[n]).forEach(function(t) {
                        return e.add(t);
                      });
                  })
                : this.constructor(t[0])
            );
          }),
          (On.prototype.intersect = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
              return i(e);
            });
            var n = this;
            return this.withMutations(function(e) {
              n.forEach(function(n) {
                t.every(function(e) {
                  return e.includes(n);
                }) || e.remove(n);
              });
            });
          }),
          (On.prototype.subtract = function() {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function(e) {
              return i(e);
            });
            var n = this;
            return this.withMutations(function(e) {
              n.forEach(function(n) {
                t.some(function(e) {
                  return e.includes(n);
                }) && e.remove(n);
              });
            });
          }),
          (On.prototype.merge = function() {
            return this.union.apply(this, arguments);
          }),
          (On.prototype.mergeWith = function(t) {
            var n = e.call(arguments, 1);
            return this.union.apply(this, n);
          }),
          (On.prototype.sort = function(e) {
            return Rn(fn(this, e));
          }),
          (On.prototype.sortBy = function(e, t) {
            return Rn(fn(this, t, e));
          }),
          (On.prototype.wasAltered = function() {
            return this._map.wasAltered();
          }),
          (On.prototype.__iterate = function(e, t) {
            var n = this;
            return this._map.__iterate(function(t, r) {
              return e(r, r, n);
            }, t);
          }),
          (On.prototype.__iterator = function(e, t) {
            return this._map
              .map(function(e, t) {
                return t;
              })
              .__iterator(e, t);
          }),
          (On.prototype.__ensureOwner = function(e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e);
            return e ? this.__make(t, e) : ((this.__ownerID = e), (this._map = t), this);
          }),
          (On.isSet = Tn);
        var Mn,
          Dn = '@@__IMMUTABLE_SET__@@',
          Bn = On.prototype;
        function Ln(e, t) {
          return e.__ownerID
            ? ((e.size = t.size), (e._map = t), e)
            : t === e._map
            ? e
            : 0 === t.size
            ? e.__empty()
            : e.__make(t);
        }
        function Nn(e, t) {
          var n = Object.create(Bn);
          return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
        }
        function Fn() {
          return Mn || (Mn = Nn(ot()));
        }
        function Rn(e) {
          return null === e || void 0 === e
            ? Un()
            : Pn(e)
            ? e
            : Un().withMutations(function(t) {
                var n = i(e);
                He(n.size),
                  n.forEach(function(e) {
                    return t.add(e);
                  });
              });
        }
        function Pn(e) {
          return Tn(e) && u(e);
        }
        (Bn[Dn] = !0),
          (Bn[g] = Bn.remove),
          (Bn.mergeDeep = Bn.merge),
          (Bn.mergeDeepWith = Bn.mergeWith),
          (Bn.withMutations = Ye.withMutations),
          (Bn.asMutable = Ye.asMutable),
          (Bn.asImmutable = Ye.asImmutable),
          (Bn.__empty = Fn),
          (Bn.__make = Nn),
          t(Rn, On),
          (Rn.of = function() {
            return this(arguments);
          }),
          (Rn.fromKeys = function(e) {
            return this(r(e).keySeq());
          }),
          (Rn.prototype.toString = function() {
            return this.__toString('OrderedSet {', '}');
          }),
          (Rn.isOrderedSet = Pn);
        var Kn,
          jn = Rn.prototype;
        function zn(e, t) {
          var n = Object.create(jn);
          return (n.size = e ? e.size : 0), (n._map = e), (n.__ownerID = t), n;
        }
        function Un() {
          return Kn || (Kn = zn(Wt()));
        }
        function Hn(e) {
          return null === e || void 0 === e ? Jn() : Vn(e) ? e : Jn().unshiftAll(e);
        }
        function Vn(e) {
          return !(!e || !e[Qn]);
        }
        (jn[h] = !0),
          (jn.__empty = Un),
          (jn.__make = zn),
          t(Hn, ke),
          (Hn.of = function() {
            return this(arguments);
          }),
          (Hn.prototype.toString = function() {
            return this.__toString('Stack [', ']');
          }),
          (Hn.prototype.get = function(e, t) {
            var n = this._head;
            e = _(this, e);
            while (n && e--) n = n.next;
            return n ? n.value : t;
          }),
          (Hn.prototype.peek = function() {
            return this._head && this._head.value;
          }),
          (Hn.prototype.push = function() {
            if (0 === arguments.length) return this;
            for (
              var e = this.size + arguments.length, t = this._head, n = arguments.length - 1;
              n >= 0;
              n--
            )
              t = { value: arguments[n], next: t };
            return this.__ownerID
              ? ((this.size = e),
                (this._head = t),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Yn(e, t);
          }),
          (Hn.prototype.pushAll = function(e) {
            if (((e = o(e)), 0 === e.size)) return this;
            He(e.size);
            var t = this.size,
              n = this._head;
            return (
              e.reverse().forEach(function(e) {
                t++, (n = { value: e, next: n });
              }),
              this.__ownerID
                ? ((this.size = t),
                  (this._head = n),
                  (this.__hash = void 0),
                  (this.__altered = !0),
                  this)
                : Yn(t, n)
            );
          }),
          (Hn.prototype.pop = function() {
            return this.slice(1);
          }),
          (Hn.prototype.unshift = function() {
            return this.push.apply(this, arguments);
          }),
          (Hn.prototype.unshiftAll = function(e) {
            return this.pushAll(e);
          }),
          (Hn.prototype.shift = function() {
            return this.pop.apply(this, arguments);
          }),
          (Hn.prototype.clear = function() {
            return 0 === this.size
              ? this
              : this.__ownerID
              ? ((this.size = 0),
                (this._head = void 0),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Jn();
          }),
          (Hn.prototype.slice = function(e, t) {
            if (O(e, t, this.size)) return this;
            var n = T(e, this.size),
              r = M(t, this.size);
            if (r !== this.size) return ke.prototype.slice.call(this, e, t);
            var o = this.size - n,
              i = this._head;
            while (n--) i = i.next;
            return this.__ownerID
              ? ((this.size = o),
                (this._head = i),
                (this.__hash = void 0),
                (this.__altered = !0),
                this)
              : Yn(o, i);
          }),
          (Hn.prototype.__ensureOwner = function(e) {
            return e === this.__ownerID
              ? this
              : e
              ? Yn(this.size, this._head, e, this.__hash)
              : ((this.__ownerID = e), (this.__altered = !1), this);
          }),
          (Hn.prototype.__iterate = function(e, t) {
            if (t) return this.reverse().__iterate(e);
            var n = 0,
              r = this._head;
            while (r) {
              if (!1 === e(r.value, n++, this)) break;
              r = r.next;
            }
            return n;
          }),
          (Hn.prototype.__iterator = function(e, t) {
            if (t) return this.reverse().__iterator(e);
            var n = 0,
              r = this._head;
            return new K(function() {
              if (r) {
                var t = r.value;
                return (r = r.next), j(e, n++, t);
              }
              return z();
            });
          }),
          (Hn.isStack = Vn);
        var Wn,
          Qn = '@@__IMMUTABLE_STACK__@@',
          qn = Hn.prototype;
        function Yn(e, t, n, r) {
          var o = Object.create(qn);
          return (
            (o.size = e), (o._head = t), (o.__ownerID = n), (o.__hash = r), (o.__altered = !1), o
          );
        }
        function Jn() {
          return Wn || (Wn = Yn(0));
        }
        function Gn(e, t) {
          var n = function(n) {
            e.prototype[n] = t[n];
          };
          return (
            Object.keys(t).forEach(n),
            Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n),
            e
          );
        }
        (qn[Qn] = !0),
          (qn.withMutations = Ye.withMutations),
          (qn.asMutable = Ye.asMutable),
          (qn.asImmutable = Ye.asImmutable),
          (qn.wasAltered = Ye.wasAltered),
          (n.Iterator = K),
          Gn(n, {
            toArray: function() {
              He(this.size);
              var e = new Array(this.size || 0);
              return (
                this.valueSeq().__iterate(function(t, n) {
                  e[n] = t;
                }),
                e
              );
            },
            toIndexedSeq: function() {
              return new Yt(this);
            },
            toJS: function() {
              return this.toSeq()
                .map(function(e) {
                  return e && 'function' === typeof e.toJS ? e.toJS() : e;
                })
                .__toJS();
            },
            toJSON: function() {
              return this.toSeq()
                .map(function(e) {
                  return e && 'function' === typeof e.toJSON ? e.toJSON() : e;
                })
                .__toJS();
            },
            toKeyedSeq: function() {
              return new qt(this, !0);
            },
            toMap: function() {
              return Ve(this.toKeyedSeq());
            },
            toObject: function() {
              He(this.size);
              var e = {};
              return (
                this.__iterate(function(t, n) {
                  e[n] = t;
                }),
                e
              );
            },
            toOrderedMap: function() {
              return Ut(this.toKeyedSeq());
            },
            toOrderedSet: function() {
              return Rn(l(this) ? this.valueSeq() : this);
            },
            toSet: function() {
              return On(l(this) ? this.valueSeq() : this);
            },
            toSetSeq: function() {
              return new Jt(this);
            },
            toSeq: function() {
              return s(this) ? this.toIndexedSeq() : l(this) ? this.toKeyedSeq() : this.toSetSeq();
            },
            toStack: function() {
              return Hn(l(this) ? this.valueSeq() : this);
            },
            toList: function() {
              return kt(l(this) ? this.valueSeq() : this);
            },
            toString: function() {
              return '[Iterable]';
            },
            __toString: function(e, t) {
              return 0 === this.size
                ? e + t
                : e +
                    ' ' +
                    this.toSeq()
                      .map(this.__toStringMapper)
                      .join(', ') +
                    ' ' +
                    t;
            },
            concat: function() {
              var t = e.call(arguments, 0);
              return gn(this, ln(this, t));
            },
            includes: function(e) {
              return this.some(function(t) {
                return ye(t, e);
              });
            },
            entries: function() {
              return this.__iterator(N);
            },
            every: function(e, t) {
              He(this.size);
              var n = !0;
              return (
                this.__iterate(function(r, o, i) {
                  if (!e.call(t, r, o, i)) return (n = !1), !1;
                }),
                n
              );
            },
            filter: function(e, t) {
              return gn(this, en(this, e, t, !0));
            },
            find: function(e, t, n) {
              var r = this.findEntry(e, t);
              return r ? r[1] : n;
            },
            findEntry: function(e, t) {
              var n;
              return (
                this.__iterate(function(r, o, i) {
                  if (e.call(t, r, o, i)) return (n = [o, r]), !1;
                }),
                n
              );
            },
            findLastEntry: function(e, t) {
              return this.toSeq()
                .reverse()
                .findEntry(e, t);
            },
            forEach: function(e, t) {
              return He(this.size), this.__iterate(t ? e.bind(t) : e);
            },
            join: function(e) {
              He(this.size), (e = void 0 !== e ? '' + e : ',');
              var t = '',
                n = !0;
              return (
                this.__iterate(function(r) {
                  n ? (n = !1) : (t += e), (t += null !== r && void 0 !== r ? r.toString() : '');
                }),
                t
              );
            },
            keys: function() {
              return this.__iterator(B);
            },
            map: function(e, t) {
              return gn(this, Zt(this, e, t));
            },
            reduce: function(e, t, n) {
              var r, o;
              return (
                He(this.size),
                arguments.length < 2 ? (o = !0) : (r = t),
                this.__iterate(function(t, i, a) {
                  o ? ((o = !1), (r = t)) : (r = e.call(n, r, t, i, a));
                }),
                r
              );
            },
            reduceRight: function(e, t, n) {
              var r = this.toKeyedSeq().reverse();
              return r.reduce.apply(r, arguments);
            },
            reverse: function() {
              return gn(this, $t(this, !0));
            },
            slice: function(e, t) {
              return gn(this, rn(this, e, t, !0));
            },
            some: function(e, t) {
              return !this.every(tr(e), t);
            },
            sort: function(e) {
              return gn(this, fn(this, e));
            },
            values: function() {
              return this.__iterator(L);
            },
            butLast: function() {
              return this.slice(0, -1);
            },
            isEmpty: function() {
              return void 0 !== this.size
                ? 0 === this.size
                : !this.some(function() {
                    return !0;
                  });
            },
            count: function(e, t) {
              return C(e ? this.toSeq().filter(e, t) : this);
            },
            countBy: function(e, t) {
              return tn(this, e, t);
            },
            equals: function(e) {
              return ve(this, e);
            },
            entrySeq: function() {
              var e = this;
              if (e._cache) return new te(e._cache);
              var t = e
                .toSeq()
                .map(er)
                .toIndexedSeq();
              return (
                (t.fromEntrySeq = function() {
                  return e.toSeq();
                }),
                t
              );
            },
            filterNot: function(e, t) {
              return this.filter(tr(e), t);
            },
            findLast: function(e, t, n) {
              return this.toKeyedSeq()
                .reverse()
                .find(e, t, n);
            },
            first: function() {
              return this.find(I);
            },
            flatMap: function(e, t) {
              return gn(this, cn(this, e, t));
            },
            flatten: function(e) {
              return gn(this, sn(this, e, !0));
            },
            fromEntrySeq: function() {
              return new Gt(this);
            },
            get: function(e, t) {
              return this.find(
                function(t, n) {
                  return ye(n, e);
                },
                void 0,
                t
              );
            },
            getIn: function(e, t) {
              var n,
                r = this,
                o = wn(e);
              while (!(n = o.next()).done) {
                var i = n.value;
                if (((r = r && r.get ? r.get(i, b) : b), r === b)) return t;
              }
              return r;
            },
            groupBy: function(e, t) {
              return nn(this, e, t);
            },
            has: function(e) {
              return this.get(e, b) !== b;
            },
            hasIn: function(e) {
              return this.getIn(e, b) !== b;
            },
            isSubset: function(e) {
              return (
                (e = 'function' === typeof e.includes ? e : n(e)),
                this.every(function(t) {
                  return e.includes(t);
                })
              );
            },
            isSuperset: function(e) {
              return (e = 'function' === typeof e.isSubset ? e : n(e)), e.isSubset(this);
            },
            keySeq: function() {
              return this.toSeq()
                .map($n)
                .toIndexedSeq();
            },
            last: function() {
              return this.toSeq()
                .reverse()
                .first();
            },
            max: function(e) {
              return dn(this, e);
            },
            maxBy: function(e, t) {
              return dn(this, t, e);
            },
            min: function(e) {
              return dn(this, e ? nr(e) : ir);
            },
            minBy: function(e, t) {
              return dn(this, t ? nr(t) : ir, e);
            },
            rest: function() {
              return this.slice(1);
            },
            skip: function(e) {
              return this.slice(Math.max(0, e));
            },
            skipLast: function(e) {
              return gn(
                this,
                this.toSeq()
                  .reverse()
                  .skip(e)
                  .reverse()
              );
            },
            skipWhile: function(e, t) {
              return gn(this, an(this, e, t, !0));
            },
            skipUntil: function(e, t) {
              return this.skipWhile(tr(e), t);
            },
            sortBy: function(e, t) {
              return gn(this, fn(this, t, e));
            },
            take: function(e) {
              return this.slice(0, Math.max(0, e));
            },
            takeLast: function(e) {
              return gn(
                this,
                this.toSeq()
                  .reverse()
                  .take(e)
                  .reverse()
              );
            },
            takeWhile: function(e, t) {
              return gn(this, on(this, e, t));
            },
            takeUntil: function(e, t) {
              return this.takeWhile(tr(e), t);
            },
            valueSeq: function() {
              return this.toIndexedSeq();
            },
            hashCode: function() {
              return this.__hash || (this.__hash = ar(this));
            },
          });
        var Xn = n.prototype;
        (Xn[f] = !0),
          (Xn[P] = Xn.values),
          (Xn.__toJS = Xn.toArray),
          (Xn.__toStringMapper = rr),
          (Xn.inspect = Xn.toSource = function() {
            return this.toString();
          }),
          (Xn.chain = Xn.flatMap),
          (Xn.contains = Xn.includes),
          (function() {
            try {
              Object.defineProperty(Xn, 'length', {
                get: function() {
                  if (!n.noLengthWarning) {
                    var e;
                    try {
                      throw new Error();
                    } catch (t) {
                      e = t.stack;
                    }
                    if (-1 === e.indexOf('_wrapObject'))
                      return (
                        console &&
                          console.warn &&
                          console.warn(
                            'iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. ' +
                              e
                          ),
                        this.size
                      );
                  }
                },
              });
            } catch (e) {}
          })(),
          Gn(r, {
            flip: function() {
              return gn(this, Xt(this));
            },
            findKey: function(e, t) {
              var n = this.findEntry(e, t);
              return n && n[0];
            },
            findLastKey: function(e, t) {
              return this.toSeq()
                .reverse()
                .findKey(e, t);
            },
            keyOf: function(e) {
              return this.findKey(function(t) {
                return ye(t, e);
              });
            },
            lastKeyOf: function(e) {
              return this.findLastKey(function(t) {
                return ye(t, e);
              });
            },
            mapEntries: function(e, t) {
              var n = this,
                r = 0;
              return gn(
                this,
                this.toSeq()
                  .map(function(o, i) {
                    return e.call(t, [i, o], r++, n);
                  })
                  .fromEntrySeq()
              );
            },
            mapKeys: function(e, t) {
              var n = this;
              return gn(
                this,
                this.toSeq()
                  .flip()
                  .map(function(r, o) {
                    return e.call(t, r, o, n);
                  })
                  .flip()
              );
            },
          });
        var Zn = r.prototype;
        function $n(e, t) {
          return t;
        }
        function er(e, t) {
          return [t, e];
        }
        function tr(e) {
          return function() {
            return !e.apply(this, arguments);
          };
        }
        function nr(e) {
          return function() {
            return -e.apply(this, arguments);
          };
        }
        function rr(e) {
          return 'string' === typeof e ? JSON.stringify(e) : e;
        }
        function or() {
          return x(arguments);
        }
        function ir(e, t) {
          return e < t ? 1 : e > t ? -1 : 0;
        }
        function ar(e) {
          if (e.size === 1 / 0) return 0;
          var t = u(e),
            n = l(e),
            r = t ? 1 : 0,
            o = e.__iterate(
              n
                ? t
                  ? function(e, t) {
                      r = (31 * r + sr(Ie(e), Ie(t))) | 0;
                    }
                  : function(e, t) {
                      r = (r + sr(Ie(e), Ie(t))) | 0;
                    }
                : t
                ? function(e) {
                    r = (31 * r + Ie(e)) | 0;
                  }
                : function(e) {
                    r = (r + Ie(e)) | 0;
                  }
            );
          return lr(o, r);
        }
        function lr(e, t) {
          return (
            (t = Ce(t, 3432918353)),
            (t = Ce((t << 15) | (t >>> -15), 461845907)),
            (t = Ce((t << 13) | (t >>> -13), 5)),
            (t = ((t + 3864292196) | 0) ^ e),
            (t = Ce(t ^ (t >>> 16), 2246822507)),
            (t = Ce(t ^ (t >>> 13), 3266489909)),
            (t = _e(t ^ (t >>> 16))),
            t
          );
        }
        function sr(e, t) {
          return (e ^ (t + 2654435769 + (e << 6) + (e >> 2))) | 0;
        }
        (Zn[d] = !0),
          (Zn[P] = Xn.entries),
          (Zn.__toJS = Xn.toObject),
          (Zn.__toStringMapper = function(e, t) {
            return JSON.stringify(t) + ': ' + rr(e);
          }),
          Gn(o, {
            toKeyedSeq: function() {
              return new qt(this, !1);
            },
            filter: function(e, t) {
              return gn(this, en(this, e, t, !1));
            },
            findIndex: function(e, t) {
              var n = this.findEntry(e, t);
              return n ? n[0] : -1;
            },
            indexOf: function(e) {
              var t = this.toKeyedSeq().keyOf(e);
              return void 0 === t ? -1 : t;
            },
            lastIndexOf: function(e) {
              var t = this.toKeyedSeq()
                .reverse()
                .keyOf(e);
              return void 0 === t ? -1 : t;
            },
            reverse: function() {
              return gn(this, $t(this, !1));
            },
            slice: function(e, t) {
              return gn(this, rn(this, e, t, !1));
            },
            splice: function(e, t) {
              var n = arguments.length;
              if (((t = Math.max(0 | t, 0)), 0 === n || (2 === n && !t))) return this;
              e = T(e, e < 0 ? this.count() : this.size);
              var r = this.slice(0, e);
              return gn(this, 1 === n ? r : r.concat(x(arguments, 2), this.slice(e + t)));
            },
            findLastIndex: function(e, t) {
              var n = this.toKeyedSeq().findLastKey(e, t);
              return void 0 === n ? -1 : n;
            },
            first: function() {
              return this.get(0);
            },
            flatten: function(e) {
              return gn(this, sn(this, e, !1));
            },
            get: function(e, t) {
              return (
                (e = _(this, e)),
                e < 0 || this.size === 1 / 0 || (void 0 !== this.size && e > this.size)
                  ? t
                  : this.find(
                      function(t, n) {
                        return n === e;
                      },
                      void 0,
                      t
                    )
              );
            },
            has: function(e) {
              return (
                (e = _(this, e)),
                e >= 0 &&
                  (void 0 !== this.size
                    ? this.size === 1 / 0 || e < this.size
                    : -1 !== this.indexOf(e))
              );
            },
            interpose: function(e) {
              return gn(this, un(this, e));
            },
            interleave: function() {
              var e = [this].concat(x(arguments)),
                t = hn(this.toSeq(), J.of, e),
                n = t.flatten(!0);
              return t.size && (n.size = t.size * e.length), gn(this, n);
            },
            last: function() {
              return this.get(-1);
            },
            skipWhile: function(e, t) {
              return gn(this, an(this, e, t, !1));
            },
            zip: function() {
              var e = [this].concat(x(arguments));
              return gn(this, hn(this, or, e));
            },
            zipWith: function(e) {
              var t = x(arguments);
              return (t[0] = this), gn(this, hn(this, e, t));
            },
          }),
          (o.prototype[p] = !0),
          (o.prototype[h] = !0),
          Gn(i, {
            get: function(e, t) {
              return this.has(e) ? e : t;
            },
            includes: function(e) {
              return this.has(e);
            },
            keySeq: function() {
              return this.valueSeq();
            },
          }),
          (i.prototype.has = Xn.includes),
          Gn(Y, r.prototype),
          Gn(J, o.prototype),
          Gn(G, i.prototype),
          Gn(Ee, r.prototype),
          Gn(ke, o.prototype),
          Gn(xe, i.prototype);
        var cr = {
          Iterable: n,
          Seq: q,
          Collection: we,
          Map: Ve,
          OrderedMap: Ut,
          List: kt,
          Stack: Hn,
          Set: On,
          OrderedSet: Rn,
          Record: En,
          Range: Se,
          Repeat: be,
          is: ye,
          fromJS: pe,
        };
        return cr;
      });
    },
    K4CH: function(e, t, n) {
      var r;
      (function(o, i) {
        'use strict';
        var a = '0.7.20',
          l = '',
          s = '?',
          c = 'function',
          u = 'undefined',
          f = 'object',
          d = 'string',
          p = 'major',
          h = 'model',
          g = 'name',
          m = 'type',
          y = 'vendor',
          v = 'version',
          b = 'architecture',
          A = 'console',
          S = 'mobile',
          w = 'tablet',
          E = 'smarttv',
          k = 'wearable',
          x = 'embedded',
          C = {
            extend: function(e, t) {
              var n = {};
              for (var r in e)
                t[r] && t[r].length % 2 === 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
              return n;
            },
            has: function(e, t) {
              return 'string' === typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
            },
            lowerize: function(e) {
              return e.toLowerCase();
            },
            major: function(e) {
              return typeof e === d ? e.replace(/[^\d\.]/g, '').split('.')[0] : i;
            },
            trim: function(e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            },
          },
          _ = {
            rgx: function(e, t) {
              var n,
                r,
                o,
                a,
                l,
                s,
                u = 0;
              while (u < t.length && !l) {
                var d = t[u],
                  p = t[u + 1];
                n = r = 0;
                while (n < d.length && !l)
                  if (((l = d[n++].exec(e)), l))
                    for (o = 0; o < p.length; o++)
                      (s = l[++r]),
                        (a = p[o]),
                        typeof a === f && a.length > 0
                          ? 2 == a.length
                            ? typeof a[1] == c
                              ? (this[a[0]] = a[1].call(this, s))
                              : (this[a[0]] = a[1])
                            : 3 == a.length
                            ? typeof a[1] !== c || (a[1].exec && a[1].test)
                              ? (this[a[0]] = s ? s.replace(a[1], a[2]) : i)
                              : (this[a[0]] = s ? a[1].call(this, s, a[2]) : i)
                            : 4 == a.length &&
                              (this[a[0]] = s ? a[3].call(this, s.replace(a[1], a[2])) : i)
                          : (this[a] = s || i);
                u += 2;
              }
            },
            str: function(e, t) {
              for (var n in t)
                if (typeof t[n] === f && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++)
                    if (C.has(t[n][r], e)) return n === s ? i : n;
                } else if (C.has(t[n], e)) return n === s ? i : n;
              return e;
            },
          },
          I = {
            browser: {
              oldsafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              },
            },
            device: {
              amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
              sprint: {
                model: { 'Evo Shift 4G': '7373KT' },
                vendor: { HTC: 'APA', Sprint: 'Sprint' },
              },
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2000: 'NT 5.0',
                  XP: ['NT 5.1', 'NT 5.2'],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: ['NT 6.4', 'NT 10.0'],
                  RT: 'ARM',
                },
              },
            },
          },
          O = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i,
              ],
              [g, v],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [[g, 'Opera Mini'], v],
              [/\s(opr)\/([\w\.]+)/i],
              [[g, 'Opera'], v],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
              ],
              [g, v],
              [/(konqueror)\/([\w\.]+)/i],
              [[g, 'Konqueror'], v],
              [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
              [[g, 'IE'], v],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [[g, 'Edge'], v],
              [/(yabrowser)\/([\w\.]+)/i],
              [[g, 'Yandex'], v],
              [/(puffin)\/([\w\.]+)/i],
              [[g, 'Puffin'], v],
              [/(focus)\/([\w\.]+)/i],
              [[g, 'Firefox Focus'], v],
              [/(opt)\/([\w\.]+)/i],
              [[g, 'Opera Touch'], v],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [[g, 'UCBrowser'], v],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[g, /_/g, ' '], v],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [[g, 'WeChat(Win) Desktop'], v],
              [/(micromessenger)\/([\w\.]+)/i],
              [[g, 'WeChat'], v],
              [/(brave)\/([\w\.]+)/i],
              [[g, 'Brave'], v],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [g, v],
              [/(QQ)\/([\d\.]+)/i],
              [g, v],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [g, v],
              [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
              [g, v],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [g, v],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [g],
              [/(LBBROWSER)/i],
              [g],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [v, [g, 'MIUI Browser']],
              [/;fbav\/([\w\.]+);/i],
              [v, [g, 'Facebook']],
              [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
              [g, v],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [v, [g, 'Chrome Headless']],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [[g, /(.+)/, '$1 WebView'], v],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [[g, /(.+(?:g|us))(.+)/, '$1 $2'], v],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [v, [g, 'Android Browser']],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [[g, 'Sailfish Browser'], v],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [g, v],
              [/(dolfin)\/([\w\.]+)/i],
              [[g, 'Dolphin'], v],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [[g, 'Chrome'], v],
              [/(coast)\/([\w\.]+)/i],
              [[g, 'Opera Coast'], v],
              [/fxios\/([\w\.-]+)/i],
              [v, [g, 'Firefox']],
              [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
              [v, [g, 'Mobile Safari']],
              [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
              [v, g],
              [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [[g, 'GSA'], v],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [g, [v, _.str, I.browser.oldsafari.version]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [g, v],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [[g, 'Netscape'], v],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i,
              ],
              [g, v],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[b, 'amd64']],
              [/(ia32(?=;))/i],
              [[b, C.lowerize]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[b, 'ia32']],
              [/windows\s(ce|mobile);\sppc;/i],
              [[b, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[b, /ower/, '', C.lowerize]],
              [/(sun4\w)[;\)]/i],
              [[b, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
              ],
              [[b, C.lowerize]],
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [h, y, [m, w]],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [h, [y, 'Apple'], [m, w]],
              [/(apple\s{0,1}tv)/i],
              [[h, 'Apple TV'], [y, 'Apple']],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
              ],
              [y, h, [m, w]],
              [/(kf[A-z]+)\sbuild\/.+silk\//i],
              [h, [y, 'Amazon'], [m, w]],
              [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
              [[h, _.str, I.device.amazon.model], [y, 'Amazon'], [m, S]],
              [/android.+aft([bms])\sbuild/i],
              [h, [y, 'Amazon'], [m, E]],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [h, y, [m, S]],
              [/\((ip[honed|\s\w*]+);/i],
              [h, [y, 'Apple'], [m, S]],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i,
              ],
              [y, h, [m, S]],
              [/\(bb10;\s(\w+)/i],
              [h, [y, 'BlackBerry'], [m, S]],
              [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
              [h, [y, 'Asus'], [m, w]],
              [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
              [[y, 'Sony'], [h, 'Xperia Tablet'], [m, w]],
              [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [h, [y, 'Sony'], [m, S]],
              [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
              [y, h, [m, A]],
              [/android.+;\s(shield)\sbuild/i],
              [h, [y, 'Nvidia'], [m, A]],
              [/(playstation\s[34portablevi]+)/i],
              [h, [y, 'Sony'], [m, A]],
              [/(sprint\s(\w+))/i],
              [[y, _.str, I.device.sprint.vendor], [h, _.str, I.device.sprint.model], [m, S]],
              [
                /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
              ],
              [y, [h, /_/g, ' '], [m, S]],
              [/(nexus\s9)/i],
              [h, [y, 'HTC'], [m, w]],
              [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
              [h, [y, 'Huawei'], [m, S]],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [y, h, [m, S]],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [h, [y, 'Microsoft'], [m, A]],
              [/(kin\.[onetw]{3})/i],
              [[h, /\./g, ' '], [y, 'Microsoft'], [m, S]],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i,
              ],
              [h, [y, 'Motorola'], [m, S]],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [h, [y, 'Motorola'], [m, w]],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [[y, C.trim], [h, C.trim], [m, E]],
              [/hbbtv.+maple;(\d+)/i],
              [[h, /^/, 'SmartTV'], [y, 'Samsung'], [m, E]],
              [/\(dtv[\);].+(aquos)/i],
              [h, [y, 'Sharp'], [m, E]],
              [
                /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i,
              ],
              [[y, 'Samsung'], h, [m, w]],
              [/smart-tv.+(samsung)/i],
              [y, [m, E], h],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i,
              ],
              [[y, 'Samsung'], h, [m, S]],
              [/sie-(\w*)/i],
              [h, [y, 'Siemens'], [m, S]],
              [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
              [[y, 'Nokia'], h, [m, S]],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [h, [y, 'Acer'], [m, w]],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [h, [y, 'LG'], [m, w]],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [[y, 'LG'], h, [m, w]],
              [/(lg) netcast\.tv/i],
              [y, h, [m, E]],
              [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
              [h, [y, 'LG'], [m, S]],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [y, h, [m, w]],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [h, [y, 'Lenovo'], [m, w]],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [y, h, [m, S]],
              [/linux;.+((jolla));/i],
              [y, h, [m, S]],
              [/((pebble))app\/[\d\.]+\s/i],
              [y, h, [m, k]],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [y, h, [m, S]],
              [/crkey/i],
              [[h, 'Chromecast'], [y, 'Google']],
              [/android.+;\s(glass)\s\d/i],
              [h, [y, 'Google'], [m, k]],
              [/android.+;\s(pixel c)[\s)]/i],
              [h, [y, 'Google'], [m, w]],
              [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
              [h, [y, 'Google'], [m, S]],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
              ],
              [[h, /_/g, ' '], [y, 'Xiaomi'], [m, S]],
              [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
              [[h, /_/g, ' '], [y, 'Xiaomi'], [m, w]],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [h, [y, 'Meizu'], [m, S]],
              [/(mz)-([\w-]{2,})/i],
              [[y, 'Meizu'], h, [m, S]],
              [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
              [h, [y, 'OnePlus'], [m, S]],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [h, [y, 'RCA'], [m, w]],
              [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
              [h, [y, 'Dell'], [m, w]],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [h, [y, 'Verizon'], [m, w]],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [[y, 'Barnes & Noble'], h, [m, w]],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [h, [y, 'NuVision'], [m, w]],
              [/android.+;\s(k88)\sbuild/i],
              [h, [y, 'ZTE'], [m, w]],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [h, [y, 'Swiss'], [m, S]],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [h, [y, 'Swiss'], [m, w]],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [h, [y, 'Zeki'], [m, w]],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
              ],
              [[y, 'Dragon Touch'], h, [m, w]],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [h, [y, 'Insignia'], [m, w]],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [h, [y, 'NextBook'], [m, w]],
              [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
              [[y, 'Voice'], h, [m, S]],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [[y, 'LvTel'], h, [m, S]],
              [/android.+;\s(PH-1)\s/i],
              [h, [y, 'Essential'], [m, S]],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [h, [y, 'Envizen'], [m, w]],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [y, h, [m, w]],
              [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
              [h, [y, 'MachSpeed'], [m, w]],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [y, h, [m, w]],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [h, [y, 'Rotor'], [m, w]],
              [/android.+(KS(.+))\s+build/i],
              [h, [y, 'Amazon'], [m, w]],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [y, h, [m, w]],
              [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
              [[m, C.lowerize], y, h],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[m, E]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [h, [y, 'Generic']],
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [v, [g, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)/i],
              [[g, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i,
              ],
              [g, v],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [v, g],
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [g, v],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
              ],
              [g, [v, _.str, I.os.windows.version]],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [[g, 'Windows'], [v, _.str, I.os.windows.version]],
              [/\((bb)(10);/i],
              [[g, 'BlackBerry'], v],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
              ],
              [g, v],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [[g, 'Symbian'], v],
              [/\((series40);/i],
              [g],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [[g, 'Firefox OS'], v],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i,
              ],
              [g, v],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [[g, 'Chromium OS'], v],
              [/(sunos)\s?([\w\.\d]*)/i],
              [[g, 'Solaris'], v],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [g, v],
              [/(haiku)\s(\w+)/i],
              [g, v],
              [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
              [[v, /_/g, '.'], [g, 'iOS']],
              [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
              [[g, 'Mac OS'], [v, /_/g, '.']],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i,
              ],
              [g, v],
            ],
          },
          T = function(e, t) {
            if (('object' === typeof e && ((t = e), (e = i)), !(this instanceof T)))
              return new T(e, t).getResult();
            var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : l),
              r = t ? C.extend(O, t) : O;
            return (
              (this.getBrowser = function() {
                var e = { name: i, version: i };
                return _.rgx.call(e, n, r.browser), (e.major = C.major(e.version)), e;
              }),
              (this.getCPU = function() {
                var e = { architecture: i };
                return _.rgx.call(e, n, r.cpu), e;
              }),
              (this.getDevice = function() {
                var e = { vendor: i, model: i, type: i };
                return _.rgx.call(e, n, r.device), e;
              }),
              (this.getEngine = function() {
                var e = { name: i, version: i };
                return _.rgx.call(e, n, r.engine), e;
              }),
              (this.getOS = function() {
                var e = { name: i, version: i };
                return _.rgx.call(e, n, r.os), e;
              }),
              (this.getResult = function() {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function() {
                return n;
              }),
              (this.setUA = function(e) {
                return (n = e), this;
              }),
              this
            );
          };
        (T.VERSION = a),
          (T.BROWSER = { NAME: g, MAJOR: p, VERSION: v }),
          (T.CPU = { ARCHITECTURE: b }),
          (T.DEVICE = {
            MODEL: h,
            VENDOR: y,
            TYPE: m,
            CONSOLE: A,
            MOBILE: S,
            SMARTTV: E,
            TABLET: w,
            WEARABLE: k,
            EMBEDDED: x,
          }),
          (T.ENGINE = { NAME: g, VERSION: v }),
          (T.OS = { NAME: g, VERSION: v }),
          typeof t !== u
            ? (typeof e !== u && e.exports && (t = e.exports = T), (t.UAParser = T))
            : ((r = function() {
                return T;
              }.call(t, n, t, e)),
              r === i || (e.exports = r));
        var M = o && (o.jQuery || o.Zepto);
        if (typeof M !== u && !M.ua) {
          var D = new T();
          (M.ua = D.getResult()),
            (M.ua.get = function() {
              return D.getUA();
            }),
            (M.ua.set = function(e) {
              D.setUA(e);
              var t = D.getResult();
              for (var n in t) M.ua[n] = t[n];
            });
        }
      })('object' === typeof window ? window : this);
    },
    KAy6: function(e, t, n) {
      'use strict';
      e.exports = n('IDhZ');
    },
    KL9H: function(e, t, n) {
      'use strict';
      var r = n('K4CH'),
        o = 'Unknown',
        i = { 'Mac OS': 'Mac OS X' };
      function a(e) {
        return i[e] || e;
      }
      function l(e) {
        if (!e) return { major: '', minor: '' };
        var t = e.split('.');
        return { major: t[0], minor: t[1] };
      }
      var s = new r(),
        c = s.getResult(),
        u = l(c.browser.version),
        f = {
          browserArchitecture: c.cpu.architecture || o,
          browserFullVersion: c.browser.version || o,
          browserMinorVersion: u.minor || o,
          browserName: c.browser.name || o,
          browserVersion: c.browser.major || o,
          deviceName: c.device.model || o,
          engineName: c.engine.name || o,
          engineVersion: c.engine.version || o,
          platformArchitecture: c.cpu.architecture || o,
          platformName: a(c.os.name) || o,
          platformVersion: c.os.version || o,
          platformFullVersion: c.os.version || o,
        };
      e.exports = f;
    },
    L0q3: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = n('ohE5'),
        i = n('Taje'),
        a = r.List,
        l = r.Repeat,
        s = r.Record,
        c = o.thatReturnsTrue,
        u = '-',
        f = { start: null, end: null },
        d = s(f),
        p = { start: null, end: null, decoratorKey: null, leaves: null },
        h = s(p),
        g = {
          generate: function(e, t, n) {
            var r = t.getLength();
            if (!r)
              return a.of(
                new h({
                  start: 0,
                  end: 0,
                  decoratorKey: null,
                  leaves: a.of(new d({ start: 0, end: 0 })),
                })
              );
            var o = [],
              s = n ? n.getDecorations(t, e) : a(l(null, r)),
              u = t.getCharacterList();
            return (
              i(s, y, c, function(e, t) {
                o.push(
                  new h({
                    start: e,
                    end: t,
                    decoratorKey: s.get(e),
                    leaves: m(u.slice(e, t).toList(), e),
                  })
                );
              }),
              a(o)
            );
          },
          getFingerprint: function(e) {
            return e
              .map(function(e) {
                var t = e.get('decoratorKey'),
                  n = null !== t ? t + '.' + (e.get('end') - e.get('start')) : '';
                return n + '.' + e.get('leaves').size;
              })
              .join(u);
          },
        };
      function m(e, t) {
        var n = [],
          r = e
            .map(function(e) {
              return e.getStyle();
            })
            .toList();
        return (
          i(r, y, c, function(e, r) {
            n.push(new d({ start: e + t, end: r + t }));
          }),
          a(n)
        );
      }
      function y(e, t) {
        return e === t;
      }
      e.exports = g;
    },
    L2EA: function(e, t, n) {
      'use strict';
      var r = n('YeVe'),
        o = n('JL7T'),
        i = n('JPcv'),
        a = n('Zf/v'),
        l = n('2NuI'),
        s = n('V8dp'),
        c = i.List,
        u = function(e, t, n, r, o, i) {
          var l = n.get(o),
            s = l.getText(),
            c = l.getCharacterList(),
            u = o,
            f = i + r.getText().length,
            d = l.merge({
              text: s.slice(0, i) + r.getText() + s.slice(i),
              characterList: a(c, r.getCharacterList(), i),
              data: r.getData(),
            });
          return e.merge({
            blockMap: n.set(o, d),
            selectionBefore: t,
            selectionAfter: t.merge({
              anchorKey: u,
              anchorOffset: f,
              focusKey: u,
              focusOffset: f,
              isBackward: !1,
            }),
          });
        },
        f = function(e, t, n) {
          var r = e.getText(),
            o = e.getCharacterList(),
            i = r.slice(0, t),
            a = o.slice(0, t),
            l = n.first();
          return e.merge({
            text: i + l.getText(),
            characterList: a.concat(l.getCharacterList()),
            type: i ? e.getType() : l.getType(),
            data: l.getData(),
          });
        },
        d = function(e, t, n) {
          var r = e.getText(),
            o = e.getCharacterList(),
            i = r.length,
            a = r.slice(t, i),
            l = o.slice(t, i),
            s = n.last();
          return s.merge({
            text: s.getText() + a,
            characterList: s.getCharacterList().concat(l),
            data: s.getData(),
          });
        },
        p = function(e, t) {
          var n = e.getKey(),
            r = e,
            o = [];
          t.get(n) && o.push(n);
          while (r && r.getNextSiblingKey()) {
            var i = r.getNextSiblingKey();
            if (!i) break;
            o.push(i), (r = t.get(i));
          }
          return o;
        },
        h = function(e, t, n, r) {
          return e.withMutations(function(t) {
            var o = n.getKey(),
              i = r.getKey(),
              a = n.getNextSiblingKey(),
              l = n.getParentKey(),
              s = p(r, e),
              u = s[s.length - 1];
            if (
              (t.get(i)
                ? (t.setIn([o, 'nextSibling'], i), t.setIn([i, 'prevSibling'], o))
                : (t.setIn([o, 'nextSibling'], r.getNextSiblingKey()),
                  t.setIn([r.getNextSiblingKey(), 'prevSibling'], o)),
              t.setIn([u, 'nextSibling'], a),
              a && t.setIn([a, 'prevSibling'], u),
              s.forEach(function(e) {
                return t.setIn([e, 'parent'], l);
              }),
              l)
            ) {
              var f = e.get(l),
                d = f.getChildKeys(),
                h = d.indexOf(o),
                g = h + 1,
                m = d.toArray();
              m.splice.apply(m, [g, 0].concat(s)), t.setIn([l, 'children'], c(m));
            }
          });
        },
        g = function(e, t, n, i, a, l) {
          var s = n.first() instanceof o,
            c = [],
            u = i.size,
            p = n.get(a),
            g = i.first(),
            m = i.last(),
            y = m.getLength(),
            v = m.getKey(),
            b = s && (!p.getChildKeys().isEmpty() || !g.getChildKeys().isEmpty());
          n.forEach(function(e, t) {
            t === a
              ? (b ? c.push(e) : c.push(f(e, l, i)),
                i.slice(b ? 0 : 1, u - 1).forEach(function(e) {
                  return c.push(e);
                }),
                c.push(d(e, l, i)))
              : c.push(e);
          });
          var A = r.createFromArray(c);
          return (
            s && (A = h(A, n, p, g)),
            e.merge({
              blockMap: A,
              selectionBefore: t,
              selectionAfter: t.merge({
                anchorKey: v,
                anchorOffset: y,
                focusKey: v,
                focusOffset: y,
                isBackward: !1,
              }),
            })
          );
        },
        m = function(e, t, n) {
          t.isCollapsed() || l(!1);
          var r = e.getBlockMap(),
            i = s(n),
            a = t.getStartKey(),
            c = t.getStartOffset(),
            f = r.get(a);
          return (
            f instanceof o && (f.getChildKeys().isEmpty() || l(!1)),
            1 === i.size ? u(e, t, r, i.first(), a, c) : g(e, t, r, i, a, c)
          );
        };
      e.exports = m;
    },
    LFmL: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = u);
      var r = l(n('QLaP')),
        o = l(n('q1tI')),
        i = l(n('KAy6')),
        a = l(n('hq3H'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (
          (s =
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
          s(e)
        );
      }
      function c(e) {
        return o['default'].isValidElement(e) && o['default'].Children.count(e.props.children) > 0;
      }
      function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (void 0 === e || null === e) return e;
        if ('string' === typeof e) return e;
        if (o['default'].isValidElement(e)) {
          if (c(e)) return i['default'].renderToStaticMarkup(e);
          var n = (0, a['default'])(e);
          if (null !== t && 'object' === s(n)) {
            var l = n.start,
              u = n.end;
            return l + t + u;
          }
          return n;
        }
        if (
          ((0, r['default'])(
            Object.prototype.hasOwnProperty.call(e, 'start') &&
              Object.prototype.hasOwnProperty.call(e, 'end'),
            'convertToHTML: received conversion data without either an HTML string, ReactElement or an object with start/end tags'
          ),
          null !== t)
        ) {
          var f = e.start,
            d = e.end;
          return f + t + d;
        }
        return e;
      }
    },
    LpQA: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('YeVe'),
        l = n('lFJn'),
        s = n('8uQm'),
        c = n('JL7T'),
        u = n('TzU/'),
        f = n('cX45'),
        d = n('JPcv'),
        p = n('hMpd'),
        h = n('rJY1'),
        g = n('HriT'),
        m = d.List,
        y = d.Record,
        v = d.Repeat,
        b = f.draft_tree_data_support,
        A = { entityMap: null, blockMap: null, selectionBefore: null, selectionAfter: null },
        S = b ? c : s,
        w = y(A),
        E = (function(e) {
          function t() {
            return r(this, t), o(this, e.apply(this, arguments));
          }
          return (
            i(t, e),
            (t.prototype.getEntityMap = function() {
              return u;
            }),
            (t.prototype.getBlockMap = function() {
              return this.get('blockMap');
            }),
            (t.prototype.getSelectionBefore = function() {
              return this.get('selectionBefore');
            }),
            (t.prototype.getSelectionAfter = function() {
              return this.get('selectionAfter');
            }),
            (t.prototype.getBlockForKey = function(e) {
              var t = this.getBlockMap().get(e);
              return t;
            }),
            (t.prototype.getKeyBefore = function(e) {
              return this.getBlockMap()
                .reverse()
                .keySeq()
                .skipUntil(function(t) {
                  return t === e;
                })
                .skip(1)
                .first();
            }),
            (t.prototype.getKeyAfter = function(e) {
              return this.getBlockMap()
                .keySeq()
                .skipUntil(function(t) {
                  return t === e;
                })
                .skip(1)
                .first();
            }),
            (t.prototype.getBlockAfter = function(e) {
              return this.getBlockMap()
                .skipUntil(function(t, n) {
                  return n === e;
                })
                .skip(1)
                .first();
            }),
            (t.prototype.getBlockBefore = function(e) {
              return this.getBlockMap()
                .reverse()
                .skipUntil(function(t, n) {
                  return n === e;
                })
                .skip(1)
                .first();
            }),
            (t.prototype.getBlocksAsArray = function() {
              return this.getBlockMap().toArray();
            }),
            (t.prototype.getFirstBlock = function() {
              return this.getBlockMap().first();
            }),
            (t.prototype.getLastBlock = function() {
              return this.getBlockMap().last();
            }),
            (t.prototype.getPlainText = function(e) {
              return this.getBlockMap()
                .map(function(e) {
                  return e ? e.getText() : '';
                })
                .join(e || '\n');
            }),
            (t.prototype.getLastCreatedEntityKey = function() {
              return u.__getLastCreatedEntityKey();
            }),
            (t.prototype.hasText = function() {
              var e = this.getBlockMap();
              return e.size > 1 || e.first().getLength() > 0;
            }),
            (t.prototype.createEntity = function(e, t, n) {
              return u.__create(e, t, n), this;
            }),
            (t.prototype.mergeEntityData = function(e, t) {
              return u.__mergeData(e, t), this;
            }),
            (t.prototype.replaceEntityData = function(e, t) {
              return u.__replaceData(e, t), this;
            }),
            (t.prototype.addEntity = function(e) {
              return u.__add(e), this;
            }),
            (t.prototype.getEntity = function(e) {
              return u.__get(e);
            }),
            (t.createFromBlockArray = function(e, n) {
              var r = Array.isArray(e) ? e : e.contentBlocks,
                o = a.createFromArray(r),
                i = o.isEmpty() ? new p() : p.createEmpty(o.first().getKey());
              return new t({
                blockMap: o,
                entityMap: n || u,
                selectionBefore: i,
                selectionAfter: i,
              });
            }),
            (t.createFromText = function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
                r = e.split(n),
                o = r.map(function(e) {
                  return (
                    (e = g(e)),
                    new S({
                      key: h(),
                      text: e,
                      type: 'unstyled',
                      characterList: m(v(l.EMPTY, e.length)),
                    })
                  );
                });
              return t.createFromBlockArray(o);
            }),
            t
          );
        })(w);
      e.exports = E;
    },
    Lzxq: function(e, t, n) {
      e.exports = {
        'bf-controlbar': 'bf-controlbar',
        'separator-line': 'separator-line',
        'control-item': 'control-item',
        'control-item-group': 'control-item-group',
        'first-child': 'first-child',
        'last-child': 'last-child',
        'dropdown-handler': 'dropdown-handler',
        'component-wrapper': 'component-wrapper',
        button: 'button',
        active: 'active',
        'bfi-redo': 'bfi-redo',
        'bfi-undo': 'bfi-undo',
        dropdown: 'dropdown',
        'DraftEditor-editorContainer': 'DraftEditor-editorContainer',
        'DraftEditor-root': 'DraftEditor-root',
        'public-DraftEditor-content': 'public-DraftEditor-content',
        'public-DraftEditor-block': 'public-DraftEditor-block',
        'DraftEditor-alignLeft': 'DraftEditor-alignLeft',
        'public-DraftStyleDefault-block': 'public-DraftStyleDefault-block',
        'public-DraftEditorPlaceholder-root': 'public-DraftEditorPlaceholder-root',
        'DraftEditor-alignCenter': 'DraftEditor-alignCenter',
        'DraftEditor-alignRight': 'DraftEditor-alignRight',
        'public-DraftEditorPlaceholder-hasFocus': 'public-DraftEditorPlaceholder-hasFocus',
        'DraftEditorPlaceholder-hidden': 'DraftEditorPlaceholder-hidden',
        'public-DraftStyleDefault-ltr': 'public-DraftStyleDefault-ltr',
        'public-DraftStyleDefault-rtl': 'public-DraftStyleDefault-rtl',
        'public-DraftStyleDefault-listLTR': 'public-DraftStyleDefault-listLTR',
        'public-DraftStyleDefault-listRTL': 'public-DraftStyleDefault-listRTL',
        'public-DraftStyleDefault-ol': 'public-DraftStyleDefault-ol',
        'public-DraftStyleDefault-ul': 'public-DraftStyleDefault-ul',
        'public-DraftStyleDefault-depth0': 'public-DraftStyleDefault-depth0',
        'public-DraftStyleDefault-depth1': 'public-DraftStyleDefault-depth1',
        'public-DraftStyleDefault-depth2': 'public-DraftStyleDefault-depth2',
        'public-DraftStyleDefault-depth3': 'public-DraftStyleDefault-depth3',
        'public-DraftStyleDefault-depth4': 'public-DraftStyleDefault-depth4',
        'public-DraftStyleDefault-unorderedListItem': 'public-DraftStyleDefault-unorderedListItem',
        'public-DraftStyleDefault-orderedListItem': 'public-DraftStyleDefault-orderedListItem',
        'public-DraftStyleDefault-reset': 'public-DraftStyleDefault-reset',
        'bf-video-player': 'bf-video-player',
        'bf-switch': 'bf-switch',
        'bf-container': 'bf-container',
        'bf-modal-root': 'bf-modal-root',
        'bfi-table': 'bfi-table',
        'bfi-clear_all': 'bfi-clear_all',
        'bfi-format_clear': 'bfi-format_clear',
        'bfi-hr': 'bfi-hr',
        'bfi-colorize': 'bfi-colorize',
        'bfi-crop_free': 'bfi-crop_free',
        'bfi-pause': 'bfi-pause',
        'bfi-play_arrow': 'bfi-play_arrow',
        'bfi-bin': 'bfi-bin',
        'bfi-replay': 'bfi-replay',
        'bfi-tune': 'bfi-tune',
        'bfi-close': 'bfi-close',
        'bfi-align-center': 'bfi-align-center',
        'bfi-align-justify': 'bfi-align-justify',
        'bfi-align-left': 'bfi-align-left',
        'bfi-align-right': 'bfi-align-right',
        'bfi-image-right': 'bfi-image-right',
        'bfi-image-left': 'bfi-image-left',
        'bfi-music': 'bfi-music',
        'bfi-camera': 'bfi-camera',
        'bfi-copy': 'bfi-copy',
        'bfi-file-text': 'bfi-file-text',
        'bfi-film': 'bfi-film',
        'bfi-github': 'bfi-github',
        'bfi-ltr': 'bfi-ltr',
        'bfi-page-break': 'bfi-page-break',
        'bfi-pagebreak': 'bfi-pagebreak',
        'bfi-paint-format': 'bfi-paint-format',
        'bfi-paste': 'bfi-paste',
        'bfi-pilcrow': 'bfi-pilcrow',
        'bfi-pushpin': 'bfi-pushpin',
        'bfi-rtl': 'bfi-rtl',
        'bfi-spinner': 'bfi-spinner',
        'bfi-subscript': 'bfi-subscript',
        'bfi-superscript': 'bfi-superscript',
        'bfi-media': 'bfi-media',
        'bfi-add': 'bfi-add',
        'bfi-bold': 'bfi-bold',
        'bfi-code': 'bfi-code',
        'bfi-done': 'bfi-done',
        'bfi-drop-down': 'bfi-drop-down',
        'bfi-drop-up': 'bfi-drop-up',
        'bfi-emoji': 'bfi-emoji',
        'bfi-font-size': 'bfi-font-size',
        'bfi-fullscreen': 'bfi-fullscreen',
        'bfi-fullscreen-exit': 'bfi-fullscreen-exit',
        'bfi-help': 'bfi-help',
        'bfi-indent-decrease': 'bfi-indent-decrease',
        'bfi-indent-increase': 'bfi-indent-increase',
        'bfi-info': 'bfi-info',
        'bfi-italic': 'bfi-italic',
        'bfi-link': 'bfi-link',
        'bfi-link-off': 'bfi-link-off',
        'bfi-list': 'bfi-list',
        'bfi-list-numbered': 'bfi-list-numbered',
        'bfi-menu': 'bfi-menu',
        'bfi-more-horiz': 'bfi-more-horiz',
        'bfi-more-vert': 'bfi-more-vert',
        'bfi-not-disturb': 'bfi-not-disturb',
        'bfi-print': 'bfi-print',
        'bfi-quote': 'bfi-quote',
        'bfi-search': 'bfi-search',
        'bfi-settingsx': 'bfi-settingsx',
        'bfi-share': 'bfi-share',
        'bfi-share-square': 'bfi-share-square',
        'bfi-strikethrough': 'bfi-strikethrough',
        'bfi-text-color': 'bfi-text-color',
        path1: 'path1',
        path2: 'path2',
        'bfi-underlined': 'bfi-underlined',
        'bf-content': 'bf-content',
        disabled: 'disabled',
        'read-only': 'read-only',
        'bf-image': 'bf-image',
        'bf-hr': 'bf-hr',
        fullscreen: 'fullscreen',
        'input-group': 'input-group',
        'pull-left': 'pull-left',
        'pull-right': 'pull-right',
        default: 'default',
        ghost: 'ghost',
        primary: 'primary',
        'braft-link': 'braft-link',
        'bfa-left': 'bfa-left',
        'bfa-right': 'bfa-right',
        'bfa-center': 'bfa-center',
        'bfa-justify': 'bfa-justify',
        'bff-left': 'bff-left',
        'bff-right': 'bff-right',
        'bftd-1': 'bftd-1',
        'bftd-2': 'bftd-2',
        'bftd-3': 'bftd-3',
        'bftd-4': 'bftd-4',
        'bftd-5': 'bftd-5',
        'bftd-6': 'bftd-6',
        'bf-media': 'bf-media',
        'bf-media-toolbar': 'bf-media-toolbar',
        'bf-media-toolbar-arrow': 'bf-media-toolbar-arrow',
        'bf-audio-player': 'bf-audio-player',
        'bf-player-holder': 'bf-player-holder',
        'icon-badge': 'icon-badge',
        'button-remove': 'button-remove',
        'button-play': 'button-play',
        'bf-name': 'bf-name',
        'bf-url': 'bf-url',
        'bf-poster': 'bf-poster',
        'bf-modal': 'bf-modal',
        'bf-modal-mask': 'bf-modal-mask',
        'bf-modal-content': 'bf-modal-content',
        'bf-modal-header': 'bf-modal-header',
        'bf-modal-caption': 'bf-modal-caption',
        'bf-modal-close-button': 'bf-modal-close-button',
        'bf-modal-body': 'bf-modal-body',
        'bf-modal-footer': 'bf-modal-footer',
        'bf-modal-addon-text': 'bf-modal-addon-text',
        'bf-modal-buttons': 'bf-modal-buttons',
        'bf-modal-cancel': 'bf-modal-cancel',
        'bf-modal-confirm': 'bf-modal-confirm',
        'bf-image-link-editor': 'bf-image-link-editor',
        'bf-image-size-editor': 'bf-image-size-editor',
        'editor-input-group': 'editor-input-group',
        'switch-group': 'switch-group',
        'bf-csize-icon': 'bf-csize-icon',
        'right-bottom': 'right-bottom',
        'left-bottom': 'left-bottom',
        'bf-pre-csize': 'bf-pre-csize',
        rightbottom: 'rightbottom',
        leftbottom: 'leftbottom',
        'headings-dropdown': 'headings-dropdown',
        menu: 'menu',
        'menu-item': 'menu-item',
        'text-color-dropdown': 'text-color-dropdown',
        'light-theme': 'light-theme',
        'bf-color-switch-buttons': 'bf-color-switch-buttons',
        'bf-text-color-picker-wrap': 'bf-text-color-picker-wrap',
        'bf-link-editor': 'bf-link-editor',
        buttons: 'buttons',
        'button-remove-link': 'button-remove-link',
        'bf-dropdown': 'bf-dropdown',
        'dropdown-content': 'dropdown-content',
        'dropdown-arrow': 'dropdown-arrow',
        'dropdown-content-inner': 'dropdown-content-inner',
        'bf-colors': 'bf-colors',
        'bf-font-size-dropdown': 'bf-font-size-dropdown',
        'bf-font-sizes': 'bf-font-sizes',
        'bf-line-height-dropdown': 'bf-line-height-dropdown',
        'bf-line-heights': 'bf-line-heights',
        'font-family-dropdown': 'font-family-dropdown',
        'bf-letter-spacing-dropdown': 'bf-letter-spacing-dropdown',
        'bf-letter-spacings': 'bf-letter-spacings',
        'bf-emojis-wrap': 'bf-emojis-wrap',
        'bf-emojis': 'bf-emojis',
      };
    },
    M6rc: function(e, t, n) {
      'use strict';
      var r = n('lFJn'),
        o = n('JPcv'),
        i = o.Map,
        a = {
          add: function(e, t, n) {
            return l(e, t, n, !0);
          },
          remove: function(e, t, n) {
            return l(e, t, n, !1);
          },
        };
      function l(e, t, n, o) {
        var a = e.getBlockMap(),
          l = t.getStartKey(),
          s = t.getStartOffset(),
          c = t.getEndKey(),
          u = t.getEndOffset(),
          f = a
            .skipUntil(function(e, t) {
              return t === l;
            })
            .takeUntil(function(e, t) {
              return t === c;
            })
            .concat(i([[c, a.get(c)]]))
            .map(function(e, t) {
              var i, a;
              l === c
                ? ((i = s), (a = u))
                : ((i = t === l ? s : 0), (a = t === c ? u : e.getLength()));
              var f,
                d = e.getCharacterList();
              while (i < a)
                (f = d.get(i)), (d = d.set(i, o ? r.applyStyle(f, n) : r.removeStyle(f, n))), i++;
              return e.set('characterList', d);
            });
        return e.merge({ blockMap: a.merge(f), selectionBefore: t, selectionAfter: t });
      }
      e.exports = a;
    },
    MPKC: function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ');
      function i(e) {
        var t = r.splitBlock(e.getCurrentContent(), e.getSelection());
        return o.push(e, t, 'split-block');
      }
      e.exports = i;
    },
    Mh8y: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = r.Map;
      function i(e, t, n) {
        var r = t.getStartKey(),
          i = t.getEndKey(),
          a = e.getBlockMap(),
          l = a
            .toSeq()
            .skipUntil(function(e, t) {
              return t === r;
            })
            .takeUntil(function(e, t) {
              return t === i;
            })
            .concat(o([[i, a.get(i)]]))
            .map(n);
        return e.merge({ blockMap: a.merge(l), selectionBefore: t, selectionAfter: t });
      }
      e.exports = i;
    },
    MxAa: function(e, t, n) {
      'use strict';
      function r(e) {
        return e.Window && e instanceof e.Window
          ? {
              x: e.pageXOffset || e.document.documentElement.scrollLeft,
              y: e.pageYOffset || e.document.documentElement.scrollTop,
            }
          : { x: e.scrollLeft, y: e.scrollTop };
      }
      e.exports = r;
    },
    NQV1: function(e, t, n) {
      'use strict';
      var r = {
        isImage: function(e) {
          return 'image' === o(e)[0];
        },
        isJpeg: function(e) {
          var t = o(e);
          return r.isImage(e) && ('jpeg' === t[1] || 'pjpeg' === t[1]);
        },
      };
      function o(e) {
        return e.split('/');
      }
      e.exports = r;
    },
    NgHg: function(e, t, n) {
      'use strict';
      var r = /-(.)/g;
      function o(e) {
        return e.replace(r, function(e, t) {
          return t.toUpperCase();
        });
      }
      e.exports = o;
    },
    'Nj+S': function(e, t, n) {
      'use strict';
      function r(e, t, n, r, o, i) {
        var a = r - n,
          l = t + n <= e.offset;
        if (l) return Object.assign({}, e, { offset: e.offset + a });
        var s = t >= e.offset && t + n <= e.offset + e.length;
        if (s) return Object.assign({}, e, { length: e.length + a });
        var c = e.offset >= t && e.offset + e.length <= t + n && o > 0;
        if (c) return Object.assign({}, e, { offset: e.offset + o });
        var u = e.offset < t && e.offset + e.length <= t + n && e.offset + e.length > t && o > 0;
        if (u)
          return [
            Object.assign({}, e, { length: t - e.offset }),
            Object.assign({}, e, { offset: t + o, length: e.offset - t + e.length }),
          ];
        var f = e.offset >= t && e.offset + e.length > t + n && t + n > e.offset && i > 0;
        return f
          ? [
              Object.assign({}, e, { offset: e.offset + o, length: t + n - e.offset }),
              Object.assign({}, e, {
                offset: t + n + o + i,
                length: e.offset + e.length - (t + n),
              }),
            ]
          : e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = r);
    },
    NqYS: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.redo = t.undo = t.handleKeyCommand = t.clear = t.setMediaPosition = t.removeMedia = t.setMediaData = t.insertMedias = t.insertHorizontalLine = t.insertAtomicBlock = t.insertHTML = t.insertText = t.toggleSelectionLetterSpacing = t.toggleSelectionFontFamily = t.toggleSelectionLineHeight = t.toggleSelectionFontSize = t.toggleSelectionBackgroundColor = t.toggleSelectionColor = t.decreaseSelectionIndent = t.increaseSelectionIndent = t.toggleSelectionIndent = t.toggleSelectionAlignment = t.removeSelectionInlineStyles = t.toggleSelectionInlineStyle = t.selectionHasInlineStyle = t.getSelectionInlineStyle = t.toggleSelectionLink = t.toggleSelectionEntity = t.getSelectionEntityData = t.getSelectionEntityType = t.toggleSelectionBlockType = t.getSelectionText = t.getSelectionBlockType = t.getSelectionBlockData = t.setSelectionBlockData = t.getSelectedBlocks = t.updateEachCharacterOfSelection = t.getSelectionBlock = t.removeBlock = t.selectNextBlock = t.selectBlock = t.selectionContainsStrictBlock = t.selectionContainsBlockType = t.isSelectionCollapsed = t.createEditorState = t.createEmptyEditorState = t.isEditorState = t.registerStrictBlockType = void 0);
      var r = n('v83y'),
        o = n('H7ev'),
        i = n('bluE'),
        a = n('JPcv'),
        l = s(a);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = ['atomic'],
        u =
          ((t.registerStrictBlockType = function(e) {
            -1 === c.indexOf(e) && c.push(e);
          }),
          (t.isEditorState = function(e) {
            return e instanceof r.EditorState;
          }),
          (t.createEmptyEditorState = function(e) {
            return r.EditorState.createEmpty(e);
          }),
          (t.createEditorState = function(e, t) {
            return r.EditorState.createWithContent(e, t);
          }),
          (t.isSelectionCollapsed = function(e) {
            return e.getSelection().isCollapsed();
          }),
          (t.selectionContainsBlockType = function(e, t) {
            return m(e).find(function(e) {
              return e.getType() === t;
            });
          }),
          (t.selectionContainsStrictBlock = function(e) {
            return m(e).find(function(e) {
              return ~c.indexOf(e.getType());
            });
          })),
        f = (t.selectBlock = function(e, t) {
          var n = t.getKey();
          return r.EditorState.forceSelection(
            e,
            new r.SelectionState({
              anchorKey: n,
              anchorOffset: 0,
              focusKey: n,
              focusOffset: t.getLength(),
            })
          );
        }),
        d = (t.selectNextBlock = function(e, t) {
          var n = e.getCurrentContent().getBlockAfter(t.getKey());
          return n ? f(e, n) : e;
        }),
        p = (t.removeBlock = function(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            o = void 0,
            i = void 0,
            a = t.getKey();
          return (
            (o = r.Modifier.removeRange(
              e.getCurrentContent(),
              new r.SelectionState({
                anchorKey: a,
                anchorOffset: 0,
                focusKey: a,
                focusOffset: t.getLength(),
              }),
              'backward'
            )),
            (o = r.Modifier.setBlockType(o, o.getSelectionAfter(), 'unstyled')),
            (i = r.EditorState.push(e, o, 'remove-range')),
            r.EditorState.forceSelection(i, n || o.getSelectionAfter())
          );
        }),
        h = (t.getSelectionBlock = function(e) {
          return e.getCurrentContent().getBlockForKey(e.getSelection().getAnchorKey());
        }),
        g = (t.updateEachCharacterOfSelection = function(e, t) {
          var n = e.getSelection(),
            o = e.getCurrentContent(),
            i = o.getBlockMap(),
            a = m(e);
          if (0 === a.length) return e;
          var l = n.getStartKey(),
            s = n.getStartOffset(),
            c = n.getEndKey(),
            u = n.getEndOffset(),
            f = i.map(function(e) {
              if (-1 === a.indexOf(e)) return e;
              var n = e.getKey(),
                r = e.getCharacterList(),
                o = null;
              return (
                (o =
                  n === l && n === c
                    ? r.map(function(e, n) {
                        return n >= s && n < u ? t(e) : e;
                      })
                    : n === l
                    ? r.map(function(e, n) {
                        return n >= s ? t(e) : e;
                      })
                    : n === c
                    ? r.map(function(e, n) {
                        return n < u ? t(e) : e;
                      })
                    : r.map(function(e) {
                        return t(e);
                      })),
                e.merge({ characterList: o })
              );
            });
          return r.EditorState.push(
            e,
            o.merge({ blockMap: f, selectionBefore: n, selectionAfter: n }),
            'update-selection-character-list'
          );
        }),
        m = (t.getSelectedBlocks = function(e) {
          var t = e.getSelection(),
            n = e.getCurrentContent(),
            r = t.getStartKey(),
            o = t.getEndKey(),
            i = r === o,
            a = n.getBlockForKey(r),
            l = [a];
          if (!i) {
            var s = r;
            while (s !== o) {
              var c = n.getBlockAfter(s);
              l.push(c), (s = c.getKey());
            }
          }
          return l;
        }),
        y = (t.setSelectionBlockData = function(e, t, n) {
          var r = n ? t : Object.assign({}, v(e).toJS(), t);
          return (
            Object.keys(r).forEach(function(e) {
              r.hasOwnProperty(e) && void 0 === r[e] && delete r[e];
            }),
            (0, o.setBlockData)(e, r)
          );
        }),
        v = (t.getSelectionBlockData = function(e, t) {
          var n = h(e).getData();
          return t ? n.get(t) : n;
        }),
        b = (t.getSelectionBlockType = function(e) {
          return h(e).getType();
        }),
        A =
          ((t.getSelectionText = function(e) {
            var t = e.getSelection(),
              n = e.getCurrentContent();
            if (t.isCollapsed() || 'atomic' === b(e)) return '';
            var r = t.getAnchorKey(),
              o = n.getBlockForKey(r),
              i = t.getStartOffset(),
              a = t.getEndOffset();
            return o.getText().slice(i, a);
          }),
          (t.toggleSelectionBlockType = function(e, t) {
            return u(e) ? e : r.RichUtils.toggleBlockType(e, t);
          }),
          (t.getSelectionEntityType = function(e) {
            var t = (0, o.getSelectionEntity)(e);
            if (t) {
              var n = e.getCurrentContent().getEntity(t);
              return n ? n.get('type') : null;
            }
            return null;
          })),
        S =
          ((t.getSelectionEntityData = function(e, t) {
            var n = (0, o.getSelectionEntity)(e);
            if (n) {
              var r = e.getCurrentContent().getEntity(n);
              return r && r.get('type') === t ? r.getData() : {};
            }
            return {};
          }),
          (t.toggleSelectionEntity = function(e, t) {
            var n = e.getCurrentContent(),
              o = e.getSelection();
            if (o.isCollapsed() || 'atomic' === b(e)) return e;
            if (!t || !t.type || A(e) === t.type)
              return r.EditorState.push(e, r.Modifier.applyEntity(n, o, null), 'apply-entity');
            try {
              var i = n.createEntity(t.type, t.mutability, t.data),
                a = i.getLastCreatedEntityKey(),
                l = r.EditorState.set(e, { currentContent: i });
              return r.EditorState.push(l, r.Modifier.applyEntity(i, o, a), 'apply-entity');
            } catch (t) {
              return console.warn(t), e;
            }
          }),
          (t.toggleSelectionLink = function(e, t, n) {
            var o = e.getCurrentContent(),
              i = e.getSelection(),
              a = { href: t, target: n };
            if (i.isCollapsed() || 'atomic' === b(e)) return e;
            if (!1 === t) return r.RichUtils.toggleLink(e, i, null);
            null === t && delete a.href;
            try {
              var l = o.createEntity('LINK', 'MUTABLE', a),
                s = l.getLastCreatedEntityKey(),
                c = r.EditorState.set(e, { currentContent: l });
              return (
                (c = r.RichUtils.toggleLink(c, i, s)),
                (c = r.EditorState.forceSelection(
                  c,
                  i.merge({ anchorOffset: i.getEndOffset(), focusOffset: i.getEndOffset() })
                )),
                (c = r.EditorState.push(
                  c,
                  r.Modifier.insertText(c.getCurrentContent(), c.getSelection(), ''),
                  'insert-text'
                )),
                c
              );
            } catch (t) {
              return console.warn(t), e;
            }
          }),
          (t.getSelectionInlineStyle = function(e) {
            return e.getCurrentInlineStyle();
          })),
        w =
          ((t.selectionHasInlineStyle = function(e, t) {
            return S(e).has(t.toUpperCase());
          }),
          (t.toggleSelectionInlineStyle = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
              o = e;
            return (
              (t = n + t.toUpperCase()),
              n &&
                (o = g(o, function(e) {
                  return e.toJS().style.reduce(function(e, o) {
                    return 0 === o.indexOf(n) && t !== o
                      ? r.CharacterMetadata.removeStyle(e, o)
                      : e;
                  }, e);
                })),
              r.RichUtils.toggleInlineStyle(o, t)
            );
          })),
        E =
          ((t.removeSelectionInlineStyles = function(e) {
            return g(e, function(e) {
              return e.merge({ style: l.default.OrderedSet([]) });
            });
          }),
          (t.toggleSelectionAlignment = function(e, t) {
            return y(e, { textAlign: v(e, 'textAlign') !== t ? t : void 0 });
          }),
          (t.toggleSelectionIndent = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6;
            return t < 0 || t > n || isNaN(t) ? e : y(e, { textIndent: t || void 0 });
          })),
        k =
          ((t.increaseSelectionIndent = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
              n = v(e, 'textIndent') || 0;
            return E(e, n + 1, t);
          }),
          (t.decreaseSelectionIndent = function(e) {
            var t = v(e, 'textIndent') || 0;
            return E(e, t - 1);
          }),
          (t.toggleSelectionColor = function(e, t) {
            return w(e, t.replace('#', ''), 'COLOR-');
          }),
          (t.toggleSelectionBackgroundColor = function(e, t) {
            return w(e, t.replace('#', ''), 'BGCOLOR-');
          }),
          (t.toggleSelectionFontSize = function(e, t) {
            return w(e, t, 'FONTSIZE-');
          }),
          (t.toggleSelectionLineHeight = function(e, t) {
            return w(e, t, 'LINEHEIGHT-');
          }),
          (t.toggleSelectionFontFamily = function(e, t) {
            return w(e, t, 'FONTFAMILY-');
          }),
          (t.toggleSelectionLetterSpacing = function(e, t) {
            return w(e, t, 'LETTERSPACING-');
          }),
          (t.insertText = function(e, t, n, o) {
            var i = e.getSelection(),
              a = b(e);
            if ('atomic' === a) return e;
            var l = void 0,
              s = e.getCurrentContent();
            return (
              o &&
                o.type &&
                ((s = s.createEntity(o.type, o.mutability || 'MUTABLE', o.data || entityData)),
                (l = s.getLastCreatedEntityKey())),
              i.isCollapsed()
                ? r.EditorState.push(e, r.Modifier.insertText(s, i, t, n, l), 'insert-text')
                : r.EditorState.push(e, r.Modifier.replaceText(s, i, t, n, l), 'replace-text')
            );
          }),
          (t.insertHTML = function(e, t, n) {
            if (!t) return e;
            var o = e.getSelection(),
              a = e.getCurrentContent(),
              l = e.convertOptions || {};
            try {
              var s = (0, r.convertFromRaw)((0, i.convertHTMLToRaw)(t, l, n)),
                c = s.blockMap;
              return r.EditorState.push(
                e,
                r.Modifier.replaceWithFragment(a, o, c),
                'insert-fragment'
              );
            } catch (t) {
              return console.warn(t), e;
            }
          }),
          (t.insertAtomicBlock = function e(t, n) {
            var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (u(t)) return e(d(t, h(t)), n, o, i);
            var a = t.getSelection(),
              l = t.getCurrentContent();
            if (!a.isCollapsed() || 'atomic' === b(t)) return t;
            var s = l.createEntity(n, o ? 'IMMUTABLE' : 'MUTABLE', i),
              c = s.getLastCreatedEntityKey(),
              f = r.AtomicBlockUtils.insertAtomicBlock(t, c, ' ');
            return f;
          }));
      (t.insertHorizontalLine = function(e) {
        return k(e, 'HR');
      }),
        (t.insertMedias = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return t.length
            ? t.reduce(function(e, t) {
                var n = t.url,
                  r = t.link,
                  o = t.link_target,
                  i = t.name,
                  a = t.type,
                  l = t.width,
                  s = t.height,
                  c = t.meta;
                return k(e, a, !0, {
                  url: n,
                  link: r,
                  link_target: o,
                  name: i,
                  type: a,
                  width: l,
                  height: s,
                  meta: c,
                });
              }, e)
            : e;
        }),
        (t.setMediaData = function(e, t, n) {
          return r.EditorState.push(
            e,
            e.getCurrentContent().mergeEntityData(t, n),
            'change-block-data'
          );
        }),
        (t.removeMedia = function(e, t) {
          return p(e, t);
        }),
        (t.setMediaPosition = function(e, t, n) {
          var r = {},
            o = n.float,
            i = n.alignment;
          return (
            'undefined' !== typeof o && (r.float = t.getData().get('float') === o ? null : o),
            'undefined' !== typeof i &&
              (r.alignment = t.getData().get('alignment') === i ? null : i),
            y(f(e, t), r)
          );
        }),
        (t.clear = function(e) {
          var t = e.getCurrentContent(),
            n = t.getFirstBlock(),
            o = t.getLastBlock(),
            i = new r.SelectionState({
              anchorKey: n.getKey(),
              anchorOffset: 0,
              focusKey: o.getKey(),
              focusOffset: o.getLength(),
              hasFocus: !0,
            });
          return r.RichUtils.toggleBlockType(
            r.EditorState.push(e, r.Modifier.removeRange(t, i, 'backward'), 'remove-range'),
            'unstyled'
          );
        }),
        (t.handleKeyCommand = function(e, t) {
          return r.RichUtils.handleKeyCommand(e, t);
        }),
        (t.undo = function(e) {
          return r.EditorState.undo(e);
        }),
        (t.redo = function(e) {
          return r.EditorState.redo(e);
        });
    },
    'Nx4+': function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ'),
        i = (n('hMpd'), n('AKPT')),
        a = n('gWRK'),
        l = {
          currentBlockContainsLink: function(e) {
            var t = e.getSelection(),
              n = e.getCurrentContent(),
              r = n.getEntityMap();
            return n
              .getBlockForKey(t.getAnchorKey())
              .getCharacterList()
              .slice(t.getStartOffset(), t.getEndOffset())
              .some(function(e) {
                var t = e.getEntity();
                return !!t && 'LINK' === r.__get(t).getType();
              });
          },
          getCurrentBlockType: function(e) {
            var t = e.getSelection();
            return e
              .getCurrentContent()
              .getBlockForKey(t.getStartKey())
              .getType();
          },
          getDataObjectForLinkURL: function(e) {
            return { url: e.toString() };
          },
          handleKeyCommand: function(e, t) {
            switch (t) {
              case 'bold':
                return l.toggleInlineStyle(e, 'BOLD');
              case 'italic':
                return l.toggleInlineStyle(e, 'ITALIC');
              case 'underline':
                return l.toggleInlineStyle(e, 'UNDERLINE');
              case 'code':
                return l.toggleCode(e);
              case 'backspace':
              case 'backspace-word':
              case 'backspace-to-start-of-line':
                return l.onBackspace(e);
              case 'delete':
              case 'delete-word':
              case 'delete-to-end-of-block':
                return l.onDelete(e);
              default:
                return null;
            }
          },
          insertSoftNewline: function(e) {
            var t = r.insertText(
                e.getCurrentContent(),
                e.getSelection(),
                '\n',
                e.getCurrentInlineStyle(),
                null
              ),
              n = o.push(e, t, 'insert-characters');
            return o.forceSelection(n, t.getSelectionAfter());
          },
          onBackspace: function(e) {
            var t = e.getSelection();
            if (!t.isCollapsed() || t.getAnchorOffset() || t.getFocusOffset()) return null;
            var n = e.getCurrentContent(),
              r = t.getStartKey(),
              i = n.getBlockBefore(r);
            if (i && 'atomic' === i.getType()) {
              var a = n.getBlockMap()['delete'](i.getKey()),
                s = n.merge({ blockMap: a, selectionAfter: t });
              if (s !== n) return o.push(e, s, 'remove-range');
            }
            var c = l.tryToRemoveBlockStyle(e);
            return c ? o.push(e, c, 'change-block-type') : null;
          },
          onDelete: function(e) {
            var t = e.getSelection();
            if (!t.isCollapsed()) return null;
            var n = e.getCurrentContent(),
              i = t.getStartKey(),
              a = n.getBlockForKey(i),
              l = a.getLength();
            if (t.getStartOffset() < l) return null;
            var s = n.getBlockAfter(i);
            if (!s || 'atomic' !== s.getType()) return null;
            var c = t.merge({ focusKey: s.getKey(), focusOffset: s.getLength() }),
              u = r.removeRange(n, c, 'forward');
            return u !== n ? o.push(e, u, 'remove-range') : null;
          },
          onTab: function(e, t, n) {
            var r = t.getSelection(),
              a = r.getAnchorKey();
            if (a !== r.getFocusKey()) return t;
            var l = t.getCurrentContent(),
              s = l.getBlockForKey(a),
              c = s.getType();
            if ('unordered-list-item' !== c && 'ordered-list-item' !== c) return t;
            e.preventDefault();
            var u = l.getBlockBefore(a);
            if (!u) return t;
            var f = u.getType();
            if ('unordered-list-item' !== f && 'ordered-list-item' !== f) return t;
            var d = s.getDepth();
            if (!e.shiftKey && d === n) return t;
            n = Math.min(u.getDepth() + 1, n);
            var p = i(l, r, e.shiftKey ? -1 : 1, n);
            return o.push(t, p, 'adjust-depth');
          },
          toggleBlockType: function(e, t) {
            var n = e.getSelection(),
              i = n.getStartKey(),
              l = n.getEndKey(),
              s = e.getCurrentContent(),
              c = n;
            if (i !== l && 0 === n.getEndOffset()) {
              var u = a(s.getBlockBefore(l));
              (l = u.getKey()),
                (c = c.merge({
                  anchorKey: i,
                  anchorOffset: n.getStartOffset(),
                  focusKey: l,
                  focusOffset: u.getLength(),
                  isBackward: !1,
                }));
            }
            var f = s
              .getBlockMap()
              .skipWhile(function(e, t) {
                return t !== i;
              })
              .reverse()
              .skipWhile(function(e, t) {
                return t !== l;
              })
              .some(function(e) {
                return 'atomic' === e.getType();
              });
            if (f) return e;
            var d = s.getBlockForKey(i).getType() === t ? 'unstyled' : t;
            return o.push(e, r.setBlockType(s, c, d), 'change-block-type');
          },
          toggleCode: function(e) {
            var t = e.getSelection(),
              n = t.getAnchorKey(),
              r = t.getFocusKey();
            return t.isCollapsed() || n !== r
              ? l.toggleBlockType(e, 'code-block')
              : l.toggleInlineStyle(e, 'CODE');
          },
          toggleInlineStyle: function(e, t) {
            var n = e.getSelection(),
              i = e.getCurrentInlineStyle();
            if (n.isCollapsed())
              return o.setInlineStyleOverride(e, i.has(t) ? i.remove(t) : i.add(t));
            var a,
              l = e.getCurrentContent();
            return (
              (a = i.has(t) ? r.removeInlineStyle(l, n, t) : r.applyInlineStyle(l, n, t)),
              o.push(e, a, 'change-inline-style')
            );
          },
          toggleLink: function(e, t, n) {
            var i = r.applyEntity(e.getCurrentContent(), t, n);
            return o.push(e, i, 'apply-entity');
          },
          tryToRemoveBlockStyle: function(e) {
            var t = e.getSelection(),
              n = t.getAnchorOffset();
            if (t.isCollapsed() && 0 === n) {
              var o = t.getAnchorKey(),
                i = e.getCurrentContent(),
                a = i.getBlockForKey(o),
                l = i.getFirstBlock();
              if (a.getLength() > 0 && a !== l) return null;
              var s = a.getType(),
                c = i.getBlockBefore(o);
              if ('code-block' === s && c && 'code-block' === c.getType() && 0 !== c.getLength())
                return null;
              if ('unstyled' !== s) return r.setBlockType(i, t, 'unstyled');
            }
            return null;
          },
        };
      e.exports = l;
    },
    O4zn: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('FcOR'),
          o = n('TWoB'),
          i = n('jl2H'),
          a = n('2NuI');
        function l(e, t) {
          if (!e) return '[empty]';
          var n = s(e, t);
          return n.nodeType === Node.TEXT_NODE
            ? n.textContent
            : (n instanceof Element || a(!1), n.outerHTML);
        }
        function s(e, t) {
          var n = void 0 !== t ? t(e) : [];
          if (e.nodeType === Node.TEXT_NODE) {
            var r = e.textContent.length;
            return document.createTextNode(
              '[text ' + r + (n.length ? ' | ' + n.join(', ') : '') + ']'
            );
          }
          var o = e.cloneNode();
          1 === o.nodeType && n.length && o.setAttribute('data-labels', n.join(', '));
          for (var i = e.childNodes, a = 0; a < i.length; a++) o.appendChild(s(i[a], t));
          return o;
        }
        function c(e, t) {
          var n = e;
          while (n) {
            if (n instanceof Element && n.hasAttribute('contenteditable')) return l(n, t);
            n = n.parentNode;
          }
          return 'Could not find contentEditable parent of node';
        }
        function u(e) {
          return null === e.nodeValue ? e.childNodes.length : e.nodeValue.length;
        }
        function f(e, n, r, i, a) {
          if (o(document.documentElement, n)) {
            var l = t.getSelection(),
              s = e.getAnchorKey(),
              c = e.getAnchorOffset(),
              u = e.getFocusKey(),
              f = e.getFocusOffset(),
              h = e.getIsBackward();
            if (!l.extend && h) {
              var g = s,
                m = c;
              (s = u), (c = f), (u = g), (f = m), (h = !1);
            }
            var y = s === r && i <= c && a >= c,
              v = u === r && i <= f && a >= f;
            if (y && v) return l.removeAllRanges(), p(l, n, c - i, e), void d(l, n, f - i, e);
            if (h) {
              if ((v && (l.removeAllRanges(), p(l, n, f - i, e)), y)) {
                var b = l.focusNode,
                  A = l.focusOffset;
                l.removeAllRanges(), p(l, n, c - i, e), d(l, b, A, e);
              }
            } else y && (l.removeAllRanges(), p(l, n, c - i, e)), v && d(l, n, f - i, e);
          }
        }
        function d(e, t, n, a) {
          var l = i();
          if (e.extend && o(l, t)) {
            n > u(t) &&
              r.logSelectionStateFailure({
                anonymizedDom: c(t),
                extraParams: JSON.stringify({ offset: n }),
                selectionState: JSON.stringify(a.toJS()),
              });
            var s = t === e.focusNode;
            try {
              e.extend(t, n);
            } catch (o) {
              throw (r.logSelectionStateFailure({
                anonymizedDom: c(t, function(t) {
                  var n = [];
                  return (
                    t === l && n.push('active element'),
                    t === e.anchorNode && n.push('selection anchor node'),
                    t === e.focusNode && n.push('selection focus node'),
                    n
                  );
                }),
                extraParams: JSON.stringify(
                  {
                    activeElementName: l ? l.nodeName : null,
                    nodeIsFocus: t === e.focusNode,
                    nodeWasFocus: s,
                    selectionRangeCount: e.rangeCount,
                    selectionAnchorNodeName: e.anchorNode ? e.anchorNode.nodeName : null,
                    selectionAnchorOffset: e.anchorOffset,
                    selectionFocusNodeName: e.focusNode ? e.focusNode.nodeName : null,
                    selectionFocusOffset: e.focusOffset,
                    message: o ? '' + o : null,
                    offset: n,
                  },
                  null,
                  2
                ),
                selectionState: JSON.stringify(a.toJS(), null, 2),
              }),
              o);
            }
          } else {
            var f = e.getRangeAt(0);
            f.setEnd(t, n), e.addRange(f.cloneRange());
          }
        }
        function p(e, t, n, o) {
          var i = document.createRange();
          n > u(t) &&
            r.logSelectionStateFailure({
              anonymizedDom: c(t),
              extraParams: JSON.stringify({ offset: n }),
              selectionState: JSON.stringify(o.toJS()),
            }),
            i.setStart(t, n),
            e.addRange(i);
        }
        e.exports = f;
      }.call(this, n('yLpj')));
    },
    PFU8: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('2NuI'),
        a = function(e, t) {
          var n = [].concat(e).reverse();
          while (n.length) {
            var r = n.pop();
            t(r);
            var o = r.children;
            Array.isArray(o) || i(!1), (n = n.concat([].concat(o.reverse())));
          }
        },
        l = function(e) {
          if (!e || !e.type) return !1;
          var t = e.type;
          return 'unordered-list-item' === t || 'ordered-list-item' === t;
        },
        s = function(e) {
          Array.isArray(e.children) &&
            (e.children = e.children.map(function(t) {
              return t.type === e.type ? o({}, t, { depth: (e.depth || 0) + 1 }) : t;
            }));
        },
        c = {
          fromRawTreeStateToRawState: function(e) {
            var t = e.blocks,
              n = [];
            return (
              Array.isArray(t) || i(!1),
              Array.isArray(t) && t.length
                ? (a(t, function(e) {
                    var t = o({}, e);
                    l(e) && ((t.depth = t.depth || 0), s(e)), delete t.children, n.push(t);
                  }),
                  (e.blocks = n),
                  o({}, e, { blocks: n }))
                : e
            );
          },
          fromRawStateToRawTreeState: function(e) {
            var t = {},
              n = [];
            return (
              e.blocks.forEach(function(e) {
                var r = l(e),
                  a = e.depth || 0,
                  s = o({}, e, { children: [] });
                if (!r) return (t = {}), void n.push(s);
                if (((t[a] = s), a > 0)) {
                  var c = t[a - 1];
                  return c || i(!1), void c.children.push(s);
                }
                n.push(s);
              }),
              o({}, e, { blocks: n })
            );
          },
        };
      e.exports = c;
    },
    PQhE: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (n('lFJn'), n('8uQm')),
        a = n('JL7T'),
        l = n('cX45'),
        s = n('JPcv'),
        c = n('1qq2'),
        u = n('rJY1'),
        f = n('xocI'),
        d = n('HriT'),
        p = s.List,
        h = s.Repeat,
        g = l.draft_tree_data_support,
        m = g ? a : i,
        y = {
          processHTML: function(e, t) {
            return c(e, f, t);
          },
          processText: function(e, t, n) {
            return e.reduce(function(e, r, i) {
              r = d(r);
              var a = u(),
                l = { key: a, type: n, text: r, characterList: p(h(t, r.length)) };
              if (g && 0 !== i) {
                var s = i - 1,
                  c = (e[s] = e[s].merge({ nextSibling: a }));
                l = o({}, l, { prevSibling: c.getKey() });
              }
              return e.push(new m(l)), e;
            }, []);
          },
        };
      e.exports = y;
    },
    Psm9: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.ColorUtils = t.BaseUtils = t.ContentUtils = void 0);
      var r = n('NqYS'),
        o = c(r),
        i = n('nXTX'),
        a = c(i),
        l = n('867s'),
        s = c(l);
      function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      (t.ContentUtils = o), (t.BaseUtils = a), (t.ColorUtils = s);
    },
    QfTi: function(e, t, n) {
      'use strict';
      var r = n('2NuI'),
        o = /\./,
        i = /\|\|/,
        a = /\s+\-\s+/,
        l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        s = /^(\d*)(.*)/;
      function c(e, t) {
        var n = e.split(i);
        return n.length > 1
          ? n.some(function(e) {
              return C.contains(e, t);
            })
          : ((e = n[0].trim()), u(e, t));
      }
      function u(e, t) {
        var n = e.split(a);
        if (((n.length > 0 && n.length <= 2) || r(!1), 1 === n.length)) return f(n[0], t);
        var o = n[0],
          i = n[1];
        return (A(o) && A(i)) || r(!1), f('>=' + o, t) && f('<=' + i, t);
      }
      function f(e, t) {
        if (((e = e.trim()), '' === e)) return !0;
        var n = t.split(o),
          r = v(e),
          i = r.modifier,
          a = r.rangeComponents;
        switch (i) {
          case '<':
            return d(n, a);
          case '<=':
            return p(n, a);
          case '>=':
            return g(n, a);
          case '>':
            return m(n, a);
          case '~':
          case '~>':
            return y(n, a);
          default:
            return h(n, a);
        }
      }
      function d(e, t) {
        return -1 === x(e, t);
      }
      function p(e, t) {
        var n = x(e, t);
        return -1 === n || 0 === n;
      }
      function h(e, t) {
        return 0 === x(e, t);
      }
      function g(e, t) {
        var n = x(e, t);
        return 1 === n || 0 === n;
      }
      function m(e, t) {
        return 1 === x(e, t);
      }
      function y(e, t) {
        var n = t.slice(),
          r = t.slice();
        r.length > 1 && r.pop();
        var o = r.length - 1,
          i = parseInt(r[o], 10);
        return b(i) && (r[o] = i + 1 + ''), g(e, n) && d(e, r);
      }
      function v(e) {
        var t = e.split(o),
          n = t[0].match(l);
        return n || r(!1), { modifier: n[1], rangeComponents: [n[2]].concat(t.slice(1)) };
      }
      function b(e) {
        return !isNaN(e) && isFinite(e);
      }
      function A(e) {
        return !v(e).modifier;
      }
      function S(e, t) {
        for (var n = e.length; n < t; n++) e[n] = '0';
      }
      function w(e, t) {
        (e = e.slice()), (t = t.slice()), S(e, t.length);
        for (var n = 0; n < t.length; n++) {
          var r = t[n].match(/^[x*]$/i);
          if (r && ((t[n] = e[n] = '0'), '*' === r[0] && n === t.length - 1))
            for (var o = n; o < e.length; o++) e[o] = '0';
        }
        return S(t, e.length), [e, t];
      }
      function E(e, t) {
        var n = e.match(s)[1],
          r = t.match(s)[1],
          o = parseInt(n, 10),
          i = parseInt(r, 10);
        return b(o) && b(i) && o !== i ? k(o, i) : k(e, t);
      }
      function k(e, t) {
        return typeof e !== typeof t && r(!1), e > t ? 1 : e < t ? -1 : 0;
      }
      function x(e, t) {
        for (var n = w(e, t), r = n[0], o = n[1], i = 0; i < o.length; i++) {
          var a = E(r[i], o[i]);
          if (a) return a;
        }
        return 0;
      }
      var C = {
        contains: function(e, t) {
          return c(e.trim(), t.trim());
        },
      };
      e.exports = C;
    },
    QvxS: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var o = n('NQV1'),
        i = n('qy1W'),
        a = n('ohE5'),
        l = new RegExp('\r\n', 'g'),
        s = '\n',
        c = { 'text/rtf': 1, 'text/html': 1 };
      function u(e) {
        if ('file' == e.kind) return e.getAsFile();
      }
      var f = (function() {
        function e(t) {
          r(this, e), (this.data = t), (this.types = t.types ? i(t.types) : []);
        }
        return (
          (e.prototype.isRichText = function() {
            return (
              !(!this.getHTML() || !this.getText()) ||
              (!this.isImage() &&
                this.types.some(function(e) {
                  return c[e];
                }))
            );
          }),
          (e.prototype.getText = function() {
            var e;
            return (
              this.data.getData &&
                (this.types.length
                  ? -1 != this.types.indexOf('text/plain') && (e = this.data.getData('text/plain'))
                  : (e = this.data.getData('Text'))),
              e ? e.replace(l, s) : null
            );
          }),
          (e.prototype.getHTML = function() {
            if (this.data.getData) {
              if (!this.types.length) return this.data.getData('Text');
              if (-1 != this.types.indexOf('text/html')) return this.data.getData('text/html');
            }
          }),
          (e.prototype.isLink = function() {
            return this.types.some(function(e) {
              return (
                -1 != e.indexOf('Url') ||
                -1 != e.indexOf('text/uri-list') ||
                e.indexOf('text/x-moz-url')
              );
            });
          }),
          (e.prototype.getLink = function() {
            if (this.data.getData) {
              if (-1 != this.types.indexOf('text/x-moz-url')) {
                var e = this.data.getData('text/x-moz-url').split('\n');
                return e[0];
              }
              return -1 != this.types.indexOf('text/uri-list')
                ? this.data.getData('text/uri-list')
                : this.data.getData('url');
            }
            return null;
          }),
          (e.prototype.isImage = function() {
            var e = this.types.some(function(e) {
              return -1 != e.indexOf('application/x-moz-file');
            });
            if (e) return !0;
            for (var t = this.getFiles(), n = 0; n < t.length; n++) {
              var r = t[n].type;
              if (!o.isImage(r)) return !1;
            }
            return !0;
          }),
          (e.prototype.getCount = function() {
            return this.data.hasOwnProperty('items')
              ? this.data.items.length
              : this.data.hasOwnProperty('mozItemCount')
              ? this.data.mozItemCount
              : this.data.files
              ? this.data.files.length
              : null;
          }),
          (e.prototype.getFiles = function() {
            return this.data.items
              ? Array.prototype.slice
                  .call(this.data.items)
                  .map(u)
                  .filter(a.thatReturnsArgument)
              : this.data.files
              ? Array.prototype.slice.call(this.data.files)
              : [];
          }),
          (e.prototype.hasFiles = function() {
            return this.getFiles().length > 0;
          }),
          e
        );
      })();
      e.exports = f;
    },
    RAzh: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = g(n('QLaP')),
        o = g(n('q1tI')),
        i = g(n('KAy6')),
        a = n('v83y'),
        l = g(n('h4BG')),
        s = g(n('JJ3u')),
        c = g(n('oHid')),
        u = g(n('l7dP')),
        f = g(n('SJXs')),
        d = g(n('pMSO')),
        p = g(n('tAS7')),
        h = g(n('ykIx'));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var m = function(e, t) {
          return t;
        },
        y = function(e) {
          var t = e.styleToHTML,
            n = void 0 === t ? {} : t,
            g = e.blockToHTML,
            y = void 0 === g ? {} : g,
            v = e.entityToHTML,
            b = void 0 === v ? m : v;
          return function(e) {
            var t;
            (0, r['default'])(null !== e && void 0 !== e, 'Expected contentState to be non-null'),
              (t =
                !0 === y.__isMiddleware
                  ? y((0, f['default'])(h['default']))
                  : (0, u['default'])((0, f['default'])(y), (0, f['default'])(h['default'])));
            var g = (0, a.convertToRaw)(e),
              m = [],
              v = g.blocks
                .map(function(e) {
                  var r = e.type,
                    a = e.depth,
                    u = '',
                    f = '',
                    h = t(e);
                  if (!h)
                    throw new Error(
                      'convertToHTML: missing HTML definition for block with type '.concat(e.type)
                    );
                  if (h.nest)
                    while (a + 1 !== m.length || r !== m[a].type)
                      if (a + 1 === m.length) {
                        var y = m[a];
                        (u += (0, p['default'])(t(y)).nestEnd),
                          (f += (0, p['default'])(t(e)).nestStart),
                          (m[a] = e);
                      } else if (a + 1 < m.length) {
                        var v = m[m.length - 1];
                        (u += (0, p['default'])(t(v)).nestEnd), (m = m.slice(0, -1));
                      } else (f += (0, p['default'])(t(e)).nestStart), m.push(e);
                  else
                    (u = m.reduceRight(function(e, n) {
                      return e + (0, p['default'])(t(n)).nestEnd;
                    }, '')),
                      (m = []);
                  var A,
                    S = (0, c['default'])(
                      (0, s['default'])((0, l['default'])(e), g.entityMap, b),
                      n
                    ),
                    w = (0, d['default'])(t(e));
                  return (
                    (A = 'string' === typeof w ? w : w.start + S + w.end),
                    0 === S.length &&
                      Object.prototype.hasOwnProperty.call(w, 'empty') &&
                      (A = o['default'].isValidElement(w.empty)
                        ? i['default'].renderToStaticMarkup(w.empty)
                        : w.empty),
                    u + f + A
                  );
                })
                .join('');
            return (
              (v = m.reduce(function(e, n) {
                return e + (0, p['default'])(t(n)).nestEnd;
              }, v)),
              v
            );
          };
        },
        v = function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return 1 === t.length &&
            Object.prototype.hasOwnProperty.call(t[0], '_map') &&
            null != t[0].getBlockMap
            ? y({}).apply(void 0, t)
            : y.apply(void 0, t);
        };
      t['default'] = v;
    },
    RCR6: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = r.OrderedSet,
        i = n('jLRO'),
        a = i.substr,
        l = o();
      function s(e, t) {
        var n = Array(e.length).fill(l);
        return (
          t &&
            t.forEach(function(t) {
              var r = a(e, 0, t.offset).length,
                o = r + a(e, t.offset, t.length).length;
              while (r < o) (n[r] = n[r].add(t.style)), r++;
            }),
          n
        );
      }
      e.exports = s;
    },
    'RK+W': function(e, t, n) {
      'use strict';
      var r = /\r\n?|\n/g;
      function o(e) {
        return e.split(r);
      }
      e.exports = o;
    },
    S5bm: function(e, t, n) {
      'use strict';
      var r = n('NgHg'),
        o = n('+aGp');
      function i(e) {
        return null == e ? e : String(e);
      }
      function a(e, t) {
        var n = void 0;
        if (window.getComputedStyle && ((n = window.getComputedStyle(e, null)), n))
          return i(n.getPropertyValue(o(t)));
        if (document.defaultView && document.defaultView.getComputedStyle) {
          if (((n = document.defaultView.getComputedStyle(e, null)), n))
            return i(n.getPropertyValue(o(t)));
          if ('display' === t) return 'none';
        }
        return e.currentStyle
          ? i(
              'float' === t
                ? e.currentStyle.cssFloat || e.currentStyle.styleFloat
                : e.currentStyle[r(t)]
            )
          : i(e.style && e.style[r(t)]);
      }
      e.exports = a;
    },
    SF5q: function(e, t, n) {
      'use strict';
      var r = n('evZB'),
        o = r.getPunctuation(),
        i = "['\u2018\u2019]",
        a = '\\s|(?![_])' + o,
        l = '^(?:' + a + ')*(?:' + i + '|(?!' + a + ').)*(?:(?!' + a + ').)',
        s = new RegExp(l),
        c = '(?:(?!' + a + ').)(?:' + i + '|(?!' + a + ').)*(?:' + a + ')*$',
        u = new RegExp(c);
      function f(e, t) {
        var n = t ? u.exec(e) : s.exec(e);
        return n ? n[0] : e;
      }
      var d = {
        getBackward: function(e) {
          return f(e, !0);
        },
        getForward: function(e) {
          return f(e, !1);
        },
      };
      e.exports = d;
    },
    SJXs: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = function(e) {
        return function(t) {
          return 'function' === typeof e ? e(t) : e[t.type];
        };
      };
      t['default'] = r;
    },
    SQ0G: function(e, t, n) {
      'use strict';
      var r = n('94Z+');
      function o(e) {
        return r(e) && 3 == e.nodeType;
      }
      e.exports = o;
    },
    SYhp: function(e, t, n) {
      'use strict';
      var r = n('3sOJ');
      function o(e, t, n) {
        var o = r.undo(t);
        if ('spellcheck-change' !== t.getLastChangeType())
          e.preventDefault(),
            t.getNativelyRenderedContent()
              ? (n(r.set(t, { nativelyRenderedContent: null })),
                setTimeout(function() {
                  n(o);
                }, 0))
              : n(o);
        else {
          var i = o.getCurrentContent();
          n(r.set(o, { nativelyRenderedContent: i }));
        }
      }
      e.exports = o;
    },
    T401: function(e, t, n) {
      'use strict';
      function r(e) {
        return 'handled' === e || !0 === e;
      }
      e.exports = r;
    },
    TP1W: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = n('JPcv'),
        o = n('v83y'),
        i = l(n('XKk0')),
        a = l(n('tNfR'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = '&nbsp;',
        c = ' ',
        u = 4,
        f = new RegExp('\r', 'g'),
        d = new RegExp('\n', 'g'),
        p = new RegExp(s, 'g'),
        h = new RegExp('\r', 'g'),
        g = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'blockquote', 'pre'],
        m = {
          b: 'BOLD',
          code: 'CODE',
          del: 'STRIKETHROUGH',
          em: 'ITALIC',
          i: 'ITALIC',
          s: 'STRIKETHROUGH',
          strike: 'STRIKETHROUGH',
          strong: 'BOLD',
          u: 'UNDERLINE',
        },
        y = function(e, t) {
          return e && !0 === e.__isMiddleware ? e(t) : e;
        },
        v = function(e, t, n) {},
        b = function(e, t, n) {
          return n;
        },
        A = function(e, t) {},
        S = function(e) {
          return [];
        },
        w = function(e) {
          if (null != e) return e;
          throw new Error('Got unexpected null or undefined');
        },
        E = function(e) {
          return e.replace(h, '');
        };
      function k() {
        return { text: '', inlines: [], entities: [], blocks: [] };
      }
      function x(e) {
        var t = new Array(1);
        return (
          e && (t[0] = e), { text: c, inlines: [(0, r.OrderedSet)()], entities: t, blocks: [] }
        );
      }
      function C(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, r.Map)();
        return !0 === n
          ? {
              text: '\r',
              inlines: [(0, r.OrderedSet)()],
              entities: new Array(1),
              blocks: [{ type: e, data: o, depth: Math.max(0, Math.min(u, t)) }],
              isNewline: !0,
            }
          : { text: '\n', inlines: [(0, r.OrderedSet)()], entities: new Array(1), blocks: [] };
      }
      function _(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.Map)();
        return {
          text: '\r',
          inlines: [(0, r.OrderedSet)()],
          entities: new Array(1),
          blocks: [{ type: e, data: n, depth: Math.max(0, Math.min(u, t)) }],
        };
      }
      function I(e, t) {
        switch (e) {
          case 'h1':
            return 'header-one';
          case 'h2':
            return 'header-two';
          case 'h3':
            return 'header-three';
          case 'h4':
            return 'header-four';
          case 'h5':
            return 'header-five';
          case 'h6':
            return 'header-six';
          case 'li':
            return 'ol' === t ? 'ordered-list-item' : 'unordered-list-item';
          case 'blockquote':
            return 'blockquote';
          case 'pre':
            return 'code-block';
          case 'div':
          case 'p':
            return 'unstyled';
          default:
            return null;
        }
      }
      function O(e, t, n) {
        return I(e, n);
      }
      function T(e, t, n) {
        var r = m[e];
        if (r) n = n.add(r).toOrderedSet();
        else if (t instanceof HTMLElement) {
          var o = t;
          n = n
            .withMutations(function(e) {
              'bold' === o.style.fontWeight && e.add('BOLD'),
                'italic' === o.style.fontStyle && e.add('ITALIC'),
                'underline' === o.style.textDecoration && e.add('UNDERLINE'),
                'line-through' === o.style.textDecoration && e.add('STRIKETHROUGH');
            })
            .toOrderedSet();
        }
        return n;
      }
      function M(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, r.OrderedSet)();
        return T(e, t, n);
      }
      function D(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = t.text.slice(0, 1),
          o = e.text.slice(-1),
          i = '\r' === o && '\r' === r,
          a = '\r' !== e.text && '\r' !== t.text,
          l = '\r' === e.text && !e.isNewline && t.isNewline;
        if (
          (i &&
            (a || l) &&
            ((e.text = e.text.slice(0, -1)), e.inlines.pop(), e.entities.pop(), e.blocks.pop()),
          '\r' === e.text.slice(-1) && !0 === n)
        ) {
          if (t.text === c || '\n' === t.text) return e;
          (r !== c && '\n' !== r) ||
            ((t.text = t.text.slice(1)), t.inlines.shift(), t.entities.shift());
        }
        var s = 0 === e.text.length && t.isNewline;
        return {
          text: e.text + t.text,
          inlines: e.inlines.concat(t.inlines),
          entities: e.entities.concat(t.entities),
          blocks: e.blocks.concat(t.blocks),
          isNewline: s,
        };
      }
      function B(e) {
        return g.some(function(t) {
          return -1 !== e.indexOf('<'.concat(t));
        });
      }
      function L(e, t, n, o, i, l, s, u, f, p, h, g, m, y, v, b) {
        var A = e.nodeName.toLowerCase(),
          S = !1,
          w = 'unstyled';
        if ('#text' === A) {
          var E = e.textContent;
          if ('' === E.trim() && null === o) return k();
          if ('' === E.trim() && 'code-block' !== o) return x(b);
          'code-block' !== o && (E = E.replace(d, c));
          var O = Array(E.length).fill(b),
            M = 0,
            B = f(E, h, g, m, y).sort(a['default']);
          return (
            B.forEach(function(e) {
              var t = e.entity,
                n = e.offset,
                r = e.length,
                o = e.result,
                i = n + M;
              (null !== o && void 0 !== o) || (o = E.substr(i, r));
              var a = E.split('');
              a.splice.bind(a, i, r).apply(a, o.split('')),
                (E = a.join('')),
                O.splice.bind(O, i, r).apply(O, Array(o.length).fill(t)),
                (M += o.length - r);
            }),
            { text: E, inlines: Array(E.length).fill(t), entities: O, blocks: [] }
          );
        }
        if ('br' === A) {
          var N = o;
          return null === N ? C('unstyled', l, !0) : C(N || 'unstyled', l, v.flat);
        }
        var F = k(),
          R = null;
        (t = T(A, e, t)),
          (t = s(A, e, t)),
          ('ul' !== A && 'ol' !== A) || (n && (l += 1), (n = A), (o = null));
        var P,
          K,
          j = p(A, e, n, o);
        if (!1 === j) return k();
        if (
          ((j = j || {}),
          'string' === typeof j
            ? ((P = j), (K = (0, r.Map)()))
            : ((P = 'string' === typeof j ? j : j.type),
              (K = j.data ? (0, r.Map)(j.data) : (0, r.Map)())),
          o || (-1 === i.indexOf(A) && !P))
        )
          if (!n || ('ordered-list-item' !== o && 'unordered-list-item' !== o) || 'li' !== A)
            o && 'atomic' !== o && 'atomic' === P && ((o = P), (S = !0), (F = C(P, l, !0, K)));
          else {
            var z = I(A, n);
            (F = _(z, l)),
              (o = z),
              (S = !0),
              (w = 'ul' === n ? 'unordered-list-item' : 'ordered-list-item');
          }
        else (F = _(P || I(A, n), l, K)), (o = P || I(A, n)), (S = !0);
        var U = e.firstChild;
        null != U || !b || ('atomic' !== P && 'atomic' !== o) || (U = document.createTextNode('a')),
          null != U && (A = U.nodeName.toLowerCase());
        var H = null;
        while (U) {
          (H = u(A, U, h, g, m, y)),
            (R = L(U, t, n, o, i, l, s, u, f, p, h, g, m, y, v, H || b)),
            (F = D(F, R, v.flat));
          var V = U.nextSibling;
          if (V && i.indexOf(A) >= 0 && o) {
            var W = p(A, U, n, o),
              Q = void 0,
              q = void 0;
            !1 !== W &&
              ((W = W || {}),
              'string' === typeof W
                ? ((Q = W), (q = (0, r.Map)()))
                : ((Q = W.type || I(A, n)), (q = W.data ? (0, r.Map)(W.data) : (0, r.Map)())),
              (F = D(F, C(Q, l, v.flat, q), v.flat)));
          }
          V && (A = V.nodeName.toLowerCase()), (U = V);
        }
        return S && (F = D(F, _(w, l, (0, r.Map)()), v.flat)), F;
      }
      function N(e, t, n, o, i, a, l, s, u, d, h) {
        e = e
          .trim()
          .replace(f, '')
          .replace(p, c);
        var m = h(e);
        if (!m) return null;
        var y = B(e) ? g.concat(['div']) : ['div'],
          v = L(m, (0, r.OrderedSet)(), 'ul', null, y, -1, t, n, o, i, a, l, s, u, d);
        return (
          0 === v.text.indexOf('\r') &&
            (v = {
              text: v.text.slice(1),
              inlines: v.inlines.slice(1),
              entities: v.entities.slice(1),
              blocks: v.blocks,
            }),
          '\r' === v.text.slice(-1) &&
            ((v.text = v.text.slice(0, -1)),
            (v.inlines = v.inlines.slice(0, -1)),
            (v.entities = v.entities.slice(0, -1)),
            v.blocks.pop()),
          0 === v.blocks.length &&
            v.blocks.push({ type: 'unstyled', data: (0, r.Map)(), depth: 0 }),
          v.text.split('\r').length === v.blocks.length + 1 &&
            v.blocks.unshift({ type: 'unstyled', data: (0, r.Map)(), depth: 0 }),
          v
        );
      }
      function F(e, t, n, i, a, l, s, c, u, f, d, p) {
        var h = N(e, t, n, i, a, l, s, c, u, f, d, p);
        if (null == h) return [];
        var g = 0;
        return h.text.split('\r').map(function(e, t) {
          e = E(e);
          var n = g + e.length,
            i = w(h).inlines.slice(g, n),
            a = w(h).entities.slice(g, n),
            l = (0, r.List)(
              i.map(function(e, t) {
                var n = { style: e, entity: null };
                return a[t] && (n.entity = a[t]), o.CharacterMetadata.create(n);
              })
            );
          return (
            (g = n + 1),
            new o.ContentBlock({
              key: p(),
              type: w(h).blocks[t].type,
              data: w(h).blocks[t].data,
              depth: w(h).blocks[t].depth,
              text: e,
              characterList: l,
            })
          );
        });
      }
      var R = function(e) {
          var t = e.htmlToStyle,
            n = void 0 === t ? b : t,
            r = e.htmlToEntity,
            a = void 0 === r ? A : r,
            l = e.textToEntity,
            s = void 0 === l ? S : l,
            c = e.htmlToBlock,
            u = void 0 === c ? v : c;
          return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { flat: !1 },
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i['default'],
              l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.genKey,
              c = o.ContentState.createFromText(''),
              f = function() {
                var e;
                return c.createEntity
                  ? ((c = (e = c).createEntity.apply(e, arguments)), c.getLastCreatedEntityKey())
                  : o.Entity.create.apply(o.Entity, arguments);
              },
              d = function() {
                var e;
                return c.getEntity
                  ? (e = c).getEntity.apply(e, arguments)
                  : o.Entity.get.apply(o.Entity, arguments);
              },
              p = function() {
                var e;
                c.mergeEntityData
                  ? (c = (e = c).mergeEntityData.apply(e, arguments))
                  : o.Entity.mergeData.apply(o.Entity, arguments);
              },
              h = function() {
                var e;
                c.replaceEntityData
                  ? (c = (e = c).replaceEntityData.apply(e, arguments))
                  : o.Entity.replaceData.apply(o.Entity, arguments);
              },
              g = F(e, y(n, M), y(a, A), y(s, S), y(u, O), f, d, p, h, t, r, l),
              m = o.BlockMapBuilder.createFromArray(g),
              v = g[0].getKey();
            return c.merge({
              blockMap: m,
              selectionBefore: o.SelectionState.createEmpty(v),
              selectionAfter: o.SelectionState.createEmpty(v),
            });
          };
        },
        P = function() {
          return arguments.length >= 1 &&
            'string' === typeof (arguments.length <= 0 ? void 0 : arguments[0])
            ? R({}).apply(void 0, arguments)
            : R.apply(void 0, arguments);
        };
      t['default'] = P;
    },
    TWoB: function(e, t, n) {
      'use strict';
      var r = n('SQ0G');
      function o(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            (!r(e) &&
              (r(t)
                ? o(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      e.exports = o;
    },
    Taje: function(e, t, n) {
      'use strict';
      function r(e, t, n, r) {
        if (e.size) {
          var o = 0;
          e.reduce(function(e, i, a) {
            return t(e, i) || (n(e) && r(o, a), (o = a)), i;
          }),
            n(e.last()) && r(o, e.count());
        }
      }
      e.exports = r;
    },
    TlXQ: function(e, t, n) {
      'use strict';
      var r = n('lFJn'),
        o = n('JPcv'),
        i = o.List;
      function a(e, t) {
        var n = e.map(function(e, n) {
          var o = t[n];
          return r.create({ style: e, entity: o });
        });
        return i(n);
      }
      e.exports = a;
    },
    'TzU/': function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('qnky'),
        a = n('JPcv'),
        l = n('2NuI'),
        s = a.Map,
        c = s(),
        u = 0;
      function f(e, t) {
        console.warn(
          'WARNING: ' + e + ' will be deprecated soon!\nPlease use "' + t + '" instead.'
        );
      }
      var d = {
        getLastCreatedEntityKey: function() {
          return (
            f('DraftEntity.getLastCreatedEntityKey', 'contentState.getLastCreatedEntityKey'),
            d.__getLastCreatedEntityKey()
          );
        },
        create: function(e, t, n) {
          return f('DraftEntity.create', 'contentState.createEntity'), d.__create(e, t, n);
        },
        add: function(e) {
          return f('DraftEntity.add', 'contentState.addEntity'), d.__add(e);
        },
        get: function(e) {
          return f('DraftEntity.get', 'contentState.getEntity'), d.__get(e);
        },
        mergeData: function(e, t) {
          return f('DraftEntity.mergeData', 'contentState.mergeEntityData'), d.__mergeData(e, t);
        },
        replaceData: function(e, t) {
          return (
            f('DraftEntity.replaceData', 'contentState.replaceEntityData'), d.__replaceData(e, t)
          );
        },
        __getLastCreatedEntityKey: function() {
          return '' + u;
        },
        __create: function(e, t, n) {
          return d.__add(new i({ type: e, mutability: t, data: n || {} }));
        },
        __add: function(e) {
          var t = '' + ++u;
          return (c = c.set(t, e)), t;
        },
        __get: function(e) {
          var t = c.get(e);
          return t || l(!1), t;
        },
        __mergeData: function(e, t) {
          var n = d.__get(e),
            r = o({}, n.getData(), t),
            i = n.set('data', r);
          return (c = c.set(e, i)), i;
        },
        __replaceData: function(e, t) {
          var n = d.__get(e),
            r = n.set('data', t);
          return (c = c.set(e, r)), r;
        },
      };
      e.exports = d;
    },
    U84a: function(e, t, n) {
      'use strict';
      var r = n('dyxW'),
        o = n('jLRO'),
        i = o.strlen;
      function a(e, t) {
        var n = [];
        return (
          e.findEntityRanges(
            function(e) {
              return !!e.getEntity();
            },
            function(o, a) {
              var l = e.getText(),
                s = e.getEntityAt(o);
              n.push({
                offset: i(l.slice(0, o)),
                length: i(l.slice(o, a)),
                key: Number(t[r.stringify(s)]),
              });
            }
          ),
          n
        );
      }
      e.exports = a;
    },
    V8dp: function(e, t, n) {
      'use strict';
      var r = n('JL7T'),
        o = n('JPcv'),
        i = n('rJY1'),
        a = o.OrderedMap,
        l = function(e) {
          var t = {},
            n = void 0;
          return a(
            e
              .withMutations(function(e) {
                e.forEach(function(r, o) {
                  var a = r.getKey(),
                    l = r.getNextSiblingKey(),
                    s = r.getPrevSiblingKey(),
                    c = r.getChildKeys(),
                    u = r.getParentKey(),
                    f = i();
                  if (((t[a] = f), l)) {
                    var d = e.get(l);
                    d ? e.setIn([l, 'prevSibling'], f) : e.setIn([a, 'nextSibling'], null);
                  }
                  if (s) {
                    var p = e.get(s);
                    p ? e.setIn([s, 'nextSibling'], f) : e.setIn([a, 'prevSibling'], null);
                  }
                  if (u && e.get(u)) {
                    var h = e.get(u),
                      g = h.getChildKeys();
                    e.setIn([u, 'children'], g.set(g.indexOf(r.getKey()), f));
                  } else e.setIn([a, 'parent'], null), n && (e.setIn([n.getKey(), 'nextSibling'], f), e.setIn([a, 'prevSibling'], t[n.getKey()])), (n = e.get(a));
                  c.forEach(function(t) {
                    var n = e.get(t);
                    n
                      ? e.setIn([t, 'parent'], f)
                      : e.setIn(
                          [a, 'children'],
                          r.getChildKeys().filter(function(e) {
                            return e !== t;
                          })
                        );
                  });
                });
              })
              .toArray()
              .map(function(e) {
                return [t[e.getKey()], e.set('key', t[e.getKey()])];
              })
          );
        },
        s = function(e) {
          return a(
            e.toArray().map(function(e) {
              var t = i();
              return [t, e.set('key', t)];
            })
          );
        },
        c = function(e) {
          var t = e.first() instanceof r;
          return t ? l(e) : s(e);
        };
      e.exports = c;
    },
    VSmT: function(e, t, n) {
      'use strict';
      var r,
        o = n('JPcv'),
        i = n('I8OZ'),
        a = n('gWRK'),
        l = o.OrderedMap,
        s = {
          getDirectionMap: function(e, t) {
            r ? r.reset() : (r = new i());
            var n = e.getBlockMap(),
              s = n.valueSeq().map(function(e) {
                return a(r).getDirection(e.getText());
              }),
              c = l(n.keySeq().zip(s));
            return null != t && o.is(t, c) ? t : c;
          },
        };
      e.exports = s;
    },
    VTBg: function(e, t, n) {
      'use strict';
      var r = n('JL7T'),
        o = function(e, t) {
          var n = e instanceof r;
          if (!n) return null;
          var o = e.getNextSiblingKey();
          if (o) return o;
          var i = e.getParentKey();
          if (!i) return null;
          var a = t.get(i);
          while (a && !a.getNextSiblingKey()) {
            var l = a.getParentKey();
            a = l ? t.get(l) : null;
          }
          return a ? a.getNextSiblingKey() : null;
        };
      e.exports = o;
    },
    WJOU: function(e, t, n) {
      'use strict';
      var r = n('3sOJ'),
        o = n('i8i4'),
        i = n('Zgb7'),
        a = n('2NuI');
      function l(e) {
        if (!e._blockSelectEvents && e._latestEditorState === e.props.editorState) {
          var t = e.props.editorState,
            n = o.findDOMNode(e.editorContainer);
          n || a(!1), n.firstChild instanceof HTMLElement || a(!1);
          var l = i(t, n.firstChild),
            s = l.selectionState;
          s !== t.getSelection() &&
            ((t = l.needsRecovery ? r.forceSelection(t, s) : r.acceptSelection(t, s)), e.update(t));
        }
      }
      e.exports = l;
    },
    WLG0: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('q1tI'),
        l = n('i8i4'),
        s = n('CYTE'),
        c = n('2NuI'),
        u = s.isBrowser('IE <= 11');
      function f(e) {
        return u ? '\n' === e.textContent : 'BR' === e.tagName;
      }
      var d = u
          ? a.createElement('span', { key: 'A', 'data-text': 'true' }, '\n')
          : a.createElement('br', { key: 'A', 'data-text': 'true' }),
        p = u
          ? a.createElement('span', { key: 'B', 'data-text': 'true' }, '\n')
          : a.createElement('br', { key: 'B', 'data-text': 'true' }),
        h = (function(e) {
          function t(n) {
            r(this, t);
            var i = o(this, e.call(this, n));
            return (i._forceFlag = !1), i;
          }
          return (
            i(t, e),
            (t.prototype.shouldComponentUpdate = function(e) {
              var t = l.findDOMNode(this),
                n = '' === e.children;
              return t instanceof Element || c(!1), n ? !f(t) : t.textContent !== e.children;
            }),
            (t.prototype.componentDidMount = function() {
              this._forceFlag = !this._forceFlag;
            }),
            (t.prototype.componentDidUpdate = function() {
              this._forceFlag = !this._forceFlag;
            }),
            (t.prototype.render = function() {
              return '' === this.props.children
                ? this._forceFlag
                  ? d
                  : p
                : a.createElement(
                    'span',
                    { key: this._forceFlag ? 'A' : 'B', 'data-text': 'true' },
                    this.props.children
                  );
            }),
            t
          );
        })(a.Component);
      e.exports = h;
    },
    Wkzk: function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ'),
        i = n('DYKh'),
        a = n('gWRK'),
        l = null,
        s = {
          cut: function(e) {
            var t = e.getCurrentContent(),
              n = e.getSelection(),
              s = null;
            if (n.isCollapsed()) {
              var c = n.getAnchorKey(),
                u = t.getBlockForKey(c).getLength();
              if (u === n.getAnchorOffset()) return e;
              s = n.set('focusOffset', u);
            } else s = n;
            (s = a(s)), (l = i(t, s));
            var f = r.removeRange(t, s, 'forward');
            return f === t ? e : o.push(e, f, 'remove-range');
          },
          paste: function(e) {
            if (!l) return e;
            var t = r.replaceWithFragment(e.getCurrentContent(), e.getSelection(), l);
            return o.push(e, t, 'insert-fragment');
          },
        };
      e.exports = s;
    },
    XKk0: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = o);
      var r = function(e) {
        var t = document.implementation.createHTMLDocument('');
        return (t.documentElement.innerHTML = e), t;
      };
      function o(e) {
        var t;
        if ('undefined' !== typeof DOMParser) {
          var n = new DOMParser();
          (t = n.parseFromString(e, 'text/html')), (null !== t && null !== t.body) || (t = r(e));
        } else t = r(e);
        return t.body;
      }
    },
    'Y/kH': function(e, t, n) {
      'use strict';
      function r(e) {
        (e._internalDrag = !0), e.setMode('drag');
      }
      e.exports = r;
    },
    Y3PQ: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function l(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var s = n('DthY'),
        c = n('Iq8E'),
        u = (n('3sOJ'), n('q1tI')),
        f = n('YVIB'),
        d = n('faBS'),
        p = n('gWRK'),
        h = function(e, t, n, r) {
          return f({
            'public/DraftStyleDefault/unorderedListItem': 'unordered-list-item' === e,
            'public/DraftStyleDefault/orderedListItem': 'ordered-list-item' === e,
            'public/DraftStyleDefault/reset': n,
            'public/DraftStyleDefault/depth0': 0 === t,
            'public/DraftStyleDefault/depth1': 1 === t,
            'public/DraftStyleDefault/depth2': 2 === t,
            'public/DraftStyleDefault/depth3': 3 === t,
            'public/DraftStyleDefault/depth4': 4 === t,
            'public/DraftStyleDefault/listLTR': 'LTR' === r,
            'public/DraftStyleDefault/listRTL': 'RTL' === r,
          });
        },
        g = (function(e) {
          function t() {
            return i(this, t), a(this, e.apply(this, arguments));
          }
          return (
            l(t, e),
            (t.prototype.shouldComponentUpdate = function(e) {
              var t = this.props.editorState,
                n = e.editorState,
                r = t.getDirectionMap(),
                o = n.getDirectionMap();
              if (r !== o) return !0;
              var i = t.getSelection().getHasFocus(),
                a = n.getSelection().getHasFocus();
              if (i !== a) return !0;
              var l = n.getNativelyRenderedContent(),
                s = t.isInCompositionMode(),
                c = n.isInCompositionMode();
              if (t === n || (null !== l && n.getCurrentContent() === l) || (s && c)) return !1;
              var u = t.getCurrentContent(),
                f = n.getCurrentContent(),
                d = t.getDecorator(),
                p = n.getDecorator();
              return s !== c || u !== f || d !== p || n.mustForceSelection();
            }),
            (t.prototype.render = function() {
              for (
                var e = this.props,
                  t = e.blockRenderMap,
                  n = e.blockRendererFn,
                  r = e.blockStyleFn,
                  i = e.customStyleMap,
                  a = e.customStyleFn,
                  l = e.editorState,
                  f = e.editorKey,
                  g = e.textDirectionality,
                  m = l.getCurrentContent(),
                  y = l.getSelection(),
                  v = l.mustForceSelection(),
                  b = l.getDecorator(),
                  A = p(l.getDirectionMap()),
                  S = m.getBlocksAsArray(),
                  w = [],
                  E = null,
                  k = null,
                  x = 0;
                x < S.length;
                x++
              ) {
                var C = S[x],
                  _ = C.getKey(),
                  I = C.getType(),
                  O = n(C),
                  T = void 0,
                  M = void 0,
                  D = void 0;
                O && ((T = O.component), (M = O.props), (D = O.editable));
                var B = g || A.get(_),
                  L = c.encode(_, 0, 0),
                  N = {
                    contentState: m,
                    block: C,
                    blockProps: M,
                    blockStyleFn: r,
                    customStyleMap: i,
                    customStyleFn: a,
                    decorator: b,
                    direction: B,
                    forceSelection: v,
                    key: _,
                    offsetKey: L,
                    selection: y,
                    tree: l.getBlockTree(_),
                  },
                  F = t.get(I) || t.get('unstyled'),
                  R = F.wrapper,
                  P = F.element || t.get('unstyled').element,
                  K = C.getDepth(),
                  j = '';
                if ((r && (j = r(C)), 'li' === P)) {
                  var z = k !== R || null === E || K > E;
                  j = d(j, h(I, K, z, B));
                }
                var U = T || s,
                  H = {
                    className: j,
                    'data-block': !0,
                    'data-editor': f,
                    'data-offset-key': L,
                    key: _,
                  };
                void 0 !== D &&
                  (H = o({}, H, { contentEditable: D, suppressContentEditableWarning: !0 }));
                var V = u.createElement(P, H, u.createElement(U, N));
                w.push({ block: V, wrapperTemplate: R, key: _, offsetKey: L }),
                  (E = R ? C.getDepth() : null),
                  (k = R);
              }
              for (var W = [], Q = 0; Q < w.length; ) {
                var q = w[Q];
                if (q.wrapperTemplate) {
                  var Y = [];
                  do {
                    Y.push(w[Q].block), Q++;
                  } while (Q < w.length && w[Q].wrapperTemplate === q.wrapperTemplate);
                  var J = u.cloneElement(
                    q.wrapperTemplate,
                    { key: q.key + '-wrap', 'data-offset-key': q.offsetKey },
                    Y
                  );
                  W.push(J);
                } else W.push(q.block), Q++;
              }
              return u.createElement('div', { 'data-contents': 'true' }, W);
            }),
            t
          );
        })(u.Component);
      e.exports = g;
    },
    YBdB: function(e, t, n) {
      (function(e, t) {
        (function(e, n) {
          'use strict';
          if (!e.setImmediate) {
            var r,
              o = 1,
              i = {},
              a = !1,
              l = e.document,
              s = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (s = s && s.setTimeout ? s : e),
              '[object process]' === {}.toString.call(e.process)
                ? p()
                : h()
                ? g()
                : e.MessageChannel
                ? m()
                : l && 'onreadystatechange' in l.createElement('script')
                ? y()
                : v(),
              (s.setImmediate = c),
              (s.clearImmediate = u);
          }
          function c(e) {
            'function' !== typeof e && (e = new Function('' + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
              t[n] = arguments[n + 1];
            var a = { callback: e, args: t };
            return (i[o] = a), r(o), o++;
          }
          function u(e) {
            delete i[e];
          }
          function f(e) {
            var t = e.callback,
              r = e.args;
            switch (r.length) {
              case 0:
                t();
                break;
              case 1:
                t(r[0]);
                break;
              case 2:
                t(r[0], r[1]);
                break;
              case 3:
                t(r[0], r[1], r[2]);
                break;
              default:
                t.apply(n, r);
                break;
            }
          }
          function d(e) {
            if (a) setTimeout(d, 0, e);
            else {
              var t = i[e];
              if (t) {
                a = !0;
                try {
                  f(t);
                } finally {
                  u(e), (a = !1);
                }
              }
            }
          }
          function p() {
            r = function(e) {
              t.nextTick(function() {
                d(e);
              });
            };
          }
          function h() {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                n = e.onmessage;
              return (
                (e.onmessage = function() {
                  t = !1;
                }),
                e.postMessage('', '*'),
                (e.onmessage = n),
                t
              );
            }
          }
          function g() {
            var t = 'setImmediate$' + Math.random() + '$',
              n = function(n) {
                n.source === e &&
                  'string' === typeof n.data &&
                  0 === n.data.indexOf(t) &&
                  d(+n.data.slice(t.length));
              };
            e.addEventListener
              ? e.addEventListener('message', n, !1)
              : e.attachEvent('onmessage', n),
              (r = function(n) {
                e.postMessage(t + n, '*');
              });
          }
          function m() {
            var e = new MessageChannel();
            (e.port1.onmessage = function(e) {
              var t = e.data;
              d(t);
            }),
              (r = function(t) {
                e.port2.postMessage(t);
              });
          }
          function y() {
            var e = l.documentElement;
            r = function(t) {
              var n = l.createElement('script');
              (n.onreadystatechange = function() {
                d(t), (n.onreadystatechange = null), e.removeChild(n), (n = null);
              }),
                e.appendChild(n);
            };
          }
          function v() {
            r = function(e) {
              setTimeout(d, 0, e);
            };
          }
        })('undefined' === typeof self ? ('undefined' === typeof e ? this : e) : self);
      }.call(this, n('yLpj'), n('Q2Ig')));
    },
    YDMw: function(e, t, n) {
      'use strict';
      var r = n('hyAj');
      function o(e, t) {
        var n = e._latestEditorState,
          o = n.getSelection();
        o.isCollapsed() ? t.preventDefault() : e.setClipboard(r(e._latestEditorState));
      }
      e.exports = o;
    },
    YUem: function(e, t, n) {
      'use strict';
      var r = n('SF5q'),
        o = n('3sOJ'),
        i = n('DEWG'),
        a = n('8d//');
      function l(e) {
        var t = a(
          e,
          function(e) {
            var t = e.getSelection(),
              n = t.getStartOffset(),
              o = t.getStartKey(),
              a = e.getCurrentContent(),
              l = a
                .getBlockForKey(o)
                .getText()
                .slice(n),
              s = r.getForward(l);
            return i(e, s.length || 1);
          },
          'forward'
        );
        return t === e.getCurrentContent() ? e : o.push(e, t, 'remove-range');
      }
      e.exports = l;
    },
    YVIB: function(e, t, n) {
      'use strict';
      function r(e) {
        return 'object' == typeof e
          ? Object.keys(e)
              .filter(function(t) {
                return e[t];
              })
              .map(o)
              .join(' ')
          : Array.prototype.map.call(arguments, o).join(' ');
      }
      function o(e) {
        return e.replace(/\//g, '-');
      }
      e.exports = r;
    },
    YeVe: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = r.OrderedMap,
        i = {
          createFromArray: function(e) {
            return o(
              e.map(function(e) {
                return [e.getKey(), e];
              })
            );
          },
        };
      e.exports = i;
    },
    Yrnb: function(e, t, n) {
      'use strict';
      function r(e) {
        var t = e.getSelection(),
          n = t.getAnchorKey(),
          r = e.getBlockTree(n),
          o = t.getStartOffset(),
          i = !1;
        return (
          r.some(function(e) {
            return o === e.get('start')
              ? ((i = !0), !0)
              : o < e.get('end') &&
                  e.get('leaves').some(function(e) {
                    var t = e.get('start');
                    return o === t && ((i = !0), !0);
                  });
          }),
          i
        );
      }
      e.exports = r;
    },
    Z9sL: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      var o = (function() {
        function e(t) {
          r(this, e), (this._uri = t);
        }
        return (
          (e.prototype.toString = function() {
            return this._uri;
          }),
          e
        );
      })();
      e.exports = o;
    },
    'Zf/v': function(e, t, n) {
      'use strict';
      function r(e, t, n) {
        if (n === e.count())
          t.forEach(function(t) {
            e = e.push(t);
          });
        else if (0 === n)
          t.reverse().forEach(function(t) {
            e = e.unshift(t);
          });
        else {
          var r = e.slice(0, n),
            o = e.slice(n);
          e = r.concat(t, o).toList();
        }
        return e;
      }
      e.exports = r;
    },
    Zgb7: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('ISee');
        function o(e, n) {
          var o = t.getSelection();
          return 0 === o.rangeCount
            ? { selectionState: e.getSelection().set('hasFocus', !1), needsRecovery: !1 }
            : r(e, n, o.anchorNode, o.anchorOffset, o.focusNode, o.focusOffset);
        }
        e.exports = o;
      }.call(this, n('yLpj')));
    },
    bNdj: function(e, t, n) {
      'use strict';
      var r = n('jLRO'),
        o = r.substr;
      function i(e, t) {
        var n = Array(e.length).fill(null);
        return (
          t &&
            t.forEach(function(t) {
              for (
                var r = o(e, 0, t.offset).length, i = r + o(e, t.offset, t.length).length, a = r;
                a < i;
                a++
              )
                n[a] = t.key;
            }),
          n
        );
      }
      e.exports = i;
    },
    bd9B: function(e, t, n) {
      'use strict';
      var r = Object.prototype.hasOwnProperty;
      function o(e, t, n) {
        if (!e) return null;
        var o = {};
        for (var i in e) r.call(e, i) && (o[i] = t.call(n, e[i], i, e));
        return o;
      }
      e.exports = o;
    },
    bluE: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.convertRawToEditorState = t.convertEditorStateToRaw = t.convertHTMLToEditorState = t.convertEditorStateToHTML = t.convertHTMLToRaw = t.convertRawToHTML = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n('pXlz'),
        i = n('nO5+'),
        a = n('v83y'),
        l = { fontFamilies: i.defaultFontFamilies };
      (t.convertRawToHTML = function(e, t) {
        t = r({}, l, t);
        try {
          var n = (0, a.convertFromRaw)(e);
          return (t.contentState = n), (0, o.convertToHTML)((0, i.getToHTMLConfig)(t))(n);
        } catch (e) {
          return console.warn(e), '';
        }
      }),
        (t.convertHTMLToRaw = function(e, t, n) {
          t = r({}, l, t);
          try {
            var s = (0, o.convertFromHTML)((0, i.getFromHTMLConfig)(t, n))(e);
            return (0, a.convertToRaw)(s);
          } catch (e) {
            return console.warn(e), {};
          }
        }),
        (t.convertEditorStateToHTML = function(e, t) {
          t = r({}, l, t);
          try {
            var n = e.getCurrentContent();
            return (t.contentState = n), (0, o.convertToHTML)((0, i.getToHTMLConfig)(t))(n);
          } catch (e) {
            return console.warn(e), '';
          }
        }),
        (t.convertHTMLToEditorState = function(e, t, n, s) {
          n = r({}, l, n);
          try {
            return a.EditorState.createWithContent(
              (0, o.convertFromHTML)((0, i.getFromHTMLConfig)(n, s))(e),
              t
            );
          } catch (e) {
            return console.warn(e), a.EditorState.createEmpty(t);
          }
        }),
        (t.convertEditorStateToRaw = function(e) {
          return (0, a.convertToRaw)(e.getCurrentContent());
        }),
        (t.convertRawToEditorState = function(e, t) {
          try {
            return a.EditorState.createWithContent((0, a.convertFromRaw)(e), t);
          } catch (e) {
            return console.warn(e), a.EditorState.createEmpty(t);
          }
        });
    },
    bu5B: function(e, t, n) {
      'use strict';
      var r = n('lFJn'),
        o = n('Taje'),
        i = n('2NuI');
      function a(e, t) {
        var n = e.getBlockMap(),
          r = e.getEntityMap(),
          o = {},
          i = t.getStartKey(),
          a = t.getStartOffset(),
          l = n.get(i),
          c = s(r, l, a);
        c !== l && (o[i] = c);
        var u = t.getEndKey(),
          f = t.getEndOffset(),
          d = n.get(u);
        i === u && (d = c);
        var p = s(r, d, f);
        return (
          p !== d && (o[u] = p),
          Object.keys(o).length
            ? e.merge({ blockMap: n.merge(o), selectionAfter: t })
            : e.set('selectionAfter', t)
        );
      }
      function l(e, t, n) {
        var r;
        return (
          o(
            e,
            function(e, t) {
              return e.getEntity() === t.getEntity();
            },
            function(e) {
              return e.getEntity() === t;
            },
            function(e, t) {
              e <= n && t >= n && (r = { start: e, end: t });
            }
          ),
          'object' !== typeof r && i(!1),
          r
        );
      }
      function s(e, t, n) {
        var o = t.getCharacterList(),
          i = n > 0 ? o.get(n - 1) : void 0,
          a = n < o.count() ? o.get(n) : void 0,
          s = i ? i.getEntity() : void 0,
          c = a ? a.getEntity() : void 0;
        if (c && c === s) {
          var u = e.__get(c);
          if ('MUTABLE' !== u.getMutability()) {
            var f,
              d = l(o, c, n),
              p = d.start,
              h = d.end;
            while (p < h) (f = o.get(p)), (o = o.set(p, r.applyEntity(f, null))), p++;
            return t.set('characterList', o);
          }
        }
        return t;
      }
      e.exports = a;
    },
    c203: function(e, t, n) {
      'use strict';
      var r = n('/y0H'),
        o = n('fMZg'),
        i = n('2NuI');
      function a(e, t, n, r, o) {
        var i = r.getStartOffset(),
          a = r.getEndOffset(),
          s = t.getEntityAt(i),
          c = n.getEntityAt(a - 1);
        if (!s && !c) return r;
        var u = r;
        if (s && s === c) u = l(e, t, u, o, s, !0, !0);
        else if (s && c) {
          var f = l(e, t, u, o, s, !1, !0),
            d = l(e, n, u, o, c, !1, !1);
          u = u.merge({
            anchorOffset: f.getAnchorOffset(),
            focusOffset: d.getFocusOffset(),
            isBackward: !1,
          });
        } else if (s) {
          var p = l(e, t, u, o, s, !1, !0);
          u = u.merge({ anchorOffset: p.getStartOffset(), isBackward: !1 });
        } else if (c) {
          var h = l(e, n, u, o, c, !1, !1);
          u = u.merge({ focusOffset: h.getEndOffset(), isBackward: !1 });
        }
        return u;
      }
      function l(e, t, n, a, l, s, c) {
        var u = n.getStartOffset(),
          f = n.getEndOffset(),
          d = e.__get(l),
          p = d.getMutability(),
          h = c ? u : f;
        if ('MUTABLE' === p) return n;
        var g = o(t, l).filter(function(e) {
          return h <= e.end && h >= e.start;
        });
        1 != g.length && i(!1);
        var m = g[0];
        if ('IMMUTABLE' === p)
          return n.merge({ anchorOffset: m.start, focusOffset: m.end, isBackward: !1 });
        s || (c ? (f = m.end) : (u = m.start));
        var y = r.getRemovalRange(u, f, t.getText().slice(m.start, m.end), m.start, a);
        return n.merge({ anchorOffset: y.start, focusOffset: y.end, isBackward: !1 });
      }
      e.exports = a;
    },
    cX45: function(e, t, n) {
      'use strict';
      var r = n('oPSa');
      e.exports = r;
    },
    cmQj: function(e, t, n) {
      'use strict';
      function r(e, t) {
        (e._internalDrag = !1), e.setMode('drag'), t.preventDefault();
      }
      e.exports = r;
    },
    dyxW: function(e, t, n) {
      'use strict';
      var r = {
        stringify: function(e) {
          return '_' + String(e);
        },
        unstringify: function(e) {
          return e.slice(1);
        },
      };
      e.exports = r;
    },
    'e/Ok': function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ'),
        i = n('6Xrj'),
        a = n('hyAj'),
        l = n('DeIs');
      function s(e, t) {
        var n = e._latestEditorState,
          r = n.getSelection(),
          o = t.target,
          s = void 0;
        if (r.isCollapsed()) t.preventDefault();
        else {
          o instanceof Node && (s = l(i.getScrollParent(o)));
          var u = a(n);
          e.setClipboard(u),
            e.setMode('cut'),
            setTimeout(function() {
              e.restoreEditorDOM(s), e.exitCurrentMode(), e.update(c(n));
            }, 0);
        }
      }
      function c(e) {
        var t = r.removeRange(e.getCurrentContent(), e.getSelection(), 'forward');
        return o.push(e, t, 'remove-range');
      }
      e.exports = s;
    },
    eOzY: function(e, t, n) {
      'use strict';
      (function(t) {
        n('YBdB'), (e.exports = t.setImmediate);
      }.call(this, n('yLpj')));
    },
    evZB: function(e, t, n) {
      'use strict';
      var r =
        '[.,+*?$|#{}()\'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf]';
      e.exports = {
        getPunctuation: function() {
          return r;
        },
      };
    },
    fEyW: function(e, t, n) {
      'use strict';
      var r = n('JL7T'),
        o = n('JPcv'),
        i = n('VTBg'),
        a = (o.List, o.Map),
        l = function(e, t, n) {
          if (e) {
            var r = t.get(e);
            r && t.set(e, n(r));
          }
        },
        s = function(e, t) {
          var n = [];
          if (!e) return n;
          var r = t.get(e);
          while (r && r.getParentKey()) {
            var o = r.getParentKey();
            o && n.push(o), (r = o ? t.get(o) : null);
          }
          return n;
        },
        c = function(e, t) {
          var n = [];
          if (!e) return n;
          var r = i(e, t);
          while (r && t.get(r)) {
            var o = t.get(r);
            n.push(r), (r = o.getParentKey() ? i(o, t) : null);
          }
          return n;
        },
        u = function(e, t, n) {
          if (!e) return null;
          var r = n.get(e.getKey()).getNextSiblingKey();
          while (r && !t.get(r)) r = n.get(r).getNextSiblingKey() || null;
          return r;
        },
        f = function(e, t, n) {
          if (!e) return null;
          var r = n.get(e.getKey()).getPrevSiblingKey();
          while (r && !t.get(r)) r = n.get(r).getPrevSiblingKey() || null;
          return r;
        },
        d = function(e, t, n, r) {
          return e.withMutations(function(e) {
            l(t.getKey(), e, function(n) {
              return n.merge({ nextSibling: u(t, e, r), prevSibling: f(t, e, r) });
            }),
              l(n.getKey(), e, function(t) {
                return t.merge({ nextSibling: u(n, e, r), prevSibling: f(n, e, r) });
              }),
              s(t.getKey(), r).forEach(function(t) {
                return l(t, e, function(t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function(t) {
                      return e.get(t);
                    }),
                    nextSibling: u(t, e, r),
                    prevSibling: f(t, e, r),
                  });
                });
              }),
              l(t.getNextSiblingKey(), e, function(e) {
                return e.merge({ prevSibling: t.getPrevSiblingKey() });
              }),
              l(t.getPrevSiblingKey(), e, function(n) {
                return n.merge({ nextSibling: u(t, e, r) });
              }),
              l(n.getNextSiblingKey(), e, function(t) {
                return t.merge({ prevSibling: f(n, e, r) });
              }),
              l(n.getPrevSiblingKey(), e, function(e) {
                return e.merge({ nextSibling: n.getNextSiblingKey() });
              }),
              s(n.getKey(), r).forEach(function(t) {
                l(t, e, function(t) {
                  return t.merge({
                    children: t.getChildKeys().filter(function(t) {
                      return e.get(t);
                    }),
                    nextSibling: u(t, e, r),
                    prevSibling: f(t, e, r),
                  });
                });
              }),
              c(n, r).forEach(function(t) {
                return l(t, e, function(t) {
                  return t.merge({ nextSibling: u(t, e, r), prevSibling: f(t, e, r) });
                });
              });
          });
        },
        p = function(e, t) {
          if (t.isCollapsed()) return e;
          var n = e.getBlockMap(),
            o = t.getStartKey(),
            l = t.getStartOffset(),
            c = t.getEndKey(),
            u = t.getEndOffset(),
            f = n.get(o),
            p = n.get(c),
            g = f instanceof r,
            m = [];
          if (g) {
            var y = p.getChildKeys(),
              v = s(c, n);
            p.getNextSiblingKey() && (m = m.concat(v)),
              y.isEmpty() || (m = m.concat(v.concat([c]))),
              (m = m.concat(s(i(p, n), n)));
          }
          var b = void 0;
          b =
            f === p
              ? h(f.getCharacterList(), l, u)
              : f
                  .getCharacterList()
                  .slice(0, l)
                  .concat(p.getCharacterList().slice(u));
          var A = f.merge({
              text: f.getText().slice(0, l) + p.getText().slice(u),
              characterList: b,
            }),
            S = n
              .toSeq()
              .skipUntil(function(e, t) {
                return t === o;
              })
              .takeUntil(function(e, t) {
                return t === c;
              })
              .filter(function(e, t) {
                return -1 === m.indexOf(t);
              })
              .concat(a([[c, null]]))
              .map(function(e, t) {
                return t === o ? A : null;
              }),
            w = n.merge(S).filter(function(e) {
              return !!e;
            });
          return (
            g && (w = d(w, f, p, n)),
            e.merge({
              blockMap: w,
              selectionBefore: t,
              selectionAfter: t.merge({
                anchorKey: o,
                anchorOffset: l,
                focusKey: o,
                focusOffset: l,
                isBackward: !1,
              }),
            })
          );
        },
        h = function(e, t, n) {
          if (0 === t) while (t < n) (e = e.shift()), t++;
          else if (n === e.count()) while (n > t) (e = e.pop()), n--;
          else {
            var r = e.slice(0, t),
              o = e.slice(n);
            e = r.concat(o).toList();
          }
          return e;
        };
      e.exports = p;
    },
    fMZg: function(e, t, n) {
      'use strict';
      var r = n('2NuI');
      function o(e, t) {
        var n = [];
        return (
          e.findEntityRanges(
            function(e) {
              return e.getEntity() === t;
            },
            function(e, t) {
              n.push({ start: e, end: t });
            }
          ),
          n.length || r(!1),
          n
        );
      }
      e.exports = o;
    },
    fZAc: function(e, t, n) {
      'use strict';
      var r = n('mjHj'),
        o = n('2NuI'),
        i = {
          L:
            'A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u01ba\u01bb\u01bc-\u01bf\u01c0-\u01c3\u01c4-\u0293\u0294\u0295-\u02af\u02b0-\u02b8\u02bb-\u02c1\u02d0-\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376-\u0377\u037a\u037b-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0482\u048a-\u052f\u0531-\u0556\u0559\u055a-\u055f\u0561-\u0587\u0589\u0903\u0904-\u0939\u093b\u093d\u093e-\u0940\u0949-\u094c\u094e-\u094f\u0950\u0958-\u0961\u0964-\u0965\u0966-\u096f\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09be-\u09c0\u09c7-\u09c8\u09cb-\u09cc\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09ef\u09f0-\u09f1\u09f4-\u09f9\u09fa\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0abe-\u0ac0\u0ac9\u0acb-\u0acc\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0af0\u0b02-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47-\u0b48\u0b4b-\u0b4c\u0b57\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b70\u0b71\u0b72-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bbf\u0bc1-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bef\u0bf0-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c7f\u0c82-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cbe\u0cbf\u0cc0-\u0cc4\u0cc6\u0cc7-\u0cc8\u0cca-\u0ccb\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0cf1-\u0cf2\u0d02-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d3e-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d60-\u0d61\u0d66-\u0d6f\u0d70-\u0d75\u0d79\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0df4\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e45\u0e46\u0e4f\u0e50-\u0e59\u0e5a-\u0e5b\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f01-\u0f03\u0f04-\u0f12\u0f13\u0f14\u0f15-\u0f17\u0f1a-\u0f1f\u0f20-\u0f29\u0f2a-\u0f33\u0f34\u0f36\u0f38\u0f3e-\u0f3f\u0f40-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fcf\u0fd0-\u0fd4\u0fd5-\u0fd8\u0fd9-\u0fda\u1000-\u102a\u102b-\u102c\u1031\u1038\u103b-\u103c\u103f\u1040-\u1049\u104a-\u104f\u1050-\u1055\u1056-\u1057\u105a-\u105d\u1061\u1062-\u1064\u1065-\u1066\u1067-\u106d\u106e-\u1070\u1075-\u1081\u1083-\u1084\u1087-\u108c\u108e\u108f\u1090-\u1099\u109a-\u109c\u109e-\u109f\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fb\u10fc\u10fd-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u1368\u1369-\u137c\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166d-\u166e\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16eb-\u16ed\u16ee-\u16f0\u16f1-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735-\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7-\u17c8\u17d4-\u17d6\u17d7\u17d8-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930-\u1931\u1933-\u1938\u1946-\u194f\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c0\u19c1-\u19c7\u19c8-\u19c9\u19d0-\u19d9\u19da\u1a00-\u1a16\u1a19-\u1a1a\u1a1e-\u1a1f\u1a20-\u1a54\u1a55\u1a57\u1a61\u1a63-\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aa6\u1aa7\u1aa8-\u1aad\u1b04\u1b05-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b44\u1b45-\u1b4b\u1b50-\u1b59\u1b5a-\u1b60\u1b61-\u1b6a\u1b74-\u1b7c\u1b82\u1b83-\u1ba0\u1ba1\u1ba6-\u1ba7\u1baa\u1bae-\u1baf\u1bb0-\u1bb9\u1bba-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2-\u1bf3\u1bfc-\u1bff\u1c00-\u1c23\u1c24-\u1c2b\u1c34-\u1c35\u1c3b-\u1c3f\u1c40-\u1c49\u1c4d-\u1c4f\u1c50-\u1c59\u1c5a-\u1c77\u1c78-\u1c7d\u1c7e-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf1\u1cf2-\u1cf3\u1cf5-\u1cf6\u1d00-\u1d2b\u1d2c-\u1d6a\u1d6b-\u1d77\u1d78\u1d79-\u1d9a\u1d9b-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2134\u2135-\u2138\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2182\u2183-\u2184\u2185-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c7b\u2c7c-\u2c7d\u2c7e-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005\u3006\u3007\u3021-\u3029\u302e-\u302f\u3031-\u3035\u3038-\u303a\u303b\u303c\u3041-\u3096\u309d-\u309e\u309f\u30a1-\u30fa\u30fc-\u30fe\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u3191\u3192-\u3195\u3196-\u319f\u31a0-\u31ba\u31f0-\u31ff\u3200-\u321c\u3220-\u3229\u322a-\u3247\u3248-\u324f\u3260-\u327b\u327f\u3280-\u3289\u328a-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua014\ua015\ua016-\ua48c\ua4d0-\ua4f7\ua4f8-\ua4fd\ua4fe-\ua4ff\ua500-\ua60b\ua60c\ua610-\ua61f\ua620-\ua629\ua62a-\ua62b\ua640-\ua66d\ua66e\ua680-\ua69b\ua69c-\ua69d\ua6a0-\ua6e5\ua6e6-\ua6ef\ua6f2-\ua6f7\ua722-\ua76f\ua770\ua771-\ua787\ua789-\ua78a\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7\ua7f8-\ua7f9\ua7fa\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua823-\ua824\ua827\ua830-\ua835\ua836-\ua837\ua840-\ua873\ua880-\ua881\ua882-\ua8b3\ua8b4-\ua8c3\ua8ce-\ua8cf\ua8d0-\ua8d9\ua8f2-\ua8f7\ua8f8-\ua8fa\ua8fb\ua900-\ua909\ua90a-\ua925\ua92e-\ua92f\ua930-\ua946\ua952-\ua953\ua95f\ua960-\ua97c\ua983\ua984-\ua9b2\ua9b4-\ua9b5\ua9ba-\ua9bb\ua9bd-\ua9c0\ua9c1-\ua9cd\ua9cf\ua9d0-\ua9d9\ua9de-\ua9df\ua9e0-\ua9e4\ua9e6\ua9e7-\ua9ef\ua9f0-\ua9f9\ua9fa-\ua9fe\uaa00-\uaa28\uaa2f-\uaa30\uaa33-\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa5f\uaa60-\uaa6f\uaa70\uaa71-\uaa76\uaa77-\uaa79\uaa7a\uaa7b\uaa7d\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadc\uaadd\uaade-\uaadf\uaae0-\uaaea\uaaeb\uaaee-\uaaef\uaaf0-\uaaf1\uaaf2\uaaf3-\uaaf4\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5b\uab5c-\uab5f\uab64-\uab65\uabc0-\uabe2\uabe3-\uabe4\uabe6-\uabe7\uabe9-\uabea\uabeb\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\uf8ff\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uff6f\uff70\uff71-\uff9d\uff9e-\uff9f\uffa0-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc',
          R:
            '\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05cf\u05d0-\u05ea\u05eb-\u05ef\u05f0-\u05f2\u05f3-\u05f4\u05f5-\u05ff\u07c0-\u07c9\u07ca-\u07ea\u07f4-\u07f5\u07fa\u07fb-\u07ff\u0800-\u0815\u081a\u0824\u0828\u082e-\u082f\u0830-\u083e\u083f\u0840-\u0858\u085c-\u085d\u085e\u085f-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb37\ufb38-\ufb3c\ufb3d\ufb3e\ufb3f\ufb40-\ufb41\ufb42\ufb43-\ufb44\ufb45\ufb46-\ufb4f',
          AL:
            '\u0608\u060b\u060d\u061b\u061c\u061d\u061e-\u061f\u0620-\u063f\u0640\u0641-\u064a\u066d\u066e-\u066f\u0671-\u06d3\u06d4\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06fd-\u06fe\u06ff\u0700-\u070d\u070e\u070f\u0710\u0712-\u072f\u074b-\u074c\u074d-\u07a5\u07b1\u07b2-\u07bf\u08a0-\u08b2\u08b3-\u08e3\ufb50-\ufbb1\ufbb2-\ufbc1\ufbc2-\ufbd2\ufbd3-\ufd3d\ufd40-\ufd4f\ufd50-\ufd8f\ufd90-\ufd91\ufd92-\ufdc7\ufdc8-\ufdcf\ufdf0-\ufdfb\ufdfc\ufdfe-\ufdff\ufe70-\ufe74\ufe75\ufe76-\ufefc\ufefd-\ufefe',
        },
        a = new RegExp('[' + i.L + i.R + i.AL + ']'),
        l = new RegExp('[' + i.R + i.AL + ']');
      function s(e) {
        var t = a.exec(e);
        return null == t ? null : t[0];
      }
      function c(e) {
        var t = s(e);
        return null == t ? r.NEUTRAL : l.exec(t) ? r.RTL : r.LTR;
      }
      function u(e, t) {
        if (((t = t || r.NEUTRAL), !e.length)) return t;
        var n = c(e);
        return n === r.NEUTRAL ? t : n;
      }
      function f(e, t) {
        return t || (t = r.getGlobalDir()), r.isStrong(t) || o(!1), u(e, t);
      }
      function d(e, t) {
        return f(e, t) === r.LTR;
      }
      function p(e, t) {
        return f(e, t) === r.RTL;
      }
      var h = {
        firstStrongChar: s,
        firstStrongCharDir: c,
        resolveBlockDir: u,
        getDirection: f,
        isDirectionLTR: d,
        isDirectionRTL: p,
      };
      e.exports = h;
    },
    faBS: function(e, t, n) {
      'use strict';
      function r(e) {
        e || (e = '');
        var t = void 0,
          n = arguments.length;
        if (n > 1)
          for (var r = 1; r < n; r++) (t = arguments[r]), t && (e = (e ? e + ' ' : '') + t);
        return e;
      }
      e.exports = r;
    },
    fyOY: function(e, t, n) {
      'use strict';
      var r = n('lFJn'),
        o = n('M6rc'),
        i = n('cX45'),
        a = n('JPcv'),
        l = n('ilWa'),
        s = n('c203'),
        c = n('DYKh'),
        u = n('L2EA'),
        f = n('81KI'),
        d = n('2NuI'),
        p = n('Mh8y'),
        h = n('bu5B'),
        g = n('fEyW'),
        m = n('B0ab'),
        y = a.OrderedSet,
        v = {
          replaceText: function(e, t, n, o, i) {
            var a = h(e, t),
              l = g(a, t),
              s = r.create({ style: o || y(), entity: i || null });
            return f(l, l.getSelectionAfter(), n, s);
          },
          insertText: function(e, t, n, r, o) {
            return t.isCollapsed() || d(!1), v.replaceText(e, t, n, r, o);
          },
          moveText: function(e, t, n) {
            var r = c(e, t),
              o = v.removeRange(e, t, 'backward');
            return v.replaceWithFragment(o, n, r);
          },
          replaceWithFragment: function(e, t, n) {
            var r = h(e, t),
              o = g(r, t);
            return u(o, o.getSelectionAfter(), n);
          },
          removeRange: function(e, t, n) {
            var r = void 0,
              o = void 0,
              a = void 0,
              l = void 0;
            t.getIsBackward() &&
              (t = t.merge({
                anchorKey: t.getFocusKey(),
                anchorOffset: t.getFocusOffset(),
                focusKey: t.getAnchorKey(),
                focusOffset: t.getAnchorOffset(),
                isBackward: !1,
              })),
              (r = t.getAnchorKey()),
              (o = t.getFocusKey()),
              (a = e.getBlockForKey(r)),
              (l = e.getBlockForKey(o));
            var c = t.getStartOffset(),
              u = t.getEndOffset(),
              f = a.getEntityAt(c),
              d = l.getEntityAt(u - 1);
            if (r === o && f && f === d) {
              var p = s(e.getEntityMap(), a, l, t, n);
              return g(e, p);
            }
            var m = t;
            i.draft_segmented_entities_behavior && (m = s(e.getEntityMap(), a, l, t, n));
            var y = h(e, m);
            return g(y, m);
          },
          splitBlock: function(e, t) {
            var n = h(e, t),
              r = g(n, t);
            return m(r, r.getSelectionAfter());
          },
          applyInlineStyle: function(e, t, n) {
            return o.add(e, t, n);
          },
          removeInlineStyle: function(e, t, n) {
            return o.remove(e, t, n);
          },
          setBlockType: function(e, t, n) {
            return p(e, t, function(e) {
              return e.merge({ type: n, depth: 0 });
            });
          },
          setBlockData: function(e, t, n) {
            return p(e, t, function(e) {
              return e.merge({ data: n });
            });
          },
          mergeBlockData: function(e, t, n) {
            return p(e, t, function(e) {
              return e.merge({ data: e.getData().merge(n) });
            });
          },
          applyEntity: function(e, t, n) {
            var r = h(e, t);
            return l(r, t, n);
          },
        };
      e.exports = v;
    },
    fyRy: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('YeVe'),
        a = n('lFJn'),
        l = n('8uQm'),
        s = n('JL7T'),
        c = n('cX45'),
        u = n('fyOY'),
        f = n('3sOJ'),
        d = n('JPcv'),
        p = (n('hMpd'), n('rJY1')),
        h = n('I2Ug'),
        g = c.draft_tree_data_support,
        m = g ? s : l,
        y = d.List,
        v = d.Repeat,
        b = {
          insertAtomicBlock: function(e, t, n) {
            var r = e.getCurrentContent(),
              l = e.getSelection(),
              s = u.removeRange(r, l, 'backward'),
              c = s.getSelectionAfter(),
              d = u.splitBlock(s, c),
              h = d.getSelectionAfter(),
              b = u.setBlockType(d, h, 'atomic'),
              A = a.create({ entity: t }),
              S = { key: p(), type: 'atomic', text: n, characterList: y(v(A, n.length)) },
              w = { key: p(), type: 'unstyled' };
            g && ((S = o({}, S, { nextSibling: w.key })), (w = o({}, w, { prevSibling: S.key })));
            var E = [new m(S), new m(w)],
              k = i.createFromArray(E),
              x = u.replaceWithFragment(b, h, k),
              C = x.merge({
                selectionBefore: l,
                selectionAfter: x.getSelectionAfter().set('hasFocus', !0),
              });
            return f.push(e, C, 'insert-fragment');
          },
          moveAtomicBlock: function(e, t, n, r) {
            var o = e.getCurrentContent(),
              i = e.getSelection(),
              a = void 0;
            if ('before' === r || 'after' === r) {
              var l = o.getBlockForKey('before' === r ? n.getStartKey() : n.getEndKey());
              a = h(o, t, l, r);
            } else {
              var s = u.removeRange(o, n, 'backward'),
                c = s.getSelectionAfter(),
                d = s.getBlockForKey(c.getFocusKey());
              if (0 === c.getStartOffset()) a = h(s, t, d, 'before');
              else if (c.getEndOffset() === d.getLength()) a = h(s, t, d, 'after');
              else {
                var p = u.splitBlock(s, c),
                  g = p.getSelectionAfter(),
                  m = p.getBlockForKey(g.getFocusKey());
                a = h(p, t, m, 'before');
              }
            }
            var y = a.merge({
              selectionBefore: i,
              selectionAfter: a.getSelectionAfter().set('hasFocus', !0),
            });
            return f.push(e, y, 'move-block');
          },
        };
      e.exports = b;
    },
    gWRK: function(e, t, n) {
      'use strict';
      var r = function(e) {
        if (null != e) return e;
        throw new Error('Got unexpected null or undefined');
      };
      e.exports = r;
    },
    'h/2P': function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('L0q3'),
          o = n('fyOY'),
          i = n('3sOJ'),
          a = n('CYTE'),
          l = n('hpMJ'),
          s = n('T401'),
          c = n('Yrnb'),
          u = n('gWRK'),
          f = n('eOzY'),
          d = "'",
          p = '/',
          h = a.isBrowser('Firefox');
        function g(e) {
          return h && (e == d || e == p);
        }
        function m(e, t, n, r) {
          var a = o.replaceText(e.getCurrentContent(), e.getSelection(), t, n, r);
          return i.push(e, a, 'insert-characters');
        }
        function y(e, n) {
          void 0 !== e._pendingStateFromBeforeInput &&
            (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
          var o = e._latestEditorState,
            a = n.data;
          if (a)
            if (e.props.handleBeforeInput && s(e.props.handleBeforeInput(a, o))) n.preventDefault();
            else {
              var d = o.getSelection(),
                p = d.getStartOffset(),
                h = d.getEndOffset(),
                y = d.getAnchorKey();
              if (d.isCollapsed()) {
                var v = m(
                    o,
                    a,
                    o.getCurrentInlineStyle(),
                    l(o.getCurrentContent(), o.getSelection())
                  ),
                  b = !1;
                if ((b || (b = c(e._latestCommittedEditorState)), !b)) {
                  var A = t.getSelection();
                  if (A.anchorNode && A.anchorNode.nodeType === Node.TEXT_NODE) {
                    var S = A.anchorNode.parentNode;
                    b =
                      'SPAN' === S.nodeName &&
                      S.firstChild.nodeType === Node.TEXT_NODE &&
                      -1 !== S.firstChild.nodeValue.indexOf('\t');
                  }
                }
                if (!b) {
                  var w = r.getFingerprint(o.getBlockTree(y)),
                    E = r.getFingerprint(v.getBlockTree(y));
                  b = w !== E;
                }
                if (
                  (b || (b = g(a)),
                  b || (b = u(v.getDirectionMap()).get(y) !== u(o.getDirectionMap()).get(y)),
                  b)
                )
                  return n.preventDefault(), void e.update(v);
                (v = i.set(v, { nativelyRenderedContent: v.getCurrentContent() })),
                  (e._pendingStateFromBeforeInput = v),
                  f(function() {
                    void 0 !== e._pendingStateFromBeforeInput &&
                      (e.update(e._pendingStateFromBeforeInput),
                      (e._pendingStateFromBeforeInput = void 0));
                  });
              } else {
                n.preventDefault();
                var k = o
                  .getCurrentContent()
                  .getPlainText()
                  .slice(p, h);
                a === k
                  ? e.update(i.forceSelection(o, d.merge({ focusOffset: h })))
                  : e.update(
                      m(o, a, o.getCurrentInlineStyle(), l(o.getCurrentContent(), o.getSelection()))
                    );
              }
            }
        }
        e.exports = y;
      }.call(this, n('yLpj')));
    },
    h4BG: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = i(n('Nj+S')),
        o = i(n('tNfR'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return c(e) || s(e) || l();
      }
      function l() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function s(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function c(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
      }
      var u = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
          '\n': '<br/>',
        },
        f = function(e) {
          for (
            var t = a(e.text),
              n = e.entityRanges.sort(o['default']),
              i = e.inlineStyleRanges.sort(o['default']),
              l = '',
              s = function(e) {
                var o = t[e];
                if (void 0 !== u[o]) {
                  var s = u[o],
                    c = a(l).length;
                  l += s;
                  var f = function(e) {
                    return (0, r['default'])(e, c, o.length, s.length, 0, 0);
                  };
                  (n = n.map(f)), (i = i.map(f));
                } else l += o;
              },
              c = 0;
            c < t.length;
            c++
          )
            s(c);
          return Object.assign({}, e, { text: l, inlineStyleRanges: i, entityRanges: n });
        };
      t['default'] = f;
    },
    hMpd: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('JPcv'),
        l = a.Record,
        s = {
          anchorKey: '',
          anchorOffset: 0,
          focusKey: '',
          focusOffset: 0,
          isBackward: !1,
          hasFocus: !1,
        },
        c = l(s),
        u = (function(e) {
          function t() {
            return r(this, t), o(this, e.apply(this, arguments));
          }
          return (
            i(t, e),
            (t.prototype.serialize = function() {
              return (
                'Anchor: ' +
                this.getAnchorKey() +
                ':' +
                this.getAnchorOffset() +
                ', Focus: ' +
                this.getFocusKey() +
                ':' +
                this.getFocusOffset() +
                ', Is Backward: ' +
                String(this.getIsBackward()) +
                ', Has Focus: ' +
                String(this.getHasFocus())
              );
            }),
            (t.prototype.getAnchorKey = function() {
              return this.get('anchorKey');
            }),
            (t.prototype.getAnchorOffset = function() {
              return this.get('anchorOffset');
            }),
            (t.prototype.getFocusKey = function() {
              return this.get('focusKey');
            }),
            (t.prototype.getFocusOffset = function() {
              return this.get('focusOffset');
            }),
            (t.prototype.getIsBackward = function() {
              return this.get('isBackward');
            }),
            (t.prototype.getHasFocus = function() {
              return this.get('hasFocus');
            }),
            (t.prototype.hasEdgeWithin = function(e, t, n) {
              var r = this.getAnchorKey(),
                o = this.getFocusKey();
              if (r === o && r === e) {
                var i = this.getStartOffset(),
                  a = this.getEndOffset();
                return t <= a && i <= n;
              }
              if (e !== r && e !== o) return !1;
              var l = e === r ? this.getAnchorOffset() : this.getFocusOffset();
              return t <= l && n >= l;
            }),
            (t.prototype.isCollapsed = function() {
              return (
                this.getAnchorKey() === this.getFocusKey() &&
                this.getAnchorOffset() === this.getFocusOffset()
              );
            }),
            (t.prototype.getStartKey = function() {
              return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
            }),
            (t.prototype.getStartOffset = function() {
              return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
            }),
            (t.prototype.getEndKey = function() {
              return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
            }),
            (t.prototype.getEndOffset = function() {
              return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
            }),
            (t.createEmpty = function(e) {
              return new t({
                anchorKey: e,
                anchorOffset: 0,
                focusKey: e,
                focusOffset: 0,
                isBackward: !1,
                hasFocus: !1,
              });
            }),
            t
          );
        })(c);
      e.exports = u;
    },
    hpMJ: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n;
        if (t.isCollapsed()) {
          var r = t.getAnchorKey(),
            i = t.getAnchorOffset();
          return i > 0
            ? ((n = e.getBlockForKey(r).getEntityAt(i - 1)),
              n !== e.getBlockForKey(r).getEntityAt(i) ? null : o(e.getEntityMap(), n))
            : null;
        }
        var a = t.getStartKey(),
          l = t.getStartOffset(),
          s = e.getBlockForKey(a);
        return (n = l === s.getLength() ? null : s.getEntityAt(l)), o(e.getEntityMap(), n);
      }
      function o(e, t) {
        if (t) {
          var n = e.__get(t);
          return 'MUTABLE' === n.getMutability() ? t : null;
        }
        return null;
      }
      e.exports = r;
    },
    hq3H: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = s);
      var r = a(n('QLaP')),
        o = a(n('q1tI')),
        i = a(n('KAy6'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
      ];
      function s(e) {
        if (-1 !== l.indexOf(e.type)) return i['default'].renderToStaticMarkup(e);
        var t = i['default']
          .renderToStaticMarkup(o['default'].cloneElement(e, {}, '\r'))
          .split('\r');
        return (
          (0, r['default'])(
            t.length > 1,
            'convertToHTML: Element of type '.concat(e.type, ' must render children')
          ),
          (0, r['default'])(
            t.length < 3,
            'convertToHTML: Element of type '.concat(
              e.type,
              ' cannot use carriage return character'
            )
          ),
          { start: t[0], end: t[1] }
        );
      }
    },
    hyAj: function(e, t, n) {
      'use strict';
      var r = n('DYKh');
      function o(e) {
        var t = e.getSelection();
        return t.isCollapsed() ? null : r(e.getCurrentContent(), t);
      }
      e.exports = o;
    },
    iatg: function(e, t, n) {
      'use strict';
      var r = n('TWoB');
      function o(e) {
        var t = e.ownerDocument.documentElement;
        if (!('getBoundingClientRect' in e) || !r(t, e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        var n = e.getBoundingClientRect();
        return {
          left: Math.round(n.left) - t.clientLeft,
          right: Math.round(n.right) - t.clientLeft,
          top: Math.round(n.top) - t.clientTop,
          bottom: Math.round(n.bottom) - t.clientTop,
        };
      }
      e.exports = o;
    },
    ilWa: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = n('vYwu');
      function i(e, t, n) {
        var i = e.getBlockMap(),
          a = t.getStartKey(),
          l = t.getStartOffset(),
          s = t.getEndKey(),
          c = t.getEndOffset(),
          u = i
            .skipUntil(function(e, t) {
              return t === a;
            })
            .takeUntil(function(e, t) {
              return t === s;
            })
            .toOrderedMap()
            .merge(r.OrderedMap([[s, i.get(s)]]))
            .map(function(e, t) {
              var r = t === a ? l : 0,
                i = t === s ? c : e.getLength();
              return o(e, r, i, n);
            });
        return e.merge({ blockMap: i.merge(u), selectionBefore: t, selectionAfter: t });
      }
      e.exports = i;
    },
    jH4x: function(e, t, n) {
      'use strict';
      var r = n('3sOJ');
      function o(e, t) {
        e.setMode('composite'),
          e.update(r.set(e._latestEditorState, { inCompositionMode: !0 })),
          e._onCompositionStart(t);
      }
      e.exports = o;
    },
    jLRO: function(e, t, n) {
      'use strict';
      var r = n('2NuI'),
        o = 55296,
        i = 56319,
        a = 56320,
        l = 57343,
        s = /[\uD800-\uDFFF]/;
      function c(e) {
        return o <= e && e <= l;
      }
      function u(e, t) {
        if (((0 <= t && t < e.length) || r(!1), t + 1 === e.length)) return !1;
        var n = e.charCodeAt(t),
          s = e.charCodeAt(t + 1);
        return o <= n && n <= i && a <= s && s <= l;
      }
      function f(e) {
        return s.test(e);
      }
      function d(e, t) {
        return 1 + c(e.charCodeAt(t));
      }
      function p(e) {
        if (!f(e)) return e.length;
        for (var t = 0, n = 0; n < e.length; n += d(e, n)) t++;
        return t;
      }
      function h(e, t, n) {
        if (((t = t || 0), (n = void 0 === n ? 1 / 0 : n || 0), !f(e))) return e.substr(t, n);
        var r = e.length;
        if (r <= 0 || t > r || n <= 0) return '';
        var o = 0;
        if (t > 0) {
          for (; t > 0 && o < r; t--) o += d(e, o);
          if (o >= r) return '';
        } else if (t < 0) {
          for (o = r; t < 0 && 0 < o; t++) o -= d(e, o - 1);
          o < 0 && (o = 0);
        }
        var i = r;
        if (n < r) for (i = o; n > 0 && i < r; n--) i += d(e, i);
        return e.substring(o, i);
      }
      function g(e, t, n) {
        (t = t || 0), (n = void 0 === n ? 1 / 0 : n || 0), t < 0 && (t = 0), n < 0 && (n = 0);
        var r = Math.abs(n - t);
        return (t = t < n ? t : n), h(e, t, r);
      }
      function m(e) {
        for (var t = [], n = 0; n < e.length; n += d(e, n)) t.push(e.codePointAt(n));
        return t;
      }
      var y = {
        getCodePoints: m,
        getUTF16Length: d,
        hasSurrogateUnit: f,
        isCodeUnitInSurrogateRange: c,
        isSurrogatePair: u,
        strlen: p,
        substring: g,
        substr: h,
      };
      e.exports = y;
    },
    jl1W: function(e, t, n) {
      'use strict';
      var r = n('cX45'),
        o = n('fyOY'),
        i = n('3sOJ'),
        a = n('7wDu'),
        l = n('hpMJ'),
        s = n('T401'),
        c = n('Yrnb'),
        u = 20,
        f = !1,
        d = !1,
        p = '',
        h = {
          onBeforeInput: function(e, t) {
            p = (p || '') + t.data;
          },
          onCompositionStart: function(e) {
            d = !0;
          },
          onCompositionEnd: function(e) {
            (f = !1),
              (d = !1),
              setTimeout(function() {
                f || h.resolveComposition(e);
              }, u);
          },
          onKeyDown: function(e, t) {
            if (!d) return h.resolveComposition(e), void e._onKeyDown(t);
            (t.which !== a.RIGHT && t.which !== a.LEFT) || t.preventDefault();
          },
          onKeyPress: function(e, t) {
            t.which === a.RETURN && t.preventDefault();
          },
          resolveComposition: function(e) {
            if (!d) {
              f = !0;
              var t = p;
              p = '';
              var n = i.set(e._latestEditorState, { inCompositionMode: !1 }),
                a = n.getCurrentInlineStyle(),
                u = l(n.getCurrentContent(), n.getSelection()),
                h = !t || c(n) || a.size > 0 || null !== u;
              if ((h && e.restoreEditorDOM(), e.exitCurrentMode(), t)) {
                if (
                  r.draft_handlebeforeinput_composed_text &&
                  e.props.handleBeforeInput &&
                  s(e.props.handleBeforeInput(t, n))
                )
                  return;
                var g = o.replaceText(n.getCurrentContent(), n.getSelection(), t, a, u);
                e.update(i.push(n, g, 'insert-characters'));
              } else h && e.update(i.set(n, { nativelyRenderedContent: null, forceSelection: !0 }));
            }
          },
        };
      e.exports = h;
    },
    jl2H: function(e, t, n) {
      'use strict';
      function r(e) {
        if (
          ((e = e || ('undefined' !== typeof document ? document : void 0)),
          'undefined' === typeof e)
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      e.exports = r;
    },
    jyDg: function(e, t, n) {
      'use strict';
      (function(t) {
        var r = n('cX45'),
          o = n('fyOY'),
          i = n('Iq8E'),
          a = n('3sOJ'),
          l = n('CYTE'),
          s = n('kc9Y'),
          c = n('gWRK'),
          u = l.isEngine('Gecko'),
          f = '\n\n';
        function d(e) {
          void 0 !== e._pendingStateFromBeforeInput &&
            (e.update(e._pendingStateFromBeforeInput), (e._pendingStateFromBeforeInput = void 0));
          var n = t.getSelection(),
            l = n.anchorNode,
            d = n.isCollapsed,
            p = l.nodeType !== Node.TEXT_NODE,
            h = l.nodeType !== Node.TEXT_NODE && l.nodeType !== Node.ELEMENT_NODE;
          if (r.draft_killswitch_allow_nontextnodes) {
            if (p) return;
          } else if (h) return;
          if (
            l.nodeType === Node.TEXT_NODE &&
            (null !== l.previousSibling || null !== l.nextSibling)
          ) {
            var g = l.parentNode;
            l.nodeValue = g.textContent;
            for (var m = g.firstChild; null !== m; m = m.nextSibling) m !== l && g.removeChild(m);
          }
          var y = l.textContent,
            v = e._latestEditorState,
            b = c(s(l)),
            A = i.decode(b),
            S = A.blockKey,
            w = A.decoratorKey,
            E = A.leafKey,
            k = v.getBlockTree(S).getIn([w, 'leaves', E]),
            x = k.start,
            C = k.end,
            _ = v.getCurrentContent(),
            I = _.getBlockForKey(S),
            O = I.getText().slice(x, C);
          if ((y.endsWith(f) && (y = y.slice(0, -1)), y !== O)) {
            var T,
              M,
              D,
              B,
              L = v.getSelection(),
              N = L.merge({ anchorOffset: x, focusOffset: C, isBackward: !1 }),
              F = I.getEntityAt(x),
              R = F && _.getEntity(F),
              P = R && R.getMutability(),
              K = 'MUTABLE' === P,
              j = K ? 'spellcheck-change' : 'apply-entity',
              z = o.replaceText(_, N, y, I.getInlineStyleAt(x), K ? I.getEntityAt(x) : null);
            if (u)
              (T = n.anchorOffset),
                (M = n.focusOffset),
                (D = x + Math.min(T, M)),
                (B = D + Math.abs(T - M)),
                (T = D),
                (M = B);
            else {
              var U = y.length - O.length;
              (D = L.getStartOffset()), (B = L.getEndOffset()), (T = d ? B + U : D), (M = B + U);
            }
            var H = z.merge({
              selectionBefore: _.getSelectionAfter(),
              selectionAfter: L.merge({ anchorOffset: T, focusOffset: M }),
            });
            e.update(a.push(v, H, j));
          }
        }
        e.exports = d;
      }.call(this, n('yLpj')));
    },
    kDkJ: function(e, t, n) {
      'use strict';
      var r = n('YeVe'),
        o = n('lFJn'),
        i = n('QvxS'),
        a = n('fyOY'),
        l = n('PQhE'),
        s = n('3sOJ'),
        c = n('Nx4+'),
        u = n('hpMJ'),
        f = n('HKS5'),
        d = n('T401'),
        p = n('RK+W');
      function h(e, t) {
        t.preventDefault();
        var n = new i(t.clipboardData);
        if (!n.isRichText()) {
          var h = n.getFiles(),
            y = n.getText();
          if (h.length > 0) {
            if (e.props.handlePastedFiles && d(e.props.handlePastedFiles(h))) return;
            return void f(h, function(t) {
              if (((t = t || y), t)) {
                var n = e._latestEditorState,
                  i = p(t),
                  f = o.create({
                    style: n.getCurrentInlineStyle(),
                    entity: u(n.getCurrentContent(), n.getSelection()),
                  }),
                  d = c.getCurrentBlockType(n),
                  h = l.processText(i, f, d),
                  g = r.createFromArray(h),
                  m = a.replaceWithFragment(n.getCurrentContent(), n.getSelection(), g);
                e.update(s.push(n, m, 'insert-fragment'));
              }
            });
          }
        }
        var v = [],
          b = n.getText(),
          A = n.getHTML(),
          S = e._latestEditorState;
        if (!e.props.handlePastedText || !d(e.props.handlePastedText(b, A, S))) {
          if ((b && (v = p(b)), !e.props.stripPastedStyles)) {
            var w = e.getClipboard();
            if (n.isRichText() && w) {
              if (
                -1 !== A.indexOf(e.getEditorKey()) ||
                (1 === v.length && 1 === w.size && w.first().getText() === b)
              )
                return void e.update(g(e._latestEditorState, w));
            } else if (
              w &&
              n.types.includes('com.apple.webarchive') &&
              !n.types.includes('text/html') &&
              m(v, w)
            )
              return void e.update(g(e._latestEditorState, w));
            if (A) {
              var E = l.processHTML(A, e.props.blockRenderMap);
              if (E) {
                var k = E.contentBlocks,
                  x = E.entityMap;
                if (k) {
                  var C = r.createFromArray(k);
                  return void e.update(g(e._latestEditorState, C, x));
                }
              }
            }
            e.setClipboard(null);
          }
          if (v.length) {
            var _ = o.create({
                style: S.getCurrentInlineStyle(),
                entity: u(S.getCurrentContent(), S.getSelection()),
              }),
              I = c.getCurrentBlockType(S),
              O = l.processText(v, _, I),
              T = r.createFromArray(O);
            e.update(g(e._latestEditorState, T));
          }
        }
      }
      function g(e, t, n) {
        var r = a.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
        return s.push(e, r.set('entityMap', n), 'insert-fragment');
      }
      function m(e, t) {
        return (
          e.length === t.size &&
          t.valueSeq().every(function(t, n) {
            return t.getText() === e[n];
          })
        );
      }
      e.exports = h;
    },
    kWjT: function(e, t, n) {
      'use strict';
      function r(e, t) {
        var n = e.getSelection(),
          r = e.getCurrentContent(),
          o = n.getStartKey(),
          i = n.getStartOffset(),
          a = o,
          l = 0;
        if (t > i) {
          var s = r.getKeyBefore(o);
          if (null == s) a = o;
          else {
            a = s;
            var c = r.getBlockForKey(s);
            l = c.getText().length;
          }
        } else l = i - t;
        return n.merge({ focusKey: a, focusOffset: l, isBackward: !0 });
      }
      e.exports = r;
    },
    kc9Y: function(e, t, n) {
      'use strict';
      var r = n('zORg');
      function o(e) {
        var t = e;
        while (t && t !== document.documentElement) {
          var n = r(t);
          if (null != n) return n;
          t = t.parentNode;
        }
        return null;
      }
      e.exports = o;
    },
    l7dP: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = function(e, t) {
        return function() {
          var n = e.apply(void 0, arguments);
          return void 0 !== n && null !== n ? n : t.apply(void 0, arguments);
        };
      };
      t['default'] = r;
    },
    lFJn: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('JPcv'),
        l = a.Map,
        s = a.OrderedSet,
        c = a.Record,
        u = s(),
        f = { style: u, entity: null },
        d = c(f),
        p = (function(e) {
          function t() {
            return r(this, t), o(this, e.apply(this, arguments));
          }
          return (
            i(t, e),
            (t.prototype.getStyle = function() {
              return this.get('style');
            }),
            (t.prototype.getEntity = function() {
              return this.get('entity');
            }),
            (t.prototype.hasStyle = function(e) {
              return this.getStyle().includes(e);
            }),
            (t.applyStyle = function(e, n) {
              var r = e.set('style', e.getStyle().add(n));
              return t.create(r);
            }),
            (t.removeStyle = function(e, n) {
              var r = e.set('style', e.getStyle().remove(n));
              return t.create(r);
            }),
            (t.applyEntity = function(e, n) {
              var r = e.getEntity() === n ? e : e.set('entity', n);
              return t.create(r);
            }),
            (t.create = function(e) {
              if (!e) return h;
              var n = { style: u, entity: null },
                r = l(n).merge(e),
                o = g.get(r);
              if (o) return o;
              var i = new t(r);
              return (g = g.set(r, i)), i;
            }),
            t
          );
        })(d),
        h = new p(),
        g = l([[l(f), h]]);
      (p.EMPTY = h), (e.exports = p);
    },
    mjHj: function(e, t, n) {
      'use strict';
      var r = n('2NuI'),
        o = 'NEUTRAL',
        i = 'LTR',
        a = 'RTL',
        l = null;
      function s(e) {
        return e === i || e === a;
      }
      function c(e) {
        return s(e) || r(!1), e === i ? 'ltr' : 'rtl';
      }
      function u(e, t) {
        return s(e) || r(!1), s(t) || r(!1), e === t ? null : c(e);
      }
      function f(e) {
        l = e;
      }
      function d() {
        f(i);
      }
      function p() {
        return l || this.initGlobalDir(), l || r(!1), l;
      }
      var h = {
        NEUTRAL: o,
        LTR: i,
        RTL: a,
        isStrong: s,
        getHTMLDir: c,
        getHTMLDirIfDifferent: u,
        setGlobalDir: f,
        initGlobalDir: d,
        getGlobalDir: p,
      };
      e.exports = h;
    },
    'nO5+': function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getFromHTMLConfig = t.getToHTMLConfig = t.blocks = t.getHexColor = t.defaultFontFamilies = t.namedColors = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = n('q1tI'),
        i = a(o);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var s = (t.namedColors = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          gold: '#ffd700',
          goldenrod: '#daa520',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          'indianred ': '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          lavender: '#e6e6fa',
          lavenderblush: '#fff0f5',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrodyellow: '#fafad2',
          lightgrey: '#d3d3d3',
          lightgreen: '#90ee90',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370d8',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#d87093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32',
        }),
        c = function(e) {
          return e.split('-')[1];
        },
        u = function(e) {
          return e + 'px';
        },
        f = function(e) {
          return e.replace('px', '');
        },
        d = ['style'],
        p = [
          'style',
          'href',
          'target',
          'alt',
          'title',
          'id',
          'controls',
          'autoplay',
          'loop',
          'poster',
        ],
        h = function(e) {
          return Object.keys(e)
            .reduce(function(t, n) {
              return t + ' ' + n + '="' + e[n] + '"';
            }, '')
            .replace(/^\s$/, '');
        },
        g =
          ((t.defaultFontFamilies = [
            { name: 'Araial', family: 'Arial, Helvetica, sans-serif' },
            { name: 'Georgia', family: 'Georgia, serif' },
            { name: 'Impact', family: 'Impact, serif' },
            { name: 'Monospace', family: '"Courier New", Courier, monospace' },
            {
              name: 'Tahoma',
              family: "tahoma, arial, 'Hiragino Sans GB', \u5b8b\u4f53, sans-serif",
            },
          ]),
          (t.getHexColor = function(e) {
            if (
              ((e = e
                .replace('color:', '')
                .replace(';', '')
                .replace(' ', '')),
              /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(e))
            )
              return e;
            if (s[e]) return s[e];
            if (0 === e.indexOf('rgb')) {
              var t = e.split(','),
                n =
                  t.length < 3
                    ? null
                    : '#' +
                      [t[0], t[1], t[2]]
                        .map(function(e) {
                          var t = parseInt(e.replace(/\D/g, ''), 10).toString(16);
                          return 1 === t.length ? '0' + t : t;
                        })
                        .join('');
              return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(n) ? n : null;
            }
            return null;
          })),
        m = (t.blocks = {
          'header-one': 'h1',
          'header-two': 'h2',
          'header-three': 'h3',
          'header-four': 'h4',
          'header-five': 'h5',
          'header-six': 'h6',
          unstyled: 'p',
          blockquote: 'blockquote',
        }),
        y = Object.keys(m),
        v = y.map(function(e) {
          return m[e];
        }),
        b = function(e, t, n) {
          if (!e || !e.key) return i.default.createElement('p', null);
          var o = t.getBlockForKey(e.key),
            a = n.class,
            s = l(n, ['class']);
          if (((s.className = a), !o)) return i.default.createElement('p', null);
          var c = o.getEntityAt(0);
          if (!c) return i.default.createElement('p', null);
          var u = t.getEntity(c),
            f = u.getType().toLowerCase(),
            d = e.data,
            p = d.float,
            h = d.alignment,
            g = u.getData(),
            m = g.url,
            y = g.link,
            v = g.link_target,
            b = g.width,
            A = g.height,
            S = g.meta;
          if ('image' === f) {
            var w = {},
              E = '';
            return (
              p
                ? ((w.float = p), (E += ' float-' + p))
                : h && ((w.textAlign = h), (E += ' align-' + h)),
              y
                ? i.default.createElement(
                    'div',
                    { className: 'media-wrap image-wrap' + E, style: w },
                    i.default.createElement(
                      'a',
                      { style: { display: 'inline-block' }, href: y, target: v },
                      i.default.createElement(
                        'img',
                        r({}, s, S, { src: m, width: b, height: A, style: { width: b, height: A } })
                      )
                    )
                  )
                : i.default.createElement(
                    'div',
                    { className: 'media-wrap image-wrap' + E, style: w },
                    i.default.createElement(
                      'img',
                      r({}, s, S, { src: m, width: b, height: A, style: { width: b, height: A } })
                    )
                  )
            );
          }
          return 'audio' === f
            ? i.default.createElement(
                'div',
                { className: 'media-wrap audio-wrap' },
                i.default.createElement('audio', r({ controls: !0 }, s, S, { src: m }))
              )
            : 'video' === f
            ? i.default.createElement(
                'div',
                { className: 'media-wrap video-wrap' },
                i.default.createElement(
                  'video',
                  r({ controls: !0 }, s, S, { src: m, width: b, height: A })
                )
              )
            : 'embed' === f
            ? i.default.createElement(
                'div',
                { className: 'media-wrap embed-wrap' },
                i.default.createElement('div', { dangerouslySetInnerHTML: { __html: m } })
              )
            : 'hr' === f
            ? i.default.createElement('hr', null)
            : i.default.createElement('p', null);
        },
        A = function(e) {
          return function(t, n) {
            var o = e.entityExportFn,
              a = t.type.toLowerCase();
            if (o) {
              var s = o(t, n);
              if (s) return s;
            }
            if ('link' === a) {
              var c = t.data.nodeAttributes || {},
                u = c.class,
                f = l(c, ['class']);
              return (
                (f.className = u),
                i.default.createElement('a', r({ href: t.data.href, target: t.data.target }, f))
              );
            }
          };
        },
        S = function(e) {
          return function(t) {
            var n = e.unitExportFn || u;
            if (e.styleExportFn) {
              var r = e.styleExportFn(t, e);
              if (r) return r;
            }
            if (((t = t.toLowerCase()), 'strikethrough' === t))
              return i.default.createElement('span', { style: { textDecoration: 'line-through' } });
            if ('superscript' === t) return i.default.createElement('sup', null);
            if ('subscript' === t) return i.default.createElement('sub', null);
            if (0 === t.indexOf('color-'))
              return i.default.createElement('span', { style: { color: '#' + c(t) } });
            if (0 === t.indexOf('bgcolor-'))
              return i.default.createElement('span', { style: { backgroundColor: '#' + c(t) } });
            if (0 === t.indexOf('fontsize-'))
              return i.default.createElement('span', {
                style: { fontSize: n(c(t), 'font-size', 'html') },
              });
            if (0 === t.indexOf('lineheight-'))
              return i.default.createElement('span', {
                style: { lineHeight: n(c(t), 'line-height', 'html') },
              });
            if (0 === t.indexOf('letterspacing-'))
              return i.default.createElement('span', {
                style: { letterSpacing: n(c(t), 'letter-spacing', 'html') },
              });
            if (0 === t.indexOf('fontfamily-')) {
              var o = e.fontFamilies.find(function(e) {
                return e.name.toLowerCase() === c(t);
              });
              if (!o) return;
              return i.default.createElement('span', { style: { fontFamily: o.family } });
            }
          };
        },
        w = function(e) {
          return function(t) {
            var n = e.blockExportFn,
              r = e.contentState;
            if (n) {
              var o = n(r, t);
              if (o) return o;
            }
            var a = '',
              l = t.type.toLowerCase(),
              s = t.data,
              c = s.textAlign,
              u = s.textIndent,
              f = s.nodeAttributes,
              d = void 0 === f ? {} : f,
              p = h(d);
            if (
              ((c || u) &&
                ((a = ' style="'),
                c && (a += 'text-align:' + c + ';'),
                u && !isNaN(u) && u > 0 && (a += 'text-indent:' + 2 * u + 'em;'),
                (a += '"')),
              'atomic' === l)
            )
              return b(t, r, d);
            if ('code-block' === l) {
              var g = r.getBlockBefore(t.key),
                y = r.getBlockAfter(t.key),
                v = g && g.getType(),
                A = y && y.getType(),
                S = '',
                w = '';
              return (
                (S = 'code-block' !== v ? '<pre' + p + '><code>' : ''),
                (w = 'code-block' !== A ? '</code></pre>' : '<br/>'),
                { start: S, end: w }
              );
            }
            return m[l]
              ? { start: '<' + m[l] + a + p + '>', end: '</' + m[l] + '>' }
              : 'unordered-list-item' === l
              ? {
                  start: '<li' + a + p + '>',
                  end: '</li>',
                  nest: i.default.createElement('ul', null),
                }
              : 'ordered-list-item' === l
              ? {
                  start: '<li' + a + p + '>',
                  end: '</li>',
                  nest: i.default.createElement('ol', null),
                }
              : void 0;
          };
        },
        E = function(e, t) {
          return function(n, r, o) {
            if (!r || !r.style) return o;
            var i = e.unitImportFn || f,
              a = o;
            return (
              [].forEach.call(r.style, function(o) {
                if ('span' === n && 'color' === o) {
                  var l = g(r.style.color);
                  a = l ? a.add('COLOR-' + l.replace('#', '').toUpperCase()) : a;
                } else if ('span' === n && 'background-color' === o) {
                  var s = g(r.style.backgroundColor);
                  a = s ? a.add('BGCOLOR-' + s.replace('#', '').toUpperCase()) : a;
                } else if ('span' === n && 'font-size' === o)
                  a = a.add('FONTSIZE-' + i(r.style.fontSize, 'font-size', t));
                else if (
                  'span' !== n ||
                  'line-height' !== o ||
                  isNaN(parseFloat(r.style.lineHeight, 10))
                )
                  if (
                    'span' !== n ||
                    'letter-spacing' !== o ||
                    isNaN(parseFloat(r.style.letterSpacing, 10))
                  ) {
                    if ('span' === n && 'text-decoration' === o)
                      'line-through' === r.style.textDecoration
                        ? (a = a.add('STRIKETHROUGH'))
                        : 'underline' === r.style.textDecoration && (a = a.add('UNDERLINE'));
                    else if ('span' === n && 'font-family' === o) {
                      var c = e.fontFamilies.find(function(e) {
                        return e.family.toLowerCase() === r.style.fontFamily.toLowerCase();
                      });
                      if (!c) return;
                      a = a.add('FONTFAMILY-' + c.name.toUpperCase());
                    }
                  } else
                    a = a.add('LETTERSPACING-' + i(r.style.letterSpacing, 'letter-spacing', t));
                else a = a.add('LINEHEIGHT-' + i(r.style.lineHeight, 'line-height', t));
              }),
              'sup' === n ? (a = a.add('SUPERSCRIPT')) : 'sub' === n && (a = a.add('SUBSCRIPT')),
              e.styleImportFn && (a = e.styleImportFn(n, r, a, t) || a),
              a
            );
          };
        },
        k = function(e, t) {
          return function(n, r, o) {
            if (e && e.entityImportFn) {
              var i = e.entityImportFn(n, r, o, t);
              if (i) return i;
            }
            n = n.toLowerCase();
            var a = r.alt,
              l = r.title,
              s = r.id,
              c = r.controls,
              u = r.autoplay,
              f = r.loop,
              d = r.poster,
              h = {},
              g = {};
            if (
              (s && (h.id = s),
              a && (h.alt = a),
              l && (h.title = l),
              c && (h.controls = c),
              u && (h.autoPlay = u),
              f && (h.loop = f),
              d && (h.poster = d),
              r.attributes &&
                Object.keys(r.attributes).forEach(function(e) {
                  var t = r.attributes[e];
                  -1 === p.indexOf(t.name) && (g[t.name] = t.value);
                }),
              'a' === n && !r.querySelectorAll('img').length)
            ) {
              var m = r.getAttribute('href'),
                y = r.getAttribute('target');
              return o('LINK', 'MUTABLE', { href: m, target: y, nodeAttributes: g });
            }
            if ('audio' === n)
              return o('AUDIO', 'IMMUTABLE', {
                url: r.getAttribute('src'),
                meta: h,
                nodeAttributes: g,
              });
            if ('video' === n)
              return o('VIDEO', 'IMMUTABLE', {
                url: r.getAttribute('src'),
                meta: h,
                nodeAttributes: g,
              });
            if ('img' === n) {
              var v = r.parentNode,
                b = { meta: h },
                A = r.style,
                S = A.width,
                w = A.height;
              return (
                (b.url = r.getAttribute('src')),
                S && (b.width = S),
                w && (b.height = w),
                'a' === v.nodeName.toLowerCase() &&
                  ((b.link = v.getAttribute('href')), (b.link_target = v.getAttribute('target'))),
                o('IMAGE', 'IMMUTABLE', b)
              );
            }
            if ('hr' === n) return o('HR', 'IMMUTABLE', {});
            if (r.parentNode && r.parentNode.classList.contains('embed-wrap')) {
              var E = r.innerHTML || r.outerHTML;
              if (E) return o('EMBED', 'IMMUTABLE', { url: E });
            }
          };
        },
        x = function(e, t) {
          return function(n, r) {
            if (e && e.blockImportFn) {
              var o = e.blockImportFn(n, r, t);
              if (o) return o;
            }
            var i = {},
              a = r.style || {};
            if (
              (r.attributes &&
                Object.keys(r.attributes).forEach(function(e) {
                  var t = r.attributes[e];
                  -1 === d.indexOf(t.name) && (i[t.name] = t.value);
                }),
              r.classList && r.classList.contains('media-wrap'))
            )
              return {
                type: 'atomic',
                data: { nodeAttributes: i, float: a.float, alignment: a.textAlign },
              };
            if ('img' === n)
              return {
                type: 'atomic',
                data: { nodeAttributes: i, float: a.float, alignment: a.textAlign },
              };
            if ('hr' === n) return { type: 'atomic', data: { nodeAttributes: i } };
            if ('pre' === n)
              return (
                (r.innerHTML = r.innerHTML.replace(/<code(.*?)>/g, '').replace(/<\/code>/g, '')),
                { type: 'code-block', data: { nodeAttributes: i } }
              );
            if (-1 !== v.indexOf(n)) {
              var l = { nodeAttributes: i };
              return (
                a.textAlign && (l.textAlign = a.textAlign),
                a.textIndent &&
                  (l.textIndent = /^\d+em$/.test(a.textIndent)
                    ? Math.ceil(parseInt(a.textIndent, 10) / 2)
                    : 1),
                { type: y[v.indexOf(n)], data: l }
              );
            }
          };
        };
      (t.getToHTMLConfig = function(e) {
        return { styleToHTML: S(e), entityToHTML: A(e), blockToHTML: w(e) };
      }),
        (t.getFromHTMLConfig = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'unknow';
          return { htmlToStyle: E(e, t), htmlToEntity: k(e, t), htmlToBlock: x(e, t) };
        });
    },
    nXTX: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = 0;
      t.UniqueIndex = function() {
        return (r += 1);
      };
    },
    oHid: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = c(n('QLaP')),
        o = c(n('umbp')),
        i = c(n('l7dP')),
        a = c(n('LFmL')),
        l = c(n('tNfR')),
        s = c(n('yI3j'));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        return p(e) || d(e) || f();
      }
      function f() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }
      function d(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
      }
      var h = function(e, t) {
          return e.filter(function(e) {
            return !t.some(function(t) {
              return t.style === e.style;
            });
          });
        },
        g = function(e, t) {
          return t.reduceRight(function(e, t) {
            var n = e[e.length - 1];
            return (
              (0, r['default'])(
                n.style === t.style,
                'Style '.concat(n.style, " to be removed doesn't match expected ").concat(t.style)
              ),
              e.slice(0, -1)
            );
          }, e);
        },
        m = function(e, t) {
          return t.filter(function(t) {
            return e >= t.offset && e < t.offset + t.length;
          });
        },
        y = function(e, t) {
          var n = e.offset <= t.offset,
            r = e.offset + e.length >= t.offset + t.length;
          return n && r;
        },
        v = function(e, t) {
          var n = t.offset + t.length,
            r = e.offset + e.length;
          return n - r;
        },
        b = function(e, t) {
          var n = 0;
          while (n < e.length) {
            if (!t.every(y.bind(null, e[n]))) return e.slice(n);
            n++;
          }
          return [];
        },
        A = function(e, t, n) {
          return t + (0, a['default'])(e(n.style)).start;
        },
        S = function(e, t, n) {
          return (0, a['default'])(e(n.style)).end + t;
        },
        w = function(e) {
          return function(t) {
            return e(t);
          };
        };
      w.__isMiddleware = !0;
      var E = function(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
        (0, r['default'])(null !== e && void 0 !== e, 'Expected raw block to be non-null'),
          (t =
            !0 === n.__isMiddleware
              ? n(s['default'])
              : (0, i['default'])((0, o['default'])(n), (0, o['default'])(s['default'])));
        for (
          var c = '', f = [], d = e.inlineStyleRanges.sort(l['default']), p = u(e.text), y = 0;
          y < p.length;
          y++
        ) {
          var E = m(y, d),
            k = h(f, E),
            x = h(E, f),
            C = h(f, k),
            _ = b(C, x),
            I = _.concat(x).sort(v),
            O = I.reduce(A.bind(null, t), ''),
            T = k.concat(_).reduce(S.bind(null, t), '');
          (c += T + O + p[y]),
            (f = g(f, _.concat(k))),
            (f = f.concat(I)),
            (0, r['default'])(
              f.length === E.length,
              'Character '
                .concat(y, ': ')
                .concat(f.length - E.length, ' styles left on stack that should no longer be there')
            );
        }
        return (
          (c = f.reduceRight(function(e, n) {
            return e + (0, a['default'])(t(n.style)).end;
          }, c)),
          c
        );
      };
      t['default'] = E;
    },
    oPSa: function(e, t, n) {
      'use strict';
      var r = {
        draft_killswitch_allow_nontextnodes: !1,
        draft_segmented_entities_behavior: !1,
        draft_handlebeforeinput_composed_text: !1,
        draft_tree_data_support: !1,
      };
      e.exports = r;
    },
    ocgx: function(e, t, n) {
      'use strict';
      var r = n('fyOY'),
        o = n('3sOJ'),
        i = n('DYKh');
      function a(e) {
        var t = e.getSelection();
        if (!t.isCollapsed()) return e;
        var n = t.getAnchorOffset();
        if (0 === n) return e;
        var a,
          l,
          s = t.getAnchorKey(),
          c = e.getCurrentContent(),
          u = c.getBlockForKey(s),
          f = u.getLength();
        if (f <= 1) return e;
        n === f
          ? ((a = t.set('anchorOffset', n - 1)), (l = t))
          : ((a = t.set('focusOffset', n + 1)), (l = a.set('anchorOffset', n + 1)));
        var d = i(c, a),
          p = r.removeRange(c, a, 'backward'),
          h = p.getSelectionAfter(),
          g = h.getAnchorOffset() - 1,
          m = h.merge({ anchorOffset: g, focusOffset: g }),
          y = r.replaceWithFragment(p, m, d),
          v = o.push(e, y, 'insert-fragment');
        return o.acceptSelection(v, l);
      }
      e.exports = a;
    },
    ohE5: function(e, t, n) {
      'use strict';
      function r(e) {
        return function() {
          return e;
        };
      }
      var o = function() {};
      (o.thatReturns = r),
        (o.thatReturnsFalse = r(!1)),
        (o.thatReturnsTrue = r(!0)),
        (o.thatReturnsNull = r(null)),
        (o.thatReturnsThis = function() {
          return this;
        }),
        (o.thatReturnsArgument = function(e) {
          return e;
        }),
        (e.exports = o);
    },
    p1kU: function(e, t, n) {
      'use strict';
      var r = n('iatg');
      function o(e) {
        var t = r(e);
        return { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top };
      }
      e.exports = o;
    },
    pMSO: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = c);
      var r = l(n('QLaP')),
        o = l(n('q1tI')),
        i = l(n('KAy6')),
        a = l(n('hq3H'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return o['default'].isValidElement(e) && o['default'].Children.count(e.props.children) > 0;
      }
      function c(e) {
        return (
          (0, r['default'])(null !== e && void 0 !== e, 'Expected block HTML value to be non-null'),
          'string' === typeof e
            ? e
            : o['default'].isValidElement(e)
            ? s(e)
              ? i['default'].renderToStaticMarkup(e)
              : (0, a['default'])(e)
            : Object.prototype.hasOwnProperty.call(e, 'element') &&
              o['default'].isValidElement(e.element)
            ? Object.assign({}, e, (0, a['default'])(e.element))
            : ((0, r['default'])(
                Object.prototype.hasOwnProperty.call(e, 'start') &&
                  Object.prototype.hasOwnProperty.call(e, 'end'),
                'convertToHTML: received block information without either a ReactElement or an object with start/end tags'
              ),
              e)
        );
      }
    },
    pXlz: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'convertToHTML', {
          enumerable: !0,
          get: function() {
            return r['default'];
          },
        }),
        Object.defineProperty(t, 'convertFromHTML', {
          enumerable: !0,
          get: function() {
            return o['default'];
          },
        }),
        Object.defineProperty(t, 'parseHTML', {
          enumerable: !0,
          get: function() {
            return i['default'];
          },
        });
      var r = a(n('RAzh')),
        o = a(n('TP1W')),
        i = a(n('XKk0'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    pg4M: function(e, t, n) {
      'use strict';
      var r = n('3sOJ'),
        o = n('CYTE');
      function i(e, t) {
        var n = e._latestEditorState,
          i = n.getSelection();
        if (!i.getHasFocus()) {
          var a = i.set('hasFocus', !0);
          e.props.onFocus && e.props.onFocus(t),
            o.isBrowser('Chrome < 60.0.3081.0')
              ? e.update(r.forceSelection(n, a))
              : e.update(r.acceptSelection(n, a));
        }
      }
      e.exports = i;
    },
    prOm: function(e, t, n) {
      'use strict';
      function r(e, t) {
        return !!t && (e === t.documentElement || e === t.body);
      }
      var o = {
        getTop: function(e) {
          var t = e.ownerDocument;
          return r(e, t) ? t.body.scrollTop || t.documentElement.scrollTop : e.scrollTop;
        },
        setTop: function(e, t) {
          var n = e.ownerDocument;
          r(e, n) ? (n.body.scrollTop = n.documentElement.scrollTop = t) : (e.scrollTop = t);
        },
        getLeft: function(e) {
          var t = e.ownerDocument;
          return r(e, t) ? t.body.scrollLeft || t.documentElement.scrollLeft : e.scrollLeft;
        },
        setLeft: function(e, t) {
          var n = e.ownerDocument;
          r(e, n) ? (n.body.scrollLeft = n.documentElement.scrollLeft = t) : (e.scrollLeft = t);
        },
      };
      e.exports = o;
    },
    qnky: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      var a = n('JPcv'),
        l = a.Record,
        s = l({ type: 'TOKEN', mutability: 'IMMUTABLE', data: Object }),
        c = (function(e) {
          function t() {
            return r(this, t), o(this, e.apply(this, arguments));
          }
          return (
            i(t, e),
            (t.prototype.getType = function() {
              return this.get('type');
            }),
            (t.prototype.getMutability = function() {
              return this.get('mutability');
            }),
            (t.prototype.getData = function() {
              return this.get('data');
            }),
            t
          );
        })(s);
      e.exports = c;
    },
    qy1W: function(e, t, n) {
      'use strict';
      var r = n('2NuI');
      function o(e) {
        var t = e.length;
        if (
          ((Array.isArray(e) || ('object' !== typeof e && 'function' !== typeof e)) && r(!1),
          'number' !== typeof t && r(!1),
          0 === t || t - 1 in e || r(!1),
          'function' === typeof e.callee && r(!1),
          e.hasOwnProperty)
        )
          try {
            return Array.prototype.slice.call(e);
          } catch (e) {}
        for (var n = Array(t), o = 0; o < t; o++) n[o] = e[o];
        return n;
      }
      function i(e) {
        return (
          !!e &&
          ('object' == typeof e || 'function' == typeof e) &&
          'length' in e &&
          !('setInterval' in e) &&
          'number' != typeof e.nodeType &&
          (Array.isArray(e) || 'callee' in e || 'item' in e)
        );
      }
      function a(e) {
        return i(e) ? (Array.isArray(e) ? e.slice() : o(e)) : [e];
      }
      e.exports = a;
    },
    rAV9: function(e, t, n) {
      'use strict';
      var r = n('JPcv'),
        o = r.Map,
        i = n('q1tI'),
        a = n('YVIB'),
        l = i.createElement('ul', { className: a('public/DraftStyleDefault/ul') }),
        s = i.createElement('ol', { className: a('public/DraftStyleDefault/ol') }),
        c = i.createElement('pre', { className: a('public/DraftStyleDefault/pre') }),
        u = o({
          'header-one': { element: 'h1' },
          'header-two': { element: 'h2' },
          'header-three': { element: 'h3' },
          'header-four': { element: 'h4' },
          'header-five': { element: 'h5' },
          'header-six': { element: 'h6' },
          'unordered-list-item': { element: 'li', wrapper: l },
          'ordered-list-item': { element: 'li', wrapper: s },
          blockquote: { element: 'blockquote' },
          atomic: { element: 'figure' },
          'code-block': { element: 'pre', wrapper: c },
          unstyled: { element: 'div', aliasedElements: ['p'] },
        });
      e.exports = u;
    },
    rJY1: function(e, t, n) {
      'use strict';
      var r = {},
        o = Math.pow(2, 24);
      function i() {
        var e = void 0;
        while (void 0 === e || r.hasOwnProperty(e) || !isNaN(+e))
          e = Math.floor(Math.random() * o).toString(32);
        return (r[e] = !0), e;
      }
      e.exports = i;
    },
    rWXM: function(e, t, n) {
      'use strict';
      function r(e) {
        var t = {};
        return function(n) {
          return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n];
        };
      }
      e.exports = r;
    },
    s8ra: function(e, t, n) {
      'use strict';
      var r = n('CYTE'),
        o = r.isPlatform('Mac OS X'),
        i = {
          isCtrlKeyCommand: function(e) {
            return !!e.ctrlKey && !e.altKey;
          },
          isOptionKeyCommand: function(e) {
            return o && e.altKey;
          },
          hasCommandModifier: function(e) {
            return o ? !!e.metaKey && !e.altKey : i.isCtrlKeyCommand(e);
          },
        };
      e.exports = i;
    },
    tAS7: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = l);
      var r = a(n('QLaP')),
        o = a(n('q1tI')),
        i = a(n('hq3H'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        if (
          ((0, r['default'])(
            null !== e && void 0 !== e,
            'Expected block HTML value to be non-null'
          ),
          o['default'].isValidElement(e.nest))
        ) {
          var t = (0, i['default'])(e.nest),
            n = t.start,
            a = t.end;
          return Object.assign({}, e, { nestStart: n, nestEnd: a });
        }
        return (
          (0, r['default'])(
            Object.prototype.hasOwnProperty.call(e, 'nestStart') &&
              Object.prototype.hasOwnProperty.call(e, 'nestEnd'),
            'convertToHTML: received block information without either a ReactElement or an object with start/end tags'
          ),
          e
        );
      }
    },
    tKWh: function(e, t, n) {
      'use strict';
      function r() {
        var e = void 0;
        return (
          document.documentElement && (e = document.documentElement.clientWidth),
          !e && document.body && (e = document.body.clientWidth),
          e || 0
        );
      }
      function o() {
        var e = void 0;
        return (
          document.documentElement && (e = document.documentElement.clientHeight),
          !e && document.body && (e = document.body.clientHeight),
          e || 0
        );
      }
      function i() {
        return { width: window.innerWidth || r(), height: window.innerHeight || o() };
      }
      (i.withoutScrollbars = function() {
        return { width: r(), height: o() };
      }),
        (e.exports = i);
    },
    tNfR: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = function(e, t) {
        return e.offset === t.offset ? t.length - e.length : e.offset - t.offset;
      };
      t['default'] = r;
    },
    tuJh: function(e, t, n) {
      'use strict';
      var r = n('3sOJ'),
        o = n('jLRO'),
        i = n('DEWG'),
        a = n('8d//');
      function l(e) {
        var t = a(
          e,
          function(e) {
            var t = e.getSelection(),
              n = e.getCurrentContent(),
              r = t.getAnchorKey(),
              a = t.getAnchorOffset(),
              l = n.getBlockForKey(r).getText()[a];
            return i(e, l ? o.getUTF16Length(l, 0) : 1);
          },
          'forward'
        );
        if (t === e.getCurrentContent()) return e;
        var n = e.getSelection();
        return r.push(
          e,
          t.set('selectionBefore', n),
          n.isCollapsed() ? 'delete-character' : 'remove-range'
        );
      }
      e.exports = l;
    },
    ueFs: function(e, t, n) {
      'use strict';
      var r = n('MgzW'),
        o =
          r ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = n('8uQm'),
        a = n('JL7T'),
        l = n('LpQA'),
        s = n('TzU/'),
        c = n('cX45'),
        u = n('PFU8'),
        f = n('JPcv'),
        d = n('hMpd'),
        p = n('TlXQ'),
        h = n('bNdj'),
        g = n('RCR6'),
        m = n('rJY1'),
        y = n('2NuI'),
        v = c.draft_tree_data_support,
        b = f.List,
        A = f.Map,
        S = f.OrderedMap,
        w = function(e, t) {
          var n = e.key,
            r = e.type,
            o = e.data,
            i = e.text,
            a = e.depth,
            l = {
              text: i,
              depth: a || 0,
              type: r || 'unstyled',
              key: n || m(),
              data: A(o),
              characterList: E(e, t),
            };
          return l;
        },
        E = function(e, t) {
          var n = e.text,
            r = e.entityRanges,
            i = e.inlineStyleRanges,
            a = r || [],
            l = i || [];
          return p(
            g(n, l),
            h(
              n,
              a
                .filter(function(e) {
                  return t.hasOwnProperty(e.key);
                })
                .map(function(e) {
                  return o({}, e, { key: t[e.key] });
                })
            )
          );
        },
        k = function(e) {
          return o({}, e, { key: e.key || m() });
        },
        x = function(e, t, n) {
          var r = t.map(function(e) {
            return o({}, e, { parentRef: n });
          });
          return e.concat(r.reverse());
        },
        C = function(e, t) {
          return e.map(k).reduce(function(n, r, i) {
            Array.isArray(r.children) || y(!1);
            var l = r.children.map(k),
              s = new a(
                o({}, w(r, t), {
                  prevSibling: 0 === i ? null : e[i - 1].key,
                  nextSibling: i === e.length - 1 ? null : e[i + 1].key,
                  children: b(
                    l.map(function(e) {
                      return e.key;
                    })
                  ),
                })
              );
            n = n.set(s.getKey(), s);
            var c = x([], l, s);
            while (c.length > 0) {
              var u = c.pop(),
                f = u.parentRef,
                d = f.getChildKeys(),
                p = d.indexOf(u.key),
                h = Array.isArray(u.children);
              if (!h) {
                h || y(!1);
                break;
              }
              var g = u.children.map(k),
                m = new a(
                  o({}, w(u, t), {
                    parent: f.getKey(),
                    children: b(
                      g.map(function(e) {
                        return e.key;
                      })
                    ),
                    prevSibling: 0 === p ? null : d.get(p - 1),
                    nextSibling: p === d.size - 1 ? null : d.get(p + 1),
                  })
                );
              (n = n.set(m.getKey(), m)), (c = x(c, g, m));
            }
            return n;
          }, S());
        },
        _ = function(e, t) {
          return S(
            e.map(function(e) {
              var n = new i(w(e, t));
              return [n.getKey(), n];
            })
          );
        },
        I = function(e, t) {
          var n = Array.isArray(e.blocks[0].children),
            r = v && !n ? u.fromRawStateToRawTreeState(e).blocks : e.blocks;
          return v ? C(r, t) : _(n ? u.fromRawTreeStateToRawState(e).blocks : r, t);
        },
        O = function(e) {
          var t = e.entityMap,
            n = {};
          return (
            Object.keys(t).forEach(function(e) {
              var r = t[e],
                o = r.type,
                i = r.mutability,
                a = r.data;
              n[e] = s.__create(o, i, a || {});
            }),
            n
          );
        },
        T = function(e) {
          Array.isArray(e.blocks) || y(!1);
          var t = O(e),
            n = I(e, t),
            r = n.isEmpty() ? new d() : d.createEmpty(n.first().getKey());
          return new l({ blockMap: n, entityMap: t, selectionBefore: r, selectionAfter: r });
        };
      e.exports = T;
    },
    ujuU: function(e, t, n) {
      'use strict';
      var r = n('3sOJ');
      function o(e) {
        var t = e.getSelection(),
          n = t.getStartKey();
        return r.set(e, {
          selection: t.merge({
            anchorKey: n,
            anchorOffset: 0,
            focusKey: n,
            focusOffset: 0,
            isBackward: !1,
          }),
          forceSelection: !0,
        });
      }
      e.exports = o;
    },
    umbp: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = function(e) {
        return function(t) {
          return 'function' === typeof e ? e(t) : e[t];
        };
      };
      t['default'] = r;
    },
    v83y: function(e, t, n) {
      'use strict';
      var r = n('fyRy'),
        o = n('YeVe'),
        i = n('lFJn'),
        a = n('84lc'),
        l = n('8uQm'),
        s = n('LpQA'),
        c = n('rAV9'),
        u = n('0TRD'),
        f = n('6tyx'),
        d = n('DthY'),
        p = n('TzU/'),
        h = n('fyOY'),
        g = n('qnky'),
        m = n('3sOJ'),
        y = n('s8ra'),
        v = n('Nx4+'),
        b = n('hMpd'),
        A = n('/y+l'),
        S = n('1qq2'),
        w = n('ueFs'),
        E = n('rJY1'),
        k = n('AyB5'),
        x = n('zxN+'),
        C = {
          Editor: f,
          EditorBlock: d,
          EditorState: m,
          CompositeDecorator: a,
          Entity: p,
          EntityInstance: g,
          BlockMapBuilder: o,
          CharacterMetadata: i,
          ContentBlock: l,
          ContentState: s,
          SelectionState: b,
          AtomicBlockUtils: r,
          KeyBindingUtil: y,
          Modifier: h,
          RichUtils: v,
          DefaultDraftBlockRenderMap: c,
          DefaultDraftInlineStyle: u,
          convertFromHTML: S,
          convertFromRaw: w,
          convertToRaw: A,
          genKey: E,
          getDefaultKeyBinding: k,
          getVisibleSelectionRect: x,
        };
      e.exports = C;
    },
    vYwu: function(e, t, n) {
      'use strict';
      var r = n('lFJn');
      function o(e, t, n, o) {
        var i = e.getCharacterList();
        while (t < n) (i = i.set(t, r.applyEntity(i.get(t), o))), t++;
        return e.set('characterList', i);
      }
      e.exports = o;
    },
    vcNX: function(e, t, n) {
      'use strict';
      var r = n('SF5q'),
        o = n('3sOJ'),
        i = n('kWjT'),
        a = n('8d//');
      function l(e) {
        var t = a(
          e,
          function(e) {
            var t = e.getSelection(),
              n = t.getStartOffset();
            if (0 === n) return i(e, 1);
            var o = t.getStartKey(),
              a = e.getCurrentContent(),
              l = a
                .getBlockForKey(o)
                .getText()
                .slice(0, n),
              s = r.getBackward(l);
            return i(e, s.length || 1);
          },
          'backward'
        );
        return t === e.getCurrentContent() ? e : o.push(e, t, 'remove-range');
      }
      e.exports = l;
    },
    xocI: function(e, t, n) {
      'use strict';
      var r = n('CYTE'),
        o = n('2NuI'),
        i = r.isBrowser('IE <= 9');
      function a(e) {
        var t,
          n = null;
        return (
          !i &&
            document.implementation &&
            document.implementation.createHTMLDocument &&
            ((t = document.implementation.createHTMLDocument('foo')),
            t.documentElement || o(!1),
            (t.documentElement.innerHTML = e),
            (n = t.getElementsByTagName('body')[0])),
          n
        );
      }
      e.exports = a;
    },
    yEr3: function(e, t, n) {
      (function(t, r) {
        e.exports = r(
          n('q1tI'),
          n('Psm9'),
          n('v83y'),
          n('JPcv'),
          n('bluE'),
          n('i8i4'),
          n('6xfc'),
          n('H7ev')
        );
      })(window, function(e, t, n, r, o, i, a, l) {
        return (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e['default'];
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, 'a', t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = '/'),
            n((n.s = 39))
          );
        })([
          function(t, n) {
            t.exports = e;
          },
          function(e, t) {
            function n(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            e.exports = n;
          },
          function(e, t) {
            function n(e, t, n) {
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
            e.exports = n;
          },
          function(e, n) {
            e.exports = t;
          },
          function(e, t) {
            function n(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            e.exports = n;
          },
          function(e, t, n) {
            var r = n(2);
            function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                'function' === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function(t) {
                    r(e, t, n[t]);
                  });
              }
              return e;
            }
            e.exports = o;
          },
          function(e, t) {
            e.exports = n;
          },
          function(e, t) {
            function n(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function r(e, t, r) {
              return t && n(e.prototype, t), r && n(e, r), e;
            }
            e.exports = r;
          },
          function(e, t, n) {
            var r = n(15),
              o = n(1);
            function i(e, t) {
              return !t || ('object' !== r(t) && 'function' !== typeof t) ? o(e) : t;
            }
            e.exports = i;
          },
          function(e, t) {
            function n(t) {
              return (
                (e.exports = n = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                n(t)
              );
            }
            e.exports = n;
          },
          function(e, t, n) {
            var r = n(26);
            function o(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && r(e, t);
            }
            e.exports = o;
          },
          function(e, t) {
            function n() {
              return (
                (e.exports = n =
                  Object.assign ||
                  function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                  }),
                n.apply(this, arguments)
              );
            }
            e.exports = n;
          },
          function(e, t, n) {
            var r = n(27),
              o = n(28),
              i = n(29);
            function a(e) {
              return r(e) || o(e) || i();
            }
            e.exports = a;
          },
          function(e, t) {
            e.exports = r;
          },
          function(e, t) {
            e.exports = o;
          },
          function(e, t) {
            function n(e) {
              return (
                (n =
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
                n(e)
              );
            }
            function r(t) {
              return (
                'function' === typeof Symbol && 'symbol' === n(Symbol.iterator)
                  ? (e.exports = r = function(e) {
                      return n(e);
                    })
                  : (e.exports = r = function(e) {
                      return e &&
                        'function' === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : n(e);
                    }),
                r(t)
              );
            }
            e.exports = r;
          },
          function(e, t) {
            e.exports = i;
          },
          function(e, t) {
            e.exports = a;
          },
          function(e, t, n) {
            var r = n(13),
              o = '-';
            function i(e) {
              this.decorators = r.List(e);
            }
            (i.prototype.getDecorations = function(e) {
              var t = Array(e.getText().length).fill(null);
              return (
                this.decorators.forEach(function(n, r) {
                  var i = n.getDecorations(e);
                  i.forEach(function(e, n) {
                    e && ((e = r + o + e), (t[n] = e));
                  });
                }),
                r.List(t)
              );
            }),
              (i.prototype.getComponentForKey = function(e) {
                var t = this.getDecoratorForKey(e);
                return t.getComponentForKey(this.getInnerKey(e));
              }),
              (i.prototype.getPropsForKey = function(e) {
                var t = this.getDecoratorForKey(e);
                return t.getPropsForKey(this.getInnerKey(e));
              }),
              (i.prototype.getDecoratorForKey = function(e) {
                var t = e.split(o),
                  n = Number(t[0]);
                return this.decorators.get(n);
              }),
              (i.prototype.getInnerKey = function(e) {
                var t = e.split(o);
                return t.slice(1).join(o);
              }),
              (e.exports = i);
          },
          function(e, t, n) {
            'use strict';
            function r(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
            }
            function i(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var a = n(13),
              l = a.Map,
              s = a.OrderedSet,
              c = a.Record,
              u = s(),
              f = { style: u, entity: null },
              d = c(f),
              p = (function(e) {
                function t() {
                  return r(this, t), o(this, e.apply(this, arguments));
                }
                return (
                  i(t, e),
                  (t.prototype.getStyle = function() {
                    return this.get('style');
                  }),
                  (t.prototype.getEntity = function() {
                    return this.get('entity');
                  }),
                  (t.prototype.hasStyle = function(e) {
                    return this.getStyle().includes(e);
                  }),
                  (t.applyStyle = function(e, n) {
                    var r = e.set('style', e.getStyle().add(n));
                    return t.create(r);
                  }),
                  (t.removeStyle = function(e, n) {
                    var r = e.set('style', e.getStyle().remove(n));
                    return t.create(r);
                  }),
                  (t.applyEntity = function(e, n) {
                    var r = e.getEntity() === n ? e : e.set('entity', n);
                    return t.create(r);
                  }),
                  (t.create = function(e) {
                    if (!e) return h;
                    var n = { style: u, entity: null },
                      r = l(n).merge(e),
                      o = g.get(r);
                    if (o) return o;
                    var i = new t(r);
                    return (g = g.set(r, i)), i;
                  }),
                  t
                );
              })(d),
              h = new p(),
              g = l([[l(f), h]]);
            (p.EMPTY = h), (e.exports = p);
          },
          function(e, t, n) {
            'use strict';
            function r(e, t, n, r) {
              if (e.size) {
                var o = 0;
                e.reduce(function(e, i, a) {
                  return t(e, i) || (n(e) && r(o, a), (o = a)), i;
                }),
                  n(e.last()) && r(o, e.count());
              }
            }
            e.exports = r;
          },
          function(e, t, n) {
            var r = n(25);
            function o(e, t) {
              if (null == e) return {};
              var n,
                o,
                i = r(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++)
                  (n = a[o]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
              }
              return i;
            }
            e.exports = o;
          },
          function(e, t, n) {
            'use strict';
            var r = n(30);
            function o(e) {
              var t = e.getSelection();
              return t.isCollapsed() ? null : r(e.getCurrentContent(), t);
            }
            e.exports = o;
          },
          function(e, t) {
            e.exports = l;
          },
          function(e, t, n) {
            var r = n(36),
              o = n(37),
              i = n(38);
            function a(e, t) {
              return r(e) || o(e, t) || i();
            }
            e.exports = a;
          },
          function(e, t) {
            function n(e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            }
            e.exports = n;
          },
          function(e, t) {
            function n(t, r) {
              return (
                (e.exports = n =
                  Object.setPrototypeOf ||
                  function(e, t) {
                    return (e.__proto__ = t), e;
                  }),
                n(t, r)
              );
            }
            e.exports = n;
          },
          function(e, t) {
            function n(e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
              }
            }
            e.exports = n;
          },
          function(e, t) {
            function n(e) {
              if (
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            }
            e.exports = n;
          },
          function(e, t) {
            function n() {
              throw new TypeError('Invalid attempt to spread non-iterable instance');
            }
            e.exports = n;
          },
          function(e, t, n) {
            'use strict';
            var r = n(31),
              o = n(34),
              i = function(e, t) {
                var n = t.getStartKey(),
                  i = t.getStartOffset(),
                  a = t.getEndKey(),
                  l = t.getEndOffset(),
                  s = o(e, t),
                  c = s.getBlockMap(),
                  u = c.keySeq(),
                  f = u.indexOf(n),
                  d = u.indexOf(a) + 1;
                return r(
                  c.slice(f, d).map(function(e, t) {
                    var r = e.getText(),
                      o = e.getCharacterList();
                    return n === a
                      ? e.merge({ text: r.slice(i, l), characterList: o.slice(i, l) })
                      : t === n
                      ? e.merge({ text: r.slice(i), characterList: o.slice(i) })
                      : t === a
                      ? e.merge({ text: r.slice(0, l), characterList: o.slice(0, l) })
                      : e;
                  })
                );
              };
            e.exports = i;
          },
          function(e, t, n) {
            'use strict';
            var r = n(32),
              o = n(13),
              i = n(33),
              a = o.OrderedMap,
              l = function(e) {
                var t = {},
                  n = void 0;
                return a(
                  e
                    .withMutations(function(e) {
                      e.forEach(function(r, o) {
                        var a = r.getKey(),
                          l = r.getNextSiblingKey(),
                          s = r.getPrevSiblingKey(),
                          c = r.getChildKeys(),
                          u = r.getParentKey(),
                          f = i();
                        if (((t[a] = f), l)) {
                          var d = e.get(l);
                          d ? e.setIn([l, 'prevSibling'], f) : e.setIn([a, 'nextSibling'], null);
                        }
                        if (s) {
                          var p = e.get(s);
                          p ? e.setIn([s, 'nextSibling'], f) : e.setIn([a, 'prevSibling'], null);
                        }
                        if (u && e.get(u)) {
                          var h = e.get(u),
                            g = h.getChildKeys();
                          e.setIn([u, 'children'], g.set(g.indexOf(r.getKey()), f));
                        } else e.setIn([a, 'parent'], null), n && (e.setIn([n.getKey(), 'nextSibling'], f), e.setIn([a, 'prevSibling'], t[n.getKey()])), (n = e.get(a));
                        c.forEach(function(t) {
                          var n = e.get(t);
                          n
                            ? e.setIn([t, 'parent'], f)
                            : e.setIn(
                                [a, 'children'],
                                r.getChildKeys().filter(function(e) {
                                  return e !== t;
                                })
                              );
                        });
                      });
                    })
                    .toArray()
                    .map(function(e) {
                      return [t[e.getKey()], e.set('key', t[e.getKey()])];
                    })
                );
              },
              s = function(e) {
                return a(
                  e.toArray().map(function(e) {
                    var t = i();
                    return [t, e.set('key', t)];
                  })
                );
              },
              c = function(e) {
                var t = e.first() instanceof r;
                return t ? l(e) : s(e);
              };
            e.exports = c;
          },
          function(e, t, n) {
            'use strict';
            function r(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function o(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
            }
            function i(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var a = n(19),
              l = n(13),
              s = n(20),
              c = l.List,
              u = l.Map,
              f = l.OrderedSet,
              d = l.Record,
              p = l.Repeat,
              h = f(),
              g = {
                parent: null,
                characterList: c(),
                data: u(),
                depth: 0,
                key: '',
                text: '',
                type: 'unstyled',
                children: c(),
                prevSibling: null,
                nextSibling: null,
              },
              m = function(e, t) {
                return e.getStyle() === t.getStyle();
              },
              y = function(e, t) {
                return e.getEntity() === t.getEntity();
              },
              v = function(e) {
                if (!e) return e;
                var t = e.characterList,
                  n = e.text;
                return n && !t && (e.characterList = c(p(a.EMPTY, n.length))), e;
              },
              b = (function(e) {
                function t() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
                  return r(this, t), o(this, e.call(this, v(n)));
                }
                return (
                  i(t, e),
                  (t.prototype.getKey = function() {
                    return this.get('key');
                  }),
                  (t.prototype.getType = function() {
                    return this.get('type');
                  }),
                  (t.prototype.getText = function() {
                    return this.get('text');
                  }),
                  (t.prototype.getCharacterList = function() {
                    return this.get('characterList');
                  }),
                  (t.prototype.getLength = function() {
                    return this.getText().length;
                  }),
                  (t.prototype.getDepth = function() {
                    return this.get('depth');
                  }),
                  (t.prototype.getData = function() {
                    return this.get('data');
                  }),
                  (t.prototype.getInlineStyleAt = function(e) {
                    var t = this.getCharacterList().get(e);
                    return t ? t.getStyle() : h;
                  }),
                  (t.prototype.getEntityAt = function(e) {
                    var t = this.getCharacterList().get(e);
                    return t ? t.getEntity() : null;
                  }),
                  (t.prototype.getChildKeys = function() {
                    return this.get('children');
                  }),
                  (t.prototype.getParentKey = function() {
                    return this.get('parent');
                  }),
                  (t.prototype.getPrevSiblingKey = function() {
                    return this.get('prevSibling');
                  }),
                  (t.prototype.getNextSiblingKey = function() {
                    return this.get('nextSibling');
                  }),
                  (t.prototype.findStyleRanges = function(e, t) {
                    s(this.getCharacterList(), m, e, t);
                  }),
                  (t.prototype.findEntityRanges = function(e, t) {
                    s(this.getCharacterList(), y, e, t);
                  }),
                  t
                );
              })(d(g));
            e.exports = b;
          },
          function(e, t, n) {
            'use strict';
            var r = {},
              o = Math.pow(2, 24);
            function i() {
              var e = void 0;
              while (void 0 === e || r.hasOwnProperty(e) || !isNaN(+e))
                e = Math.floor(Math.random() * o).toString(32);
              return (r[e] = !0), e;
            }
            e.exports = i;
          },
          function(e, t, n) {
            'use strict';
            var r = n(19),
              o = n(20),
              i = n(35);
            function a(e, t) {
              var n = e.getBlockMap(),
                r = e.getEntityMap(),
                o = {},
                i = t.getStartKey(),
                a = t.getStartOffset(),
                l = n.get(i),
                c = s(r, l, a);
              c !== l && (o[i] = c);
              var u = t.getEndKey(),
                f = t.getEndOffset(),
                d = n.get(u);
              i === u && (d = c);
              var p = s(r, d, f);
              return (
                p !== d && (o[u] = p),
                Object.keys(o).length
                  ? e.merge({ blockMap: n.merge(o), selectionAfter: t })
                  : e.set('selectionAfter', t)
              );
            }
            function l(e, t, n) {
              var r;
              return (
                o(
                  e,
                  function(e, t) {
                    return e.getEntity() === t.getEntity();
                  },
                  function(e) {
                    return e.getEntity() === t;
                  },
                  function(e, t) {
                    e <= n && t >= n && (r = { start: e, end: t });
                  }
                ),
                'object' !== typeof r && i(!1),
                r
              );
            }
            function s(e, t, n) {
              var o = t.getCharacterList(),
                i = n > 0 ? o.get(n - 1) : void 0,
                a = n < o.count() ? o.get(n) : void 0,
                s = i ? i.getEntity() : void 0,
                c = a ? a.getEntity() : void 0;
              if (c && c === s) {
                var u = e.__get(c);
                if ('MUTABLE' !== u.getMutability()) {
                  var f,
                    d = l(o, c, n),
                    p = d.start,
                    h = d.end;
                  while (p < h) (f = o.get(p)), (o = o.set(p, r.applyEntity(f, null))), p++;
                  return t.set('characterList', o);
                }
              }
              return t;
            }
            e.exports = a;
          },
          function(e, t, n) {
            'use strict';
            var r = function(e) {};
            function o(e, t, n, o, i, a, l, s) {
              if ((r(t), !e)) {
                var c;
                if (void 0 === t)
                  c = new Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                  );
                else {
                  var u = [n, o, i, a, l, s],
                    f = 0;
                  (c = new Error(
                    t.replace(/%s/g, function() {
                      return u[f++];
                    })
                  )),
                    (c.name = 'Invariant Violation');
                }
                throw ((c.framesToPop = 1), c);
              }
            }
            e.exports = o;
          },
          function(e, t) {
            function n(e) {
              if (Array.isArray(e)) return e;
            }
            e.exports = n;
          },
          function(e, t) {
            function n(e, t) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done); r = !0)
                  if ((n.push(a.value), t && n.length === t)) break;
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  r || null == l['return'] || l['return']();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            }
            e.exports = n;
          },
          function(e, t) {
            function n() {
              throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
            e.exports = n;
          },
          function(e, t, n) {
            'use strict';
            n.r(t);
            var r = n(15),
              o = n.n(r),
              i = n(5),
              a = n.n(i),
              l = n(21),
              s = n.n(l),
              c = n(4),
              u = n.n(c),
              f = n(7),
              d = n.n(f),
              p = n(8),
              h = n.n(p),
              g = n(9),
              m = n.n(g),
              y = n(10),
              v = n.n(y),
              b = n(1),
              A = n.n(b),
              S = n(2),
              w = n.n(S),
              E = n(12),
              k = n.n(E),
              x = (n(40), n(42), n(0)),
              C = n.n(x),
              _ = {
                base: {
                  remove: 'Remove',
                  cancel: 'Cancel',
                  confirm: 'Confirm',
                  inert: 'Insert',
                  width: 'Width',
                  height: 'Height',
                },
                controls: {
                  clear: 'Clear',
                  undo: 'Undo',
                  redo: 'Redo',
                  fontSize: 'Font Size',
                  color: 'Color',
                  textColor: 'Text',
                  tempColors: 'Temp Colors',
                  backgroundColor: 'Background',
                  bold: 'Bold',
                  lineHeight: 'Line Height',
                  letterSpacing: 'Letter Spacing',
                  textIndent: 'Text Indent',
                  increaseIndent: 'Increase Indent',
                  decreaseIndent: 'Decrease Indent',
                  italic: 'Italic',
                  underline: 'Underline',
                  strikeThrough: 'Strike Through',
                  fontFamily: 'Font Family',
                  textAlign: 'Text Alignment',
                  alignLeft: 'Left Alignment',
                  alignCenter: 'Center Alignment',
                  alignRight: 'Right Alignment',
                  alignJustify: 'Justify Alignment',
                  floatLeft: 'Left Float',
                  floatRight: 'Right Float',
                  superScript: 'Super Script',
                  subScript: 'Sub Script',
                  removeStyles: 'Remove Styles',
                  headings: 'Headings',
                  header: 'Header',
                  normal: 'Normal',
                  orderedList: 'Ordered List',
                  unorderedList: 'Unordered List',
                  blockQuote: 'Quote',
                  code: 'Code',
                  link: 'Link',
                  unlink: 'Unlink',
                  hr: 'Horizontal Line',
                  media: 'Media',
                  mediaLibirary: 'Media Library',
                  emoji: 'Emoji',
                  fullscreen: 'Fullscreen',
                  exitFullscreen: 'Exit Fullscreen',
                },
                linkEditor: {
                  textInputPlaceHolder: 'Input link text',
                  linkInputPlaceHolder: 'Input link URL',
                  inputWithEnterPlaceHolder: 'Input link URL and press Enter',
                  openInNewWindow: 'Open in new window',
                  removeLink: 'Remove Link',
                },
                audioPlayer: { title: 'Play Audio' },
                videoPlayer: { title: 'Play Video', embedTitle: 'Embed Media' },
                media: { image: 'Image', video: 'Video', audio: 'Audio', embed: 'Embed' },
              },
              I = {
                base: {
                  remove: '\u5220\u9664',
                  cancel: '\u53d6\u6d88',
                  confirm: '\u786e\u5b9a',
                  inert: '\u63d2\u5165',
                  width: '\u5bbd\u5ea6',
                  height: '\u9ad8\u5ea6',
                },
                controls: {
                  clear: '\u6e05\u9664\u5185\u5bb9',
                  undo: '\u64a4\u9500',
                  redo: '\u91cd\u505a',
                  fontSize: '\u5b57\u53f7',
                  lineHeight: '\u884c\u9ad8',
                  letterSpacing: '\u5b57\u95f4\u8ddd',
                  textIndent: '\u6bb5\u843d\u7f29\u8fdb',
                  increaseIndent: '\u589e\u52a0\u7f29\u8fdb',
                  decreaseIndent: '\u51cf\u5c11\u7f29\u8fdb',
                  border: '\u8fb9\u6846',
                  color: '\u989c\u8272',
                  textColor: '\u6587\u5b57\u989c\u8272',
                  backgroundColor: '\u80cc\u666f\u989c\u8272',
                  tempColors: '\u4e34\u65f6\u989c\u8272',
                  bold: '\u52a0\u7c97',
                  italic: '\u659c\u4f53',
                  underline: '\u4e0b\u5212\u7ebf',
                  strikeThrough: '\u5220\u9664\u7ebf',
                  fontFamily: '\u5b57\u4f53',
                  textAlign: '\u6587\u672c\u5bf9\u9f50',
                  alignLeft: '\u5c45\u5de6',
                  alignCenter: '\u5c45\u4e2d',
                  alignRight: '\u5c45\u53f3',
                  alignJustify: '\u4e24\u7aef',
                  floatLeft: '\u5de6\u6d6e\u52a8',
                  floatRight: '\u53f3\u6d6e\u52a8',
                  superScript: '\u4e0a\u6807',
                  subScript: '\u4e0b\u6807',
                  removeStyles: '\u6e05\u9664\u6837\u5f0f',
                  headings: '\u6807\u9898',
                  header: '\u6807\u9898',
                  normal: '\u5e38\u89c4',
                  orderedList: '\u6709\u5e8f\u5217\u8868',
                  unorderedList: '\u65e0\u5e8f\u5217\u8868',
                  blockQuote: '\u5f15\u7528',
                  code: '\u4ee3\u7801',
                  link: '\u94fe\u63a5',
                  unlink: '\u6e05\u9664\u94fe\u63a5',
                  hr: '\u6c34\u5e73\u7ebf',
                  media: '\u5a92\u4f53',
                  mediaLibirary: '\u5a92\u4f53\u5e93',
                  emoji: '\u5c0f\u8868\u60c5',
                  fullscreen: '\u5168\u5c4f',
                  exitFullscreen: '\u9000\u51fa\u5168\u5c4f',
                },
                linkEditor: {
                  textInputPlaceHolder: '\u8f93\u5165\u94fe\u63a5\u6587\u5b57',
                  linkInputPlaceHolder: '\u8f93\u5165\u94fe\u63a5\u5730\u5740',
                  inputWithEnterPlaceHolder:
                    '\u8f93\u5165\u94fe\u63a5\u5730\u5740\u5e76\u56de\u8f66',
                  openInNewWindow: '\u5728\u65b0\u7a97\u53e3\u6253\u5f00',
                  removeLink: '\u79fb\u9664\u94fe\u63a5',
                },
                audioPlayer: { title: '\u64ad\u653e\u97f3\u9891\u6587\u4ef6' },
                videoPlayer: {
                  title: '\u64ad\u653e\u89c6\u9891\u6587\u4ef6',
                  embedTitle: '\u5d4c\u5165\u5f0f\u5a92\u4f53',
                },
                media: {
                  image: '\u56fe\u50cf',
                  video: '\u89c6\u9891',
                  audio: '\u97f3\u9891',
                  embed: '\u5d4c\u5165\u5f0f\u5a92\u4f53',
                },
              },
              O = {
                base: {
                  remove: '\u522a\u9664',
                  cancel: '\u53d6\u6d88',
                  confirm: '\u78ba\u5b9a',
                  inert: '\u63d2\u5165',
                  width: '\u5bbd\u5ea6',
                  height: '\u9ad8\u5ea6',
                },
                controls: {
                  clear: '\u6e05\u9664\u5185\u5bb9',
                  undo: '\u64a4\u92b7',
                  redo: '\u91cd\u505a',
                  fontSize: '\u5b57\u865f',
                  color: '\u984f\u8272',
                  textColor: '\u6587\u5b57\u984f\u8272',
                  backgroundColor: '\u80cc\u666f\u984f\u8272',
                  tempColors: '\u81e8\u6642\u984f\u8272',
                  bold: '\u52a0\u7c97',
                  lineHeight: '\u884c\u9ad8',
                  letterSpacing: '\u5b57\u9593\u8ddd',
                  textIndent: '\u6bb5\u843d\u7e2e\u9032',
                  increaseIndent: '\u589e\u52a0\u7e2e\u9032',
                  decreaseIndent: '\u51cf\u5c11\u7e2e\u9032',
                  border: '\u908a\u6846',
                  italic: '\u659c\u9ad4',
                  underline: '\u4e0b\u5283\u7dda',
                  strikeThrough: '\u522a\u9664\u7dda',
                  fontFamily: '\u5b57\u9ad4',
                  textAlign: '\u6587\u672c\u5c0d\u9f4a',
                  alignLeft: '\u5c45\u5de6',
                  alignCenter: '\u5c45\u4e2d',
                  alignRight: '\u5c45\u53f3',
                  alignJustify: '\u5169\u7aef\u5c0d\u9f4a',
                  floatLeft: '\u5de6\u6d6e\u52d5',
                  floatRight: '\u53f3\u6d6e\u52d5',
                  superScript: '\u4e0a\u6a19',
                  subScript: '\u4e0b\u6a19',
                  removeStyles: '\u6e05\u9664\u6837\u5f0f',
                  headings: '\u6a19\u984c',
                  header: '\u6a19\u984c',
                  normal: '\u5e38\u898f',
                  orderedList: '\u6709\u5e8f\u5217\u8868',
                  unorderedList: '\u7121\u5e8f\u5217\u8868',
                  blockQuote: '\u5f15\u7528',
                  code: '\u4ee3\u78bc',
                  link: '\u93c8\u63a5',
                  unlink: '\u6e05\u9664\u93c8\u63a5',
                  hr: '\u6c34\u5e73\u7ebf',
                  media: '\u5a92\u9ad4',
                  mediaLibirary: '\u5a92\u9ad4\u5e93',
                  emoji: '\u5c0f\u8868\u60c5',
                  fullscreen: '\u5168\u7192\u5e55',
                  exitFullscreen: '\u9000\u51fa\u5168\u7192\u5e55',
                },
                linkEditor: {
                  textInputPlaceHolder: '\u8f38\u5165\u93c8\u63a5\u6587\u5b57',
                  linkInputPlaceHolder: '\u8f38\u5165\u93c8\u63a5\u5730\u5740',
                  inputWithEnterPlaceHolder:
                    '\u8f38\u5165\u93c8\u63a5\u5730\u5740\u4e26\u56de\u8eca',
                  openInNewWindow: '\u5728\u65b0\u7a97\u53e3\u6253\u958b',
                  removeLink: '\u79fb\u9664\u93c8\u63a5',
                },
                audioPlayer: { title: '\u64ad\u653e\u97f3\u983b\u6587\u4ef6' },
                videoPlayer: {
                  title: '\u64ad\u653e\u8996\u983b\u6587\u4ef6',
                  embedTitle: '\u5d4c\u5165\u5f0f\u5a92\u9ad4',
                },
                media: {
                  image: '\u5716\u50cf',
                  video: '\u8996\u983b',
                  audio: '\u97f3\u983b',
                  embed: '\u5d4c\u5165\u5f0f\u5a92\u9ad4',
                },
              },
              T = {
                base: {
                  remove: 'Usu\u0144',
                  cancel: 'Anuluj',
                  confirm: 'Potwierd\u017a',
                  inert: 'Wstaw',
                  width: 'Szeroko\u015b\u0107',
                  height: 'Wysoko\u015b\u0107',
                },
                controls: {
                  clear: 'Wyczy\u015b\u0107',
                  undo: 'Cofnij',
                  redo: 'Przywr\xf3\u0107',
                  fontSize: 'Wielko\u015b\u0107',
                  color: 'Kolor',
                  textColor: 'Kolor tekstu',
                  tempColors: 'Kolory',
                  backgroundColor: 'T\u0142o',
                  bold: 'Pogrubienie',
                  lineHeight: 'Wysoko\u015b\u0107 linii',
                  letterSpacing: 'Odst\u0119p znak\xf3w',
                  textIndent: 'Wci\u0119cie tekstu',
                  increaseIndent: 'Zwi\u0119ksz wci\u0119cie',
                  decreaseIndent: 'Zmniejsz wci\u0119cie',
                  italic: 'Italiki',
                  underline: 'Podkre\u015blenie',
                  strikeThrough: 'Przekre\u015blenie',
                  fontFamily: 'Czcionka',
                  textAlign: 'Wyr\xf3wnanie tekstu',
                  alignLeft: 'Do lewej',
                  alignCenter: 'Wycentruj',
                  alignRight: 'Do prawej',
                  alignJustify: 'Wyjustuj',
                  floatLeft: 'Do lewej',
                  floatRight: 'Do prawej',
                  superScript: 'Superskrypt',
                  subScript: 'Subskrypt',
                  removeStyles: 'Usu\u0144 stylowanie',
                  headings: 'Nag\u0142\xf3wki',
                  header: 'Nag\u0142\xf3wek',
                  normal: 'Normalny',
                  orderedList: 'Lista uporz\u0105dkowana',
                  unorderedList: 'Lista nieuporz\u0105dkowana',
                  blockQuote: 'Cytat',
                  code: 'Kod',
                  link: 'Link',
                  unlink: 'Usu\u0144 link',
                  hr: 'Linia pozioma',
                  media: 'Media',
                  mediaLibirary: 'Biblioteka medi\xf3w',
                  emoji: 'Emoji',
                },
                linkEditor: {
                  textInputPlaceHolder: 'Wpisz tekst linku',
                  linkInputPlaceHolder: 'Wpisz Adres URL',
                  inputWithEnterPlaceHolder: 'Wpisz adres URL i naci\u015bnij Enter',
                  openInNewWindow: 'Otw\xf3rz w nowym oknie',
                  removeLink: 'Usu\u0144 link',
                },
                audioPlayer: { title: 'Odtw\xf3rz audio' },
                videoPlayer: { title: 'Odtw\xf3rz wideo', embedTitle: 'Tytu\u0142' },
                media: { image: 'Obraz', video: 'Wideo', audio: 'Audio', embed: 'Obiekt osadzony' },
              },
              M = {
                base: {
                  remove: '\uc0ad\uc81c',
                  cancel: '\ucde8\uc18c',
                  confirm: '\uacb0\uc815',
                  inert: '\uc0bd\uc785',
                  width: '\ub108\ube44',
                  height: '\ub192\uc774',
                },
                controls: {
                  clear: '\ucf58\ud150\uce20\uc9c0\uc6b0\uae30',
                  undo: '\ucde8\uc18c',
                  redo: '\ub2e4\uc2dc\ud558\uae30',
                  fontSize: '\uae00\uc790\ud06c\uae30',
                  lineHeight: '\ud589\ub192\uc774',
                  letterSpacing: '\ub2e8\uc5b4\uac04\uaca9',
                  textIndent: '\ub2e8\ub77d\ub4e4\uc5ec\uc4f0\uae30',
                  increaseIndent: '\ub4e4\uc5ec\uc4f0\uae30\ub298\ub9ac\uae30',
                  decreaseIndent: '\ub4e4\uc5ec\uc4f0\uae30\uc904\uc774\uae30',
                  border: '\uad6d\uacbd',
                  color: '\uc0c9\uc0c1',
                  textColor: '\ud14d\uc2a4\ud2b8\uc0c9\uc0c1',
                  backgroundColor: '\ubc30\uacbd\uc0c9\uc0c1',
                  tempColors: '\uc784\uc2dc\uc0c9',
                  bold: '\uad75\uac8c',
                  italic: '\uae30\uc6b8\uc784\uaf34',
                  underline: '\ubc11\uc904',
                  strikeThrough: '\ucde8\uc18c\uc120',
                  fontFamily: '\uae00\uaf34',
                  textAlign: '\ud14d\uc2a4\ud2b8\uc815\ub82c',
                  alignLeft: '\uc67c\ucabd',
                  alignCenter: '\uc911\uc2ec',
                  alignRight: '\uc624\ub978\ucabd',
                  alignJustify: '\uc591\ucabd\ub05d',
                  floatLeft: '\ub5a0\ub2e4\ub2c8\uae30',
                  floatRight: '\uc624\ub978\ucabd\ubd80\ub3d9',
                  superScript: '\uc704\ucca8\uc790',
                  subScript: '\ucca8\uc790',
                  removeStyles: '\uc2a4\ud0c0\uc77c\uc9c0\uc6b0\uae30',
                  headings: '\uc81c\ubaa9',
                  header: '\uc81c\ubaa9',
                  normal: '\uc7ac\ub798\uc2dd',
                  orderedList: '\uc21c\uc11c\uac00\uc9c0\uc815\ub41c\ubaa9\ub85d',
                  unorderedList: '\uc815\ub82c\ub418\uc9c0\uc54a\uc740\ubaa9\ub85d',
                  blockQuote: '\ucc38\uace0\ubb38\ud5cc',
                  code: '\ucf54\ub4dc',
                  link: '\ub9c1\ud06c',
                  unlink: '\ub9c1\ud06c\uc0ad\uc81c',
                  hr: '\uc218\ud3c9\uc120',
                  media: '\ubbf8\ub514\uc5b4',
                  mediaLibirary: '\ubbf8\ub514\uc5b4\ub77c\uc774\ube0c\ub7ec\ub9ac',
                  emoji: '\uc791\uc740\ud45c\ud604',
                  fullscreen: '\uc804\uccb4\ud654\uba74',
                  exitFullscreen: '\uc804\uccb4\ud654\uba74\uc885\ub8cc',
                },
                linkEditor: {
                  textInputPlaceHolder: '\ub9c1\ud06c\ud14d\uc2a4\ud2b8\uc785\ub825',
                  linkInputPlaceHolder: '\ub9c1\ud06c\uc8fc\uc18c\uc785\ub825',
                  inputWithEnterPlaceHolder: '\ub9c1\ud06c\uc8fc\uc18c\uc785\ub825.',
                  openInNewWindow: '\uc0c8\ucc3d\uc5f4\uae30',
                  removeLink: '\ub9c1\ud06c\uc0ad\uc81c',
                },
                audioPlayer: { title: '\uc624\ub514\uc624\ud30c\uc77c\uc7ac\uc0dd' },
                videoPlayer: {
                  title: '\ube44\ub514\uc624\ud30c\uc77c\uc7ac\uc0dd',
                  embedTitle: '\uc784\ubca0\ub514\ub4dc\ubbf8\ub514\uc5b4',
                },
                media: {
                  image: '\uc774\ubbf8\uc9c0',
                  video: '\ube44\ub514\uc624',
                  audio: '\uc624\ub514\uc624',
                  embed: '\uc784\ubca0\ub514\ub4dc\ubbf8\ub514\uc5b4',
                },
              },
              D = {
                base: {
                  remove: 'Kald\u0131r',
                  cancel: '\u0130ptal',
                  confirm: 'Onayla',
                  inert: 'Ekle',
                  width: 'Geni\u015flik',
                  height: 'Y\xfckseklik',
                },
                controls: {
                  clear: 'Temizle',
                  undo: 'Geri al',
                  redo: '\u0130leri al',
                  fontSize: 'Yaz\u0131 boyutu',
                  color: 'Renk',
                  textColor: 'Yaz\u0131 rengi',
                  tempColors: 'Ge\xe7ici renkler',
                  backgroundColor: 'Arkaplan',
                  bold: 'Kal\u0131n',
                  lineHeight: 'Sat\u0131r y\xfcksekli\u011fi',
                  letterSpacing: 'Harf aral\u0131\u011f\u0131',
                  textIndent: '\xc7entik aral\u0131\u011f\u0131',
                  increaseIndent: '\xc7enti\u011fi geni\u015flet',
                  decreaseIndent: '\xc7enti\u011fi daralt',
                  italic: 'E\u011fik',
                  underline: 'Alt\u0131 \xe7izili',
                  strikeThrough: '\xdcst\xfc \xe7izili',
                  fontFamily: 'Yaz\u0131 tipi',
                  textAlign: 'Metin Hizalama',
                  alignLeft: 'Sola hizala',
                  alignCenter: 'Ortaya hizala',
                  alignRight: 'Sa\u011fa hizala',
                  alignJustify: 'Her iki tarafa hizala',
                  floatLeft: 'Sola yat\u0131r',
                  floatRight: 'Sa\u011fa yat\u0131r',
                  superScript: 'Ana kod',
                  subScript: 'Alt kod',
                  removeStyles: 'Stilleri kald\u0131r',
                  headings: 'Ba\u015fl\u0131klar',
                  header: 'Ba\u015fl\u0131k',
                  normal: 'Normal',
                  orderedList: 'S\u0131ral\u0131 liste',
                  unorderedList: 'S\u0131ras\u0131z liste',
                  blockQuote: 'Al\u0131nt\u0131',
                  code: 'Kod',
                  link: 'Ba\u011flant\u0131',
                  unlink: 'Ba\u011flant\u0131y\u0131 kald\u0131r',
                  hr: 'Yatay \xe7izgi',
                  media: 'Medya',
                  mediaLibirary: 'K\xfct\xfcphane',
                  emoji: '\u0130fade',
                  fullscreen: 'Tam ekran',
                  exitFullscreen: 'Tam ekrandan \xe7\u0131k',
                },
                linkEditor: {
                  textInputPlaceHolder: 'Ba\u011flant\u0131 metnini girin',
                  linkInputPlaceHolder: "Ba\u011flant\u0131 URL' si girin",
                  inputWithEnterPlaceHolder:
                    "Ba\u011flant\u0131 URL'si girin ve Enter' a bas\u0131n",
                  openInNewWindow: 'Yeni pencerede a\xe7',
                  removeLink: 'Ba\u011flant\u0131y\u0131 kald\u0131r',
                },
                audioPlayer: { title: 'Ses \xe7al' },
                videoPlayer: {
                  title: 'G\xf6r\xfcnt\xfc oynat',
                  embedTitle: 'G\xf6r\xfcnt\xfcy\xfc g\xf6m',
                },
                media: {
                  image: 'Resim',
                  video: 'G\xf6r\xfcnt\xfc',
                  audio: 'Ses',
                  embed: 'G\xf6m\xfcl\xfc nesne',
                },
              },
              B = {
                base: {
                  remove: '\u524a\u9664',
                  cancel: '\u30ad\u30e3\u30f3\u30bb\u30eb',
                  confirm: '\u6c7a\u5b9a',
                  inert: '\u633f\u5165',
                  width: '\u5e45',
                  height: '\u9ad8\u3055',
                },
                controls: {
                  clear: '\u30af\u30ea\u30a2\u30b3\u30f3\u30c6\u30f3\u30c4',
                  undo: '\u30ad\u30e3\u30f3\u30bb\u30eb',
                  redo: '\u30ad\u30e3\u30f3\u30bb\u30eb',
                  fontSize: '\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba',
                  lineHeight: '\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba',
                  letterSpacing: '\u30ef\u30fc\u30c9\u9593\u9694',
                  textIndent: '\u6bb5\u843d\u306e\u30a4\u30f3\u30c7\u30f3\u30c8',
                  increaseIndent: '\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u5897\u3084\u3059',
                  decreaseIndent: '\u30a4\u30f3\u30c7\u30f3\u30c8\u3092\u6e1b\u3089\u3059',
                  border: '\u56fd\u5883',
                  color: '\u8272',
                  textColor: '\u30c6\u30ad\u30b9\u30c8\u306e\u8272',
                  backgroundColor: '\u80cc\u666f\u8272',
                  tempColors: '\u4eee\u8272',
                  bold: '\u592a\u5b57',
                  italic: '\u30a4\u30bf\u30ea\u30c3\u30af\u4f53',
                  underline: '\u4e0b\u7dda',
                  strikeThrough: '\u53d6\u308a\u6d88\u3057\u7dda',
                  fontFamily: '\u30d5\u30a9\u30f3\u30c8',
                  textAlign: '\u30c6\u30ad\u30b9\u30c8\u306e\u914d\u7f6e',
                  alignLeft: '\u5de6',
                  alignCenter: '\u4e2d\u592e\u63c3\u3048',
                  alignRight: '\u53f3\u306b\u7acb\u3064',
                  alignJustify: '\u4e21\u7aef',
                  floatLeft: '\u5de6\u30d5\u30ed\u30fc\u30c6\u30a3\u30f3\u30b0',
                  floatRight: '\u53f3\u30d5\u30ed\u30fc\u30c6\u30a3\u30f3\u30b0',
                  superScript: '\u4e0a\u4ed8\u304d',
                  subScript: '\u4e0b\u4ed8\u304d\u6587\u5b57',
                  removeStyles: '\u30af\u30ea\u30a2\u30b9\u30bf\u30a4\u30eb',
                  headings: '\u5f79\u8077',
                  header: '\u5f79\u8077',
                  normal: '\u5f93\u6765\u306e',
                  orderedList: '\u9806\u5e8f\u4ed8\u304d\u30ea\u30b9\u30c8',
                  unorderedList: '\u756a\u53f7\u306a\u3057\u30ea\u30b9\u30c8',
                  blockQuote: '\u53c2\u7167',
                  code: '\u30b3\u30fc\u30c9',
                  link: '\u30ea\u30f3\u30af',
                  unlink: '\u30ea\u30f3\u30af\u3092\u89e3\u9664',
                  hr: '\u6a2a\u7dda',
                  media: '\u30e1\u30c7\u30a3\u30a2',
                  mediaLibirary: '\u30e1\u30c7\u30a3\u30a2\u30e9\u30a4\u30d6\u30e9\u30ea\u30fc',
                  emoji: '\u5c0f\u3055\u306a\u8868\u73fe',
                  fullscreen: '\u5168\u753b\u9762',
                  exitFullscreen: '\u5168\u753b\u9762\u3092\u9000\u304f',
                },
                linkEditor: {
                  textInputPlaceHolder:
                    '\u30ea\u30f3\u30af\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b',
                  linkInputPlaceHolder:
                    '\u30ea\u30f3\u30af\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b',
                  inputWithEnterPlaceHolder:
                    '\u30ea\u30f3\u30af\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u623b\u308a\u307e\u3059',
                  openInNewWindow:
                    '\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u958b\u304f',
                  removeLink: '\u65b0\u3057\u3044\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u958b\u304f',
                },
                audioPlayer: {
                  title:
                    '\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a1\u30a4\u30eb\u3092\u518d\u751f\u3059\u308b',
                },
                videoPlayer: {
                  title: '\u30d3\u30c7\u30aa\u30d5\u30a1\u30a4\u30eb\u3092\u518d\u751f\u3059\u308b',
                  embedTitle: '\u57cb\u3081\u8fbc\u307f\u30e1\u30c7\u30a3\u30a2',
                },
                media: {
                  image: '\u753b\u50cf',
                  video: '\u30d3\u30c7\u30aa',
                  audio: '\u97f3\u58f0',
                  embed: '\u57cb\u3081\u8fbc\u307f\u30e1\u30c7\u30a3\u30a2',
                },
              },
              L = {
                base: {
                  remove: '\u0423\u0434\u0430\u043b\u0438\u0442\u044c',
                  cancel: '\u041e\u0442\u043c\u0435\u043d\u0430',
                  confirm: '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c',
                  insert: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c',
                  width: '\u0428\u0438\u0440\u0438\u043d\u0430',
                  height: '\u0412\u044b\u0441\u043e\u0442\u0430',
                },
                controls: {
                  clear: '\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c',
                  undo: '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c',
                  redo: '\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c',
                  fontSize:
                    '\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430',
                  color: '\u0426\u0432\u0435\u0442',
                  textColor: '\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430',
                  tempColors: 'Temp Colors',
                  backgroundColor: '\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430',
                  bold: '\u0416\u0438\u0440\u043d\u044b\u0439',
                  lineHeight:
                    '\u041c\u0435\u0436\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b',
                  letterSpacing:
                    '\u041c\u0435\u0436\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b',
                  textIndent: '\u041e\u0442\u0441\u0442\u0443\u043f',
                  increaseIndent:
                    '\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f',
                  decreaseIndent:
                    '\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f',
                  italic: '\u041a\u0443\u0440\u0441\u0438\u0432',
                  underline:
                    '\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439',
                  strikeThrough:
                    '\u041f\u0435\u0440\u0435\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439',
                  fontFamily: '\u0428\u0440\u0438\u0444\u0442',
                  textAlign:
                    '\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430',
                  alignLeft:
                    '\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
                  alignCenter: '\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443',
                  alignRight:
                    '\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
                  alignJustify: '\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435',
                  floatLeft:
                    '\u041e\u0431\u0442\u0435\u043a\u0430\u043d\u0438\u0435 \u0441\u043b\u0435\u0432\u0430',
                  floatRight:
                    '\u041e\u0431\u0442\u0435\u043a\u0430\u043d\u0438\u0435 \u0441\u043f\u0440\u0430\u0432\u0430',
                  superScript:
                    '\u041d\u0430\u0434\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441',
                  subScript:
                    '\u041f\u043e\u0434\u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441',
                  removeStyles:
                    '\u0423\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u0438\u043b\u0438',
                  headings: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438',
                  header: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  normal: '\u041e\u0431\u044b\u0447\u043d\u044b\u0439',
                  orderedList:
                    '\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a',
                  unorderedList:
                    '\u041d\u0435\u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a',
                  blockQuote: '\u0426\u0438\u0442\u0430\u0442\u0430',
                  code: '\u041a\u043e\u0434',
                  link:
                    '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
                  unlink:
                    '\u0423\u0431\u0440\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
                  hr:
                    '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f',
                  media: '\u041c\u0435\u0434\u0438\u0430',
                  mediaLibirary:
                    '\u041c\u0435\u0434\u0438\u0430 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430',
                  emoji: 'Emoji',
                  fullscreen:
                    '\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c',
                  exitFullscreen:
                    '\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u043f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430',
                },
                linkEditor: {
                  textInputPlaceHolder:
                    '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u0441\u044b\u043b\u043a\u0438',
                  linkInputPlaceHolder:
                    '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
                  inputWithEnterPlaceHolder:
                    '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c Enter',
                  openInNewWindow:
                    '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435',
                  removeLink:
                    '\u0423\u0431\u0440\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
                },
                audioPlayer: {
                  title:
                    '\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0430\u0443\u0434\u0438\u043e\u0444\u0430\u0439\u043b',
                },
                videoPlayer: {
                  title:
                    '\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0432\u0438\u0434\u0435\u043e\u0444\u0430\u0439\u043b',
                  embedTitle: 'Embed Media',
                },
                media: {
                  image: '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430',
                  video: '\u0412\u0438\u0434\u0435\u043e',
                  audio: '\u0410\u0443\u0434\u0438\u043e',
                  embed: '\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0435',
                },
              },
              N = { en: _, zh: I, 'zh-hant': O, pl: T, kr: M, tr: D, jpn: B, ru: L },
              F = n(17),
              R = n.n(F),
              P = n(3),
              K = n(6),
              j = n(13),
              z = n.n(j),
              U = function(e) {
                return function(t) {
                  return 83 === t.keyCode &&
                    (K['KeyBindingUtil'].hasCommandModifier(t) ||
                      K['KeyBindingUtil'].isCtrlKeyCommand(t))
                    ? 'braft-save'
                    : (e && e(t)) || Object(K['getDefaultKeyBinding'])(t);
                };
              },
              H = {
                language: 'zh',
                controls: [
                  'undo',
                  'redo',
                  'separator',
                  'font-size',
                  'line-height',
                  'letter-spacing',
                  'separator',
                  'text-color',
                  'bold',
                  'italic',
                  'underline',
                  'strike-through',
                  'separator',
                  'superscript',
                  'subscript',
                  'remove-styles',
                  'emoji',
                  'separator',
                  'text-indent',
                  'text-align',
                  'separator',
                  'headings',
                  'list-ul',
                  'list-ol',
                  'blockquote',
                  'code',
                  'separator',
                  'media',
                  'link',
                  'table',
                  'split',
                  'hr',
                  'separator',
                  'clear',
                  'separator',
                  'fullscreen',
                ],
                excludeControls: [],
                extendControls: [],
                extendAtomics: [],
                componentBelowControlBar: null,
                media: {
                  pasteImage: !0,
                  imagePasteLimit: 5,
                  image: !0,
                  video: !0,
                  audio: !0,
                  uploadFn: null,
                  validateFn: null,
                  onBeforeDeselect: null,
                  onDeselect: null,
                  onBeforeSelect: null,
                  onSelect: null,
                  onBeforeRemove: null,
                  onRemove: null,
                  onCancel: null,
                  onFileSelect: null,
                  onBeforeInsert: null,
                  onInsert: null,
                  onChange: null,
                  accepts: {
                    image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                    video: 'video/mp4',
                    audio: 'audio/mp3',
                  },
                  externals: { audio: !0, video: !0, image: !0, embed: !0 },
                },
                imageControls: [
                  'float-left',
                  'float-right',
                  'align-left',
                  'align-center',
                  'align-right',
                  'link',
                  'size',
                  'remove',
                ],
                imageResizable: !0,
                colors: [
                  '#000000',
                  '#333333',
                  '#666666',
                  '#999999',
                  '#cccccc',
                  '#ffffff',
                  '#61a951',
                  '#16a085',
                  '#07a9fe',
                  '#003ba5',
                  '#8e44ad',
                  '#f32784',
                  '#c0392b',
                  '#d35400',
                  '#f39c12',
                  '#fdda00',
                ],
                colorPicker: null,
                colorPickerTheme: 'dark',
                colorPickerAutoHide: !0,
                codeTabIndents: 2,
                headings: [
                  'header-one',
                  'header-two',
                  'header-three',
                  'header-four',
                  'header-five',
                  'header-six',
                  'unstyled',
                ],
                textAligns: ['left', 'center', 'right', 'justify'],
                textBackgroundColor: !0,
                allowInsertLinkText: !1,
                defaultLinkTarget: '',
                letterSpacings: [0, 1, 2, 3, 4, 5, 6],
                lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
                fontSizes: [
                  12,
                  14,
                  16,
                  18,
                  20,
                  24,
                  28,
                  30,
                  32,
                  36,
                  40,
                  48,
                  56,
                  64,
                  72,
                  96,
                  120,
                  144,
                ],
                fontFamilies: [
                  { name: 'Araial', family: 'Arial, Helvetica, sans-serif' },
                  { name: 'Georgia', family: 'Georgia, serif' },
                  { name: 'Impact', family: 'Impact, serif' },
                  { name: 'Monospace', family: '"Courier New", Courier, monospace' },
                  {
                    name: 'Tahoma',
                    family: 'tahoma, arial, "Hiragino Sans GB", \u5b8b\u4f53, sans-serif',
                  },
                ],
                converts: {
                  unitExportFn: function(e, t) {
                    return 'line-height' === t ? e : ''.concat(e, 'px');
                  },
                },
                emojis: [
                  '\ud83e\udd23',
                  '\ud83d\ude4c',
                  '\ud83d\udc9a',
                  '\ud83d\udc9b',
                  '\ud83d\udc4f',
                  '\ud83d\ude09',
                  '\ud83d\udcaf',
                  '\ud83d\udc95',
                  '\ud83d\udc9e',
                  '\ud83d\udc98',
                  '\ud83d\udc99',
                  '\ud83d\udc9d',
                  '\ud83d\udda4',
                  '\ud83d\udc9c',
                  '\u2764\ufe0f',
                  '\ud83d\ude0d',
                  '\ud83d\ude3b',
                  '\ud83d\udc93',
                  '\ud83d\udc97',
                  '\ud83d\ude0b',
                  '\ud83d\ude07',
                  '\ud83d\ude02',
                  '\ud83d\ude39',
                  '\ud83d\ude18',
                  '\ud83d\udc96',
                  '\ud83d\ude01',
                  '\ud83d\ude00',
                  '\ud83e\udd1e',
                  '\ud83d\ude32',
                  '\ud83d\ude04',
                  '\ud83d\ude0a',
                  '\ud83d\udc4d',
                  '\ud83d\ude0c',
                  '\ud83d\ude03',
                  '\ud83d\ude05',
                  '\u270c\ufe0f',
                  '\ud83e\udd17',
                  '\ud83d\udc8b',
                  '\ud83d\ude17',
                  '\ud83d\ude3d',
                  '\ud83d\ude1a',
                  '\ud83e\udd20',
                  '\ud83d\ude19',
                  '\ud83d\ude3a',
                  '\ud83d\udc44',
                  '\ud83d\ude38',
                  '\ud83d\ude0f',
                  '\ud83d\ude3c',
                  '\ud83d\udc4c',
                  '\ud83d\ude0e',
                  '\ud83d\ude06',
                  '\ud83d\ude1b',
                  '\ud83d\ude4f',
                  '\ud83e\udd1d',
                  '\ud83d\ude42',
                  '\ud83e\udd11',
                  '\ud83d\ude1d',
                  '\ud83d\ude10',
                  '\ud83d\ude11',
                  '\ud83e\udd24',
                  '\ud83d\ude24',
                  '\ud83d\ude43',
                  '\ud83e\udd21',
                  '\ud83d\ude36',
                  '\ud83d\ude2a',
                  '\ud83d\ude34',
                  '\ud83d\ude35',
                  '\ud83d\ude13',
                  '\ud83d\udc4a',
                  '\ud83d\ude26',
                  '\ud83d\ude37',
                  '\ud83e\udd10',
                  '\ud83d\ude1c',
                  '\ud83e\udd13',
                  '\ud83d\udc7b',
                  '\ud83d\ude25',
                  '\ud83d\ude44',
                  '\ud83e\udd14',
                  '\ud83e\udd12',
                  '\ud83d\ude41',
                  '\ud83d\ude14',
                  '\ud83d\ude2f',
                  '\u2639\ufe0f',
                  '\u2620\ufe0f',
                  '\ud83d\ude30',
                  '\ud83d\ude29',
                  '\ud83d\ude16',
                  '\ud83d\ude15',
                  '\ud83d\ude12',
                  '\ud83d\ude23',
                  '\ud83d\ude22',
                  '\ud83d\ude2e',
                  '\ud83d\ude3f',
                  '\ud83e\udd27',
                  '\ud83d\ude2b',
                  '\ud83e\udd25',
                  '\ud83d\ude1e',
                  '\ud83d\ude2c',
                  '\ud83d\udc4e',
                  '\ud83d\udc80',
                  '\ud83d\ude33',
                  '\ud83d\ude28',
                  '\ud83e\udd15',
                  '\ud83e\udd22',
                  '\ud83d\ude31',
                  '\ud83d\ude2d',
                  '\ud83d\ude20',
                  '\ud83d\ude08',
                  '\ud83d\ude27',
                  '\ud83d\udc94',
                  '\ud83d\ude1f',
                  '\ud83d\ude40',
                  '\ud83d\udca9',
                  '\ud83d\udc7f',
                  '\ud83d\ude21',
                  '\ud83d\ude3e',
                  '\ud83d\udd95',
                ],
                stripPastedStyles: !1,
                triggerChangeOnMount: !0,
                className: '',
                style: {},
                controlBarClassName: '',
                controlBarStyle: {},
                contentClassName: '',
                contentStyle: {},
                draftProps: {},
                hooks: {},
                onChange: null,
                onFocus: null,
                onBlur: null,
                onTab: null,
                onDelete: null,
                onSave: null,
                fixPlaceholder: !1,
              },
              V = n(22),
              W = n.n(V),
              Q = n(23),
              q = function(e, t, n) {
                if (
                  n.editorProps.handleKeyCommand &&
                  'handled' === n.editorProps.handleKeyCommand(e, t, n)
                )
                  return 'handled';
                if ('braft-save' === e)
                  return n.editorProps.onSave && n.editorProps.onSave(t), 'handled';
                var r = n.editorProps,
                  o = r.controls,
                  i = r.excludeControls,
                  a =
                    (0 !== o.indexOf('text-indent') ||
                      o.find(function(e) {
                        return 'text-indent' === e.key;
                      })) &&
                    -1 === i.indexOf('text-indent'),
                  l = t.getSelection().getStartOffset(),
                  s = t.getSelection().getEndOffset(),
                  c = 0 === l && 0 === s;
                if ('backspace' === e) {
                  if (n.editorProps.onDelete && !1 === n.editorProps.onDelete(t)) return 'handled';
                  var u = P['ContentUtils'].getSelectionBlockType(t);
                  a &&
                    c &&
                    'code-block' !== u &&
                    n.setValue(P['ContentUtils'].decreaseSelectionIndent(t));
                }
                if ('tab' === e) {
                  var f = P['ContentUtils'].getSelectionBlockType(t);
                  if ('code-block' === f)
                    return (
                      n.setValue(
                        P['ContentUtils'].insertText(t, ' '.repeat(n.editorProps.codeTabIndents))
                      ),
                      'handled'
                    );
                  if ('ordered-list-item' === f || 'unordered-list-item' === f) {
                    var d = K['RichUtils'].onTab(event, t, 4);
                    return d !== t && n.setValue(d), 'handled';
                  }
                  if ('atomic' !== f && a && c)
                    return n.setValue(P['ContentUtils'].increaseSelectionIndent(t)), 'handled';
                }
                var p = P['ContentUtils'].handleKeyCommand(t, e);
                return p ? (n.setValue(p), 'handled') : 'not-handled';
              },
              Y = function(e, t, n) {
                if (n.editorProps.handleReturn && 'handled' === n.editorProps.handleReturn(e, t, n))
                  return 'handled';
                var r = P['ContentUtils'].getSelectionBlock(t),
                  o = r.getType();
                if ('unordered-list-item' === o || 'ordered-list-item' === o)
                  return 0 === r.getLength()
                    ? (n.setValue(P['ContentUtils'].toggleSelectionBlockType(t, 'unstyled')),
                      'handled')
                    : 'not-handled';
                if ('code-block' === o)
                  return 13 === e.which &&
                    (e.getModifierState('Shift') ||
                      e.getModifierState('Alt') ||
                      e.getModifierState('Control'))
                    ? (n.setValue(P['ContentUtils'].toggleSelectionBlockType(t, 'unstyled')),
                      'handled')
                    : 'not-handled';
                if ('blockquote' === o && 13 === e.which) {
                  if (
                    !(
                      e.getModifierState('Shift') ||
                      e.getModifierState('Alt') ||
                      e.getModifierState('Control')
                    )
                  )
                    return n.setValue(K['RichUtils'].insertSoftNewline(t)), 'handled';
                  e.which = 0;
                }
                var i = Object(Q['handleNewLine'])(t, e);
                return i ? (n.setValue(i), 'handled') : 'not-handled';
              },
              J = function(e, t, n) {
                return n.editorProps.handleBeforeInput &&
                  'handled' === n.editorProps.handleBeforeInput(e, t, n)
                  ? 'handled'
                  : 'not-handled';
              },
              G = function(e, t) {
                var n = t.state.editorState,
                  r = P['ContentUtils'].getSelectedBlocks(n);
                if (r && r.length > 1) {
                  var o = K['EditorState'].push(
                    n,
                    K['Modifier'].removeRange(n.getCurrentContent(), n.getSelection(), 'backward'),
                    'remove-range'
                  );
                  t.setValue(o);
                }
              },
              X = function(e, t, n) {
                if (n.editorProps.readOnly || n.editorProps.disabled) return 'handled';
                if (window && window.__BRAFT_DRAGING__IMAGE__) {
                  var r = K['EditorState'].forceSelection(n.state.editorState, e);
                  return (
                    (r = P['ContentUtils'].insertMedias(r, [
                      window.__BRAFT_DRAGING__IMAGE__.mediaData,
                    ])),
                    (r = P['ContentUtils'].removeBlock(
                      r,
                      window.__BRAFT_DRAGING__IMAGE__.block,
                      r.getSelection()
                    )),
                    (window.__BRAFT_DRAGING__IMAGE__ = null),
                    n.lockOrUnlockEditor(!0),
                    n.setValue(r),
                    'handled'
                  );
                }
                return t && t.getText() ? 'not-handled' : 'handled';
              },
              Z = function(e, t) {
                var n = a()({}, t.constructor.defaultProps.media, t.editorProps.media),
                  r = n.pasteImage,
                  o = n.validateFn,
                  i = n.imagePasteLimit;
                return (
                  r &&
                    e.slice(0, i).forEach(function(e) {
                      if (e && e.type.indexOf('image') > -1 && t.braftFinder) {
                        var n = !o || o(e);
                        n instanceof Promise
                          ? n.then(function() {
                              t.braftFinder.uploadImage(e, function(e) {
                                t.isLiving &&
                                  t.setValue(
                                    P['ContentUtils'].insertMedias(t.state.editorState, [e])
                                  );
                              });
                            })
                          : n &&
                            t.braftFinder.uploadImage(e, function(e) {
                              t.isLiving &&
                                t.setValue(
                                  P['ContentUtils'].insertMedias(t.state.editorState, [e])
                                );
                            });
                      }
                    }),
                  e[0] && e[0].type.indexOf('image') > -1 && r ? 'handled' : 'not-handled'
                );
              },
              $ = function(e, t, n) {
                return n.editorProps.handleDroppedFiles &&
                  'handled' === n.editorProps.handleDroppedFiles(e, t, n)
                  ? 'handled'
                  : Z(t, n);
              },
              ee = function(e, t) {
                return t.editorProps.handlePastedFiles &&
                  'handled' === t.editorProps.handlePastedFiles(e, t)
                  ? 'handled'
                  : Z(e, t);
              },
              te = function(e, t) {
                var n = W()(t.state.editorState);
                if (n && n.toArray)
                  try {
                    var r = K['ContentState'].createFromBlockArray(n.toArray()),
                      o = K['EditorState'].createWithContent(r),
                      i = e.clipboardData || window.clipboardData || e.originalEvent.clipboardData;
                    o.setConvertOptions(t.state.editorState.convertOptions),
                      i.setData('text/html', o.toHTML()),
                      i.setData('text/plain', o.toText()),
                      e.preventDefault();
                  } catch (e) {
                    console.warn(e);
                  }
              },
              ne = function(e, t, n, r) {
                if (
                  r.editorProps.handlePastedText &&
                  'handled' === r.editorProps.handlePastedText(e, t, n, r)
                )
                  return 'handled';
                if (!t || r.editorProps.stripPastedStyles) return !1;
                var o = P['ColorUtils'].detectColorsFromHTMLString(t);
                return (
                  r.setState(
                    {
                      tempColors: k()(r.state.tempColors)
                        .concat(k()(o))
                        .filter(function(e) {
                          return -1 === r.editorProps.colors.indexOf(e);
                        })
                        .filter(function(e, t, n) {
                          return n.indexOf(e) === t;
                        }),
                    },
                    function() {
                      r.setValue(P['ContentUtils'].insertHTML(n, t, 'paste'));
                    }
                  ),
                  'handled'
                );
              },
              re = [],
              oe = [],
              ie = [],
              ae = [],
              le = [],
              se = [],
              ce = [],
              ue = [],
              fe = [],
              de = [],
              pe = [],
              he = [],
              ge = function(e, t) {
                return t
                  ? e
                      .map(function(e) {
                        return e.includeEditors || e.excludeEditors
                          ? e.includeEditors
                            ? -1 !== e.includeEditors.indexOf(t) && e.data
                            : !!e.excludeEditors && (-1 === e.excludeEditors.indexOf(t) && e.data)
                          : e.data;
                      })
                      .filter(function(e) {
                        return e;
                      })
                  : e
                      .filter(function(e) {
                        return !e.includeEditors;
                      })
                      .map(function(e) {
                        return e.data;
                      });
              },
              me = function(e) {
                return ge(ie, e);
              },
              ye = function(e) {
                return ge(re, e);
              },
              ve = function(e) {
                return ge(oe, e, 'decorators');
              },
              be = function(e) {
                return ge(ae, e);
              },
              Ae = function(e) {
                return ge(le, e);
              },
              Se = function(e) {
                var t = {};
                return (
                  ge(se, e).forEach(function(e) {
                    t[e.inlineStyleName] = e.styleMap;
                  }),
                  t
                );
              },
              we = function(e) {
                return ge(ce, e);
              },
              Ee = function(e, t) {
                return function(n, r, o) {
                  return (
                    ge(fe, t).forEach(function(e) {
                      e.importer && e.importer(n, r) && (o = o.add(e.inlineStyleName));
                    }),
                    e ? e(n, r, o) : o
                  );
                };
              },
              ke = function(e, t) {
                return function(n) {
                  n = n.toUpperCase();
                  var r = e ? e(n) : void 0;
                  return (
                    r ||
                    (ge(de, t).find(function(e) {
                      if (e.inlineStyleName === n) return (r = e.exporter), !0;
                    }),
                    r)
                  );
                };
              },
              xe = function(e, t) {
                return function(n, r, o, i) {
                  var a = e ? e(n, r, o, i) : null;
                  return (
                    a ||
                    (ge(ue, t).find(function(e) {
                      var t = e.importer ? e.importer(n, r, i) : null;
                      return (
                        t && (a = o(e.entityType, t.mutability || 'MUTABLE', t.data || {})), !!t
                      );
                    }),
                    a)
                  );
                };
              },
              Ce = function(e, t) {
                return function(n, r) {
                  var o = e ? e(n, r) : void 0;
                  if (o) return o;
                  var i = n.type.toUpperCase();
                  return (
                    ge(ue, t).find(function(e) {
                      if (e.entityType === i)
                        return (o = e.exporter ? e.exporter(n, r) : void 0), !0;
                    }),
                    o
                  );
                };
              },
              _e = function(e, t) {
                return function(n, r, o) {
                  var i = e ? e(n, r, o) : null;
                  return (
                    i ||
                    (ge(pe, t).find(function(e) {
                      var t = e.importer ? e.importer(n, r, o) : void 0;
                      return t && (i = t), !!t;
                    }),
                    i)
                  );
                };
              },
              Ie = function(e, t) {
                return function(n, r) {
                  var o = e ? e(n, r) : null;
                  return (
                    o ||
                    (ge(he, t).find(function(e) {
                      var t = e.exporter ? e.exporter(n, r) : void 0;
                      return t && (o = t), !!t;
                    }),
                    o)
                  );
                };
              },
              Oe = function e(t) {
                if (t instanceof Array) return t.forEach(e), !1;
                if (!t || !t.type || 'string' !== typeof t.type) return !1;
                var n = t.includeEditors,
                  r = t.excludeEditors;
                if ('control' === t.type)
                  re.push({ includeEditors: n, excludeEditors: r, data: t.control });
                else if ('inline-style' === t.type) {
                  var o = t.name.toUpperCase();
                  t.control &&
                    re.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data: a()({ key: o, type: 'inline-style', command: o }, t.control),
                    }),
                    t.style &&
                      se.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { inlineStyleName: o, styleMap: t.style },
                      }),
                    t.styleFn &&
                      ce.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { inlineStyleName: o, styleFn: t.styleFn },
                      }),
                    t.importer &&
                      fe.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { inlineStyleName: o, importer: t.importer },
                      }),
                    de.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data: {
                        inlineStyleName: o,
                        exporter: t.exporter
                          ? t.exporter(t)
                          : C.a.createElement('span', { style: t.style }),
                      },
                    });
                } else if ('block-style' === t.type);
                else if ('entity' === t.type) {
                  var i = t.name.toUpperCase();
                  t.control &&
                    re.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data:
                        'function' === typeof t.control
                          ? t.control
                          : a()(
                              {
                                key: i,
                                type: 'entity',
                                command: i,
                                data: { mutability: t.mutability || 'MUTABLE', data: t.data || {} },
                              },
                              t.control
                            ),
                    }),
                    ue.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data: { entityType: i, importer: t.importer, exporter: t.exporter },
                    }),
                    oe.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data: { type: 'entity', decorator: { key: i, component: t.component } },
                    });
                } else if ('block' === t.type) {
                  var l = t.name;
                  t.renderMap &&
                    ae.push({
                      includeEditors: n,
                      excludeEditors: r,
                      data: { blockType: l, renderMap: t.renderMap },
                    }),
                    t.rendererFn &&
                      le.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { blockType: l, rendererFn: t.rendererFn },
                      }),
                    t.importer &&
                      pe.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { blockType: l, importer: t.importer },
                      }),
                    t.exporter &&
                      he.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { blockType: l, exporter: t.exporter },
                      });
                } else if ('atomic' === t.type);
                else if ('decorator' === t.type) {
                  var s = t.decorator;
                  s && s.strategy && s.component
                    ? oe.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { type: 'strategy', decorator: s },
                      })
                    : s &&
                      s.getDecorations &&
                      oe.push({
                        includeEditors: n,
                        excludeEditors: r,
                        data: { type: 'class', decorator: s },
                      });
                } else
                  'prop-interception' === t.type &&
                    ie.push({ includeEditors: n, excludeEditors: r, data: t.interceptor });
              },
              Te = function(e) {
                return (e.use = Oe), e;
              },
              Me = function(e, t) {
                var n = Object(j['Map'])({
                  atomic: { element: '' },
                  'code-block': {
                    element: 'code',
                    wrapper: C.a.createElement('pre', { className: 'braft-code-block' }),
                  },
                });
                try {
                  var r = be(e.editorId);
                  (n = r.reduce(function(t, n) {
                    return t.merge(
                      'function' === typeof n.renderMap ? n.renderMap(e) : n.renderMap
                    );
                  }, n)),
                    t && (n = 'function' === typeof t ? n.merge(t(e)) : n.merge(t)),
                    (n = K['DefaultDraftBlockRenderMap'].merge(n));
                } catch (e) {
                  console.warn(e);
                }
                return n;
              },
              De = n(11),
              Be = n.n(De),
              Le = n(24),
              Ne = n.n(Le),
              Fe =
                (n(45),
                n(46),
                function(e) {
                  var t = e.active,
                    n = e.onClick,
                    r = e.className;
                  return C.a.createElement('div', {
                    onClick: function() {
                      return n();
                    },
                    className: 'bf-switch ' + r + (t ? ' active' : ''),
                  });
                }),
              Re = function(e, t) {
                return [
                  {
                    key: 'undo',
                    title: e.controls.undo,
                    text: C.a.createElement('i', { className: 'bfi-undo' }),
                    type: 'editor-method',
                    command: 'undo',
                  },
                  {
                    key: 'redo',
                    title: e.controls.redo,
                    text: C.a.createElement('i', { className: 'bfi-redo' }),
                    type: 'editor-method',
                    command: 'redo',
                  },
                  {
                    key: 'remove-styles',
                    title: e.controls.removeStyles,
                    text: C.a.createElement('i', { className: 'bfi-format_clear' }),
                    type: 'editor-method',
                    command: 'removeSelectionInlineStyles',
                  },
                  {
                    key: 'hr',
                    title: e.controls.hr,
                    text: C.a.createElement('i', { className: 'bfi-hr' }),
                    type: 'editor-method',
                    command: 'insertHorizontalLine',
                  },
                  {
                    key: 'bold',
                    title: e.controls.bold,
                    text: C.a.createElement('i', { className: 'bfi-bold' }),
                    type: 'inline-style',
                    command: 'bold',
                  },
                  {
                    key: 'italic',
                    title: e.controls.italic,
                    text: C.a.createElement('i', { className: 'bfi-italic' }),
                    type: 'inline-style',
                    command: 'italic',
                  },
                  {
                    key: 'underline',
                    title: e.controls.underline,
                    text: C.a.createElement('i', { className: 'bfi-underlined' }),
                    type: 'inline-style',
                    command: 'underline',
                  },
                  {
                    key: 'strike-through',
                    title: e.controls.strikeThrough,
                    text: C.a.createElement('i', { className: 'bfi-strikethrough' }),
                    type: 'inline-style',
                    command: 'strikethrough',
                  },
                  {
                    key: 'superscript',
                    title: e.controls.superScript,
                    text: C.a.createElement('i', { className: 'bfi-superscript' }),
                    type: 'inline-style',
                    command: 'superscript',
                  },
                  {
                    key: 'subscript',
                    title: e.controls.subScript,
                    text: C.a.createElement('i', { className: 'bfi-subscript' }),
                    type: 'inline-style',
                    command: 'subscript',
                  },
                  { key: 'headings', title: e.controls.headings, type: 'headings' },
                  {
                    key: 'blockquote',
                    title: e.controls.blockQuote,
                    text: C.a.createElement('i', { className: 'bfi-quote' }),
                    type: 'block-type',
                    command: 'blockquote',
                  },
                  {
                    key: 'code',
                    title: e.controls.code,
                    text: C.a.createElement('i', { className: 'bfi-code' }),
                    type: 'block-type',
                    command: 'code-block',
                  },
                  {
                    key: 'list-ul',
                    title: e.controls.unorderedList,
                    text: C.a.createElement('i', { className: 'bfi-list' }),
                    type: 'block-type',
                    command: 'unordered-list-item',
                  },
                  {
                    key: 'list-ol',
                    title: e.controls.orderedList,
                    text: C.a.createElement('i', { className: 'bfi-list-numbered' }),
                    type: 'block-type',
                    command: 'ordered-list-item',
                  },
                  { key: 'link', title: e.controls.link, type: 'link' },
                  { key: 'text-color', title: e.controls.color, type: 'text-color' },
                  { key: 'line-height', title: e.controls.lineHeight, type: 'line-height' },
                  {
                    key: 'letter-spacing',
                    title: e.controls.letterSpacing,
                    type: 'letter-spacing',
                  },
                  { key: 'text-indent', title: e.controls.textIndent, type: 'text-indent' },
                  { key: 'font-size', title: e.controls.fontSize, type: 'font-size' },
                  { key: 'font-family', title: e.controls.fontFamily, type: 'font-family' },
                  { key: 'text-align', title: e.controls.textAlign, type: 'text-align' },
                  {
                    key: 'media',
                    title: e.controls.media,
                    text: C.a.createElement('i', { className: 'bfi-media' }),
                    type: 'media',
                  },
                  {
                    key: 'emoji',
                    title: e.controls.emoji,
                    text: C.a.createElement('i', { className: 'bfi-emoji' }),
                    type: 'emoji',
                  },
                  {
                    key: 'clear',
                    title: e.controls.clear,
                    text: C.a.createElement('i', { className: 'bfi-clear_all' }),
                    type: 'editor-method',
                    command: 'clearEditorContent',
                  },
                  {
                    key: 'fullscreen',
                    title: t.state.isFullscreen ? e.controls.exitFullscreen : e.controls.fullscreen,
                    text: C.a.createElement('i', {
                      className: t.state.isFullscreen ? 'bfi-fullscreen-exit' : 'bfi-fullscreen',
                    }),
                    type: 'editor-method',
                    command: 'toggleFullscreen',
                  },
                  { key: 'modal', type: 'modal' },
                  { key: 'button', type: 'button' },
                  { key: 'dropdown', type: 'dropdown' },
                  { key: 'component', type: 'component' },
                ];
              },
              Pe = {
                'float-left': {
                  text: C.a.createElement('span', { 'data-float': 'left' }, '\ue91e'),
                  command: 'setImageFloat|left',
                },
                'float-right': {
                  text: C.a.createElement('span', { 'data-float': 'right' }, '\ue914'),
                  command: 'setImageFloat|right',
                },
                'align-left': {
                  text: C.a.createElement('span', { 'data-align': 'left' }, '\ue027'),
                  command: 'setImageAlignment|left',
                },
                'align-center': {
                  text: C.a.createElement('span', { 'data-align': 'center' }, '\ue028'),
                  command: 'setImageAlignment|center',
                },
                'align-right': {
                  text: C.a.createElement('span', { 'data-align': 'right' }, '\ue029'),
                  command: 'setImageAlignment|right',
                },
                size: {
                  text: C.a.createElement('span', null, '\ue3c2'),
                  command: 'toggleSizeEditor',
                },
                link: {
                  text: C.a.createElement('span', null, '\ue91a'),
                  command: 'toggleLinkEditor',
                },
                remove: { text: C.a.createElement('span', null, '\ue9ac'), command: 'removeImage' },
              },
              Ke = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'state', {
                      toolbarVisible: !1,
                      toolbarOffset: 0,
                      linkEditorVisible: !1,
                      sizeEditorVisible: !1,
                      tempLink: null,
                      tempWidth: null,
                      tempHeight: null,
                    }),
                    w()(A()(A()(n)), 'initialLeft', void 0),
                    w()(A()(A()(n)), 'initialTop', void 0),
                    w()(A()(A()(n)), 'initialWidth', void 0),
                    w()(A()(A()(n)), 'initialHeight', void 0),
                    w()(A()(A()(n)), 'reSizeType', void 0),
                    w()(A()(A()(n)), 'changeSize', function(e) {
                      var t = n.reSizeType;
                      n.initialLeft || ((n.initialLeft = e.screenX), (n.initialTop = e.screenY)),
                        'rightbottom' === t &&
                          ((n.initialHeight += e.screenY - n.initialTop),
                          (n.initialWidth += e.screenX - n.initialLeft)),
                        'leftbottom' === t &&
                          ((n.initialHeight += e.screenY - n.initialTop),
                          (n.initialWidth += -e.screenX + n.initialLeft)),
                        (n.initialLeft = e.screenX),
                        (n.initialTop = e.screenY);
                    }),
                    w()(A()(A()(n)), 'moveImage', function(e) {
                      n.changeSize(e),
                        n.setState({
                          tempWidth: Math.abs(n.initialWidth),
                          tempHeight: Math.abs(n.initialHeight),
                        });
                    }),
                    w()(A()(A()(n)), 'upImage', function() {
                      n.confirmImageSize(),
                        document.removeEventListener('mousemove', n.moveImage),
                        document.removeEventListener('mouseup', n.upImage);
                    }),
                    w()(A()(A()(n)), 'repareChangeSize', function(e) {
                      return function(t) {
                        n.reSizeType = e;
                        var r = n.imageElement.getBoundingClientRect();
                        (n.initialLeft = n.initialTop = 0),
                          (n.initialWidth = r.width),
                          (n.initialHeight = r.height),
                          t.preventDefault(),
                          document.addEventListener('mousemove', n.moveImage),
                          document.addEventListener('mouseup', n.upImage);
                      };
                    }),
                    w()(A()(A()(n)), 'preventDragEvent', function(e) {
                      e.stopPropagation(), e.preventDefault();
                    }),
                    w()(A()(A()(n)), 'handleDragStart', function() {
                      return (
                        !n.props.editor.editorProps.readOnly &&
                        !n.props.editor.editorProps.disabled &&
                        ((window.__BRAFT_DRAGING__IMAGE__ = {
                          block: n.props.block,
                          mediaData: a()({ type: 'IMAGE' }, n.props.mediaData),
                        }),
                        n.setState({ toolbarVisible: !1 }, function() {
                          n.unlockEditor();
                        }),
                        !0)
                      );
                    }),
                    w()(A()(A()(n)), 'handleDragEnd', function() {
                      return (window.__BRAFT_DRAGING__IMAGE__ = null), !1;
                    }),
                    w()(A()(A()(n)), 'executeCommand', function(e) {
                      if ('string' === typeof e) {
                        var t = e.split('|'),
                          r = Ne()(t, 2),
                          o = r[0],
                          i = r[1];
                        n[o] && n[o](i);
                      } else 'function' === typeof e && e(n.props.block, n.props.mediaData, n.props.editor.getValue());
                    }),
                    w()(A()(A()(n)), 'removeImage', function() {
                      n.props.editor.setValue(
                        P['ContentUtils'].removeBlock(n.props.editor.getValue(), n.props.block)
                      ),
                        n.unlockEditor();
                    }),
                    w()(A()(A()(n)), 'toggleLinkEditor', function() {
                      n.setState({
                        linkEditorVisible: !n.state.linkEditorVisible,
                        sizeEditorVisible: !1,
                      });
                    }),
                    w()(A()(A()(n)), 'toggleSizeEditor', function() {
                      n.setState({
                        linkEditorVisible: !1,
                        sizeEditorVisible: !n.state.sizeEditorVisible,
                      });
                    }),
                    w()(A()(A()(n)), 'handleLinkInputKeyDown', function(e) {
                      13 === e.keyCode && n.confirmImageLink();
                    }),
                    w()(A()(A()(n)), 'setImageLink', function(e) {
                      n.setState({ tempLink: e.currentTarget.value });
                    }),
                    w()(A()(A()(n)), 'confirmImageLink', function() {
                      var e = n.state.tempLink,
                        t = n.props.hooks('set-image-link', e)(e);
                      if (!1 === t) return !1;
                      'string' === typeof t && (e = t),
                        null !== e &&
                          (n.props.editor.setValue(
                            P['ContentUtils'].setMediaData(
                              n.props.editor.getValue(),
                              n.props.entityKey,
                              { link: e }
                            )
                          ),
                          window.setImmediate(n.props.editor.forceRender));
                    }),
                    w()(A()(A()(n)), 'handleSizeInputKeyDown', function(e) {
                      13 === e.keyCode && n.confirmImageSize();
                    }),
                    w()(A()(A()(n)), 'setImageWidth', function(e) {
                      var t = e.currentTarget,
                        r = t.value;
                      r && !isNaN(r) && (r += 'px'), n.setState({ tempWidth: r });
                    }),
                    w()(A()(A()(n)), 'setImageHeight', function(e) {
                      var t = e.currentTarget,
                        r = t.value;
                      r && !isNaN(r) && (r += 'px'), n.setState({ tempHeight: r });
                    }),
                    w()(A()(A()(n)), 'confirmImageSize', function() {
                      var e = n.state,
                        t = e.tempWidth,
                        r = e.tempHeight,
                        o = {};
                      null !== t && (o.width = t), null !== r && (o.height = r);
                      var i = n.props.hooks('set-image-size', o)(o);
                      if (!1 === i) return !1;
                      i && (i.width || i.height) && (o = i),
                        n.props.editor.setValue(
                          P['ContentUtils'].setMediaData(
                            n.props.editor.getValue(),
                            n.props.entityKey,
                            o
                          )
                        ),
                        window.setImmediate(n.props.editor.forceRender);
                    }),
                    w()(A()(A()(n)), 'setImageFloat', function(e) {
                      var t = n.props.hooks('set-image-float', e)(e);
                      if (!1 === t) return !1;
                      'string' === typeof t && (e = t),
                        n.props.editor.setValue(
                          P['ContentUtils'].setMediaPosition(
                            n.props.editor.getValue(),
                            n.props.block,
                            { float: e }
                          )
                        ),
                        n.unlockEditor();
                    }),
                    w()(A()(A()(n)), 'setImageAlignment', function(e) {
                      var t = n.props.hooks('set-image-alignment', e)(e);
                      if (!1 === t) return !1;
                      'string' === typeof t && (e = t),
                        n.props.editor.setValue(
                          P['ContentUtils'].setMediaPosition(
                            n.props.editor.getValue(),
                            n.props.block,
                            { alignment: e }
                          )
                        ),
                        n.unlockEditor();
                    }),
                    w()(A()(A()(n)), 'showToolbar', function(e) {
                      if (
                        n.props.editor.editorProps.readOnly ||
                        n.props.editor.editorProps.disabled
                      )
                        return !1;
                      e.preventDefault(),
                        n.state.toolbarVisible ||
                          n.setState({ toolbarVisible: !0 }, function() {
                            n.lockEditor(), n.setState({ toolbarOffset: n.calcToolbarOffset() });
                          });
                    }),
                    w()(A()(A()(n)), 'hideToolbar', function(e) {
                      e.preventDefault(),
                        n.setState({ toolbarVisible: !1 }, function() {
                          n.unlockEditor(), n.props.editor.requestFocus();
                        });
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = this.props,
                          n = t.mediaData,
                          r = t.language,
                          o = t.imageControls,
                          i = t.imageResizable,
                          a = this.state,
                          l = a.toolbarVisible,
                          s = a.toolbarOffset,
                          c = a.linkEditorVisible,
                          u = a.sizeEditorVisible,
                          f = a.tempWidth,
                          d = a.tempHeight,
                          p = this.props.block.getData(),
                          h = p.get('float'),
                          g = p.get('alignment'),
                          m = n.url,
                          y = n.link,
                          v = n.link_target,
                          b = n.width,
                          A = n.height,
                          S = n.meta,
                          w = {},
                          E = !1;
                        h
                          ? (g = null)
                          : 'left' === g
                          ? ((w.float = 'left'), (E = !0))
                          : 'right' === g
                          ? ((w.float = 'right'), (E = !0))
                          : 'center' === g
                          ? (w.textAlign = 'center')
                          : ((w.float = 'left'), (E = !0));
                        var k = o.map(function(t, r) {
                          return 'string' === typeof t && Pe[t]
                            ? C.a.createElement(
                                'a',
                                {
                                  className: 'link' === t && y ? 'active' : '',
                                  key: r,
                                  href: 'javascript:void(0);',
                                  onClick: function() {
                                    return e.executeCommand(Pe[t].command);
                                  },
                                },
                                Pe[t].text
                              )
                            : t && (t.render || t.text)
                            ? t.render
                              ? t.render(n, e.props.block)
                              : C.a.createElement(
                                  'a',
                                  {
                                    key: r,
                                    href: 'javascript:void(0);',
                                    onClick: function() {
                                      return t.onClick && e.executeCommand(t.onClick);
                                    },
                                  },
                                  t.text
                                )
                            : null;
                        });
                        return C.a.createElement(
                          'div',
                          { className: 'bf-media' },
                          C.a.createElement(
                            'div',
                            {
                              style: w,
                              draggable: !0,
                              onMouseEnter: this.showToolbar,
                              onMouseMove: this.showToolbar,
                              onMouseLeave: this.hideToolbar,
                              onDragStart: this.handleDragStart,
                              onDragEnd: this.handleDragEnd,
                              ref: function(t) {
                                return (e.mediaEmbederInstance = t);
                              },
                              className: 'bf-image',
                            },
                            l
                              ? C.a.createElement(
                                  'div',
                                  {
                                    style: { marginLeft: s },
                                    ref: function(t) {
                                      return (e.toolbarElement = t);
                                    },
                                    'data-float': h,
                                    'data-align': g,
                                    className: 'bf-media-toolbar',
                                  },
                                  c
                                    ? C.a.createElement(
                                        'div',
                                        { className: 'bf-image-link-editor' },
                                        C.a.createElement(
                                          'div',
                                          { className: 'editor-input-group' },
                                          C.a.createElement('input', {
                                            type: 'text',
                                            placeholder: r.linkEditor.inputWithEnterPlaceHolder,
                                            onKeyDown: this.handleLinkInputKeyDown,
                                            onChange: this.setImageLink,
                                            defaultValue: y,
                                          }),
                                          C.a.createElement(
                                            'button',
                                            { type: 'button', onClick: this.confirmImageLink },
                                            r.base.confirm
                                          )
                                        ),
                                        C.a.createElement(
                                          'div',
                                          { className: 'switch-group' },
                                          C.a.createElement(Fe, {
                                            active: '_blank' === v,
                                            onClick: function() {
                                              return e.setImageLinkTarget(v);
                                            },
                                          }),
                                          C.a.createElement(
                                            'label',
                                            null,
                                            r.linkEditor.openInNewWindow
                                          )
                                        )
                                      )
                                    : null,
                                  u
                                    ? C.a.createElement(
                                        'div',
                                        { className: 'bf-image-size-editor' },
                                        C.a.createElement(
                                          'div',
                                          { className: 'editor-input-group' },
                                          C.a.createElement('input', {
                                            type: 'text',
                                            onDragStart: this.preventDragEvent,
                                            placeholder: r.base.width,
                                            onKeyDown: this.handleSizeInputKeyDown,
                                            onChange: this.setImageWidth,
                                            defaultValue: b,
                                          }),
                                          C.a.createElement('input', {
                                            type: 'text',
                                            onDragStart: this.preventDragEvent,
                                            placeholder: r.base.height,
                                            onKeyDown: this.handleSizeInputKeyDown,
                                            onChange: this.setImageHeight,
                                            defaultValue: A,
                                          }),
                                          C.a.createElement(
                                            'button',
                                            { type: 'button', onClick: this.confirmImageSize },
                                            r.base.confirm
                                          )
                                        )
                                      )
                                    : null,
                                  k,
                                  C.a.createElement('i', {
                                    style: { marginLeft: -1 * s },
                                    className: 'bf-media-toolbar-arrow',
                                  })
                                )
                              : null,
                            C.a.createElement(
                              'div',
                              {
                                style: {
                                  position: 'relative',
                                  width: ''.concat(b, 'px'),
                                  height: ''.concat(A, 'px'),
                                  display: 'inline-block',
                                },
                              },
                              C.a.createElement(
                                'img',
                                Be()(
                                  {
                                    ref: function(t) {
                                      return (e.imageElement = t);
                                    },
                                    src: m,
                                    width: b,
                                    height: A,
                                  },
                                  S
                                )
                              ),
                              l && i
                                ? C.a.createElement('div', {
                                    className: 'bf-csize-icon right-bottom',
                                    onMouseDown: this.repareChangeSize('rightbottom'),
                                  })
                                : null,
                              l && i
                                ? C.a.createElement('div', {
                                    className: 'bf-csize-icon left-bottom',
                                    onMouseDown: this.repareChangeSize('leftbottom'),
                                  })
                                : null,
                              i
                                ? C.a.createElement('div', {
                                    className: 'bf-pre-csize '.concat(this.reSizeType),
                                    style: {
                                      width: ''.concat(f, 'px'),
                                      height: ''.concat(d, 'px'),
                                    },
                                  })
                                : null
                            )
                          ),
                          E &&
                            C.a.createElement('div', {
                              className: 'clearfix',
                              style: { clear: 'both', height: 0, lineHeight: 0, float: 'none' },
                            })
                        );
                      },
                    },
                    {
                      key: 'lockEditor',
                      value: function() {
                        this.props.editor.lockOrUnlockEditor(!0);
                      },
                    },
                    {
                      key: 'unlockEditor',
                      value: function() {
                        this.props.editor.lockOrUnlockEditor(!1);
                      },
                    },
                    {
                      key: 'calcToolbarOffset',
                      value: function() {
                        var e = this.props,
                          t = e.getContainerNode,
                          n = e.containerNode,
                          r = t ? t() : n;
                        if (!r) return 0;
                        var o = r.querySelector('.bf-content').getBoundingClientRect(),
                          i = this.toolbarElement.getBoundingClientRect(),
                          a = this.imageElement.getBoundingClientRect(),
                          l = o.right - (a.right - a.width / 2 + i.width / 2),
                          s = a.left + a.width / 2 - i.width / 2 - o.left;
                        return l < 10 ? l - 10 : s < 10 ? -1 * s + 10 : 0;
                      },
                    },
                    {
                      key: 'setImageLinkTarget',
                      value: function(e) {
                        var t = this.props.hooks('set-image-link-target', e)(e);
                        if (!1 === t) return !1;
                        'string' === typeof t && (e = t),
                          (e = '_blank' === e ? '' : '_blank'),
                          this.props.editor.setValue(
                            P['ContentUtils'].setMediaData(
                              this.props.editor.getValue(),
                              this.props.entityKey,
                              { link_target: e }
                            )
                          ),
                          window.setImmediate(this.props.editor.forceRender);
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              je = (n(47), n(48), n(16)),
              ze = n.n(je),
              Ue = (function(e) {
                function t(e) {
                  var n;
                  return (
                    u()(this, t),
                    (n = h()(this, m()(t).call(this, e))),
                    w()(A()(A()(n)), 'handleTransitionEnd', function() {
                      if (!n.rootElement || !n.rootElement.classList) return !1;
                      n.rootElement.classList.contains('active') ||
                        (ze.a.unmountComponentAtNode(n.rootElement) &&
                          n.rootElement.parentNode.removeChild(n.rootElement));
                    }),
                    w()(A()(A()(n)), 'handleMouseDown', function(e) {
                      var t = e.target.tagName.toLowerCase();
                      if ('input' === t || 'textarea' === t) return !1;
                      e.preventDefault();
                    }),
                    w()(A()(A()(n)), 'handleCancel', function() {
                      n.props.closeOnCancel && n.close(), n.props.onCancel && n.props.onCancel();
                    }),
                    w()(A()(A()(n)), 'handleConfirm', function() {
                      n.props.closeOnConfirm && n.close(), n.props.onConfirm && n.props.onConfirm();
                    }),
                    w()(A()(A()(n)), 'handleMaskClick', function() {
                      n.props.closeOnBlur && n.close(), n.props.onBlue && n.props.onBlue();
                    }),
                    w()(A()(A()(n)), 'close', function() {
                      n.unrenderComponent(), n.props.onClose && n.props.onClose();
                    }),
                    (n.active = !1),
                    (n.componentId = 'BRAFT-MODAL-' + P['BaseUtils'].UniqueIndex()),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        this.props.visible &&
                          ((this.active = !0), this.renderComponent(this.props));
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        this.props.visible && !e.visible
                          ? this.unrenderComponent()
                          : (this.props.visible || e.visible) &&
                            ((this.active = !0), this.renderComponent(e));
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        return null;
                      },
                    },
                    {
                      key: 'unrenderComponent',
                      value: function() {
                        (this.active = !1),
                          this.activeId && window.clearImmediate(this.activeId),
                          this.rootElement &&
                            this.rootElement.classList &&
                            this.rootElement.classList.remove('active');
                      },
                    },
                    {
                      key: 'renderComponent',
                      value: function(e) {
                        var t = this;
                        if (!this.active) return !1;
                        var n = e.title,
                          r = e.className,
                          o = e.width,
                          i = e.height,
                          a = e.children,
                          l = e.component,
                          s = e.confirmable,
                          c = e.showFooter,
                          u = e.showCancel,
                          f = e.showConfirm,
                          d = e.showClose,
                          p = e.cancelText,
                          h = e.confirmText,
                          g = e.bottomText,
                          m = e.language;
                        'undefined' === typeof u && (u = !0),
                          'undefined' === typeof d && (d = !0),
                          'undefined' === typeof f && (f = !0),
                          'undefined' === typeof c && (c = !0);
                        var y = C.a.createElement(
                          'div',
                          { onMouseDown: this.handleMouseDown, className: 'bf-modal ' + (r || '') },
                          C.a.createElement('div', {
                            className: 'bf-modal-mask',
                            onClick: this.handleMaskClick,
                          }),
                          C.a.createElement(
                            'div',
                            {
                              onTransitionEnd: this.handleTransitionEnd,
                              style: { width: o, height: i },
                              className: 'bf-modal-content',
                            },
                            C.a.createElement(
                              'div',
                              { className: 'bf-modal-header' },
                              C.a.createElement('h3', { className: 'bf-modal-caption' }, n),
                              d &&
                                C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    onClick: this.close,
                                    className: 'bf-modal-close-button',
                                  },
                                  C.a.createElement('i', { className: 'bfi-close' })
                                )
                            ),
                            C.a.createElement('div', { className: 'bf-modal-body' }, a || l),
                            c
                              ? C.a.createElement(
                                  'div',
                                  { className: 'bf-modal-footer' },
                                  C.a.createElement('div', { className: 'bf-modal-addon-text' }, g),
                                  C.a.createElement(
                                    'div',
                                    { className: 'bf-modal-buttons' },
                                    u &&
                                      C.a.createElement(
                                        'button',
                                        {
                                          type: 'button',
                                          onClick: this.handleCancel,
                                          className: 'bf-modal-cancel',
                                        },
                                        p || m.base.cancel
                                      ),
                                    f &&
                                      C.a.createElement(
                                        'button',
                                        {
                                          type: 'button',
                                          onClick: this.handleConfirm,
                                          className: 'bf-modal-confirm ' + (s ? '' : 'disabled'),
                                        },
                                        h || m.base.confirm
                                      )
                                  )
                                )
                              : null
                          )
                        );
                        (this.rootElement = document.querySelector('#' + this.componentId)),
                          this.rootElement ||
                            ((this.rootElement = document.createElement('div')),
                            (this.rootElement.id = this.componentId),
                            (this.rootElement.className = 'bf-modal-root'),
                            document.body.appendChild(this.rootElement)),
                          ze.a.render(y, this.rootElement),
                          (this.activeId = window.setImmediate(function() {
                            t.rootElement.classList.add('active');
                          }));
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component);
            w()(Ue, 'defaultProps', { showFooter: !0, closeOnBlur: !0 });
            var He = function(e) {
                var t = document.createElement('div');
                (t.style.display = 'none'),
                  document.body.appendChild(t),
                  (e = a()({ visible: !0, closeOnConfirm: !0, closeOnCancel: !0 }, e));
                var n = function() {
                    ze.a.unmountComponentAtNode(t) && t.parentNode.removeChild(t);
                  },
                  r = function() {
                    e.onConfirm && e.onConfirm();
                  },
                  o = function() {
                    e.onCancel && e.onCancel();
                  },
                  i = function() {
                    n(), e.onClose && e.onClose();
                  },
                  l = ze.a.render(
                    C.a.createElement(Ue, Be()({}, e, { onConfirm: r, onCancel: o, onClose: i })),
                    t
                  );
                return (l.destroy = n), (l.update = l.renderComponent), l;
              },
              Ve =
                (n(49),
                function(e, t, n) {
                  return He({ title: e, component: t, language: n, showFooter: !1 });
                }),
              We = { video: 'bfi-film', audio: 'bfi-music', embed: 'bfi-code' },
              Qe = function(e) {
                var t = e.title,
                  n = e.type,
                  r = e.language,
                  o = e.name,
                  i = e.url,
                  a = e.poster,
                  l = e.children,
                  s = e.onRemove;
                return C.a.createElement(
                  'div',
                  { className: 'bf-player-holder '.concat(n) },
                  C.a.createElement(
                    'div',
                    { className: 'icon-badge' },
                    C.a.createElement('i', { className: We[n] }),
                    C.a.createElement('span', { className: 'text' }, r.media[n])
                  ),
                  C.a.createElement(
                    'button',
                    { onMouseDown: s, className: 'button-remove' },
                    C.a.createElement('i', { className: 'bfi-close' })
                  ),
                  C.a.createElement(
                    'button',
                    {
                      onMouseDown: function() {
                        return Ve(o ? ''.concat(t, ':').concat(o) : t, l, r);
                      },
                      className: 'button-play',
                    },
                    C.a.createElement('i', { className: 'bfi-play_arrow' })
                  ),
                  o ? C.a.createElement('h5', { className: 'bf-name' }, o) : null,
                  C.a.createElement('h6', { className: 'bf-url' }, i),
                  a
                    ? C.a.createElement('div', {
                        className: 'bf-poster',
                        style: { backgroundImage: 'url('.concat(a, ')') },
                      })
                    : null
                );
              },
              qe = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'removeVideo', function() {
                      n.props.editor.setValue(
                        P['ContentUtils'].removeBlock(n.props.editorState, n.props.block)
                      );
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this.props,
                          t = e.mediaData,
                          n = e.language,
                          r = t.url,
                          o = t.name,
                          i = t.meta;
                        return C.a.createElement(
                          'div',
                          { className: 'bf-video-wrap' },
                          C.a.createElement(
                            Qe,
                            {
                              type: 'video',
                              onRemove: this.removeVideo,
                              poster: (i && i.poster) || '',
                              language: n,
                              url: r,
                              name: o,
                              title: n.videoPlayer.title,
                            },
                            C.a.createElement(
                              'div',
                              { className: 'bf-video-player' },
                              C.a.createElement('video', {
                                controls: !0,
                                src: r,
                                poster: (i && i.poster) || '',
                              })
                            )
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              Ye =
                (n(50),
                (function(e) {
                  function t() {
                    var e, n;
                    u()(this, t);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                      o[i] = arguments[i];
                    return (
                      (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                      w()(A()(A()(n)), 'removeAudio', function() {
                        n.props.editor.setValue(
                          P['ContentUtils'].removeBlock(n.props.editorState, n.props.block)
                        );
                      }),
                      n
                    );
                  }
                  return (
                    v()(t, e),
                    d()(t, [
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            t = e.mediaData,
                            n = e.language,
                            r = t.url,
                            o = t.name,
                            i = t.meta;
                          return C.a.createElement(
                            'div',
                            { className: 'bf-audio-wrap' },
                            C.a.createElement(
                              Qe,
                              {
                                type: 'audio',
                                onRemove: this.removeAudio,
                                poster: (i && i.poster) || '',
                                language: n,
                                url: r,
                                name: o,
                                title: n.audioPlayer.title,
                              },
                              C.a.createElement(
                                'div',
                                { className: 'bf-audio-player' },
                                C.a.createElement('audio', { controls: !0, src: r })
                              )
                            )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(C.a.Component)),
              Je =
                (n(51),
                (function(e) {
                  function t() {
                    var e, n;
                    u()(this, t);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                      o[i] = arguments[i];
                    return (
                      (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                      w()(A()(A()(n)), 'removeEmbed', function() {
                        n.props.editor.setValue(
                          P['ContentUtils'].removeBlock(n.props.editorState, n.props.block)
                        );
                      }),
                      n
                    );
                  }
                  return (
                    v()(t, e),
                    d()(t, [
                      {
                        key: 'render',
                        value: function() {
                          var e = this.props,
                            t = e.mediaData,
                            n = e.language,
                            r = t.name,
                            o = t.url,
                            i = t.meta;
                          return C.a.createElement(
                            'div',
                            { className: 'bf-embed-wrap' },
                            C.a.createElement(
                              Qe,
                              {
                                type: 'embed',
                                onRemove: this.removeEmbed,
                                poster: (i && i.poster) || '',
                                language: n,
                                url: o,
                                name: r,
                                title: n.videoPlayer.embedTitle,
                              },
                              C.a.createElement('div', {
                                className: 'bf-embed-player',
                                dangerouslySetInnerHTML: { __html: o },
                              })
                            )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(C.a.Component)),
              Ge =
                (n(52),
                (function(e) {
                  function t() {
                    var e, n;
                    u()(this, t);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                      o[i] = arguments[i];
                    return (
                      (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                      w()(A()(A()(n)), 'removeHorizontalLine', function() {
                        n.props.editor.setValue(
                          P['ContentUtils'].removeBlock(n.props.editorState, n.props.block)
                        );
                      }),
                      n
                    );
                  }
                  return (
                    v()(t, e),
                    d()(t, [
                      {
                        key: 'render',
                        value: function() {
                          return C.a.createElement(
                            'div',
                            { className: 'bf-hr' },
                            C.a.createElement(
                              'div',
                              { className: 'bf-media-toolbar' },
                              C.a.createElement(
                                'a',
                                { onClick: this.removeHorizontalLine },
                                '\ue9ac'
                              )
                            )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(C.a.Component)),
              Xe = function e() {
                var t = this;
                u()(this, e),
                  w()(this, 'superProps', void 0),
                  w()(this, 'customBlockRendererFn', void 0),
                  w()(this, 'getRenderFn', function(e, n) {
                    return (t.superProps = e), (t.customBlockRendererFn = n), t.blockRendererFn;
                  }),
                  w()(this, 'renderAtomicBlock', function(e) {
                    var n = t.superProps,
                      r = e.block.getEntityAt(0);
                    if (!r) return null;
                    var o = e.contentState.getEntity(r),
                      i = o.getData(),
                      l = o.getType(),
                      s = a()({}, n, { block: e.block, mediaData: i, entityKey: r });
                    if ('IMAGE' === l) return C.a.createElement(Ke, s);
                    if ('AUDIO' === l) return C.a.createElement(Ye, s);
                    if ('VIDEO' === l) return C.a.createElement(qe, s);
                    if ('EMBED' === l) return C.a.createElement(Je, s);
                    if ('HR' === l) return C.a.createElement(Ge, s);
                    if (n.extendAtomics)
                      for (var c = n.extendAtomics, u = 0; u < c.length; u++)
                        if (l === c[u].type) {
                          var f = c[u].component;
                          return C.a.createElement(f, s);
                        }
                    return null;
                  }),
                  w()(this, 'blockRendererFn', function(e) {
                    var n = t.customBlockRendererFn,
                      r = t.superProps,
                      o = e.getType(),
                      i = null;
                    if ((n && (i = n(e, r) || null), i)) return i;
                    var a = Ae(r.editorId);
                    return (
                      a.find(function(e) {
                        if (
                          e.blockType === o ||
                          (e.blockType instanceof RegExp && e.blockType.test(o))
                        )
                          return (i = e.rendererFn ? e.rendererFn(r) : null), !0;
                      }),
                      i ||
                        ('atomic' === o && (i = { component: t.renderAtomicBlock, editable: !1 }),
                        i)
                    );
                  });
              },
              Ze = new Xe(),
              $e = Ze.getRenderFn,
              et = function(e) {
                return function(t) {
                  var n = t.getData() && t.getData().get('textAlign'),
                    r = t.getData() && t.getData().get('textIndent'),
                    o = t.getData() && t.getData().get('float'),
                    i = '';
                  return (
                    n && (i = 'bfa-'.concat(n)),
                    r && 0 !== r && (i += ' bftd-'.concat(r)),
                    o && (i += ' bff-'.concat(o)),
                    e && (i += e(t) || ''),
                    i
                  );
                };
              },
              tt = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = Se(e.editorId);
                return a()(
                  {
                    SUPERSCRIPT: { position: 'relative', top: '-8px', fontSize: '11px' },
                    SUBSCRIPT: { position: 'relative', bottom: '-8px', fontSize: '11px' },
                  },
                  n,
                  t
                );
              },
              nt = function(e) {
                return e.split('-')[1];
              },
              rt = function(e, t) {
                return function(n, r) {
                  var o = {},
                    i = t.fontFamilies,
                    a = t.unitExportFn,
                    l = t.customStyleFn,
                    s = we(e.editorId);
                  return (
                    s.forEach(function(e) {
                      o = e.styleFn ? e.styleFn(n, r, o) : o;
                    }),
                    (o = l ? l(n, r, o) : {}),
                    n.forEach(function(e) {
                      0 === e.indexOf('COLOR-')
                        ? (o.color = '#' + nt(e))
                        : 0 === e.indexOf('BGCOLOR-')
                        ? (o.backgroundColor = '#' + nt(e))
                        : 0 === e.indexOf('FONTSIZE-')
                        ? (o.fontSize = a(nt(e), 'font-size', 'editor'))
                        : 0 === e.indexOf('LINEHEIGHT-')
                        ? (o.lineHeight = a(nt(e), 'line-height', 'editor'))
                        : 0 === e.indexOf('LETTERSPACING-')
                        ? (o.letterSpacing = a(nt(e), 'letter-spacing', 'editor'))
                        : 0 === e.indexOf('TEXTINDENT-')
                        ? (o.textIndent = a(nt(e), 'text-indent', 'editor'))
                        : 0 === e.indexOf('FONTFAMILY-') &&
                          (o.fontFamily =
                            (
                              i.find(function(t) {
                                return t.name.toUpperCase() === nt(e);
                              }) || {}
                            ).family || '');
                    }),
                    o
                  );
                };
              },
              ot = n(18),
              it = n.n(ot),
              at = function(e) {
                var t = e.children,
                  n = e.entityKey,
                  r = e.contentState,
                  o = r.getEntity(n).getData(),
                  i = o.href,
                  a = o.target;
                return C.a.createElement(
                  'span',
                  { className: 'bf-link-wrap' },
                  C.a.createElement(
                    'a',
                    {
                      onClick: function(e) {
                        return lt(e, i);
                      },
                      className: 'bf-link',
                      href: i,
                      target: a,
                    },
                    t
                  )
                );
              },
              lt = function(e, t) {
                if (e.getModifierState('Control') || e.getModifierState('Meta')) {
                  var n = document.createElement('a');
                  (n.href = t), (n.target = e.currentTarget.target), n.click();
                }
              },
              st = '-';
            it.a.prototype.getDecorations = function(e, t) {
              var n = Array(e.getText().length).fill(null);
              return (
                this.decorators.forEach(function(r, o) {
                  r.getDecorations(e, t).forEach(function(e, t) {
                    e && ((e = o + st + e), (n[t] = e));
                  });
                }),
                z.a.List(n)
              );
            };
            var ct = [{ type: 'entity', decorator: { key: 'LINK', component: at } }],
              ut = function(e) {
                return function(t, n, r) {
                  t.findEntityRanges(function(t) {
                    var n = t.getEntity();
                    return null !== n && r.getEntity(n).getType() === e;
                  }, n);
                };
              },
              ft = function(e) {
                var t = ve(e),
                  n = ct.concat(
                    k()(
                      t.filter(function(e) {
                        return 'entity' === e.type;
                      })
                    )
                  ),
                  r = t.filter(function(e) {
                    return 'strategy' === e.type;
                  }),
                  o = t.filter(function(e) {
                    return 'class' === e.type;
                  });
                return new it.a(
                  k()(
                    o.map(function(e) {
                      return e.decorator;
                    })
                  ).concat([
                    new K['CompositeDecorator'](
                      r.map(function(e) {
                        return e.decorator;
                      })
                    ),
                    new K['CompositeDecorator'](
                      n.map(function(e) {
                        return { strategy: ut(e.decorator.key), component: e.decorator.component };
                      })
                    ),
                  ])
                );
              },
              dt = Me,
              pt = $e,
              ht = et,
              gt = tt,
              mt = rt,
              yt = ft,
              vt = (n(53), n(54), n(55), []),
              bt = !1,
              At = !1,
              St = {
                resolve: function(e) {
                  var t = P['BaseUtils'].UniqueIndex();
                  return vt.push({ id: t, eventHandler: e }), t;
                },
                unresolve: function(e) {
                  vt = vt.filter(function(t) {
                    return t.id !== e;
                  });
                },
              };
            bt ||
              'object' !== ('undefined' === typeof window ? 'undefined' : o()(window)) ||
              (window.addEventListener('resize', function(e) {
                clearTimeout(At),
                  (At = setTimeout(function() {
                    vt.map(function(t) {
                      'function' === typeof t.eventHandler && t.eventHandler(e);
                    }),
                      (At = !1);
                  }, 100));
              }),
              (bt = !0));
            var wt = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'responsiveResolveId', null),
                    w()(A()(A()(n)), 'dropDownHandlerElement', null),
                    w()(A()(A()(n)), 'dropDownContentElement', null),
                    w()(A()(A()(n)), 'state', { active: !1, offset: 0 }),
                    w()(A()(A()(n)), 'fixDropDownPosition', function() {
                      var e = n.props.getContainerNode().getBoundingClientRect(),
                        t = n.dropDownHandlerElement.getBoundingClientRect(),
                        r = n.dropDownContentElement.getBoundingClientRect(),
                        o = 0,
                        i = t.right - t.width / 2 + r.width / 2,
                        a = t.left + t.width / 2 - r.width / 2;
                      (i = e.right - i),
                        (a -= e.left),
                        i < 10 ? (o = i - 10) : a < 10 && (o = -1 * a + 10),
                        o !== n.state.offset && n.setState({ offset: o });
                    }),
                    w()(A()(A()(n)), 'registerClickEvent', function(e) {
                      var t = n.props.autoHide,
                        r = n.state.active;
                      if (
                        n.dropDownContentElement.contains(e.target) ||
                        n.dropDownHandlerElement.contains(e.target)
                      )
                        return !1;
                      t && r && n.hide();
                    }),
                    w()(A()(A()(n)), 'toggle', function() {
                      n.setState({ active: !n.state.active });
                    }),
                    w()(A()(A()(n)), 'show', function() {
                      n.setState({ active: !0 });
                    }),
                    w()(A()(A()(n)), 'hide', function() {
                      n.setState({ active: !1 });
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        document &&
                          (document.body.addEventListener('click', this.registerClickEvent),
                          (this.responsiveResolveId = St.resolve(this.fixDropDownPosition)));
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        !this.props.disabled && e.disabled && this.hide();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function(e) {
                        !e.active && this.state.active && this.fixDropDownPosition();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        document &&
                          (document.body.removeEventListener('click', this.registerClickEvent),
                          St.unresolve(this.responsiveResolveId));
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = this.state,
                          n = t.active,
                          r = t.offset,
                          o = this.props,
                          i = o.caption,
                          a = o.htmlCaption,
                          l = o.title,
                          s = o.disabled,
                          c = o.showArrow,
                          u = o.arrowActive,
                          f = o.className,
                          d = o.children,
                          p = o.theme;
                        return (
                          s && (n = !1),
                          'light' === p && (f = ' light-theme ' + f),
                          C.a.createElement(
                            'div',
                            {
                              className:
                                'bf-dropdown ' + (n ? 'active ' : '') + (s ? 'disabled ' : '') + f,
                            },
                            a
                              ? C.a.createElement('button', {
                                  type: 'button',
                                  className: 'dropdown-handler',
                                  'data-title': l,
                                  onClick: this.toggle,
                                  dangerouslySetInnerHTML: a ? { __html: a } : null,
                                  ref: function(t) {
                                    return (e.dropDownHandlerElement = t);
                                  },
                                })
                              : C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    className: 'dropdown-handler',
                                    'data-title': l,
                                    onClick: this.toggle,
                                    ref: function(t) {
                                      return (e.dropDownHandlerElement = t);
                                    },
                                  },
                                  C.a.createElement('span', null, i),
                                  !1 !== c
                                    ? C.a.createElement('i', { className: 'bfi-drop-down' })
                                    : null
                                ),
                            C.a.createElement(
                              'div',
                              {
                                className: 'dropdown-content',
                                style: { marginLeft: r },
                                ref: function(t) {
                                  return (e.dropDownContentElement = t);
                                },
                              },
                              C.a.createElement('i', {
                                style: { marginLeft: -1 * r },
                                className: 'dropdown-arrow' + (u ? ' active' : ''),
                              }),
                              C.a.createElement('div', { className: 'dropdown-content-inner' }, d)
                            )
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              Et = function(e) {
                return C.a.Fragment
                  ? C.a.createElement(C.a.Fragment, null, e.children)
                  : C.a.createElement('div', { className: 'control-item-group' }, e.children);
              },
              kt = (function(e) {
                function t(e) {
                  var n;
                  return (
                    u()(this, t),
                    (n = h()(this, m()(t).call(this, e))),
                    w()(A()(A()(n)), 'dropDownInstance', null),
                    w()(A()(A()(n)), 'handeKeyDown', function(e) {
                      if (13 === e.keyCode) return n.handleConfirm(), e.preventDefault(), !1;
                    }),
                    w()(A()(A()(n)), 'handleTnputText', function(e) {
                      n.setState({ text: e.currentTarget.value });
                    }),
                    w()(A()(A()(n)), 'handleInputLink', function(e) {
                      n.setState({ href: e.currentTarget.value });
                    }),
                    w()(A()(A()(n)), 'setTarget', function() {
                      n.setState({ target: '_blank' === n.state.target ? '' : '_blank' });
                    }),
                    w()(A()(A()(n)), 'handleCancel', function() {
                      n.dropDownInstance.hide();
                    }),
                    w()(A()(A()(n)), 'handleUnlink', function() {
                      n.dropDownInstance.hide(),
                        n.props.editor.setValue(
                          P['ContentUtils'].toggleSelectionLink(n.props.editorState, !1)
                        );
                    }),
                    w()(A()(A()(n)), 'handleConfirm', function() {
                      var e = n.state,
                        t = e.text,
                        r = e.href,
                        o = e.target,
                        i = e.textSelected,
                        a = n.props.hooks('toggle-link', { href: r, target: o })({
                          href: r,
                          target: o,
                        });
                      if ((n.dropDownInstance.hide(), n.props.editor.requestFocus(), !1 === a))
                        return !1;
                      a &&
                        ('string' === typeof a.href && (r = a.href),
                        'string' === typeof a.target && (o = a.target)),
                        i
                          ? r
                            ? n.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionLink(n.props.editorState, r, o)
                              )
                            : n.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionLink(n.props.editorState, !1)
                              )
                          : n.props.editor.setValue(
                              P['ContentUtils'].insertText(n.props.editorState, t || r, null, {
                                type: 'LINK',
                                data: { href: r, target: o },
                              })
                            );
                    }),
                    (n.state = {
                      text: '',
                      href: '',
                      target: e.defaultLinkTarget || '',
                      textSelected: !1,
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        var t = P['ContentUtils'].getSelectionEntityData(e.editorState, 'LINK'),
                          n = t.href,
                          r = t.target,
                          o =
                            !P['ContentUtils'].isSelectionCollapsed(this.props.editorState) &&
                            'atomic' !==
                              P['ContentUtils'].getSelectionBlockType(this.props.editorState),
                          i = '';
                        o && (i = P['ContentUtils'].getSelectionText(this.props.editorState)),
                          this.setState({
                            textSelected: o,
                            text: i,
                            href: n || '',
                            target: 'undefined' === typeof r ? e.defaultLinkTarget || '' : r || '',
                          });
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = this.props.allowInsertLinkText,
                          n = this.state,
                          r = n.text,
                          o = n.href,
                          i = n.target,
                          a = n.textSelected,
                          l = C.a.createElement('i', { className: 'bfi-link' });
                        return C.a.createElement(
                          Et,
                          null,
                          C.a.createElement(
                            wt,
                            {
                              key: 0,
                              caption: l,
                              title: this.props.language.controls.link,
                              autoHide: !0,
                              getContainerNode: this.props.getContainerNode,
                              showArrow: !1,
                              ref: function(t) {
                                return (e.dropDownInstance = t);
                              },
                              className: 'control-item dropdown link-editor-dropdown',
                            },
                            C.a.createElement(
                              'div',
                              { className: 'bf-link-editor' },
                              t
                                ? C.a.createElement(
                                    'div',
                                    { className: 'input-group' },
                                    C.a.createElement('input', {
                                      type: 'text',
                                      value: r,
                                      spellCheck: !1,
                                      disabled: a,
                                      placeholder: this.props.language.linkEditor
                                        .textInputPlaceHolder,
                                      onKeyDown: this.handeKeyDown,
                                      onChange: this.handleTnputText,
                                    })
                                  )
                                : null,
                              C.a.createElement(
                                'div',
                                { className: 'input-group' },
                                C.a.createElement('input', {
                                  type: 'text',
                                  value: o,
                                  spellCheck: !1,
                                  placeholder: this.props.language.linkEditor.linkInputPlaceHolder,
                                  onKeyDown: this.handeKeyDown,
                                  onChange: this.handleInputLink,
                                })
                              ),
                              C.a.createElement(
                                'div',
                                { className: 'switch-group' },
                                C.a.createElement(Fe, {
                                  active: '_blank' === i,
                                  onClick: this.setTarget,
                                }),
                                C.a.createElement(
                                  'label',
                                  null,
                                  this.props.language.linkEditor.openInNewWindow
                                )
                              ),
                              C.a.createElement(
                                'div',
                                { className: 'buttons' },
                                C.a.createElement(
                                  'a',
                                  {
                                    onClick: this.handleUnlink,
                                    className: 'primary button-remove-link pull-left',
                                    href: 'javascript:void(0);',
                                  },
                                  C.a.createElement('i', { className: 'bfi-close' }),
                                  C.a.createElement(
                                    'span',
                                    null,
                                    this.props.language.linkEditor.removeLink
                                  )
                                ),
                                C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    onClick: this.handleConfirm,
                                    className: 'primary pull-right',
                                  },
                                  this.props.language.base.confirm
                                ),
                                C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    onClick: this.handleCancel,
                                    className: 'default pull-right',
                                  },
                                  this.props.language.base.cancel
                                )
                              )
                            )
                          ),
                          C.a.createElement(
                            'button',
                            {
                              key: 1,
                              type: 'button',
                              'data-title': this.props.language.controls.unlink,
                              className: 'control-item button',
                              onClick: this.handleUnlink,
                              disabled: !a || !o,
                            },
                            C.a.createElement('i', { className: 'bfi-link-off' })
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              xt =
                (n(56),
                function(e) {
                  return [
                    {
                      key: 'header-one',
                      title: e.controls.header + ' 1',
                      text: C.a.createElement('h1', null, e.controls.header, ' 1'),
                      type: 'block-type',
                      command: 'header-one',
                    },
                    {
                      key: 'header-two',
                      title: e.controls.header + ' 2',
                      text: C.a.createElement('h2', null, e.controls.header, ' 2'),
                      type: 'block-type',
                      command: 'header-two',
                    },
                    {
                      key: 'header-three',
                      title: e.controls.header + ' 3',
                      text: C.a.createElement('h3', null, e.controls.header, ' 3'),
                      type: 'block-type',
                      command: 'header-three',
                    },
                    {
                      key: 'header-four',
                      title: e.controls.header + ' 4',
                      text: C.a.createElement('h4', null, e.controls.header, ' 4'),
                      type: 'block-type',
                      command: 'header-four',
                    },
                    {
                      key: 'header-five',
                      title: e.controls.header + ' 5',
                      text: C.a.createElement('h5', null, e.controls.header, ' 5'),
                      type: 'block-type',
                      command: 'header-five',
                    },
                    {
                      key: 'header-six',
                      title: e.controls.header + ' 6',
                      text: C.a.createElement('h6', null, e.controls.header, ' 6'),
                      type: 'block-type',
                      command: 'header-six',
                    },
                    {
                      key: 'unstyled',
                      title: e.controls.normal,
                      text: e.controls.normal,
                      type: 'block-type',
                      command: 'unstyled',
                    },
                  ];
                }),
              Ct = function(e) {
                var t = null,
                  n = xt(e.language).filter(function(t) {
                    return -1 !== e.headings.indexOf(t.key);
                  }),
                  r = n.findIndex(function(t) {
                    return t.command === e.current;
                  }),
                  o = n[r] ? n[r].title : e.language.controls.normal;
                return C.a.createElement(
                  wt,
                  {
                    caption: o,
                    autoHide: !0,
                    getContainerNode: e.getContainerNode,
                    title: e.language.controls.headings,
                    arrowActive: 0 === r,
                    ref: function(e) {
                      return (t = e);
                    },
                    className: 'control-item dropdown headings-dropdown',
                  },
                  C.a.createElement(
                    'ul',
                    { className: 'menu' },
                    n.map(function(n, r) {
                      var o = e.current === n.command;
                      return C.a.createElement(
                        'li',
                        {
                          key: r,
                          className: 'menu-item' + (o ? ' active' : ''),
                          onClick: function() {
                            e.onChange(n.command, n.type), t.hide();
                          },
                        },
                        n.text
                      );
                    })
                  )
                );
              },
              _t =
                (n(57),
                n(58),
                function(e) {
                  return C.a.createElement(
                    'div',
                    { className: 'bf-colors-wrap' },
                    C.a.createElement(
                      'ul',
                      { className: 'bf-colors' },
                      e.presetColors.map(function(t, n) {
                        var r =
                          e.color && t.toLowerCase() === e.color.toLowerCase()
                            ? 'color-item active'
                            : 'color-item';
                        return C.a.createElement('li', {
                          key: n,
                          title: t,
                          className: r,
                          style: { color: t },
                          'data-color': t.replace('#', ''),
                          onClick: function(t) {
                            e.onChange(t.currentTarget.dataset.color, !0);
                          },
                        });
                      })
                    )
                  );
                }),
              It = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'state', { colorType: 'color' }),
                    w()(A()(A()(n)), 'switchColorType', function(e) {
                      var t = e.currentTarget;
                      n.setState({ colorType: t.dataset.type });
                    }),
                    w()(A()(A()(n)), 'toggleColor', function(e, t) {
                      if (e) {
                        var r = n.props.hooks('toggle-text-'.concat(n.state.colorType), e)(e);
                        if (!1 === r) return !1;
                        'string' === typeof r && (e = r),
                          'color' === n.state.colorType
                            ? n.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionColor(n.props.editorState, e)
                              )
                            : n.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionBackgroundColor(
                                  n.props.editorState,
                                  e
                                )
                              );
                      }
                      t && (n.dropDownInstance.hide(), n.props.editor.requestFocus());
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = {},
                          n = null,
                          r = this.state.colorType,
                          o = this.props.editorState.getCurrentInlineStyle().toJS();
                        o.forEach(function(e) {
                          0 === e.indexOf('COLOR-') &&
                            ((t.color = '#' + e.split('-')[1]), 'color' === r && (n = t.color)),
                            0 === e.indexOf('BGCOLOR-') &&
                              ((t.backgroundColor = '#' + e.split('-')[1]),
                              'background-color' === r && (n = t.backgroundColor));
                        });
                        var i = C.a.createElement(
                            'i',
                            { style: t, className: 'bfi-text-color' },
                            C.a.createElement('span', { className: 'path1' }),
                            C.a.createElement('span', { className: 'path2' })
                          ),
                          a = this.props.colorPicker || _t;
                        return C.a.createElement(
                          wt,
                          {
                            caption: i,
                            title: this.props.language.controls.color,
                            showArrow: !1,
                            autoHide: this.props.autoHide,
                            theme: this.props.theme,
                            getContainerNode: this.props.getContainerNode,
                            ref: function(t) {
                              return (e.dropDownInstance = t);
                            },
                            className: 'control-item dropdown text-color-dropdown',
                          },
                          C.a.createElement(
                            'div',
                            { className: 'bf-text-color-picker-wrap' },
                            C.a.createElement(
                              'div',
                              {
                                className: 'bf-color-switch-buttons',
                                style: this.props.enableBackgroundColor ? {} : { display: 'none' },
                              },
                              C.a.createElement(
                                'button',
                                {
                                  type: 'button',
                                  'data-type': 'color',
                                  className: 'color' === r ? 'active' : '',
                                  onClick: this.switchColorType,
                                },
                                this.props.language.controls.textColor
                              ),
                              C.a.createElement(
                                'button',
                                {
                                  type: 'button',
                                  'data-type': 'background-color',
                                  className: 'background-color' === r ? 'active' : '',
                                  onClick: this.switchColorType,
                                },
                                this.props.language.controls.backgroundColor
                              )
                            ),
                            C.a.createElement(a, {
                              width: 200,
                              color: n,
                              disableAlpha: !0,
                              presetColors: this.props.colors,
                              onChange: this.toggleColor,
                            })
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              Ot =
                (n(59),
                function(e, t) {
                  var n = e.currentTarget.dataset.size,
                    r = t.hooks('toggle-font-size', n)(n);
                  if (!1 === r) return !1;
                  isNaN(n) || (n = r),
                    t.editor.setValue(P['ContentUtils'].toggleSelectionFontSize(t.editorState, n)),
                    t.editor.requestFocus();
                }),
              Tt = function(e) {
                var t = null,
                  n = null,
                  r = null;
                return (
                  e.fontSizes.find(function(r) {
                    return (
                      !!P['ContentUtils'].selectionHasInlineStyle(e.editorState, 'FONTSIZE-' + r) &&
                      ((t = r), (n = r), !0)
                    );
                  }),
                  C.a.createElement(
                    wt,
                    {
                      autoHide: !0,
                      caption: t || e.defaultCaption,
                      getContainerNode: e.getContainerNode,
                      title: e.language.controls.fontSize,
                      ref: function(e) {
                        return (r = e);
                      },
                      className: 'control-item dropdown bf-font-size-dropdown',
                    },
                    C.a.createElement(
                      'ul',
                      { className: 'bf-font-sizes' },
                      e.fontSizes.map(function(t, o) {
                        return C.a.createElement(
                          'li',
                          {
                            key: o,
                            className: t === n ? 'active' : null,
                            'data-size': t,
                            onClick: function(t) {
                              Ot(t, e), r.hide();
                            },
                          },
                          t
                        );
                      })
                    )
                  )
                );
              },
              Mt =
                (n(60),
                function(e, t) {
                  var n = e.currentTarget.dataset.size,
                    r = t.hooks('toggle-line-height', n)(n);
                  if (!1 === r) return !1;
                  isNaN(r) || (n = r),
                    t.editor.setValue(
                      P['ContentUtils'].toggleSelectionLineHeight(t.editorState, n)
                    ),
                    t.editor.requestFocus();
                }),
              Dt = function(e) {
                var t = null,
                  n = null,
                  r = null;
                return (
                  e.lineHeights.find(function(r) {
                    return (
                      !!P['ContentUtils'].selectionHasInlineStyle(
                        e.editorState,
                        'LINEHEIGHT-' + r
                      ) && ((t = r), (n = r), !0)
                    );
                  }),
                  C.a.createElement(
                    wt,
                    {
                      autoHide: !0,
                      caption: t || e.defaultCaption,
                      getContainerNode: e.getContainerNode,
                      title: e.language.controls.lineHeight,
                      ref: function(e) {
                        return (r = e);
                      },
                      className: 'control-item dropdown bf-line-height-dropdown',
                    },
                    C.a.createElement(
                      'ul',
                      { className: 'bf-line-heights' },
                      e.lineHeights.map(function(t, o) {
                        return C.a.createElement(
                          'li',
                          {
                            key: o,
                            className: t === n ? 'active' : null,
                            'data-size': t,
                            onClick: function(t) {
                              Mt(t, e), r.hide();
                            },
                          },
                          t
                        );
                      })
                    )
                  )
                );
              },
              Bt =
                (n(61),
                function(e, t) {
                  var n = e.currentTarget.dataset.name,
                    r = t.hooks('toggle-font-family', n)(n, t.fontFamilies);
                  if (!1 === r) return !1;
                  'string' === typeof r && (n = r),
                    t.editor.setValue(
                      P['ContentUtils'].toggleSelectionFontFamily(t.editorState, n)
                    ),
                    t.editor.requestFocus();
                }),
              Lt = function(e) {
                var t = null,
                  n = null,
                  r = null;
                return (
                  e.fontFamilies.find(function(r, o) {
                    return (
                      !!P['ContentUtils'].selectionHasInlineStyle(
                        e.editorState,
                        'FONTFAMILY-' + r.name
                      ) && ((t = r.name), (n = o), !0)
                    );
                  }),
                  C.a.createElement(
                    wt,
                    {
                      caption: t || e.defaultCaption,
                      getContainerNode: e.getContainerNode,
                      title: e.language.controls.fontFamily,
                      autoHide: !0,
                      arrowActive: 0 === n,
                      ref: function(e) {
                        return (r = e);
                      },
                      className: 'control-item dropdown font-family-dropdown',
                    },
                    C.a.createElement(
                      'ul',
                      { className: 'menu' },
                      e.fontFamilies.map(function(t, o) {
                        return C.a.createElement(
                          'li',
                          {
                            key: o,
                            className: 'menu-item ' + (o === n ? 'active' : ''),
                            'data-name': t.name,
                            onClick: function(t) {
                              Bt(t, e), r.hide();
                            },
                          },
                          C.a.createElement('span', { style: { fontFamily: t.family } }, t.name)
                        );
                      })
                    )
                  )
                );
              },
              Nt = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'state', { currentAlignment: void 0 }),
                    w()(A()(A()(n)), 'setAlignment', function(e) {
                      var t = e.currentTarget.dataset.alignment,
                        r = n.props.hooks('toggle-text-alignment', t)(t);
                      n.props.textAligns.indexOf(r) > -1 && (t = r),
                        n.props.editor.setValue(
                          P['ContentUtils'].toggleSelectionAlignment(n.props.editorState, t)
                        ),
                        n.props.editor.requestFocus();
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        this.setState({
                          currentAlignment: P['ContentUtils'].getSelectionBlockData(
                            e.editorState,
                            'textAlign'
                          ),
                        });
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = [
                            this.props.language.controls.alignLeft,
                            this.props.language.controls.alignCenter,
                            this.props.language.controls.alignRight,
                            this.props.language.controls.alignJustify,
                          ];
                        return C.a.createElement(
                          Et,
                          null,
                          this.props.textAligns.map(function(n, r) {
                            return C.a.createElement(
                              'button',
                              {
                                type: 'button',
                                key: r,
                                'data-title': t[r],
                                'data-alignment': n,
                                className:
                                  'control-item button ' +
                                  (n === e.state.currentAlignment ? 'active' : null),
                                onClick: e.setAlignment,
                              },
                              C.a.createElement('i', { className: 'bfi-align-' + n })
                            );
                          })
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              Ft =
                (n(62),
                function(e, t) {
                  var n = e.currentTarget.dataset.emoji,
                    r = t.hooks('insert-emoji', n)(n);
                  if (!1 === r) return !1;
                  'string' === typeof r && (n = r),
                    t.editor.setValue(P['ContentUtils'].insertText(t.editorState, n)),
                    t.editor.requestFocus();
                }),
              Rt = function(e) {
                return C.a.createElement(
                  wt,
                  {
                    caption: e.defaultCaption,
                    autoHide: !0,
                    showArrow: !1,
                    getContainerNode: e.getContainerNode,
                    title: e.language.controls.emoji,
                    className: 'control-item dropdown bf-emoji-dropdown',
                  },
                  C.a.createElement(
                    'div',
                    { className: 'bf-emojis-wrap' },
                    C.a.createElement(
                      'ul',
                      { className: 'bf-emojis' },
                      e.emojis.map(function(t, n) {
                        return C.a.createElement(
                          'li',
                          {
                            key: n,
                            'data-emoji': t,
                            onClick: function(t) {
                              return Ft(t, e);
                            },
                          },
                          t
                        );
                      })
                    )
                  )
                );
              },
              Pt =
                (n(63),
                function(e, t) {
                  var n = e.currentTarget.dataset.size,
                    r = t.hooks('toggle-letter-spacing', n)(n);
                  if (!1 === r) return !1;
                  isNaN(r) || (n = r),
                    t.editor.setValue(
                      P['ContentUtils'].toggleSelectionLetterSpacing(t.editorState, n)
                    ),
                    t.editor.requestFocus();
                }),
              Kt = function(e) {
                var t = null,
                  n = null,
                  r = null;
                return (
                  e.letterSpacings.find(function(r) {
                    return (
                      !!P['ContentUtils'].selectionHasInlineStyle(
                        e.editorState,
                        'LETTERSPACING-' + r
                      ) && ((t = r), (n = r), !0)
                    );
                  }),
                  C.a.createElement(
                    wt,
                    {
                      autoHide: !0,
                      caption: t || e.defaultCaption,
                      getContainerNode: e.getContainerNode,
                      title: e.language.controls.letterSpacing,
                      ref: function(e) {
                        return (r = e);
                      },
                      className: 'control-item dropdown bf-letter-spacing-dropdown',
                    },
                    C.a.createElement(
                      'ul',
                      { className: 'bf-letter-spacings' },
                      e.letterSpacings.map(function(t, o) {
                        return C.a.createElement(
                          'li',
                          {
                            key: o,
                            className: t === n ? 'active' : null,
                            'data-size': t,
                            onClick: function(t) {
                              Pt(t, e), r.hide();
                            },
                          },
                          t
                        );
                      })
                    )
                  )
                );
              },
              jt = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'state', { currentIndent: 0 }),
                    w()(A()(A()(n)), 'increaseIndent', function() {
                      n.props.editor.setValue(
                        P['ContentUtils'].increaseSelectionIndent(n.props.editorState)
                      ),
                        n.props.editor.requestFocus();
                    }),
                    w()(A()(A()(n)), 'decreaseIndent', function() {
                      n.props.editor.setValue(
                        P['ContentUtils'].decreaseSelectionIndent(n.props.editorState)
                      ),
                        n.props.editor.requestFocus();
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        this.setState({
                          currentIndent:
                            P['ContentUtils'].getSelectionBlockData(e.editorState, 'textIndent') ||
                            0,
                        });
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this.state.currentIndent,
                          t = this.props.language;
                        return C.a.createElement(
                          Et,
                          null,
                          C.a.createElement(
                            'button',
                            {
                              key: 0,
                              type: 'button',
                              'data-title': t.controls.increaseIndent,
                              disabled: e >= 6,
                              className: 'control-item button button-indent-increase'.concat(
                                e > 0 && e < 6 ? ' active' : ''
                              ),
                              onClick: this.increaseIndent,
                            },
                            C.a.createElement('i', { className: 'bfi-indent-increase' })
                          ),
                          C.a.createElement(
                            'button',
                            {
                              key: 1,
                              type: 'button',
                              'data-title': t.controls.decreaseIndent,
                              disabled: e <= 0,
                              className: 'control-item button button-indent-decrease',
                              onClick: this.decreaseIndent,
                            },
                            C.a.createElement('i', { className: 'bfi-indent-decrease' })
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              zt = {
                'inline-style': 'toggle-inline-style',
                'block-type': 'change-block-type',
                'editor-method': 'exec-editor-command',
              },
              Ut = { superscript: 'subscript', subscript: 'superscript' },
              Ht = function(e, t, n, r) {
                return (
                  (n = n.map(function(t) {
                    return 'function' === typeof t ? t(e) : t;
                  })),
                  (r = r.map(function(t) {
                    return 'function' === typeof t ? t(e) : t;
                  })),
                  0 === n.length && 0 === r.length
                    ? t
                    : t
                        .map(function(e) {
                          return (
                            r.find(function(t) {
                              return t.replace === (e.key || e);
                            }) ||
                            n.find(function(t) {
                              return t.replace === (e.key || e);
                            }) ||
                            e
                          );
                        })
                        .concat(n.length ? 'separator' : '')
                        .concat(
                          n.filter(function(e) {
                            return !e.replace;
                          })
                        )
                        .concat(
                          r.filter(function(e) {
                            return 'string' === typeof e || !e.replace;
                          })
                        )
                );
              },
              Vt = (function(e) {
                function t() {
                  var e, n;
                  u()(this, t);
                  for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                  return (
                    (n = h()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                    w()(A()(A()(n)), 'allControls', []),
                    w()(A()(A()(n)), 'mediaLibiraryModal', null),
                    w()(A()(A()(n)), 'extendedModals', {}),
                    w()(A()(A()(n)), 'openBraftFinder', function() {
                      if (!n.props.braftFinder || !n.props.braftFinder.ReactComponent) return !1;
                      if (!1 === n.props.hooks('open-braft-finder')()) return !1;
                      var e = n.props.media,
                        t = n.props.braftFinder.ReactComponent;
                      n.mediaLibiraryModal = He({
                        title: n.props.language.controls.mediaLibirary,
                        language: n.props.language,
                        width: 640,
                        showFooter: !1,
                        component: C.a.createElement(t, {
                          accepts: e.accepts,
                          onCancel: n.closeBraftFinder,
                          onInsert: n.insertMedias,
                          onChange: e.onChange,
                          externals: e.externals,
                          onBeforeSelect: n.bindBraftFinderHook('select-medias'),
                          onBeforeDeselect: n.bindBraftFinderHook('deselect-medias'),
                          onBeforeRemove: n.bindBraftFinderHook('remove-medias'),
                          onBeforeInsert: n.bindBraftFinderHook('insert-medias'),
                          onFileSelect: n.bindBraftFinderHook('select-files'),
                        }),
                      });
                    }),
                    w()(A()(A()(n)), 'bindBraftFinderHook', function(e) {
                      return function() {
                        return n.props
                          .hooks(e, arguments.length <= 0 ? void 0 : arguments[0])
                          .apply(void 0, arguments);
                      };
                    }),
                    w()(A()(A()(n)), 'insertMedias', function(e) {
                      n.props.editor.setValue(
                        P['ContentUtils'].insertMedias(n.props.editorState, e)
                      ),
                        n.props.editor.requestFocus(),
                        n.props.media.onInsert && n.props.media.onInsert(e),
                        n.closeBraftFinder();
                    }),
                    w()(A()(A()(n)), 'closeBraftFinder', function() {
                      n.props.media.onCancel && n.props.media.onCancel(),
                        n.mediaLibiraryModal && n.mediaLibiraryModal.close();
                    }),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'componentDidUpdate',
                      value: function() {
                        var e = this,
                          t = this.props.language;
                        this.allControls.forEach(function(n) {
                          'modal' === n.type &&
                            n.modal &&
                            n.modal.id &&
                            e.extendedModals[n.modal.id] &&
                            e.extendedModals[n.modal.id].update(a()({}, n.modal, { language: t }));
                        });
                      },
                    },
                    {
                      key: 'getControlItemClassName',
                      value: function(e) {
                        var t = 'control-item button',
                          n = e.type,
                          r = e.command;
                        return (
                          'inline-style' === n &&
                          P['ContentUtils'].selectionHasInlineStyle(this.props.editorState, r)
                            ? (t += ' active')
                            : 'block-type' === n &&
                              P['ContentUtils'].getSelectionBlockType(this.props.editorState) === r
                            ? (t += ' active')
                            : 'entity' === n &&
                              P['ContentUtils'].getSelectionEntityType(this.props.editorState) ===
                                r &&
                              (t += ' active'),
                          t
                        );
                      },
                    },
                    {
                      key: 'applyControl',
                      value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          r = this.props.hooks(zt[t] || t, e)(e),
                          o = this.props.editorState;
                        if (!1 === r) return !1;
                        if (('string' === typeof r && (e = r), 'inline-style' === t)) {
                          var i = Ut[e];
                          i &&
                            P['ContentUtils'].selectionHasInlineStyle(o, i) &&
                            (o = P['ContentUtils'].toggleSelectionInlineStyle(o, i)),
                            this.props.editor.setValue(
                              P['ContentUtils'].toggleSelectionInlineStyle(o, e)
                            );
                        } else
                          'block-type' === t
                            ? this.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionBlockType(o, e)
                              )
                            : 'entity' === t
                            ? this.props.editor.setValue(
                                P['ContentUtils'].toggleSelectionEntity(o, {
                                  type: e,
                                  mutability: n.mutability || 'MUTABLE',
                                  data: n.data || {},
                                })
                              )
                            : 'editor-method' === t &&
                              this.props.editor[e] &&
                              this.props.editor[e]();
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = this.props,
                          n = t.editor,
                          r = t.editorId,
                          o = t.editorState,
                          i = t.className,
                          l = t.style,
                          s = t.controls,
                          c = t.media,
                          u = t.extendControls,
                          f = t.language,
                          d = t.hooks,
                          p = t.colors,
                          h = t.colorPicker,
                          g = t.colorPickerTheme,
                          m = t.colorPickerAutoHide,
                          y = t.headings,
                          v = t.fontSizes,
                          b = t.fontFamilies,
                          A = t.emojis,
                          S = t.getContainerNode,
                          w = t.lineHeights,
                          E = t.letterSpacings,
                          k = t.textAligns,
                          x = t.textBackgroundColor,
                          _ = t.allowInsertLinkText,
                          I = t.defaultLinkTarget,
                          O = P['ContentUtils'].getSelectionBlockType(o),
                          T = {
                            editor: n,
                            editorId: r,
                            editorState: o,
                            language: f,
                            getContainerNode: S,
                            hooks: d,
                          },
                          M = [],
                          D = Re(f, n),
                          B = ye(r),
                          L = Ht(T, s, B, u);
                        return (
                          (this.allControls = L),
                          C.a.createElement(
                            'div',
                            {
                              className: 'bf-controlbar '.concat(i || ''),
                              style: l,
                              onMouseDown: this.preventDefault,
                            },
                            L.map(function(t, n) {
                              var r = 'string' === typeof t ? t : t.key;
                              if ('string' !== typeof r) return null;
                              if (M.indexOf(r) > -1) return null;
                              if ('separator' === r.toLowerCase())
                                return C.a.createElement('span', {
                                  key: n,
                                  className: 'separator-line',
                                });
                              var i = D.find(function(e) {
                                return e.key.toLowerCase() === r.toLowerCase();
                              });
                              if (('string' !== typeof t && (i = a()({}, i, t)), !i)) return null;
                              if ((M.push(r), 'headings' === i.type))
                                return C.a.createElement(
                                  Ct,
                                  Be()(
                                    {
                                      key: n,
                                      headings: y,
                                      current: O,
                                      onChange: function(t) {
                                        return e.applyControl(t, 'block-type');
                                      },
                                    },
                                    T
                                  )
                                );
                              if ('text-color' === i.type)
                                return C.a.createElement(
                                  It,
                                  Be()(
                                    {
                                      key: n,
                                      colors: p,
                                      colorPicker: h,
                                      theme: g,
                                      autoHide: m,
                                      enableBackgroundColor: x,
                                    },
                                    T
                                  )
                                );
                              if ('font-size' === i.type)
                                return C.a.createElement(
                                  Tt,
                                  Be()({ key: n, fontSizes: v, defaultCaption: i.title }, T)
                                );
                              if ('line-height' === i.type)
                                return C.a.createElement(
                                  Dt,
                                  Be()({ key: n, lineHeights: w, defaultCaption: i.title }, T)
                                );
                              if ('letter-spacing' === i.type)
                                return C.a.createElement(
                                  Kt,
                                  Be()({ key: n, letterSpacings: E, defaultCaption: i.title }, T)
                                );
                              if ('text-indent' === i.type)
                                return C.a.createElement(
                                  jt,
                                  Be()({ key: n, defaultCaption: i.title }, T)
                                );
                              if ('font-family' === i.type)
                                return C.a.createElement(
                                  Lt,
                                  Be()({ key: n, fontFamilies: b, defaultCaption: i.title }, T)
                                );
                              if ('emoji' === i.type)
                                return C.a.createElement(
                                  Rt,
                                  Be()({ key: n, emojis: A, defaultCaption: i.text }, T)
                                );
                              if ('link' === i.type)
                                return C.a.createElement(
                                  kt,
                                  Be()({ key: n, defaultLinkTarget: I, allowInsertLinkText: _ }, T)
                                );
                              if ('text-align' === i.type)
                                return C.a.createElement(Nt, Be()({ key: n, textAligns: k }, T));
                              if ('media' === i.type)
                                return c.image || c.video || c.audio
                                  ? C.a.createElement(
                                      'button',
                                      {
                                        type: 'button',
                                        key: n,
                                        'data-title': i.title,
                                        disabled: i.disabled,
                                        className: 'control-item media button',
                                        onClick: e.openBraftFinder,
                                      },
                                      i.text
                                    )
                                  : null;
                              if ('dropdown' === i.type)
                                return C.a.createElement(
                                  wt,
                                  Be()(
                                    {
                                      key: n,
                                      className: 'control-item extend-control-item dropdown '.concat(
                                        i.className || ''
                                      ),
                                      caption: i.text,
                                      htmlCaption: i.html,
                                      showArrow: i.showArrow,
                                      title: i.title,
                                      arrowActive: i.arrowActive,
                                      theme: i.theme,
                                      autoHide: i.autoHide,
                                      disabled: i.disabled,
                                      ref: i.ref,
                                    },
                                    T
                                  ),
                                  i.component
                                );
                              if ('modal' === i.type)
                                return C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    key: n,
                                    'data-title': i.title,
                                    disabled: i.disabled,
                                    className: 'control-item extend-control-item button '.concat(
                                      i.className || ''
                                    ),
                                    dangerouslySetInnerHTML: i.html ? { __html: i.html } : null,
                                    onClick: function(t) {
                                      i.modal &&
                                        i.modal.id &&
                                        (e.extendedModals[i.modal.id]
                                          ? ((e.extendedModals[i.modal.id].active = !0),
                                            e.extendedModals[i.modal.id].update(
                                              a()({}, i.modal, { language: f })
                                            ))
                                          : ((e.extendedModals[i.modal.id] = He(
                                              a()({}, i.modal, { language: f })
                                            )),
                                            i.modal.onCreate &&
                                              i.modal.onCreate(e.extendedModals[i.modal.id]))),
                                        i.onClick && i.onClick(t);
                                    },
                                  },
                                  i.html ? null : i.text
                                );
                              if ('component' === i.type)
                                return C.a.createElement(
                                  'div',
                                  {
                                    key: n,
                                    className: 'component-wrapper '.concat(i.className || ''),
                                  },
                                  i.component
                                );
                              if ('button' === i.type)
                                return C.a.createElement(
                                  'button',
                                  {
                                    type: 'button',
                                    key: n,
                                    'data-title': i.title,
                                    disabled: i.disabled,
                                    className: 'control-item button '.concat(i.className || ''),
                                    dangerouslySetInnerHTML: i.html ? { __html: i.html } : null,
                                    onClick: function(e) {
                                      return i.onClick && i.onClick(e);
                                    },
                                  },
                                  i.html ? null : i.text
                                );
                              if (i) {
                                var l = !1;
                                return (
                                  'undo' === i.command
                                    ? (l = 0 === o.getUndoStack().size)
                                    : 'redo' === i.command && (l = 0 === o.getRedoStack().size),
                                  C.a.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      key: n,
                                      disabled: l,
                                      'data-title': i.title,
                                      className: e.getControlItemClassName({
                                        type: i.type,
                                        command: i.command,
                                      }),
                                      onClick: function() {
                                        return e.applyControl(i.command, i.type, i.data);
                                      },
                                    },
                                    i.text
                                  )
                                );
                              }
                            })
                          )
                        );
                      },
                    },
                    {
                      key: 'preventDefault',
                      value: function(e) {
                        var t = e.target.tagName.toLowerCase();
                        'input' === t || 'label' === t || e.preventDefault();
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component),
              Wt = function(e) {
                return function(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return (
                    e[t] ||
                    function() {
                      return n;
                    }
                  );
                };
              },
              Qt = function(e, t) {
                return e
                  .filter(function(e) {
                    return !t.find(function(t) {
                      return t.toLowerCase() === e.toLowerCase();
                    });
                  })
                  .filter(function(e, t, n) {
                    return n.indexOf(e) === t;
                  });
              },
              qt = function(e, t) {
                return (
                  k()(e.controls)
                    .concat(k()(e.extendControls))
                    .find(function(e) {
                      return e === t || e.key === t;
                    }) && -1 === e.excludeControls.indexOf(t)
                );
              },
              Yt = function(e) {
                var t = e.editorId || e.id,
                  n = a()({}, H.converts, e.converts, { fontFamilies: e.fontFamilies });
                return (
                  (n.styleImportFn = Ee(n.styleImportFn, t)),
                  (n.styleExportFn = ke(n.styleExportFn, t)),
                  (n.entityImportFn = xe(n.entityImportFn, t)),
                  (n.entityExportFn = Ce(n.entityExportFn, t)),
                  (n.blockImportFn = _e(n.blockImportFn, t)),
                  (n.blockExportFn = Ie(n.blockExportFn, t)),
                  n
                );
              },
              Jt = (function(e) {
                function t(e) {
                  var n;
                  u()(this, t),
                    (n = h()(this, m()(t).call(this, e))),
                    w()(A()(A()(n)), 'onChange', function(e, t) {
                      e instanceof K['EditorState'] ||
                        (e = K['EditorState'].set(e, { decorator: n.editorDecorators })),
                        e.convertOptions || e.setConvertOptions(Yt(n.editorProps)),
                        n.setState({ editorState: e }, function() {
                          n.props.onChange && n.props.onChange(e), t && t(e);
                        });
                    }),
                    w()(A()(A()(n)), 'getDraftInstance', function() {
                      return n.draftInstance;
                    }),
                    w()(A()(A()(n)), 'getFinderInstance', function() {
                      return n.braftFinder;
                    }),
                    w()(A()(A()(n)), 'getValue', function() {
                      return n.state.editorState;
                    }),
                    w()(A()(A()(n)), 'setValue', function(e, t) {
                      return n.onChange(e, t);
                    }),
                    w()(A()(A()(n)), 'forceRender', function() {
                      var e = n.state.editorState.getSelection();
                      n.setValue(
                        K['EditorState'].set(n.state.editorState, {
                          decorator: n.editorDecorators,
                        }),
                        function() {
                          n.setValue(K['EditorState'].forceSelection(n.state.editorState, e));
                        }
                      );
                    }),
                    w()(A()(A()(n)), 'onTab', function(e) {
                      'handled' === q('tab', n.state.editorState, A()(A()(n))) &&
                        e.preventDefault(),
                        n.editorProps.onTab && n.editorProps.onTab(e);
                    }),
                    w()(A()(A()(n)), 'onFocus', function() {
                      (n.isFocused = !0),
                        n.editorProps.onFocus && n.editorProps.onFocus(n.state.editorState);
                    }),
                    w()(A()(A()(n)), 'onBlur', function() {
                      (n.isFocused = !1),
                        n.editorProps.onBlur && n.editorProps.onBlur(n.state.editorState);
                    }),
                    w()(A()(A()(n)), 'requestFocus', function() {
                      setTimeout(function() {
                        return n.draftInstance.focus();
                      }, 0);
                    }),
                    w()(A()(A()(n)), 'handleKeyCommand', function(e, t) {
                      return q(e, t, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleReturn', function(e, t) {
                      return Y(e, t, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleBeforeInput', function(e, t) {
                      return J(e, t, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleDrop', function(e, t) {
                      return X(e, t, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleDroppedFiles', function(e, t) {
                      return $(e, t, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handlePastedFiles', function(e) {
                      return ee(e, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleCopyContent', function(e) {
                      return te(e, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handlePastedText', function(e, t, r) {
                      return ne(e, t, r, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'handleCompositionStart', function(e) {
                      return G(e, A()(A()(n)));
                    }),
                    w()(A()(A()(n)), 'undo', function() {
                      n.setValue(P['ContentUtils'].undo(n.state.editorState));
                    }),
                    w()(A()(A()(n)), 'redo', function() {
                      n.setValue(P['ContentUtils'].redo(n.state.editorState));
                    }),
                    w()(A()(A()(n)), 'removeSelectionInlineStyles', function() {
                      n.setValue(
                        P['ContentUtils'].removeSelectionInlineStyles(n.state.editorState)
                      );
                    }),
                    w()(A()(A()(n)), 'insertHorizontalLine', function() {
                      n.setValue(P['ContentUtils'].insertHorizontalLine(n.state.editorState));
                    }),
                    w()(A()(A()(n)), 'clearEditorContent', function() {
                      n.setValue(P['ContentUtils'].clear(n.state.editorState), function(e) {
                        n.setValue(P['ContentUtils'].toggleSelectionIndent(e, 0));
                      });
                    }),
                    w()(A()(A()(n)), 'toggleFullscreen', function(e) {
                      n.setState(
                        { isFullscreen: 'undefined' !== typeof e ? e : !n.state.isFullscreen },
                        function() {
                          n.editorProps.onFullscreen &&
                            n.editorProps.onFullscreen(n.state.isFullscreen);
                        }
                      );
                    }),
                    w()(A()(A()(n)), 'setEditorContainerNode', function(e) {
                      n.containerNode = e;
                    }),
                    (n.editorProps = n.getEditorProps(e)),
                    (n.editorDecorators = yt(n.editorProps.editorId || n.editorProps.id)),
                    (n.isFocused = !1),
                    (n.isLiving = !1),
                    (n.braftFinder = null),
                    (n.valueInitialized = !(!n.props.defaultValue && !n.props.value));
                  var r =
                    (n.props.defaultValue || n.props.value) instanceof K['EditorState']
                      ? n.props.defaultValue || n.props.value
                      : K['EditorState'].createEmpty(n.editorDecorators);
                  r.setConvertOptions(Yt(n.editorProps));
                  var o = [];
                  if (P['ContentUtils'].isEditorState(r)) {
                    var i = P['ColorUtils'].detectColorsFromDraftState(r.toRAW(!0));
                    r.setConvertOptions(Yt(n.editorProps)), (o = Qt(i, n.editorProps.colors));
                  }
                  return (
                    (n.state = { tempColors: o, editorState: r, isFullscreen: !1, draftProps: {} }),
                    (n.containerNode = null),
                    n
                  );
                }
                return (
                  v()(t, e),
                  d()(t, [
                    {
                      key: 'getEditorProps',
                      value: function(e) {
                        var t = this;
                        e = e || this.props;
                        var n = e,
                          r =
                            (n.value,
                            n.defaultValue,
                            n.onChange,
                            s()(n, ['value', 'defaultValue', 'onChange'])),
                          o = me(r.editorId || r.id);
                        if (0 === o.length) return r;
                        var i = Object(j['Map'])(r);
                        return (
                          o.forEach(function(e) {
                            i = i.merge(Object(j['Map'])(e(i.toJS(), t) || {}));
                          }),
                          i.toJS()
                        );
                      },
                    },
                    {
                      key: 'componentWillMount',
                      value: function() {
                        if (qt(this.editorProps, 'media')) {
                          var e = this.editorProps,
                            t = e.language,
                            n = e.media,
                            r = a()({}, H.media, n),
                            o = r.uploadFn,
                            i = r.validateFn,
                            l = r.items;
                          (this.braftFinder = new R.a({
                            items: l,
                            language: t,
                            uploader: o,
                            validator: i,
                          })),
                            this.forceUpdate();
                        }
                      },
                    },
                    {
                      key: 'componentDidMount',
                      value: function() {
                        this.isLiving = !0;
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function(e, t) {
                        t.editorState !== this.state.editorState &&
                          this.state.editorState.setConvertOptions(Yt(this.editorProps));
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        var t = this;
                        this.editorProps = this.getEditorProps(e);
                        var n,
                          r = e.value,
                          o = this.editorProps,
                          i = o.media,
                          l = o.language,
                          s = this.getEditorProps();
                        if (!qt(s, 'media') && qt(this.editorProps, 'media') && !this.braftFinder) {
                          var c = a()({}, H.media, i),
                            u = c.uploadFn,
                            f = c.validateFn,
                            d = c.items;
                          (this.braftFinder = new R.a({
                            items: d,
                            language: l,
                            uploader: u,
                            validator: f,
                          })),
                            this.forceUpdate();
                        }
                        if (
                          (i && i.items && this.braftFinder && this.braftFinder.setItems(i.items),
                          !this.valueInitialized &&
                          'undefined' === typeof this.props.defaultValue &&
                          P['ContentUtils'].isEditorState(e.defaultValue)
                            ? (n = e.defaultValue)
                            : P['ContentUtils'].isEditorState(r) && (n = r),
                          n)
                        )
                          if (n && n !== this.state.editorState) {
                            var p = P['ColorUtils'].detectColorsFromDraftState(n.toRAW(!0));
                            n.setConvertOptions(Yt(this.editorProps)),
                              this.setState(
                                {
                                  tempColors: Qt(
                                    k()(this.state.tempColors).concat(k()(p)),
                                    s.colors
                                  ),
                                  editorState: n,
                                },
                                function() {
                                  t.props.onChange && t.props.onChange(n);
                                }
                              );
                          } else this.setState({ editorState: n });
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        (this.isLiving = !1),
                          this.controlBarInstance && this.controlBarInstance.closeBraftFinder();
                      },
                    },
                    {
                      key: 'lockOrUnlockEditor',
                      value: function(e) {
                        this.setState({ editorLocked: e });
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = this.editorProps,
                          n = t.id,
                          r = t.editorId,
                          o = t.controls,
                          i = t.excludeControls,
                          l = t.extendControls,
                          s = t.readOnly,
                          c = t.disabled,
                          u = t.media,
                          f = t.language,
                          d = t.colors,
                          p = t.colorPicker,
                          h = t.colorPickerTheme,
                          g = t.colorPickerAutoHide,
                          m = t.hooks,
                          y = t.fontSizes,
                          v = t.fontFamilies,
                          b = t.emojis,
                          A = t.placeholder,
                          S = t.fixPlaceholder,
                          w = t.headings,
                          E = t.imageControls,
                          x = t.imageResizable,
                          _ = t.lineHeights,
                          I = t.letterSpacings,
                          O = t.textAligns,
                          T = t.textBackgroundColor,
                          M = t.allowInsertLinkText,
                          D = t.defaultLinkTarget,
                          B = t.extendAtomics,
                          L = t.className,
                          F = t.style,
                          R = t.controlBarClassName,
                          P = t.controlBarStyle,
                          j = t.contentClassName,
                          z = t.contentStyle,
                          V = t.stripPastedStyles,
                          W = t.componentBelowControlBar,
                          Q = this.state,
                          q = Q.isFullscreen,
                          Y = Q.editorState;
                        (r = r || n),
                          (m = Wt(m)),
                          (o = o.filter(function(e) {
                            return -1 === i.indexOf(e);
                          })),
                          (f =
                            ('function' === typeof f ? f(N, 'braft-editor') : N[f]) ||
                            N[H.language]);
                        var J =
                            u && u.externals
                              ? a()({}, H.media.externals, u.externals)
                              : H.media.externals,
                          G =
                            u && u.accepts ? a()({}, H.media.accepts, u.accepts) : H.media.accepts;
                        (u = a()({}, H.media, u, { externalMedias: J, accepts: G })),
                          u.uploadFn || ((u.video = !1), (u.audio = !1));
                        var X = {
                            editor: this,
                            editorState: Y,
                            braftFinder: this.braftFinder,
                            ref: function(t) {
                              return (e.controlBarInstance = t);
                            },
                            getContainerNode: function() {
                              return e.containerNode;
                            },
                            className: R,
                            style: P,
                            colors: k()(d).concat(k()(this.state.tempColors)),
                            colorPicker: p,
                            colorPickerTheme: h,
                            colorPickerAutoHide: g,
                            hooks: m,
                            editorId: r,
                            media: u,
                            controls: o,
                            language: f,
                            extendControls: l,
                            headings: w,
                            fontSizes: y,
                            fontFamilies: v,
                            emojis: b,
                            lineHeights: _,
                            letterSpacings: I,
                            textAligns: O,
                            textBackgroundColor: T,
                            allowInsertLinkText: M,
                            defaultLinkTarget: D,
                          },
                          Z = Y.convertOptions.unitExportFn,
                          $ = {
                            editor: this,
                            editorId: r,
                            hooks: m,
                            editorState: Y,
                            containerNode: this.containerNode,
                            imageControls: E,
                            imageResizable: x,
                            language: f,
                            extendAtomics: B,
                          },
                          ee = pt($, this.editorProps.blockRendererFn),
                          te = dt($, this.editorProps.blockRenderMap),
                          ne = ht(this.editorProps.blockStyleFn),
                          re = gt($, this.editorProps.customStyleMap),
                          oe = mt($, {
                            fontFamilies: v,
                            unitExportFn: Z,
                            customStyleFn: this.editorProps.customStyleFn,
                          }),
                          ie = U(this.editorProps.keyBindingFn),
                          ae = {};
                        (this.state.editorLocked ||
                          this.editorProps.disabled ||
                          this.editorProps.readOnly ||
                          this.editorProps.draftProps.readOnly) &&
                          (ae.readOnly = !0),
                          A &&
                            S &&
                            Y.isEmpty() &&
                            'unstyled' !==
                              Y.getCurrentContent()
                                .getFirstBlock()
                                .getType() &&
                            (A = '');
                        var le = a()(
                          {
                            ref: function(t) {
                              e.draftInstance = t;
                            },
                            editorState: Y,
                            handleKeyCommand: this.handleKeyCommand,
                            handleReturn: this.handleReturn,
                            handleBeforeInput: this.handleBeforeInput,
                            handleDrop: this.handleDrop,
                            handleDroppedFiles: this.handleDroppedFiles,
                            handlePastedText: this.handlePastedText,
                            handlePastedFiles: this.handlePastedFiles,
                            onChange: this.onChange,
                            onTab: this.onTab,
                            onFocus: this.onFocus,
                            onBlur: this.onBlur,
                            blockRenderMap: te,
                            blockRendererFn: ee,
                            blockStyleFn: ne,
                            customStyleMap: re,
                            customStyleFn: oe,
                            keyBindingFn: ie,
                            placeholder: A,
                            stripPastedStyles: V,
                          },
                          this.editorProps.draftProps,
                          ae
                        );
                        return C.a.createElement(
                          'div',
                          {
                            style: F,
                            ref: this.setEditorContainerNode,
                            className: 'bf-container '
                              .concat(L)
                              .concat(c ? ' disabled' : '')
                              .concat(s ? ' read-only' : '')
                              .concat(q ? ' fullscreen' : ''),
                          },
                          C.a.createElement(Vt, X),
                          W,
                          C.a.createElement(
                            'div',
                            {
                              onCompositionStart: this.handleCompositionStart,
                              className: 'bf-content '.concat(j),
                              onCopy: this.handleCopyContent,
                              style: z,
                            },
                            C.a.createElement(K['Editor'], le)
                          )
                        );
                      },
                    },
                  ]),
                  t
                );
              })(C.a.Component);
            w()(Jt, 'defaultProps', H);
            var Gt = n(14);
            n.d(t, 'EditorState', function() {
              return K['EditorState'];
            }),
              n.d(t, 'getDecorators', function() {
                return yt;
              }),
              (K['EditorState'].prototype.setConvertOptions = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.convertOptions = e;
              }),
              (K['EditorState'].prototype.toHTML = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = this.convertOptions || {};
                return Object(Gt['convertEditorStateToHTML'])(this, a()({}, t, e));
              }),
              (K['EditorState'].prototype.toRAW = function(e) {
                return e
                  ? Object(Gt['convertEditorStateToRaw'])(this)
                  : JSON.stringify(Object(Gt['convertEditorStateToRaw'])(this));
              }),
              (K['EditorState'].prototype.toText = function() {
                return this.getCurrentContent().getPlainText();
              }),
              (K['EditorState'].prototype.isEmpty = function() {
                return !this.getCurrentContent().hasText();
              }),
              (Jt.createEditorState = K['EditorState'].createFrom = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (t.unitExportFn = t.unitExportFn || Jt.defaultProps.converts.unitExportFn),
                  (t.styleImportFn = Ee(t.styleImportFn, t.editorId)),
                  (t.entityImportFn = xe(t.entityImportFn, t.editorId)),
                  (t.blockImportFn = _e(t.blockImportFn, t.editorId));
                var n = null;
                if (e instanceof K['EditorState']) n = e;
                else if ('object' === o()(e) && e && e.blocks && e.entityMap)
                  n = Object(Gt['convertRawToEditorState'])(e, yt(t.editorId));
                else if ('string' === typeof e)
                  try {
                    n = /^(-)?\d+$/.test(e)
                      ? Object(Gt['convertHTMLToEditorState'])(e, yt(t.editorId), t, 'create')
                      : K['EditorState'].createFrom(JSON.parse(e), t);
                  } catch (r) {
                    n = Object(Gt['convertHTMLToEditorState'])(e, yt(t.editorId), t, 'create');
                  }
                else
                  n =
                    'number' === typeof e
                      ? Object(Gt['convertHTMLToEditorState'])(
                          e.toLocaleString().replace(/,/g, ''),
                          yt(t.editorId),
                          t,
                          'create'
                        )
                      : K['EditorState'].createEmpty(yt(t.editorId));
                return (
                  (t.styleExportFn = ke(t.styleExportFn, t.editorId)),
                  (t.entityExportFn = Ce(t.entityExportFn, t.editorId)),
                  (t.blockExportFn = Ie(t.blockExportFn, t.editorId)),
                  n.setConvertOptions(t),
                  n
                );
              });
            t['default'] = Te(Jt);
          },
          function(e, t) {},
          ,
          function(e, t) {},
          ,
          ,
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
          function(e, t) {},
        ]);
      });
    },
    yI3j: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = i);
      var r = o(n('q1tI'));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        switch (e) {
          case 'BOLD':
            return r['default'].createElement('strong', null);
          case 'ITALIC':
            return r['default'].createElement('em', null);
          case 'UNDERLINE':
            return r['default'].createElement('u', null);
          case 'CODE':
            return r['default'].createElement('code', null);
          default:
            return { start: '', end: '' };
        }
      }
    },
    ykIx: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0);
      var r = o(n('q1tI'));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = {
        unstyled: r['default'].createElement('p', null),
        paragraph: r['default'].createElement('p', null),
        'header-one': r['default'].createElement('h1', null),
        'header-two': r['default'].createElement('h2', null),
        'header-three': r['default'].createElement('h3', null),
        'header-four': r['default'].createElement('h4', null),
        'header-five': r['default'].createElement('h5', null),
        'header-six': r['default'].createElement('h6', null),
        blockquote: r['default'].createElement('blockquote', null),
        'unordered-list-item': {
          element: r['default'].createElement('li', null),
          nest: r['default'].createElement('ul', null),
        },
        'ordered-list-item': {
          element: r['default'].createElement('li', null),
          nest: r['default'].createElement('ol', null),
        },
        media: r['default'].createElement('figure', null),
        atomic: r['default'].createElement('figure', null),
      };
      t['default'] = i;
    },
    yxyD: function(e, t, n) {
      'use strict';
      var r = n('jLRO'),
        o = n('Taje'),
        i = function(e, t) {
          return e === t;
        },
        a = function(e) {
          return !!e;
        },
        l = [];
      function s(e, t, n) {
        var l = [],
          s = t
            .map(function(e) {
              return e.has(n);
            })
            .toList();
        return (
          o(s, i, a, function(t, o) {
            var i = e.getText();
            l.push({ offset: r.strlen(i.slice(0, t)), length: r.strlen(i.slice(t, o)), style: n });
          }),
          l
        );
      }
      function c(e) {
        var t = e
            .getCharacterList()
            .map(function(e) {
              return e.getStyle();
            })
            .toList(),
          n = t
            .flatten()
            .toSet()
            .map(function(n) {
              return s(e, t, n);
            });
        return Array.prototype.concat.apply(l, n.toJS());
      }
      e.exports = c;
    },
    zORg: function(e, t, n) {
      'use strict';
      function r(e) {
        if (e instanceof Element) {
          var t = e.getAttribute('data-offset-key');
          if (t) return t;
          for (var n = 0; n < e.childNodes.length; n++) {
            var o = r(e.childNodes[n]);
            if (o) return o;
          }
        }
        return null;
      }
      e.exports = r;
    },
    zlY5: function(e, t, n) {
      'use strict';
      var r = n('158f');
      function o(e) {
        var t = r(e),
          n = 0,
          o = 0,
          i = 0,
          a = 0;
        if (t.length) {
          if (t.length > 1 && 0 === t[0].width) {
            var l = t[1];
            (n = l.top), (o = l.right), (i = l.bottom), (a = l.left);
          } else {
            var s = t[0];
            (n = s.top), (o = s.right), (i = s.bottom), (a = s.left);
          }
          for (var c = 1; c < t.length; c++) {
            var u = t[c];
            0 !== u.height &&
              0 !== u.width &&
              ((n = Math.min(n, u.top)),
              (o = Math.max(o, u.right)),
              (i = Math.max(i, u.bottom)),
              (a = Math.min(a, u.left)));
          }
        }
        return { top: n, right: o, bottom: i, left: a, width: o - a, height: i - n };
      }
      e.exports = o;
    },
    'zxN+': function(e, t, n) {
      'use strict';
      var r = n('zlY5');
      function o(e) {
        var t = e.getSelection();
        if (!t.rangeCount) return null;
        var n = t.getRangeAt(0),
          o = r(n),
          i = o.top,
          a = o.right,
          l = o.bottom,
          s = o.left;
        return 0 === i && 0 === a && 0 === l && 0 === s ? null : o;
      }
      e.exports = o;
    },
  },
]);
