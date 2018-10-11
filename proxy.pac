function FindProxyForURL(url, host) {

  if (dnsDomainIs(host, "demo.testfire.net") ){
       return "PROXY 172.20.20.9:808";
    } else {
        return "DIRECT";
  }
}
