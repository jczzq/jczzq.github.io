## 配置Shadowsocks server

SSH 连接到服务器之后，执行如下命令：
```bash
$ sudo -s                                          # 获取超级管理员权限
# apt-get update                                   # 更新源
# apt-get install python-pip                       # 安装pip工具，用于安装shadowsocks
# pip install shadowsocks                          # 安装shadowsocks
# vim /etc/shadowsocks_conf.json                   # 编辑shadowsocks配置，内容见后文
# ssserver -c /etc/shadowsocks_conf.json -d start  # 启动shadowsocks服务器
```
shadowsocks_conf.json 配置内容如下：
```bash
{
    "server":"0.0.0.0",
    "port_password": {
        "[这里写你的端口号，通常为8388]": "[密码1]",
        "[其他端口号]": "[密码2]" # 一个其实就够了...可能这里也是可以多端口登录吧
    },
    "local_address": "127.0.0.1",
    "local_port":1080,
    "timeout":600,
    "method":"aes-256-cfb",
    "auth": true
}
```
配置字段说明如下：
|字段|	含义|
| - |	-|
|server	|服务端监听地址(IPv4或IPv6)
|server_port	|服务端端口
|local_address	|本地监听地址，缺省为443
|local_port	|本地监听端口，一般为1080
|password	|用以加密的密钥
|timeout	|超时时间(秒)
|method	|加密方法，默认为 aes-256-cfb
|fast_open	|是否启用 TCP-Fast-Open, true or false
|workers	|worker数量，仅在Unix和Linux下有效

编辑完上述配置文件后，一定记得执行最后一条命令以启动 Shadowsocks 服务。
