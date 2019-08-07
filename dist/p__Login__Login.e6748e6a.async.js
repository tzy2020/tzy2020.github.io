(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '86U/': function(e, t, n) {
      e.exports = {
        main: 'antd-pro-pages-login-login-main',
        icon: 'antd-pro-pages-login-login-icon',
        other: 'antd-pro-pages-login-login-other',
        register: 'antd-pro-pages-login-login-register',
      };
    },
    JAxp: function(e, t, n) {
      e.exports = {
        login: 'antd-pro-components-login-index-login',
        icon: 'antd-pro-components-login-index-icon',
        other: 'antd-pro-components-login-index-other',
        register: 'antd-pro-components-login-index-register',
        prefixIcon: 'antd-pro-components-login-index-prefixIcon',
        submit: 'antd-pro-components-login-index-submit',
      };
    },
    ZU1P: function(e, t, n) {
      'use strict';
      n.r(t);
      n('sRBo');
      var a = n('kaz8'),
        r = n('p0pE'),
        o = n.n(r),
        i = n('2Taf'),
        s = n.n(i),
        l = n('vZ4D'),
        c = n.n(l),
        u = n('l4Ni'),
        p = n.n(u),
        m = n('ujKo'),
        g = n.n(m),
        d = n('MhPg'),
        f = n.n(d),
        h = n('q1tI'),
        v = n.n(h),
        y = n('MuoO'),
        b = n('wY1l'),
        E = n.n(b),
        x = (n('y8nQ'), n('Vl3Y')),
        w = (n('17x9'), n('TSYQ')),
        N = n.n(w),
        S = (n('5NDa'), n('5rEg')),
        C = n('jehZ'),
        k = n.n(C),
        P = n('Y/ft'),
        I = n.n(P),
        A = (n('Pwec'), n('CtXQ')),
        F = n('JAxp'),
        O = n.n(F),
        j = {
          UserName: {
            props: {
              size: 'large',
              id: 'userName',
              prefix: v.a.createElement(A['a'], { type: 'user', className: O.a.prefixIcon }),
              placeholder: 'admin',
            },
            rules: [{ required: !0, message: 'Please enter username!' }],
          },
          Password: {
            props: {
              size: 'large',
              prefix: v.a.createElement(A['a'], { type: 'lock', className: O.a.prefixIcon }),
              type: 'password',
              id: 'password',
              placeholder: '888888',
            },
            rules: [{ required: !0, message: 'Please enter password!' }],
          },
        },
        L = Object(h['createContext'])(),
        T = L,
        q = x['a'].Item,
        D = (function(e) {
          function t() {
            var e, n;
            s()(this, t);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
            return (
              (n = p()(this, (e = g()(t)).call.apply(e, [this].concat(r)))),
              (n.getFormItemOptions = function(e) {
                var t = e.onChange,
                  n = e.defaultValue,
                  a = e.customprops,
                  r = e.rules,
                  o = { rules: r || a.rules };
                return t && (o.onChange = t), n && (o.initialValue = n), o;
              }),
              n
            );
          }
          return (
            f()(t, e),
            c()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.form.getFieldDecorator,
                    t = this.props,
                    n = t.customprops,
                    a = t.name,
                    r = I()(t, ['customprops', 'name']),
                    o = this.getFormItemOptions(this.props),
                    i = r || {};
                  return v.a.createElement(
                    q,
                    null,
                    e(a, o)(v.a.createElement(S['a'], k()({}, n, i)))
                  );
                },
              },
            ]),
            t
          );
        })(h['Component']),
        U = {};
      Object.keys(j).forEach(function(e) {
        var t = j[e];
        U[e] = function(n) {
          return v.a.createElement(T.Consumer, null, function(a) {
            return v.a.createElement(
              D,
              k()({ customprops: t.props, rules: t.rules }, n, { type: e, form: a })
            );
          });
        };
      });
      var z = U,
        J = (n('+L6B'), n('2/Rp')),
        Y = x['a'].Item,
        K = function(e) {
          var t = e.className,
            n = I()(e, ['className']),
            a = N()(O.a.submit, t);
          return v.a.createElement(
            Y,
            null,
            v.a.createElement(
              J['a'],
              k()({ size: 'large', className: a, type: 'primary', htmlType: 'submit' }, n)
            )
          );
        },
        Q = K,
        V = (function(e) {
          function t(e) {
            var n;
            return (
              s()(this, t),
              (n = p()(this, g()(t).call(this, e))),
              (n.handleSubmit = function(e) {
                e.preventDefault();
                var t = n.state,
                  a = t.active,
                  r = t.type,
                  o = n.props,
                  i = o.form,
                  s = o.onSubmit,
                  l = a[r];
                i.validateFields(l, { force: !0 }, function(e, t) {
                  s(e, t);
                });
              }),
              (n.state = { type: e.defaultActiveKey, active: {} }),
              n
            );
          }
          return (
            f()(t, e),
            c()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.className,
                    n = e.children,
                    a = e.form;
                  return v.a.createElement(
                    T.Provider,
                    { value: a },
                    v.a.createElement(
                      'div',
                      { className: N()(t, O.a.login) },
                      v.a.createElement(x['a'], { onSubmit: this.handleSubmit }, n)
                    )
                  );
                },
              },
            ]),
            t
          );
        })(h['Component']);
      (V.defaultProps = { className: '', defaultActiveKey: '', onSubmit: function() {} }),
        (V.Submit = Q),
        Object.keys(z).forEach(function(e) {
          V[e] = z[e];
        });
      var Z,
        B,
        M,
        R = x['a'].create()(V),
        X = n('86U/'),
        G = n.n(X),
        H = R.UserName,
        W = R.Password,
        $ = R.Submit,
        _ =
          ((Z = Object(y['connect'])(function(e) {
            var t = e.login,
              n = e.loading;
            return { login: t, submitting: n.effects['login/login'] };
          })),
          Z(
            ((M = (function(e) {
              function t() {
                var e, n;
                s()(this, t);
                for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
                  r[i] = arguments[i];
                return (
                  (n = p()(this, (e = g()(t)).call.apply(e, [this].concat(r)))),
                  (n.state = { type: 'account', autoLogin: !0 }),
                  (n.onTabChange = function(e) {
                    n.setState({ type: e });
                  }),
                  (n.handleSubmit = function(e, t) {
                    var a = n.state.type;
                    if (!e) {
                      var r = n.props.dispatch;
                      r({ type: 'login/login', payload: o()({}, t, { type: a }) });
                    }
                  }),
                  (n.changeAutoLogin = function(e) {
                    n.setState({ autoLogin: e.target.checked });
                  }),
                  n
                );
              }
              return (
                f()(t, e),
                c()(t, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this,
                        t = this.props,
                        n = t.login,
                        r = t.submitting,
                        o = this.state.autoLogin;
                      return v.a.createElement(
                        'div',
                        { className: G.a.main },
                        v.a.createElement(
                          R,
                          {
                            onTabChange: this.onTabChange,
                            onSubmit: this.handleSubmit,
                            ref: function(t) {
                              e.loginForm = t;
                            },
                          },
                          'error' === n.status &&
                            !r &&
                            v.a.createElement(
                              'span',
                              null,
                              '\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef!'
                            ),
                          v.a.createElement(H, {
                            name: 'username',
                            placeholder: '\u7528\u6237\u540d: \u6ce8\u518c\u90ae\u7bb1',
                            rules: [
                              { required: !0, message: '\u8bf7\u8f93\u5165\u7528\u6237\u540d!' },
                            ],
                          }),
                          v.a.createElement(W, {
                            name: 'password',
                            placeholder:
                              '\u5bc6\u7801: \u5bc6\u7801\u957f\u5ea6\u9700\u4e0d\u5c11\u4e8e6\u4e2a\u5b57\u7b26',
                            rules: [{ required: !0, message: '\u8bf7\u8f93\u5165\u5bc6\u7801!' }],
                            onPressEnter: function(t) {
                              t.preventDefault(), e.loginForm.validateFields(e.handleSubmit);
                            },
                          }),
                          v.a.createElement(
                            'div',
                            null,
                            v.a.createElement(
                              a['a'],
                              { checked: o, onChange: this.changeAutoLogin },
                              '\u81ea\u52a8\u767b\u5f55'
                            ),
                            v.a.createElement(
                              'div',
                              { style: { float: 'right' } },
                              v.a.createElement(
                                E.a,
                                { className: G.a.register, to: '/login/register' },
                                '\u6ce8\u518c\u8d26\u6237'
                              )
                            )
                          ),
                          v.a.createElement($, { loading: r }, '\u767b\u5f55')
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(h['Component'])),
            (B = M))
          ) || B);
      t['default'] = _;
    },
  },
]);
