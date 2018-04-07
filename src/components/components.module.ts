import { NgModule } from '@angular/core';
import { DetailCommentsComponent } from './detail-comments/detail-comments';
import { ChatSelfComponent } from './chat-self/chat-self';
import { ChatOthersComponent } from './chat-others/chat-others';
import { SendInputComponent } from './send-input/send-input';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [DetailCommentsComponent,
    ChatSelfComponent,
    ChatOthersComponent,
    SendInputComponent],
	imports: [
        FormsModule 
    ],
	exports: [DetailCommentsComponent,
    ChatSelfComponent,
    ChatOthersComponent,
    SendInputComponent]
})
export class ComponentsModule {}
