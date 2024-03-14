package main

import (
	"context"
	"encoding/base64"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Base64 编码
func (a *App) Base64Encode(plain string) string {
	return base64.StdEncoding.EncodeToString([]byte(plain))
}

// Base64 解码
func (a *App) Base64Decode(cipher string) (string, error) {
	plain, err := base64.StdEncoding.DecodeString(cipher)
	return string(plain), err
}
