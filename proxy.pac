function FindProxyForURL(url, host) {

   if (dnsDomainIs(host, "") ||
        shExpMatch(host, "(demo.testfire.net)"))
        return "DIRECT";

   if (dnsDomainIs(host, "") ||
         shExpMatch(host, "(*.webscantest.com)"))
          return "PROXY 172.20.20.9:808";

}
