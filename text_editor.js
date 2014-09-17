<html !DOCTYPE>
 <head>
  <meta charset="utf-8">
  <title>text_editor v.1.0.</title>
<link rel="stylesheet" type="text/css" href="style.css">
<body id="bdy">
<div class="header"><h2>Text editor on Javascript</h2></div>
<div id="menu_frame"></div><span id="main_menu" onclick="show_menu()">main menu</span>
<form name="a" id="cool_undoable">
<textarea id="main" class="textarea"></textarea>
<div id="but1"  name="t1" value="Font" onClick="a1()">Font</div>
<div id="but2"  name="t2" value="Font Style" onClick="a2()">Font Style</div>
<div id="but3"  name="t3" value="Colour" onClick="a3()">Colour</div>
<div id="but4"><input type="button"  onFocus="this.blur()" onClick="formState.undo(this)" name="Undo" value="Undo"></div>
<div id="but5"><input type="button" onFocus="this.blur()" onClick="formState.redo(this)" name="Redo" value="Redo"></div>
</form>
<div id="shruft" style="background:#DCDCDC; position:absolute;  padding:auto; margin:0 22% 0 22%;top:35%; border:.2em double #BEBEBE">
<form name="b">
<br/>
Font
<select onChange="f1()" name="q">
<option>Times New Roman</option>
<option>Arial</option>
<option>Georgia</option>
<option>Monotype Corsiva</option>
<option>Courier</option>
<option>Century</option>
<option>Comic Sans MS</option>
</select><br/>
<br/>
Font Size
<select onChange="f2()" name="q2">
<option>8</option>
<option>14</option>
<option>18</option>
<option>22</option>
<option>26</option>
<option>32</option>
</select>
</form>
</div>
<div id="format" style="background:#DCDCDC; position:absolute;  padding:auto; margin:0 38% 0 38%;top:34%; border:.2em double #BEBEBE">
<form name="e">
<input type="checkbox" name="qqq1" /><label id="l1">bold</label><br/>
<input type="checkbox" name="qqq2" /><label id="l2">italic</label><br/>
<input type="checkbox" name="qqq3" /><label id="l3">underlined</label><br/>
<input type="button" onClick="f3()" value="ok">
</form>
</div>

<div id="col" style="background:#DCDCDC; position:absolute;  padding:auto; margin:0 47% 0 47%;top:19%;width:10%; border:.2em double #BEBEBE">
<form name="s">
<input type="radio" name="abc" />text<br/>
<input type="radio" name="abc"/>background<br/></form>
<table>
<tr>
<td onclick="m(this)" style=" background:#0000FF; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#00CCCC; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#993300; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#9933CC; width:2em; height:2em"></td>
</tr>
<tr>
<td onclick="m(this)" style=" background:#CC3333; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#CC6666; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#669966; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#FF6699; width:2em; height:2em"></td>
</tr>
<tr>
<td onclick="m(this)" style=" background:#FFFFFF; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#FF99FF; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#FF0066; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#00FF00; width:2em; height:2em"></td>
</tr>
<tr>
<td onclick="m(this)" style=" background:#990066; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#99FFFF; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#99FF66; width:2em; height:2em"></td>
<td onclick="m(this)" style=" background:#666666; width:2em; height:2em"></td>
</tr>
</table>
</div>
<script type="text/javascript" src="text_editor.js"></script>
<script type="text/javascript" src="undo_redo_plugin.js"></script>

 </body>
</html>
