function FindProxyForURL(url, host) {

// If the hostname matches, send direct.
   if (dnsDomainIs(host, "") ||
        shExpMatch(host, "(demo.testfire.net)"))
        return "PROXY 172.20.20.:808";


// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";

}
