// 주변 사이렌 사운드 활성화/비활성화 (스코프 밖 사이렌 버그 해결)
// USE_LOOP: true
DistantCopCarSirens(BOOL_SHOULD_PLAY) // == ForceAmbientSiren

// 차량 대기 카메라 비활성화
// USE_LOOP: true
InvalidateVehicleIdleCam()