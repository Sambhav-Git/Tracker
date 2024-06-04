export default `<style>
span {
    background-color:transparent !important;
}
p{
    margin:0;
}
ol, ul {
    list-style-type: initial;
    padding-inline-start: 40px;
    margin-top: 0;
    margin-bottom: 0;
}

ol,
ol.decimal,
ol.upper-roman,
ol.lower-roman,
ol.lower-alpha,
ol.upper-alpha,
ol.decimal-both,
ol.decimal-trail,
ol.upper-roman-trail,
ol.lower-roman-trail,
ol.upper-alpha-trail,
ol.lower-alpha-trail,
ol.upper-roman-both,
ol.lower-roman-both,
ol.upper-alpha-both,
ol.lower-alpha-both {
    list-style-type: none;
}
ol > li::before{
    content: counter(list-item, decimal) ". ";
    float: left; 
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;                      
}
ol.upper-roman > li::before {
    content: counter(list-item, upper-roman) ". ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.lower-roman > li::before {
    content: counter(list-item, lower-roman) ". ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.upper-alpha > li::before {
    content: counter(list-item, upper-alpha) ". ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.lower-alpha > li::before {
    content: counter(list-item, lower-alpha) ". ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.decimal > li::before {
    content: counter(list-item, decimal) ". ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.upper-roman-trail > li::before {
    content: counter(list-item, upper-roman) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.lower-roman-trail > li::before {
    content: counter(list-item, lower-roman) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.upper-alpha-trail > li::before {
    content: counter(list-item, upper-alpha) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.lower-alpha-trail > li::before {
    content: counter(list-item, lower-alpha) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.decimal-trail > li::before {
    content: counter(list-item, decimal) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.upper-roman-both > li::before {
    content: "(" counter(list-item, upper-roman) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;

}

ol.lower-roman-both > li::before {
    content: "(" counter(list-item, lower-roman) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.upper-alpha-both > li::before {
    content: "(" counter(list-item, upper-alpha) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.lower-alpha-both > li::before {
    content: "(" counter(list-item, lower-alpha) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}

ol.decimal-both > li::before {
    content: "(" counter(list-item, decimal) ") ";
    float: left;
    margin-left: -17px;
    background: #fff;
    margin-right: 6px;
}
table {
    height:auto !important;
}

</style>`;
