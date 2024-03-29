# 签名、加密

## SHA256 加密

#### 简介：

- sha256 是一种 hash 算法，将数据进行 hash 算法得到一个新的散列数据，是不可逆的，一般叫对数据进行签名

#### 使用：

- 先对数据进行编码，再对新数据进行 SHA256 算法，得到 hash 值（一般是唯一的，不对重复）

#### 场景：

- 场景 1: 前端接口加签，后台服务器验签名，判断接口请求数据是否被串改过；
- 做法：将接口请求数据字符串转换，再编码，再加上随机数盐值，最后进行加密得到 hash 值。 后台将前端接口的数据，盐值，hash 值，按照相同的规则得到新的 hash 值，跟前端 hash 值比较，如果不相同，即数据被串改过
- 场景 2: 密码校验，前端将用户输入密码进行 sha 加密，传输后台，存储 DB。用户再次登里输入密码，前端将 hash 值传入后台，后台将 hash 值跟 DB 的 hash 值比较，一致则密码输入正确，登陆成功，否则登陆失败。**目前不是很安全，因为超级计算机的出现，已经有网站存储了 10 位以内的所有枚举密码的 hash 值** 所以这里可以将 hash 值进行登陆操作，如果登陆成功即碰撞出你的真实密码。这里可以通过更换 RSA 非对称加密，或者添加盐值增加原始数据的长度来防止

## RSA 加密

#### 简介

- RSA 非对称加密，首先生成一对公钥，私钥，公钥对外，私钥存储自己服务器

#### 使用：

- 用公钥对 RSA 加密，得到密文，在自己服务器用私钥对密文解密，得到真实数据

#### 场景：

- 敏感数据传输，如密码，证件号等
