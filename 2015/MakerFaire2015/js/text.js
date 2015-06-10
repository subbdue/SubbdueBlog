// #####################################
// # IoT
// #####################################
var HTMLiot = "<h2>Internet of Things</h2>\
<article> \
<h3>... Is <b>IoT</b> ready for big-business?</h3> \
<p>\
As an Electrical Engineer by profession, my first stop - at this year's \
MakerFaire - was at the Make:Electronics zone. It was all about <em>Internet \
of Things</em>. At first it seemed overwhelming - every company in the Valley \
seems to want to get a piece of this action. But as the hours passed and as I \
spoke to several folks at several stalls, this feeling turned into fatigue. \
\
<pics>\
\
In my opinion, while there are companies doing some fantastic work, \
the IoT space seems to be in a mess of sorts. It seemed like the hardware \
manufacturers are trying to come up with creative ways  to create \
building-blocks of different kinds - the main intention here seems to be \
lowering the bar to enter the IoT space. \
<pics>\
\
While this is a great way to get new people to play with IoT, it seems to be \
disconnected with the view of IoT big enterprises, such as Cisco. There \
weren't many commerical solutions/ commercial interpretation of IoT at the \
Faire.\
\
In my opinion, the most interesting company in this space is 'Temboo'. There \
IoT software stack looks pretty well built out and I would feature it as a \
commercial application of IoT. \
</p>\
</article>\
<article>\
<h3>... IoT Hardware</h3>\
</article>\
<article>\
<h3>... From Prototype to Production</h3>\
<p>\
</p>\
</article>\
\
";

$( '#iot' ).append(HTMLiot);


// *************************************
// * 3D Printing
// *************************************
// *************************************
// * Facebook
// *************************************
var HTMLfacebook = "<h2>Facebook and the OpenComputeProject</h2>\
<article>\
<p>\
Facebook has been doing some fantastic work with the <a href=\"http://www.opencompute.org/\" target=\"blank\">Open Compute Project</a>. They were at the Faire to show-off <a href=\"https://code.facebook.com/posts/1616052405274961/introducing-yosemite-the-first-open-source-modular-chassis-for-high-powered-microservers-/\" target=\"_blank\"><b>Yosemite</b></a> - second  revision of their micro-server system.\
</article>\
<article>\
<h3>OCP - The Open Compute Project</h3>\
<p>\
Engineering any data-center gear such as networking switches and routers, servers and data storage clusters involves a set of standard procedures. In essence, you design -\
<ul>\
<li><b>The mechanicals</b> - the external housing and mounts, the sockets into which the circuit boards are inserted, determine the optimum airflow pattern for cooling, through simulations</li>\
<li><b>The electronics</b> - the power supply, custom chips, printed circuit board and all its the peripherals</li>\
<li><b>The firmware</b> - for device booting, management and low-level drivers</li>\
<li><b>The certifications</b> - the device has to certified by appropriate agencies depending on the country you plan on selling the product in</li>\
</ul>\
\
</p>\
<p>\
<a href=\"img/FB0.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB0.jpg\" title=\"Open Rack\" width=\"300\" style=\"float:left;margin:0 5px 0 0;\"/></a>\
This process, with no surprises, is expensive and time consuming. While it is understandable that any equipment designer/maker has to protect their designs and IPs to keep their competitive edge, there are parts of any design that can be made public with minimal risk of monetary or competitive loss - in my opinion, especially in the field of networking/compute/storage equipment, the mechanicals would be a great candidate to open-source. This way the community can re-use and contribute to these designs, as against re-enginnering all of this stuff from the ground up. Open-sourcing, albeit a small portion, would save time, money, and lower the bar for entry into tech hardware design and manufacturing.\
</p>\
<p>\
With OCP, Facebook in partnership with a few other companies have precisely done this. They have open-sourced the Open Rack System, parts of the Yosemite MicroServer System, the Top-of-Rack Switch and several other pieces of equipment.\
</p>\
<p>\
</p>\
</article>\
<article>\
<h3>Project Yosemite</h3>\
<p>\
Time to geek out - the Yosemite micro-server system is a beautiful piece of engineering. It is made up of 12 micro-server cards in a 2U footprint. The 2U system is made up of 3 sleds - each sled is 1/3 the width of the rack - they refer to these sleds as 'Chassis'. Each Chassis houses 4 server cards and each card runs a <a href=\"http://www.anandtech.com/show/9070/intel-xeon-d-launched-14nm-broadwell-soc-for-enterprise\" target=\"_blank\">Intel-BroadwellDE processor</a>.\
</p>\
<p>\
Fans at the back make it a front-to-back cooled system.\
</p>\
<p>\
<a class=\"photo-bordered\" href=\"img/FB4.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB4.jpg\" title=\"Chassis view 1\"/></a>\
<a class=\"photo-bordered\" href=\"img/FB5.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB5.jpg\" title=\"Chassis view 2\" width=\"600\"/></a>\
<a class=\"photo-bordered\" href=\"img/FB6.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB6.jpg\" title=\"Chassis view 3\" width=\"600\"/></a>\
</p>\
<p>\
To get traffic into the Chassis, there is one 40Gbps front panel port in a 4x10Gbps configuration on each chassis, and the top-of-rack switch feeds this 40G port. Each 10G lane of the 40Gbps port in turn feeds one micro-server.\
</p>\
<p>\
<a class=\"photo-bordered\" href=\"img/FB1.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB1.jpg\" title=\"Front-panel-port view of a sled \" width=\"200\"/></a>\
<a class=\"photo-bordered\" href=\"img/FB2.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB2.jpg\" title=\"Front-panel-port view of a sled \" width=\"200\"/></a>\
<a class=\"photo-bordered\" href=\"img/FB3.jpg\" target=\"_blank\"><img src=\"img/thumbs/FB3.jpg\" title=\"Front-panel-port view of a sled \" width=\"200\"/></a>\
</p>\
</p>\
</article>\
<article>\
<h3>ODM - Original Design Manufacturer</h3>\
<p>\
Now, how does Facebook go about designing and manufacturing this gear? Facebook is essentially a hardware design house. They have a small team of hardware/system engineers who build up the specifications for the servers and then work with an <em>Original Design Manufacturer</em> to bring their product to life. <a href=\"http://www.wired.com/2012/05/quanta-facebook-us/\"><b>Quanta</b></a> is the ODM they worked with to design a lot of this stuff (You can see their brand on the Circuit Boards).\
</p>\
<p>\
While not all parts of this micro-server system are open-sourced (because Quanta has to protect their IPs) you can still go to Quanta and ask them to build you a Yosemite, since Facebook has opened it up from their end.\
</p>\
<p>\
In summary, with OCP, I think the world of Systems Engineering is heading in the right direction.\
</p>\
</article>\
<article>\
<h3>References</h3>\
<p>\
<a href=\"http://www.opencompute.org/wiki/Server/SpecsAndDesigns\">OCP server specifications and designs</a></br>\
<a href=\"http://www.opencompute.org/wiki/Networking/SpecsAndDesigns\">OCP networking specifications and designs</a></br>\
<a href=\"http://www.opencompute.org/wiki/Open_Rack/SpecsAndDesigns\">Open Rack specifications and designs</a></br>\
</p>\
</article>\
";
$( '#facebook' ).append(HTMLfacebook);
// *************************************
// * Google
// *************************************

// *************************************
// * All Things Make
// *************************************