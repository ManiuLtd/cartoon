<!--这里是K线组件-->
<template>
	<div class="fq-kline-component" ref="kline_component_box">
		<div class="chart_container dark">
			<!-- <div id="chart_dom_elem_cache" class="chart_dom_elem_cache"></div> -->
			<!-- ToolBar -->
			<!-- <div id="chart_toolbar" class="chart_toolbar" style="display:none"> -->
				<!-- <div class="chart_toolbar_minisep"></div> -->
				<!-- Periods -->
				<!-- <div class="chart_dropdown chart_toolbar_periods_vert" id="chart_toolbar_periods_vert">
					<div class="chart_dropdown_t"><a class="chart_str_period">周期</a></div>
					<div class="chart_dropdown_data" style="margin-left: -58px;">
						<table>
							<tbody>
							<tr>
								<td>
									<ul>
										<li id="chart_period_1n_v" style="display:none;" name="1n">
											<a class="chart_str_period_1n">月线</a>
										</li>
										<li id="chart_period_1w_v" style="display:none;" name="1w">
											<a class="chart_str_period_1w">周线</a>
										</li>
										<li id="chart_period_3d_v" style="display:none;" name="3d">
											<a class="chart_str_period_3d">3日</a>
										</li>
										<li id="chart_period_1d_v" style="display:none;" name="1d">
											<a class="chart_str_period_1d">日线</a>
										</li>
										<li id="chart_period_12h_v" style="display:none;" name="12h">
											<a class="chart_str_period_12h">12小时</a>
										</li>
										<li id="chart_period_6h_v" style="display:none;" name="6h">
											<a class="chart_str_period_6h">6小时</a>
										</li>
										<li id="chart_period_4h_v" style="display:none;" name="4h">
											<a class="chart_str_period_4h">4小时</a>
										</li>
										<li id="chart_period_2h_v" style="display:none;" name="2h">
											<a class="chart_str_period_2h">2小时</a>
										</li>
										<li id="chart_period_1h_v" style="display:none;" name="1h">
											<a class="chart_str_period_1h">1小时</a>
										</li>
									</ul>
								</td>

							</tr>

							<tr>
								<td>
									<ul>
										<li id="chart_period_30m_v" style="display:none;" name="30m">
											<a class="chart_str_period_30m">30分钟</a>
										</li>
										<li id="chart_period_15m_v" style="display:none;" name="15m">
											<a class="chart_str_period_15m">15分钟</a>
										</li>
										<li id="chart_period_5m_v" style="display:none;" name="5m">
											<a class="chart_str_period_5m">5分钟</a>
										</li>
										<li id="chart_period_3m_v" style="display:none;" name="3m">
											<a class="chart_str_period_3m">3分钟</a>
										</li>
										<li id="chart_period_1m_v" style="display:none;" name="1m">
											<a class="chart_str_period_1m selected">1分钟</a>
										</li>
										<li id="chart_period_line_v" style="display:none;" name="line">
											<a class="chart_str_period_line">分时</a>
										</li>
									</ul>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div> -->
				<!-- <div id="chart_toolbar_periods_horz" class="chart_toolbar_periods_horz">
					<ul class="chart_toolbar_tabgroup" style="padding-left:5px; padding-right:11px;">
						<li id="chart_period_line_h" name="line" style="display: none;">
							<a class="chart_str_period_line">分时</a>
						</li>
						<li id="chart_period_1m_h" name="1m" style="display: none;">
							<a class="chart_str_period_1m selected">1分钟</a>
						</li>
						<li id="chart_period_3m_h" name="3m" style="display: none;">
							<a class="chart_str_period_3m">3分钟</a>
						</li>
						<li id="chart_period_5m_h" name="5m" style="display: none;">
							<a class="chart_str_period_5m">5分钟</a>
						</li>
						<li id="chart_period_15m_h" name="15m" style="display: none;">
							<a class="chart_str_period_15m">15分钟</a>
						</li>
						<li id="chart_period_30m_h" name="30m" style="display: none;">
							<a class="chart_str_period_30m">30分钟</a>
						</li>
						<li id="chart_period_1h_h" name="1h" style="display: none;">
							<a class="chart_str_period_1h">1小时</a>
						</li>
						<li id="chart_period_2h_h" name="2h" style="display: none;">
							<a class="chart_str_period_2h">2小时</a>
						</li>
						<li id="chart_period_4h_h" name="4h" style="display: none;">
							<a class="chart_str_period_4h">4小时</a>
						</li>
						<li id="chart_period_6h_h" name="6h" style="display: none;">
							<a class="chart_str_period_6h">6小时</a>
						</li>
						<li id="chart_period_12h_h" name="12h" style="display: none;">
							<a class="chart_str_period_12h">12小时</a>
						</li>
						<li id="chart_period_1d_h" name="1d" style="display: none;">
							<a class="chart_str_period_1d">日线</a>
						</li>
						<li id="chart_period_3d_h" name="3d" style="display: none;">
							<a class="chart_str_period_3d">3日</a>
						</li>
						<li id="chart_period_1w_h" name="1w" style="display: none;">
							<a class="chart_str_period_1w">周线</a>
						</li>
						<li id="chart_period_1n_h" name="1n" style="display: none;">
							<a class="chart_str_period_1n">月线</a>
						</li>                        
					</ul>
				</div> -->
				<!-- <div id="chart_show_trade" class="chart_toolbar_button chart_str_trade_cap chart_show_trade">交易信息</div> -->
				<!-- <div id="chart_show_indicator" class="chart_toolbar_button chart_str_indicator_cap chart_show_indicator selected">技术指标</div> -->
				<!-- <div id="chart_show_tools" class="chart_toolbar_button chart_show_tools chart_str_tools_cap">画线工具</div> -->
				<!-- <div id="chart_toolbar_theme" class="chart_toolbar_theme">
					<div class="chart_toolbar_label chart_str_theme_cap">
						主题选择
					</div>
					<a name="dark" class="chart_icon chart_icon_theme_dark selected"></a>
					<a name="light" class="chart_icon chart_icon_theme_light"></a>
				</div> -->
				<!-- <div class="chart_dropdown chart_dropdown_settings" id="chart_dropdown_settings">
					<div class="chart_dropdown_t"><a class="chart_str_settings">更多</a></div>

					<div class="chart_dropdown_data" style="margin-left: -142px;">
						<table>
							<tbody>
							<tr id="chart_select_main_indicator">
								<td class="chart_str_main_indicator">主指标</td>
								<td>
									<ul>
										<li><a name="MA" class="selected">MA</a></li>
										<li><a name="EMA" class="">EMA</a></li>
										<li><a name="BOLL" class="">BOLL</a></li>
										<li><a name="SAR" class="">SAR</a></li>
										<li><a name="NONE" class="">None</a></li>
									</ul>
								</td>
							</tr>

							<tr id="chart_select_chart_style">
								<td class="chart_str_chart_style">主图样式</td>
								<td>
									<ul>
										<li><a class="selected" id='MCS_CandleStick'>CandleStick</a></li>
										<li><a id='MCS_CandleStickHLC'>CandleStickHLC</a></li>
										<li><a id='MCS_OHLC'>OHLC</a></li>
									</ul>
								</td>
							</tr>

							<tr id="chart_select_theme" class="chart_select_theme" style="display: none;">
								<td class="chart_str_theme">主题选择</td>
								<td>
									<ul>
										<li>
											<a name="dark" class="chart_icon chart_icon_theme_dark selected"></a>
										</li>

										<li>
											<a name="light" class="chart_icon chart_icon_theme_light"></a>
										</li>
										<li>
											<a name="default" class="chart_icon chart_icon_theme_default"></a>
										</li>
									</ul>
								</td>
							</tr>
							<tr id="chart_enable_tools" class="chart_enable_tools" style="display: none;">
								<td class="chart_str_tools">画线工具</td>
								<td>
									<ul>
										<li><a name="on" class="chart_str_on">开启</a></li>
										<li><a name="off" class="chart_str_off selected">关闭</a></li>

									</ul>

								</td>
							</tr>
							<tr id="chart_enable_indicator" style="display: none;" class="chart_enable_indicator">
								<td class="chart_str_indicator">技术指标</td>
								<td>
									<ul>
										<li><a name="on" class="chart_str_on selected">开启</a></li>
										<li><a name="off" class="chart_str_off">关闭</a></li>
									</ul>
								</td>
							</tr>
							<tr id="chart_enable_trade" class="chart_enable_trade" style="display: none;">
									<td class="chart_str_trade">交易信息</td>
									<td>
										<ul>
											<li><a name="on" class="chart_str_on selected">开启</a></li>
											<li><a name="off" class="chart_str_off">关闭</a></li>
										</ul>
									</td>
								</tr>
							<tr>
								<td></td>
								<td>
									<ul>
										<li>
											<a id="chart_btn_parameter_settings" class="chart_str_indicator_parameters">指标参数设置</a>
										</li>
									</ul>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div> -->

				<!-- <div class="chart_dropdown" id="chart_language_setting_div" style="padding-left: 5px;">
					<div class="chart_dropdown_t">
						<a class="chart_language_setting">语言(LANG)</a>
					</div>
					<div class="chart_dropdown_data" style="padding-top: 15px; margin-left: -12px;">
						<ul>
							<li style="height: 25px;">
								<a name="zh-cn" class="selected">简体中文(zh-CN)</a>
							</li>
							<li style="height: 25px;">
								<a name="en-us">English(en-US)</a>
							</li>
							<li style="height: 25px;">
								<a name="zh-tw">繁體中文(zh-HK)</a>
							</li>
						</ul>
					</div>
				</div> -->
				<!-- <div id="chart_updated_time" class="chart_updated_time">
					<div id="sizeIcon" class="chart_BoxSize"></div>

				</div> -->
			<!-- </div> -->
					<!-- ToolPanel -->
			<!-- <div id="chart_toolpanel" class="chart_toolpanel">
				<div class="chart_toolpanel_separator"></div>

				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_Cursor" id="chart_Cursor" name="Cursor"></div>
					<div class="chart_toolpanel_tip chart_str_cursor">
						光标
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_CrossCursor" id="chart_CrossCursor" name="CrossCursor"></div>
					<div class="chart_toolpanel_tip chart_str_cross_cursor">
						十字光标
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_SegLine" id="chart_SegLine" name="SegLine"></div>
					<div class="chart_toolpanel_tip chart_str_seg_line">
						线段
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_StraightLine" id="chart_StraightLine" name="StraightLine"></div>
					<div class="chart_toolpanel_tip chart_str_straight_line">
						直线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_RayLine" id="chart_RayLine" name="RayLine"></div>
					<div class="chart_toolpanel_tip chart_str_ray_line">
						射线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_ArrowLine" id="chart_ArrowLine" name="ArrowLine"></div>
					<div class="chart_toolpanel_tip chart_str_arrow_line">
						箭头
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_HoriSegLine" id="chart_HoriSegLine" name="HoriSegLine"></div>
					<div class="chart_toolpanel_tip chart_str_horz_seg_line">
						水平线段
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_HoriStraightLine" id="chart_HoriStraightLine" name="HoriStraightLine"></div>
					<div class="chart_toolpanel_tip chart_str_horz_straight_line">
						水平直线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_HoriRayLine" id="chart_HoriRayLine" name="HoriRayLine"></div>
					<div class="chart_toolpanel_tip chart_str_horz_ray_line">
						水平射线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_VertiStraightLine" id="chart_VertiStraightLine" name="VertiStraightLine"></div>
					<div class="chart_toolpanel_tip chart_str_vert_straight_line">
						垂直直线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_PriceLine" id="chart_PriceLine" name="PriceLine"></div>
					<div class="chart_toolpanel_tip chart_str_price_line">
						价格线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_TriParallelLine" id="chart_TriParallelLine" name="TriParallelLine"></div>
					<div class="chart_toolpanel_tip chart_str_tri_parallel_line">
						价格通道线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon" id="chart_BiParallelLine" name="BiParallelLine"></div>
					<div class="chart_toolpanel_tip chart_str_bi_parallel_line">
						平行直线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_BiParallelRayLine" id="chart_BiParallelRayLine" name="BiParallelRayLine"></div>
					<div class="chart_toolpanel_tip chart_str_bi_parallel_ray">
						平行射线
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_DrawFibRetrace" id="chart_DrawFibRetrace" name="DrawFibRetrace"></div>
					<div class="chart_toolpanel_tip chart_str_fib_retrace">
						斐波纳契回调
					</div>
				</div>
				<div class="chart_toolpanel_button">
					<div class="chart_toolpanel_icon chart_DrawFibFans" id="chart_DrawFibFans" name="DrawFibFans"></div>
					<div class="chart_toolpanel_tip chart_str_fib_fans">
						斐波纳契扇形
					</div>
				</div>
				<div style="padding-left: 3px;padding-top: 10px;">
					<button style="color: red;" class="clearCanvas" id="clearCanvas" title="Clear All">X</button>
				</div>
			</div> -->
			<!-- <div id="chart_canvasGroup" class="temp chart_canvasGroup"> -->
				<canvas class="chart_canvas chart_mainCanvas" id="chart_mainCanvas" style="cursor: default;"></canvas>
				<canvas class="chart_canvas chart_overlayCanvas" id="chart_overlayCanvas" style="cursor: default;"></canvas>
			<!-- </div> -->
			<!-- <div id="chart_tabbar" class="chart_tabbar">
				<ul>
					<li><a name="MACD" class="">MACD</a></li>

					<li><a name="KDJ" class="">KDJ</a></li>

					<li><a name="StochRSI" class="">StochRSI</a></li>

					<li><a name="RSI" class="">RSI</a></li>

					<li><a name="DMI" class="">DMI</a></li>

					<li><a name="OBV" class="">OBV</a></li>

					<li><a name="BOLL" class="">BOLL</a></li>

					<li><a name="SAR" class="">SAR</a></li>

					<li><a name="DMA" class="">DMA</a></li>

					<li><a name="TRIX" class="">TRIX</a></li>

					<li><a name="BRAR" class="">BRAR</a></li>

					<li><a name="VR" class="">VR</a></li>

					<li><a name="EMV" class="">EMV</a></li>

					<li><a name="WR" class="">WR</a></li>

					<li><a name="ROC" class="">ROC</a></li>

					<li><a name="MTM" class="">MTM</a></li>

					<li><a name="PSY">PSY</a></li>

				</ul>

			</div> -->

			<!-- <div id="chart_parameter_settings" class="chart_parameter_settings">
				<h2 class="chart_str_indicator_parameters">指标参数设置</h2>
				<table>
					<tbody>
					<tr>
						<th>MA</th>
						<td><input name="MA"><input name="MA"><input name="MA"><input name="MA"><br><input
								name="MA"><input
								name="MA">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>DMA</th>
						<td><input name="DMA"><input name="DMA"><input name="DMA"></td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>EMA</th>
						<td>
							<input name="EMA"><input name="EMA"><input name="EMA"><input name="EMA"><br>
							<input name="EMA"><input name="EMA">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>TRIX</th>
						<td><input name="TRIX"><input name="TRIX"></td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>VOLUME</th>
						<td><input name="VOLUME"><input name="VOLUME"></td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>BRAR</th>
						<td><input name="BRAR"></td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>MACD</th>
						<td>
							<input name="MACD"><input name="MACD"><input name="MACD">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>VR</th>
						<td><input name="VR"><input name="VR"></td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>KDJ</th>
						<td>
							<input name="KDJ"><input name="KDJ"><input name="KDJ">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>EMV</th>
						<td>
							<input name="EMV"><input name="EMV">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>StochRSI</th>
						<td>
							<input name="StochRSI"><input name="StochRSI"><input name="StochRSI"><input name="StochRSI">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>WR</th>
						<td>
							<input name="WR"><input name="WR">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>RSI</th>
						<td>
							<input name="RSI"><input name="RSI"><input name="RSI">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>ROC</th>
						<td>
							<input name="ROC"><input name="ROC">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>DMI</th>
						<td>
							<input name="DMI"><input name="DMI">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>MTM</th>
						<td>
							<input name="MTM"><input name="MTM">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>OBV</th>
						<td>
							<input name="OBV">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>

						<th>PSY</th>
						<td>
							<input name="PSY"><input name="PSY">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>

					<tr>
						<th>BOLL</th>
						<td>
							<input name="BOLL">
						</td>
						<td>
							<button class="chart_str_default">默认值</button>
						</td>
					</tr>
					</tbody>
				</table>

				<div id="close_settings" class="close_settings"><a class="chart_str_close">关闭</a></div>

			</div> -->

			<!-- Loading -->
			<!-- <div id="chart_loading" class="chart_str_loading chart_loading">正在读取数据...</div> -->			
		</div>

		<!-- <div style="display: none" id="chart_language_switch_tmp">
			<span name="chart_str_period" zh_tw="週期" zh_cn="周期" en_us="TIME"></span>
			<span name="chart_str_period_line" zh_tw="分時" zh_cn="分时" en_us="Line"></span>
			<span name="chart_str_period_1m" zh_tw="1分鐘" zh_cn="1分钟" en_us="1m"></span>
			<span name="chart_str_period_3m" zh_tw="3分鐘" zh_cn="3分钟" en_us="3m"></span>
			<span name="chart_str_period_5m" zh_tw="5分鐘" zh_cn="5分钟" en_us="5m"></span>
			<span name="chart_str_period_15m" zh_tw="15分鐘" zh_cn="15分钟" en_us="15m"></span>
			<span name="chart_str_period_30m" zh_tw="30分鐘" zh_cn="30分钟" en_us="30m"></span>
			<span name="chart_str_period_1h" zh_tw="1小時" zh_cn="1小时" en_us="1h"></span>
			<span name="chart_str_period_2h" zh_tw="2小時" zh_cn="2小时" en_us="2h"></span>
			<span name="chart_str_period_4h" zh_tw="4小時" zh_cn="4小时" en_us="4h"></span>
			<span name="chart_str_period_6h" zh_tw="6小時" zh_cn="6小时" en_us="6h"></span>
			<span name="chart_str_period_12h" zh_tw="12小時" zh_cn="12小时" en_us="12h"></span>
			<span name="chart_str_period_1d" zh_tw="日線" zh_cn="日线" en_us="1d"></span>
			<span name="chart_str_period_3d" zh_tw="3日" zh_cn="3日" en_us="3d"></span>
			<span name="chart_str_period_1w" zh_tw="周線" zh_cn="周线" en_us="1w"></span>
			<span name="chart_str_period_1n" zh_tw="月線" zh_cn="月线" en_us="1n"></span>
			<span name="chart_str_settings" zh_tw="更多" zh_cn="更多" en_us="MORE"></span>
			<span name="chart_setting_main_indicator" zh_tw="均線設置" zh_cn="均线设置" en_us="Main Indicator"></span>
			<span name="chart_setting_main_indicator_none" zh_tw="關閉均線" zh_cn="关闭均线" en_us="None"></span>
			<span name="chart_setting_indicator_parameters" zh_tw="指標參數設置" zh_cn="指标参数设置" en_us="Indicator Parameters"></span>
			<span name="chart_str_chart_style" zh_tw="主圖樣式" zh_cn="主图样式" en_us="Chart Style"></span>
			<span name="chart_str_main_indicator" zh_tw="主指標" zh_cn="主指标" en_us="Main Indicator"></span>
			<span name="chart_str_indicator" zh_tw="技術指標" zh_cn="技术指标" en_us="Indicator"></span>
			<span name="chart_str_indicator_cap" zh_tw="技術指標" zh_cn="技术指标" en_us="INDICATOR"></span>
			<span name="chart_str_tools" zh_tw="畫線工具" zh_cn="画线工具" en_us="Tools"></span>
			<span name="chart_str_tools_cap" zh_tw="畫線工具" zh_cn="画线工具" en_us="TOOLS"></span>
			<span name="chart_str_theme" zh_tw="主題選擇" zh_cn="主题选择" en_us="Theme"></span>
			<span name="chart_str_theme_cap" zh_tw="主題選擇" zh_cn="主题选择" en_us="THEME"></span>
			<span name="chart_language_setting" zh_tw="語言(LANG)" zh_cn="语言(LANG)" en_us="LANGUAGE"></span>
			<span name="chart_exchanges_setting" zh_tw="更多市場" zh_cn="更多市场" en_us="MORE MARKETS"></span>
			<span name="chart_othercoin_setting" zh_tw="其它市場" zh_cn="其它市场" en_us="OTHER MARKETS"></span>

			<span name="chart_str_none" zh_tw="關閉" zh_cn="关闭" en_us="None"></span>
			<span name="chart_str_theme_dark" zh_tw="深色主題" zh_cn="深色主题" en_us="Dark"></span>
			<span name="chart_str_theme_light" zh_tw="淺色主題" zh_cn="浅色主题" en_us="Light"></span>
			<span name="chart_str_on" zh_tw="開啟" zh_cn="开启" en_us="On"></span>
			<span name="chart_str_off" zh_tw="關閉" zh_cn="关闭" en_us="Off"></span>
			<span name="chart_str_close" zh_tw="關閉" zh_cn="关闭" en_us="CLOSE"></span>
			<span name="chart_str_default" zh_tw="默認值" zh_cn="默认值" en_us="default"></span>
			<span name="chart_str_loading" zh_tw="正在讀取數據..." zh_cn="正在读取数据..." en_us="Loading..."></span>
			<span name="chart_str_indicator_parameters" zh_tw="指標參數設置" zh_cn="指标参数设置" en_us="Indicator Parameters"></span>
			<span name="chart_str_cursor" zh_tw="光標" zh_cn="光标" en_us="Cursor"></span>
			<span name="chart_str_cross_cursor" zh_tw="十字光標" zh_cn="十字光标" en_us="Cross Cursor"></span>
			<span name="chart_str_seg_line" zh_tw="線段" zh_cn="线段" en_us="Trend Line"></span>
			<span name="chart_str_straight_line" zh_tw="直線" zh_cn="直线" en_us="Extended"></span>
			<span name="chart_str_ray_line" zh_tw="射線" zh_cn="射线" en_us="Ray"></span>
			<span name="chart_str_arrow_line" zh_tw="箭頭" zh_cn="箭头" en_us="Arrow"></span>
			<span name="chart_str_horz_seg_line" zh_tw="水平線段" zh_cn="水平线段" en_us="Horizontal Line"></span>
			<span name="chart_str_horz_straight_line" zh_tw="水平直線" zh_cn="水平直线" en_us="Horizontal Extended"></span>
			<span name="chart_str_horz_ray_line" zh_tw="水平射線" zh_cn="水平射线" en_us="Horizontal Ray"></span>
			<span name="chart_str_vert_straight_line" zh_tw="垂直直線" zh_cn="垂直直线" en_us="Vertical Extended"></span>
			<span name="chart_str_price_line" zh_tw="價格線" zh_cn="价格线" en_us="Price Line"></span>
			<span name="chart_str_tri_parallel_line" zh_tw="價格通道線" zh_cn="价格通道线" en_us="Parallel Channel"></span>
			<span name="chart_str_bi_parallel_line" zh_tw="平行直線" zh_cn="平行直线" en_us="Parallel Lines"></span>
			<span name="chart_str_bi_parallel_ray" zh_tw="平行射線" zh_cn="平行射线" en_us="Parallel Rays"></span>
			<span name="chart_str_fib_retrace" zh_tw="斐波納契回調" zh_cn="斐波纳契回调" en_us="Fibonacci Retracements"></span>
			<span name="chart_str_fib_fans" zh_tw="斐波納契扇形" zh_cn="斐波纳契扇形" en_us="Fibonacci Fans"></span>
			<span name="chart_str_updated" zh_tw="更新於" zh_cn="更新于" en_us="Updated"></span>
			<span name="chart_str_ago" zh_tw="前" zh_cn="前" en_us="ago"></span>
		</div> -->

	</div>
