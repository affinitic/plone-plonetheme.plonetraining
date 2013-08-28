// Register a template definition set named "default".
CKEDITOR.addTemplates( 'default',
{
	// The name of the subfolder that contains the preview images of the templates.
	imagesPath : CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),
 
	// Template definitions.
	templates :
		[
			{
				title: 'My Template 1',
				image: 'template1.gif',
				description: 'Description of My Template 1.',
				html:
					'<h2>Template 1</h2>' +
					'<p><img src="/logo.png" style="float:left" />Type your text here.</p>'
			},
			{
				title: 'Template 3col',
				html:
					'<h3>Template 3col</h3>' +
					'<div class="contentcol">' +
                    '<div class="towcol1 float3"><h3>title col1</h3>col1</div>' +
                    '<div class="towcol2 float3"><h3>title col2</h3>col2</div>' +
                    '<div class="towcol3 float3"><h3>title col3</h3>col3</div>' +
                    '<div class="clearboth"></div>' +
                    '</div>'

			},
			{
				title: 'Template 2col',
				html:
				    '<h2> Template 2col </h2>' +
                    '<div class="contentcol">' +
				    '<div class="towcol1 float"><h3>title col1</h3>col1</div>' +
				    '<div class="towcol2 float"><h3>title col2</h3>col2</div>' +
                    '<div class="clearboth"></div>' +
                    '</div>'
			},
            {
                title:'Accordione2',
                html:
                    '<div id="accordion2" class="accordion">' +
                    '   <div class="accordion-group">' +
                    '      <div class="accordion-heading">' +
                    '       <a href="#collapseOne" data-parent="#accordion2" data-toggle="collapse" class="accordion-toggle collapsed">' +
                    '            Collapsible Group Item #1' +
                    '       </a>' +
                    '        </div>' +
                    '        <div class="accordion-body collapse" id="collapseOne" style="height: 0px;">' +
                    '            <div class="accordion-inner">' +
                    '                 Anim pariatur cliche...' +
                    '            </div>' +
                    '         </div>' +
                    '      </div>' +
                    '   <div class="accordion-group">' +
                    '        <div class="accordion-heading">' +
                    '             <a href="#collapseTwo" data-parent="#accordion2" data-toggle="collapse" class="accordion-toggle">' +
                    '                  Collapsible Group Item #2' +
                    '               </a>' +
                    '         </div>' +
                    '          <div class="accordion-body collapse" id="collapseTwo">' +
                    '             <div class="accordion-inner">' +
                    '                   Anim pariatur cliche...' +
                    '             </div>' +
                    '           </div>' +
                    '   </div>' +
                    '</div>'
            }
		]
});
