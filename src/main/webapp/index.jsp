<%@ taglib uri="http://jawr.net/tags" prefix="jwr"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html ng-app="app" ng-controller="ctrl_init" document-events ng-click="onClick($event)" ng-keyup="onKeyUp($event)" ng-class="{ 'page_loading': pageLoading, 'page_loaded': pageLoaded, 'app_initialized': appInitialized && (!$state.is('login') && !$state.includes('error'))}">
<head>
<base href="<%=request.getContextPath()%>/">
 <meta charset="UTF-8">
 <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <!-- Remove Tap Highlight on Windows Phone IE -->
 <meta name="msapplication-tap-highlight" content="no"/>
 
 <jwr:style src="/bundle/all.css" />

<title>Teste Kelly Barros</title>

</head>

<body>

   <div ui-view>
    <script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
   <jwr:script src="/bundle/js/all.js" />
    
</body>
</html>