</template>

<script>
import fqCommon from '@/common/common';
import Kline from '@/common/kline/kline';
import FqLoading from '@/components/common/fq-loading';
	export default {
		name: 'fq-kline-component',
		data() {
			return {
				kline:null,
				// loadingStatus:true,
				userInfo:this.$store.getters.getUserInfo,
			}
		},
		props: [],
		mounted(){
			// this.initKline()
		},
		watch:{
			userInfo(newVal,oldVal){
				let theme=newVal&&newVal.pageUserTheme?newVal.pageUserTheme:''
				if(this.kline){
					if(theme){
						this.kline.setTheme(theme)
					}
				}
			}
		},
		computed:{
			
		},
		destroyed(){
			// fqCommon.error("K线组件被销毁！！！！！！！！！！！！")
			delete this.kline;
		},
		components:{
			FqLoading,
		},
		methods: {
			//初始化K线
			initKline(options){
				let that=this;
				let klineData={
					depths:{
						asks:[],
						bids:[]
					},
					lines:[],
					trades:[],
				};
				let kline_component_box=that.$refs['kline_component_box'];
				
				let opts={
					element: kline_component_box,//容器元素选择器
					width:1200,//宽度 (px)
					create:true,
					height:505,//高度度 (px)
					disableFirebase:true,//禁用谷歌的firebase
					data:klineData,//请求数据
					range:900000,//默认选中的时间周期
					type:'data',
					showIndic:false,
					theme:'default',//主题 dark(暗色)/light(亮色)
					debug:fqCommon.debugMode,//	是否开启调试模式 true/false
					// symbol: "BTC",//交易代号
					// symbolName: "比特币",//交易名称
					showTimeline:true,//是否显示timeline
					ranges:['line','1m','3m','5m','15m','30m', '1h', '2h', '4h', '6h', '12h', '1d','1w','1n'],  //聚合选项无顺序  1n/1w/1d/12h/6h/4h/2h/1h/30m/15m/5m/3m/1m/line (w:周, d:天, h:小时, m:分钟, line:分时数据)
					// type: "poll", // poll/stomp
					// url: 'http://localhost:8083/static/mock.json',//轮询数据请求
					enableSockjs:false,//是否开启sockjs支持 true/false
					showTrade:false,//是否显示行情侧边栏 true/false
					// limit:klineData.lines.length,//分页大小
					// intervalTime:5000,// 请求间隔时间(ms)
					// reverseColor:false,//	是否反色, 默认绿涨红跌 true/false
					// subscribePath: "/kline/subscribe",
					// sendPath: "/kline/send"   
				};

				if(options){
					for(let i in options){
						if(options.hasOwnProperty(i)){
							opts[i]=options[i]
						}
					}
				}				
				let userInfo=that.$store.getters.getUserInfo
				if(userInfo){
					opts.theme=userInfo.pageUserTheme?userInfo.pageUserTheme:opts.theme
				}
				// opts.data=data.data;
				
				that.kline = new Kline(opts);
				that.kline.draw();

				$('#'+that.kline.id+'clearCanvas').click(function(){//给工具栏关闭按钮增加事件
					$('#'+that.kline.id+'chart_show_tools').click();
				});

				that.kline.onRangeChange=function(range){//聚合时间改变时触发
					fqCommon.log("kline onRangeChange",range);
					// that.loadingStatus=true;
					that.$emit("onRangeChange",{range});
				}
				that.kline.onResize=function(width, height){//画布尺寸改变时触发
					fqCommon.log("kline onResize",width,height);
					that.$emit("onResize",{width,height});
				}
				that.kline.created=function(){//创建完成
					fqCommon.log('kline created finish ')
					// that.loadingStatus=false;
					that.$emit("created");
				}
				that.kline.onDataLoaded=function(){//数据加载完成
					fqCommon.log('data load finish ')
					// that.loadingStatus=false;
					that.$emit("onDataLoaded");
				}
				that.kline.onLangChange=function(lang){//画布尺寸改变时触发
					fqCommon.log("kline onLangChange",lang);
					that.$emit("onDataLoaded",{lang});
				}
				that.kline.onSymbolChange=function(symbol, symbolName){//交易品种改变时触发
					fqCommon.log("kline onSymbolChange",symbol,symbolName);
					that.$emit("onDataLoaded",{symbol, symbolName});
				}
				that.kline.onThemeChange=function(theme){//主题改变时触发
					fqCommon.log("kline onThemeChange",theme);
					that.$emit("onThemeChange",{theme});
				}
				that.kline.onLoadHistory=function(){//加载历史数据改变时触发
					that.kline.loading=false
					fqCommon.log("kline onLoadHistory");
					that.$emit("onLoadHistory");
				}
			},
			updateKlineDepth(){
				let that=this;
				if(data){
					data.lines&&(that.kline.data.lines=data.lines);
					data.depths&&(that.kline.data.depths=data.depths);
					data.trades&&(that.kline.data.trades=data.trades);
				}
				that.kline.updateKlineDepth();
			},
			//更新数据 加刷新 
			updateKlineData(data){
				let that=this;
				fqCommon.log('kline更新数据 加刷新 ')
				if(data){
					data.lines&&(that.kline.data.lines=data.lines);
					data.depths&&(that.kline.data.depths=data.depths);
					data.trades&&(that.kline.data.trades=data.trades);
				}
				that.kline.updateKlineData();
			},
			//更新数据并刷新 
			refreshKlineData(data){
				let that=this;				
				if(data){
					data.lines&&(that.kline.data.lines=data.lines);
					data.depths&&(that.kline.data.depths=data.depths);
					data.trades&&(that.kline.data.trades=data.trades);
				}
				that.kline.setSymbol("","");
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/less/components/common/fq-kline.less";
</style>
