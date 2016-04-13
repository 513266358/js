ajaxFunction = {
  "ajax" : function (url, data, fun, style, typeState,beforesend, asyncState, errcallback) {
  console.group('ajax信息');
  if (!url || !typeof (url) === 'string') {
    console.error('地址不存在');
  }
  if (!fun || !typeof (fun) === 'function') {
    console.error('方法不存在');
  }

  if (!typeState || typeState === '')
  {
    typeState = 'POST';
    console.info('默认了为POST');
  }
  if (typeof (asyncState) !== 'boolean' && asyncState !== false) {
    asyncState = true;
    console.info('默认了为异步');
  }
  if(beforesend && typeof(beforesend) !== 'function'){
    beforesend = function(){}
    console.info('默认不做任何操作');
  }
  if (typeof (style) !== 'string') {
    style = 'json';
    console.info('默认格式为JSON');
  }

  $.ajax({
    cache: true,
    url: url,
    data: data,
    async: asyncState,
    type: typeState,
    dataType: style,
    success: function (data) {
        var ajaxData = data;
        fun(ajaxData);
    },
    beforSend:function(){
        befoesend;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
        if (typeof (errcallback) === 'function') {
            errcallback([XMLHttpRequest, textStatus, errorThrown]);
        }
        console.error([JSON.stringify(XMLHttpRequest), JSON.stringify(textStatus), JSON.stringify(errorThrown)]);
    }
  });
  console.groupEnd();
  return this;
  }
}

