(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '4F/z': function(n, e, t) {
      n.exports = { href: 'antd-pro-pages-oplog-index-href' };
    },
    h6Yu: function(n, e, t) {
      'use strict';
      t.r(e);
      t('g9YV');
      var a,
        o,
        i,
        r = t('wCAj'),
        l = t('2Taf'),
        u = t.n(l),
        d = t('vZ4D'),
        c = t.n(d),
        s = t('l4Ni'),
        p = t.n(s),
        f = t('ujKo'),
        g = t.n(f),
        h = t('MhPg'),
        m = t.n(h),
        w = t('q1tI'),
        I = t.n(w),
        v = t('MuoO'),
        x = t('zHco'),
        z = t('wd/R'),
        Y = t.n(z),
        k = t('4F/z'),
        y = t.n(k),
        D =
          ((a = Object(v['connect'])(function(n) {
            var e = n.oplog,
              t = n.loading;
            return { oplog: e, loading: t.models.oplog };
          })),
          a(
            ((i = (function(n) {
              function e() {
                var n, t;
                u()(this, e);
                for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
                  o[i] = arguments[i];
                return (
                  (t = p()(this, (n = g()(e)).call.apply(n, [this].concat(o)))),
                  (t.columns = function() {
                    return [
                      { title: 'ID', dataIndex: 'id' },
                      { title: '\u7528\u6237\u540d', dataIndex: 'nickname' },
                      { className: y.a.href, title: 'HREF', dataIndex: 'href' },
                      { title: 'IP', dataIndex: 'ip' },
                      {
                        title: '\u65f6\u95f4',
                        dataIndex: 'inputTime',
                        render: function(n) {
                          return Y()(n).format('YYYY-MM-DD HH:mm:ss');
                        },
                      },
                    ];
                  }),
                  t
                );
              }
              return (
                m()(e, n),
                c()(e, [
                  {
                    key: 'render',
                    value: function() {
                      var n = this.props,
                        e = n.loading,
                        t = n.oplog.list;
                      return I.a.createElement(
                        x['a'],
                        null,
                        I.a.createElement(r['a'], {
                          rowKey: 'id',
                          size: 'small',
                          loading: e,
                          pagination: {
                            showSizeChanger: !0,
                            defaultPageSize: 20,
                            pageSizeOptions: ['20', '50', '100', '500'],
                          },
                          columns: this.columns(),
                          dataSource: t,
                        })
                      );
                    },
                  },
                ]),
                e
              );
            })(w['Component'])),
            (o = i))
          ) || o);
      e['default'] = D;
    },
  },
]);
