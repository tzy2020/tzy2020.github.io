(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    bjjx: function(e, a, t) {
      e.exports = {
        'search-form': 'antd-pro-pages-system-config-index-search-form',
        input: 'antd-pro-pages-system-config-index-input',
        textArea: 'antd-pro-pages-system-config-index-textArea',
      };
    },
    vHTS: function(e, a, t) {
      'use strict';
      t.r(a);
      t('T2oS');
      var n,
        r,
        l,
        o = t('W9HT'),
        s = (t('+L6B'), t('2/Rp')),
        i = (t('jCWc'), t('kPKH')),
        c = (t('14J3'), t('BMrR')),
        m = (t('y8nQ'), t('Vl3Y')),
        p = t('jehZ'),
        d = t.n(p),
        u = (t('BoS7'), t('Sdc0')),
        f = t('p0pE'),
        g = t.n(f),
        h = t('2Taf'),
        y = t.n(h),
        E = t('vZ4D'),
        x = t.n(E),
        C = t('l4Ni'),
        b = t.n(C),
        v = t('ujKo'),
        k = t.n(v),
        j = t('MhPg'),
        w = t.n(j),
        N = (t('5NDa'), t('5rEg')),
        A = t('q1tI'),
        B = t.n(A),
        F = t('MuoO'),
        S = t('zHco'),
        T = t('bjjx'),
        H = t.n(T),
        V = {
          labelCol: { xs: { span: 24 }, md: { span: 6 } },
          wrapperCol: { xs: { span: 24 }, md: { span: 18 } },
        },
        D = N['a'].TextArea,
        I =
          ((n = Object(F['connect'])(function(e) {
            var a = e.system,
              t = e.loading;
            return {
              system: a,
              loading: t.models.system,
              submiting: t.effects['system/updateConfig'],
            };
          })),
          n(
            ((l = (function(e) {
              function a() {
                var e, t;
                y()(this, a);
                for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                  r[l] = arguments[l];
                return (
                  (t = b()(this, (e = k()(a)).call.apply(e, [this].concat(r)))),
                  (t.updateConfig = function() {
                    var e = t.props,
                      a = e.dispatch,
                      n = e.form.getFieldsValue,
                      r = n();
                    a({
                      type: 'system/updateConfig',
                      payload: g()({}, r, { mode: String(Number(r.mode)) }),
                    });
                  }),
                  (t.resetFields = function() {
                    t.props.form.resetFields();
                  }),
                  t
                );
              }
              return (
                w()(a, e),
                x()(a, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this.props,
                        a = e.form.getFieldDecorator,
                        t = e.system,
                        n = t.notice,
                        r = t.mode,
                        l = e.loading,
                        p = e.submiting;
                      return B.a.createElement(
                        S['a'],
                        null,
                        B.a.createElement(
                          o['a'],
                          { spinning: Boolean(l) },
                          B.a.createElement(
                            'div',
                            { className: H.a['search-form'] },
                            B.a.createElement(
                              m['a'],
                              null,
                              B.a.createElement(
                                c['a'],
                                null,
                                B.a.createElement(
                                  m['a'].Item,
                                  d()({ label: '\u7cfb\u7edf\u5f00\u5173' }, V),
                                  a('mode', {
                                    initialValue: Boolean(Number(r)),
                                    valuePropName: 'checked',
                                  })(
                                    B.a.createElement(u['a'], {
                                      unCheckedChildren: '\u5173\u95ed\u4e2d',
                                      checkedChildren: '\u5f00\u653e\u4e2d',
                                    })
                                  )
                                )
                              ),
                              B.a.createElement(
                                c['a'],
                                null,
                                B.a.createElement(
                                  i['a'],
                                  null,
                                  B.a.createElement(
                                    m['a'].Item,
                                    d()({ label: '\u516c\u544a\u680f\u5185\u5bb9' }, V),
                                    a('notice', { initialValue: n })(
                                      B.a.createElement(D, {
                                        className: H.a.textArea,
                                        placeholder:
                                          "\u652f\u6301html\u5982\uff1a<span style='color: red; font-size:14px'>\u6b22\u8fce\u4f7f\u7528\u4e2a\u4eba\u4fe1\u606f\u7ba1\u7406\u7cfb\u7edf\uff5e</span>",
                                      })
                                    )
                                  )
                                )
                              ),
                              B.a.createElement(
                                c['a'],
                                { style: { textAlign: 'right' } },
                                B.a.createElement(
                                  i['a'],
                                  null,
                                  B.a.createElement(
                                    s['a'],
                                    { onClick: this.resetFields, style: { marginRight: 10 } },
                                    '\u91cd\u7f6e'
                                  ),
                                  B.a.createElement(
                                    s['a'],
                                    { type: 'primary', onClick: this.updateConfig, loading: p },
                                    '\u63d0\u4ea4'
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                a
              );
            })(A['Component'])),
            (r = l))
          ) || r);
      a['default'] = m['a'].create()(I);
    },
  },
]);
