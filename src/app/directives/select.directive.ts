import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[select]',
  standalone: true
})
export class SelectDirective {
  @Input() set selectFrom(source: any) {
    source.load().then((data: any) => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: data
      });
    });
  }
  
  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef
  ) {}

  async ngOnInit() {
    const data = await this.selectFrom.load();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: data,
    });
  }
}
