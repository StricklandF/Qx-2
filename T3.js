const u = $request.url, l = { "baseMenuList": [{ "menuId": "100001", "menuSkipUrl": "", "menuType": 1, "picUrlSelected": "https://t3propublic.obs.cn-east-3.myhuaweicloud.com/5cd3ba3f-3ba0-4ccb-a050-b9907a723ea5.png", "homeStyle": 1, "menuName": "打车", "menuImgUrl": "https://t3propublic.obs.cn-east-3.myhuaweicloud.com/bg_fastcar_2811910b-c05c-449e-89bb-c3bdd1e32106.png", "angleMarkUrl": null, "picUrlNoSelect": "https://obs-t3-admin-public.t3go.cn/t3-admin/files/t3-admin/3471224401675396164", "menuPage": 1 }, { "menuId": "100018", "menuSkipUrl": "t3passenger://common/appointment", "menuType": 2, "picUrlSelected": "", "homeStyle": 1, "menuName": "预约车", "menuImgUrl": "", "angleMarkUrl": null, "picUrlNoSelect": "https://obs-t3-admin-public.t3go.cn/t3-admin/files/t3-admin/3471213490713637937", "menuPage": 2 }, { "menuId": "100046", "menuSkipUrl": "https://static.t3go.cn/t3-passenger/#/coupon", "menuType": 2, "picUrlSelected": "", "homeStyle": 1, "menuName": "优惠券", "menuImgUrl": "", "angleMarkUrl": null, "picUrlNoSelect": "https://obs-t3-admin-public.t3go.cn/t3-admin/files/t3-admin/3471216481713752638", "menuPage": 2 }], "subMenuList": [] }, c = function (d, m) { if (m.some(e => u.includes(e))) { delete d; } }, response = { body: JSON.stringify({ data: l, code: 200, bizCode: null, errCode: 200, msg: "成功", success: true, exception: null, attachment: null }) }; c(l, ["/notoken/api/v2/ad/getNegativescreen", "/notoken/api/v6/ad/getActivityPopup"]); $done(response); if (!$response.body) $done(response); let r = JSON.parse($response.body); c(r.data, ["/notoken/api/v2/ad/getNegativescreen", "/notoken/api/v6/ad/getActivityPopup", "/notoken/api/v1/ad/getNotices", "/notoken/api/v1/resourceLocation/floating"]); $done({ body: JSON.stringify(r) }); function fixPos(a) { for (let i = 0; i < a.length; i++) a[i].pos = i + 1; }
