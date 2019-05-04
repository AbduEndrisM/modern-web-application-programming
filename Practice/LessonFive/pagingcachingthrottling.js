import { privateDecrypt, Decipher } from "crypto";

//Paging


// Link <http://example.com/api?p=2>; rel="next", <http://example.com/api?p=25>; rel="last"; 



// <LINK href="http://example.com/api?p=1" rel="first"></LINK>
// <LINK href="http://example.com/api?p=1" rel="previous"></LINK>
// <LINK href="http://example.com/api?p=2" rel="next"></LINK>
// <LINK href="http://example.com/api?p=25" rel="last"></LINK>





// Cache-Control:private max-age: 86400
// Expires: Fri, Dec 2018 12:00:00 GMT 
// ETag: "asdsfdsfdsfsfsdfsdfds"

// X-RateLimit-Limit: 2000
// X-RateLimit-Reset: 141141
