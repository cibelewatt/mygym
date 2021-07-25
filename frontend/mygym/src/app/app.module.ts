import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

import { MeusDadosComponent } from './components/meus-dados/meus-dados.component';
import { DadosPessoaisComponent } from './components/meus-dados/dados-pessoais/dados-pessoais.component';
import { DadosContatoComponent } from './components/meus-dados/dados-contato/dados-contato.component';
import { DadosPagamentoComponent } from './components/meus-dados/dados-pagamento/dados-pagamento.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PlanoService } from './services/plano.service';
import { PaginaPlanoComponent } from './components/planos/pagina-plano/pagina-plano.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './components/index/index.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CardPlanoComponent } from './components/planos/card-plano/card-plano.component';
import { BtnVoltarComponent } from './components/btn-voltar/btn-voltar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

import { BrMaskerModule } from 'br-mask';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    MeusDadosComponent,
    DadosPessoaisComponent,
    DadosContatoComponent,
    DadosPagamentoComponent,
    SideBarComponent,
    DefaultLayoutComponent,
    LayoutComponent,
    PaginaPlanoComponent,
    LoginComponent,
    NavBarComponent,
    IndexComponent,
    SobreComponent,
    CardPlanoComponent,
    BtnVoltarComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrMaskerModule,
    HttpClientModule
  ],
  providers: [PlanoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
