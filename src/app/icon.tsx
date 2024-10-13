import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const size = {
    width: 32,
    height: 32,
}
 export const contenttype = "image/png";

 export default function Icon() {
    return new ImageResponse(
        (
        <div style={{
            fontSize: 24,
            background: 'yellow',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            fontFamily: 'Inter',
            borderRadius: '50%',
        }}>
           M
        </div>
    ),
    { ...size }
    );
 }

